import { createTransport } from 'nodemailer';

import {
    NODE_ENV,
    MAILTRAP_HOST,
    MAILTRAP_PORT,
    MAILTRAP_USER,
    MAILTRAP_PASSWORD,
    EMAIL_RECEIVER,
    EMAIL_SENDER,
} from '@/site/config';

interface Options {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function sendEmail(options: Options) {
    const { name, email, subject, message } = options;
    const transporter = createTransport({
        // @ts-ignore - this is a valid config
        host: MAILTRAP_HOST as string,
        port: MAILTRAP_PORT,
        secure: NODE_ENV === 'production',
        auth: {
            user: MAILTRAP_USER,
            pass: MAILTRAP_PASSWORD,
        },
    });

    const msg = `
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8" />
        <title>New Email from Your Website Contact Form</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
            }
            .email-container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f7f7f7;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
            .email-header {
                font-size: 28px;
                font-weight: bold;
                margin-bottom: 10px;
                color: #14b8a6;
            }
            .email-section {
                margin-bottom: 20px;
            }
            .email-label {
                font-weight: bold;
                color: #14b8a6;
                margin-right: 5px;
            }
            .email-content {
                font-size: 16px;
            }
            .email-content p {
                margin: 0;
            }
            .email-signature {
                margin-top: 30px;
                font-size: 14px;
                color: #777;
            }
            .email-signature a {
                color: #14b8a6;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="email-header">New Email from Your Website Contact Form</div>
            <div class="email-section">
                <span class="email-label">Name:</span>
                <span class="email-content">${name}</span>
            </div>
            <div class="email-section">
                <span class="email-label">Email:</span>
                <span class="email-content">${email}</span>
            </div>
            <div class="email-section">
                <span class="email-label">Message:</span>
                <div class="email-content">
                    <p>${message}</p>
                </div>
            </div>
            <div class="email-signature">
                Regards,<br />
                Your Website Team<br />
                <a href="https://www.yourwebsite.com" target="_blank">www.yourwebsite.com</a>
            </div>
        </div>
    </body>
    </html>
    `;

    await transporter.sendMail({
        from: `mailtrap sender <${EMAIL_SENDER}>`,
        to: EMAIL_RECEIVER,
        subject,
        html: msg.replace(/\r\n/g, '<br>'),
    });
}
