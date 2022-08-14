import { hardware } from '../../data/software'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import HeroSection from '../../components/HeroSection'
import customers from '../../data/customers'
import HardwareSection from '../../components/HardwareSection'
import ContactSection from '../../components/ContactSection'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import { useState } from 'react'
const HardwareName = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <>
      <Head>
        <title>{`Yubi | ${data.name}`}</title>
        <meta name='description' content={`${data.name} `} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HeroSection data={data.hero_section} customers={customers} />
      {data?.solution_section && (
        <section className='h-full w-full pb-12 pt-12' id='description'>
          <Layout>
            <div className='mb-12'>
              <h1 className='mb-3 text-center text-3xl font-bold'>
                {data.solution_section.title}
              </h1>
              <p className='text-center'>{data.solution_section.description}</p>
            </div>
            {data.solution_section?.list && (
              <div className='mt-6 grid grid-flow-row md:grid-flow-row md:grid-cols-2 md:gap-y-8 md:gap-x-6'>
                {data.solution_section.list.map((item, index) => (
                  <div key={index} className='rounded-lg bg-slate-50 py-6 px-6'>
                    <div className='mb-2  flex items-center gap-x-2'>
                      <div className='relative h-12 w-12'>
                        <Image
                          src={item.image}
                          alt={item.description}
                          layout='fill'
                          objectFit='contain'
                        />
                      </div>
                      <div>
                        <h2 className='2xl:text-lg'>{item.title}</h2>
                        <h1 className='text-lg font-bold 2xl:text-xl'>
                          {item.description}
                        </h1>
                      </div>
                    </div>
                    <p className='text-sm 2xl:text-base'>{item.content}</p>
                  </div>
                ))}
              </div>
            )}
          </Layout>
        </section>
      )}
      {data?.implementation_section && (
        <section className=' w-full pt-12' id='implementation'>
          <Layout>
            <h1 className='mb-3 text-center text-3xl font-bold'>
              {data.implementation_section.title}
            </h1>
            <p className='text-center '>
              {data.implementation_section.description}
            </p>
            <div className='mb-6 mt-4 flex gap-x-4 py-2'>
              <div className='my-auto w-1/3 2xl:space-y-4'>
                {data.implementation_section.details?.map((item, index) => (
                  <div className='border-b border-b-slate-300 p-4' key={index}>
                    <div className='relative h-10 w-10 2xl:h-14 2xl:w-14'>
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout='fill'
                        objectFit='contain'
                      />
                    </div>
                    <h1 className='mb-2 font-bold text-slate-700 2xl:text-xl'>
                      {item.title}
                    </h1>
                    <p className='text-sm text-slate-600 2xl:text-base'>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className='relative my-auto mx-auto h-[600px] w-2/4 '>
                <Image
                  className='mx-auto'
                  src={data.implementation_section.image}
                  alt={data.implementation_section.description}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
          </Layout>
        </section>
      )}

      {data?.application_section && (
        <section className='h-full w-full pt-12' id='applications'>
          <Layout className='pb-0'>
            <h1 className='mb-3 text-center text-3xl font-bold'>
              {data.application_section?.title}
            </h1>
            <p className='text-center '>
              {data.application_section?.description}
            </p>

            <div className='mt-6'>
              <Tab.Group
                selectedIndex={selectedIndex}
                onChange={setSelectedIndex}
              >
                <div className={'w-full '}>
                  <Tab.List className={'mx-auto w-fit space-x-8 divide-x'}>
                    {data.application_section.list?.map((item, index) => (
                      <Tab
                        className={({ selected }) =>
                          selected
                            ? 'rounded-full px-4 py-2 text-lg text-sky-600 outline-none ring-2 ring-sky-500 2xl:text-2xl'
                            : 'px-4 py-2 text-lg 2xl:text-2xl'
                        }
                        key={index}
                      >
                        {item.title}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>

                <Tab.Panels>
                  {data.application_section.list?.map((item, index) => (
                    <Tab.Panel
                      className={
                        'relative mt-8 aspect-video max-h-[60vh] w-full rounded-2xl 2xl:max-h-[500px]'
                      }
                      key={index}
                    >
                      <Image
                        className='rounded-2xl'
                        src={item.image}
                        alt={item.title}
                        layout='fill'
                        objectFit='contain'
                      />
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </Layout>
        </section>
      )}

      {/* {data.hardware_section && (
        <HardwareSection data={data.hardware_section} />
      )} */}

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
