import { config } from 'config';
import { EmailAddress } from 'infrastructure/email/email-address';
import { EmailSender } from 'infrastructure/email/email-sender';
import { emailTransporter } from 'infrastructure/email/email-transporter';
import { logToConsoleEmailTransporter } from 'infrastructure/email/log-to-console-email-transporter';
import { contentService } from 'services/content';

const sender = new EmailAddress(
    config.sender.name,
    config.sender.email
);

let emailSender = new EmailSender(logToConsoleEmailTransporter);

if (config.emailTransporter === 'EMAIL_TRANSPORTER') {
    emailSender = new EmailSender(emailTransporter);
}

const notificationService = {
    notify(projects) {
        projects.forEach(project => {
            console.log('Sending notification for project ' + project.name + '...');

            project.untickedUsers.forEach(user => {
                const fullname = user.firstName + ' ' + user.lastName;
                const receiver = new EmailAddress(fullname, user.email);
                const subject = contentService.getMissingSubject(project, user);
                const body = contentService.getMissingContent(project, user);

                emailSender.send(sender, receiver, subject, body);
                console.log('Email sent to ' + fullname);
            });
        });
    }
};

export { notificationService };