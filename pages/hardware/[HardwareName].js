import { hardware } from '../../data/software'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import HeroSection from '../../components/HeroSection'
import customers from '../../data/customers'
import HardwareSection from '../../components/HardwareSection'
import ContactSection from '../../components/ContactSection'

const HardwareName = ({ data }) => {
  return (
    <>
      <Head>
        <title>{`Yubi | ${data.name}`}</title>
        <meta name='description' content={`${data.name} `} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HeroSection data={data.hero_section} customers={customers} />
      {data.hardware_section && (
        <HardwareSection data={data.hardware_section} />
      )}

      <ContactSection bgSlate={true} />
    </>
  )
}

export const getStaticPaths = async ({ locales }) => {
  let paths = []

  hardware.forEach((item) => {
    item.products.forEach((product) => {
      for (const locale of locales) {
        paths.push({
          params: { HardwareName: product.localesId },
          locale: locale,
        })
      }
    })
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params, locale }) => {
  const { HardwareName } = params
  let all = []
  hardware.map((item) => item.products.map((product) => all.push(product)))

  const data = all.find((item) => item.localesId === HardwareName)

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['nav', 'common', 'home'])),
    },
  }
}

export default HardwareName
