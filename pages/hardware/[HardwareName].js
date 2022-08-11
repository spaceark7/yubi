import { hardware } from '../../data/software'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import HeroSection from '../../components/HeroSection'
import customers from '../../data/customers'
import HardwareSection from '../../components/HardwareSection'
import ContactSection from '../../components/ContactSection'
import Layout from '../../components/Layout'
import Image from 'next/image'

const HardwareName = ({ data }) => {
  return (
    <>
      <Head>
        <title>{`Yubi | ${data.name}`}</title>
        <meta name='description' content={`${data.name} `} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HeroSection data={data.hero_section} customers={customers} />
      {data?.solution_section && (
        <section className='h-full w-full pt-12' id='description'>
          <Layout>
            <div className='mb-6'>
              <h1 className='mb-3 text-center text-3xl font-bold'>
                {data.solution_section.title}
              </h1>
              <p className='text-center'>{data.solution_section.description}</p>
            </div>
            {data.solution_section?.list && (
              <div className='mt-6 flex flex-row flex-wrap'>
                {data.solution_section.list.map((item, index) => (
                  <div key={index} className='flex-grow py-6'>
                    <div className='mb-2 flex items-center gap-x-2'>
                      <div className='relative h-12 w-12'>
                        <Image
                          src={item.image}
                          alt={item.description}
                          layout='fill'
                          objectFit='contain'
                        />
                      </div>
                      <div>
                        <h2 className='text-lg'>{item.title}</h2>
                        <h1 className='text-xl font-bold'>
                          {item.description}
                        </h1>
                      </div>
                    </div>
                    <p className=''>{item.content}</p>
                  </div>
                ))}
              </div>
            )}
          </Layout>
        </section>
      )}

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
