import * as nodemailer from 'nodemailer';
import { config } from 'config';

const options = {
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure,
    auth: {
        user: config.smtp.username,
        pass: config.smtp.password
    }
};

export const emailTransporter = nodemailer.createTransport(options);