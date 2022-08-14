import Layout from './Layout'
import SliderCustomer from './SliderCustomer'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsWhatsapp } from 'react-icons/bs'

const HeroSection = ({ customers, data }) => {
  const router = useRouter()
  const text = decodeURI(
    'Halo, saya tertarik dengan program yubi. Bisa minta info lebih lanjut?'
  )

  return (
    <section className='z-0 overflow-x-hidden'>
      <div className='relative z-0 min-h-screen overflow-x-hidden pt-28 sm:pt-24 md:pt-32 xl:pt-10'>
        <Layout>
          <div className='h-[75vh] md:h-[70vh] lg:px-10 xl:h-[75vh] 2xl:h-[80vh]'>
            <div
              className={`${
                data?.is_dark ? 'text-white' : 'text-gray-800'
              } my-auto h-full md:pt-20 2xl:pt-32 `}
            >
              <h1 className='max-w-lg text-4xl font-bold drop-shadow-md sm:text-5xl md:text-6xl lg:max-w-md lg:leading-[64px] xl:max-w-md xl:text-5xl 2xl:max-w-xl '>
                {data?.title}
              </h1>
              <p className='mt-6 text-xl opacity-95 sm:max-w-md lg:text-base 2xl:max-w-xl 2xl:text-xl'>
                {data?.description}
              </p>
              {data?.cta && (
                <a
                  href='#description'
                  className='btn-outline large-mobile:text-base mt-12 border-white text-sm  hover:bg-white hover:text-gray-600 lg:text-lg'
                >
                  {data.cta}
                </a>
              )}
              {data?.disable_slider ? null : (
                <Link href='/contact/#request'>
                  <div
                    className={`${
                      !data.is_dark
                        ? 'btn mt-12 bg-primaryBrand hover:bg-primaryBrand/80 hover:text-opacity-100 hover:shadow-md active:scale-95 active:bg-primaryBrand 2xl:text-xl'
                        : 'btn mt-12 bg-tertiaryBrand hover:text-opacity-100 hover:shadow-md active:scale-95 active:bg-tertiaryBrand 2xl:text-xl'
                    } lg:px-6`}
                  >
                    {' '}
                    {data.description.includes('P-ERP')
                      ? 'Coming soon'
                      : data.disable_slider
                      ? 'See hardware'
                      : 'Request Demo'}
                  </div>
                </Link>
              )}

              <div className='flex flex-col lg:flex-row '>
                {data?.is_contact && (
                  <a
                    href={`https://wa.me/+6281290049231?text=${text}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${
                      !data.is_dark
                        ? 'btn mt-12 bg-primaryBrand hover:bg-primaryBrand/80 hover:text-opacity-100 hover:shadow-md active:scale-95 active:bg-primaryBrand 2xl:text-xl'
                        : 'btn mt-12 bg-tertiaryBrand hover:text-opacity-100 hover:shadow-md active:scale-95 active:bg-tertiaryBrand 2xl:text-xl'
                    } w-fit select-none lg:px-6`}
                  >
                    <BsWhatsapp className='mr-2 inline-block h-5 w-5 ' /> Send
                    WhatApps
                  </a>
                )}

                {data?.is_contact && (
                  <a
                    href='mailto:cs@yubiteck.com'
                    className={`
                   
                    btn mt-3 w-fit border-2 border-white hover:text-opacity-100  hover:shadow-md active:scale-95 active:bg-white active:text-sky-500 sm:mt-6 sm:ml-0
                   lg:mt-12 lg:ml-4 lg:px-6 2xl:text-xl`}
                  >
                    Send Email
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className='mx-auto mt-4 w-full md:mt-8 lg:max-w-screen-lg'>
            {!data.disable_slider ? (
              <SliderCustomer customers={customers} />
            ) : null}
          </div>
        </Layout>

        <div className='absolute top-0 left-0 -z-10 hidden w-full lg:block'>
          <div
            className={`relative z-0 w-screen ${
              data?.disable_slider ? 'h-screen' : ' h-[90vh] '
            }`}
          >
            <Image
              src={data.image}
              priority={true}
              alt='pos devices hero'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>

        <div className='absolute top-0 left-0 -z-10 hidden w-full md:block lg:hidden '>
          <div
            className={`relative z-0 w-screen ${
              data?.disable_slider ? 'h-screen' : ' h-[90vh] '
            }`}
          >
            <Image
              src={data.medium_image}
              alt='pos devices hero'
              layout='fill'
              priority={true}
              objectFit='cover'
            />
          </div>
        </div>

        <div className='absolute top-0 left-0 -z-10 w-screen  md:hidden '>
          <div
            className={`relative z-0 w-screen ${
              data?.disable_slider ? 'h-screen' : ' h-[90vh] '
            }`}
          >
            <Image
              src={data.mobile_image}
              alt='pos devices hero'
              layout='fill'
              priority={true}
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
