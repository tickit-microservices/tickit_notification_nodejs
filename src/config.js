import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    smtp: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        username: process.env.SMTP_USERNAME,
        password: process.env.SMTP_PASSWORD
    },
    serviceUrl: {
        project: process.env.PROJECT_SERVICE_BASE_URL,
        clientApp: process.env.CLIENT_APP_BASE_URL
    },
    sender: {
        name: process.env.SENDER_NAME,
        email: process.env.SENDER_EMAIL
    },
    emailTransporter: process.env.EMAIL_TRANSPORTER
};