import { solutions } from '../../data/businessSolutions'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import HeroSection from '../../components/HeroSection'
import customers from '../../data/customers'
import Banner from '../../components/Banner'
import ContactSection from '../../components/ContactSection'

const SolutionName = ({ data }) => {
  return (
    <>
      <Head>
        <title>{`Yubi | ${data.name}`}</title>
        <meta
          name='description'
          content={`${data.name} ${data.title} ${data.brand} ${data.description} `}
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeroSection data={data.hero_section} customers={customers} />
      {data.banner?.map((item, index) => (
        <Banner key={index} data={item} />
      ))}
      <ContactSection bgSlate={!data.banner[data.banner.length - 1].slate} />
    </>
  )
}

export const getStaticPaths = async ({ locales }) => {
  let paths = []
  solutions.forEach((item) => {
    for (const locale of locales) {
      paths.push({
        params: { SolutionName: item.localesId },
        locale: locale,
      })
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params, locale }) => {
  const { SolutionName } = params
  const data = solutions.find((item) => item.localesId === SolutionName)

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['nav', 'common', 'home'])),
    },
  }
}

export default SolutionName
