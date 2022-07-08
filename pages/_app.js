import { appWithTranslation } from 'next-i18next'
import { useState } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const lang = [
    { code: 'EN', language: 'English' },
    { code: 'ID', language: 'Indonesia' },
  ]
  const [open, setOpen] = useState(false)
  const [selected, seteSelected] = useState(lang[0])
  return (
    <>
      <Nav lang={lang} open={open} setOpen={setOpen} />

      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default appWithTranslation(MyApp)
