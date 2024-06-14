import NodeMailer from 'nodemailer'

export const mailTransporter = NodeMailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: import.meta.env.MAILER,
    // pass: import.meta.env.MAILER_PASS
    pass: 1234
  }
})
