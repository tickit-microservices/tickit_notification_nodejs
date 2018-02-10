export class EmailSender {

    constructor(transporter) {
        this.transporter = transporter;
    }

    async send(sender, receiver, subject, body) {
        return await this.transporter.sendMail(this.prepareEmail(sender, receiver, subject, body));
    }

    prepareEmail(sender, receiver, subject, body) {
        return {
            from: '"' + sender.name + '" <' + sender.address + '>',
            to: receiver.address,
            subject: subject,
            text: body
        };
    }
}