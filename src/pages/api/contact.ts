import { NextApiRequest, NextApiResponse } from 'next';

import sgMail from '@sendgrid/mail';

// Set SendGrid Api key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body;
  const emailReceiver = process.env.EMAIL_RECEIVER!;
  const emailSender = process.env.EMAIL_SENDER!;

  const msg = `
    Name: ${name}\r\n
    Email: ${email}\r\n
    Message: ${message}
  `;

  const data = {
    to: emailReceiver,
    from: emailSender,
    subject: 'New email from sergiobarria.com',
    text: msg,
    html: msg.replace(/\r\n/g, '<br>'),
  };

  try {
    await sgMail.send(data);

    res.status(200).json({
      status: 'ok',
      message: 'success',
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'fail',
    });
  }
}
