import * as React from 'react';

import { Resend } from 'resend';

import { RESEND_API_KEY, EMAIL_RECEIVER, EMAIL_SENDER } from '@/site/config';
import { InputData } from '../actions';
import { ContactEmail } from './contact-template';

const resend = new Resend(RESEND_API_KEY);

export async function sendEmail(data: InputData) {
    const { name, email, subject, message } = data;

    resend.emails.send({
        from: EMAIL_SENDER as string,
        to: EMAIL_RECEIVER as string,
        subject,
        reply_to: email, // this is the sender's email address
        react: React.createElement(ContactEmail, { name, message, sender: email }),
    });
}
