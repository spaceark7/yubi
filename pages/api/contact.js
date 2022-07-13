export default function handler(req, res) {
  const { type, name, email, company, phone, message, question, software } =
    req.body
  try {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 587,
      host: 'mail.yubiteck.com',
      auth: {
        user: 'admin@yubiteck.com',
        pass: 'admin1234',
      },
      secure: false,
      tls: {
        rejectUnauthorized: false,
      },
    })

    transporter.verify(function (error, success) {
      if (error) {
        console.log(error)
      } else {
        console.log('Server is ready to take our messages')
      }
    })
    if (type === 'question') {
      const mailData = {
        from: 'admin@yubiteck.com',
        to: 'cs@yubiteck.com',
        subject: `Pesan baru dari ${name} | ${company} | ${
          type === 'question' ? 'Pertanyaan' : 'Permintaan Demo'
        }`,
        text: question + ' | Sent from: ' + email,
        html: `<div>Ada pertanyaan dari ${name} </div>
        <h3>${question}</h3>
        <div>
        <h5>Silahkan balas pesan ini ke</h5>
        <p>Email : ${email}</p>
        <p>phone : ${phone}</p>
        </div>
          <h6>Ini adalah pesan otomatis. Do not reply</h6>`,
      }

      transporter.sendMail(mailData, function (err, info) {
        if (err) {
          console.log(err)
          res.status(500).json({ error: err.message })
        } else {
          console.log(info)
          res.status(200).json({ message: 'success' })
        }
      })
    }
    if (type === 'request') {
      const mailData = {
        from: 'admin@yubiteck.com',
        to: 'cs@yubiteck.com',
        subject: `Pesan baru dari ${name} | ${company} | ${
          type === 'question' ? 'Pertanyaan' : 'Permintaan Demo'
        }`,
        text: message + ' | Sent from: ' + email,
        html: `<div>Ada permintaan demo dari <b>${name}</b> | <b>${company}</b> </div>
        <p>Berikut program yang diminta demo :</p>
        <h3>${software}</h3>
        <h3>Pesan dari pengirim : ${message}</h3>
        <div>
        <h5>Silahkan balas pesan ini ke</h5>
        <p>Email : ${email}</p>
        <p>phone : ${phone}</p>
        </div>
          <h6>Ini adalah pesan otomatis. Do not reply</h6>`,
      }
      transporter.sendMail(mailData, function (err, info) {
        if (err) {
          console.log(err)
          res.status(500).json({ error: err.message })
        } else {
          console.log(info)
          res.status(200).json({ message: 'success' })
        }
      })
    }
    res.status(200).json({ message: 'success' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }
}
