import customers from '../../data/customers'

import { softwares_detail } from '../../data/software'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import HeroSection from '../../components/HeroSection'
import Head from 'next/head'
import BestFeature from '../../components/BestFeature'
import SliderTestimony from '../../components/SliderTestimony'
import ContactSection from '../../components/ContactSection'
import RequestDemo from '../../components/RequestDemo'
import Banner from '../../components/Banner'
import FeaturedSection from '../../components/FeaturedSection'

const ServiceName = ({ data }) => {
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

      {data.best_feature?.map((item, index) => (
        <BestFeature key={index} rtl={item.rtl} data={item} />
      ))}
      {data.brief_feature && (
        <>
          {data.brief_feature.purpose?.map((feature, index) => (
            <Banner key={index} data={feature} />
          ))}
          <FeaturedSection data={data.brief_feature.features} />
        </>
      )}
      {data.banner?.map((item, index) => (
        <Banner key={index} data={item} />
      ))}
      {/* {data.testimonial && (
        <SliderTestimony is_slate={!data.banner?.length - 1} />
      )} */}
      <ContactSection bgSlate={data.banner?.length - 1} />
      <RequestDemo model={false} />
    </>
  )
}

export const getStaticPaths = async ({ locales }) => {
  let paths = []
  softwares_detail.forEach((item) => {
    for (const locale of locales) {
      paths.push({
        params: { ServiceName: item.localesId },
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
  const { ServiceName } = params
  const data = softwares_detail.find((data) => data.localesId === ServiceName)

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['nav', 'common', 'home'])),
    },
  }
}

export default ServiceName
