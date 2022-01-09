const nodemailer = require('nodemailer')

export default async function handler(req, res) {
  const sender = process.env.SENDER
  const receiver = process.env.RECEIVER

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: sender,
      pass: process.env.PASSWORD,
    },
  })

  try {
    const mailData = await transporter.sendMail({
      from: 'Email Sender',
      to: receiver,
      subject: `Message from ${req.body.name}`,
      text: `${req.body.message} | Sent from: ${req.body.email}`,
      html: `
        <div>${req.body.message}</div><br>
        <p>Sent from: ${req.body.email}</p>
      `,
    })

    transporter.sendMail(mailData)

    res
      .status(200)
      .json({ status: 'success', data: { message: 'Email Sent!' } })
  } catch (err) {
    res.status(400).json({ status: 'fail', data: { message: err.message } })
  }
}
