import axios from 'axios'
export default async function handler(req, res) {
  const { token } = req.body

  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
  )

  if (data.success) {
    res.status(200).json({ success: data.success })
  } else {
    res.status(500).json({ error: data.error })
  }
}
