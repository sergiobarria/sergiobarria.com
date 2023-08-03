import * as React from 'react';

import { Resend } from 'resend';

import { RESEND_API_KEY, EMAIL_RECEIVER, EMAIL_SENDER } from '@/site/config';
import { InputData } from './actions';
// import { ContactEmail } from './contact-template';

const resend = new Resend(RESEND_API_KEY);

export async function sendEmail(data: InputData) {
    const { name, email, subject, message } = data;

    resend.emails.send({
        from: EMAIL_SENDER as string,
        to: EMAIL_RECEIVER as string,
        subject,
        reply_to: email, // this is the sender's email address
        react: React.createElement(EmailTemplate, {
            senderName: name,
            senderEmail: email,
            message,
        }),
    });
}

interface EmailTemplateProps {
    senderName: string;
    senderEmail: string;
    message: string;
}

function EmailTemplate({ senderName, senderEmail, message }: EmailTemplateProps) {
    return (
        <div
            style={{
                backgroundColor: 'rgb(243,244,246)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    borderRadius: '0.375rem',
                    margin: '40px',
                    padding: '24px',
                    maxWidth: '46.875rem',
                }}
            >
                <h1
                    style={{
                        fontSize: '2.25rem',
                        color: 'rgb(14,165,233)',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                    }}
                >
                    You received the following message from the contact form
                </h1>
                <p style={{ fontSize: '1rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                    {message}
                </p>
                <hr
                    style={{
                        borderTop: '1px solid rgb(226,232,240)',
                        marginTop: '1.5rem',
                        marginBottom: '1.5rem',
                        width: '100%',
                    }}
                />
                <p style={{ fontSize: '1rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                    The sender&apos;s name is: {senderName}
                </p>
                <p style={{ fontSize: '1rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                    The sender&apos;s email is:{' '}
                    <a
                        href={`mailto:${senderEmail}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'rgb(14,165,233)', textDecoration: 'underline' }}
                    >
                        {senderEmail}
                    </a>
                </p>
            </div>
        </div>
    );
}
