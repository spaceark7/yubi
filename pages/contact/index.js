import Head from 'next/head'
import HeroSection from '../../components/HeroSection'
import contact_data from '../../data/contact'
import customers from '../../data/customers'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const ContactPage = ({ data }) => {
  return (
    <>
      <Head>
        <title>{`Yubi | ${data.name}`}</title>
        <meta name='description' content={`${data.name}  ${data.brand}  `} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeroSection data={data.hero_section} customers={customers} />
    </>
  )
}

export const getStaticProps = async ({ params, locale }) => {
  const data = contact_data
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['nav', 'common', 'home'])),
    },
  }
}

export default ContactPage
