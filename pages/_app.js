import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import Footer from '../components/Footer'
import LoadingScreen from '../components/LoadingScreen'
import Nav from '../components/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const lang = [
    { code: 'EN', language: 'English' },
    { code: 'ID', language: 'Indonesia' },
  ]
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      setLoading(true)
    }
    const handleStop = () => {
      setTimeout(() => setLoading(false), 200)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])
  return (
    <>
      <LoadingScreen isLoading={loading} />
      <Nav open={open} setOpen={setOpen} />

      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default appWithTranslation(MyApp)
