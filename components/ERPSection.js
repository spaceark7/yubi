import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import Lepi from '../assets/lepi.png'
import SERP from '../assets/s-erp.png'
import PERP from '../assets/p-erp.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { useTranslation } from 'next-i18next'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ERPSection = () => {
  const { locale } = useRouter()
  const { t } = useTranslation('home', { keyPrefix: 'advanced-solution' })
  return (
    <section className='relative bg-slate-200 lg:min-h-[80vh]'>
      <div className='mt-8 flex flex-col md:flex-row md:space-x-6 lg:py-20'>
        <div className='my-auto w-full overflow-hidden  pt-8 md:w-1/2 lg:pt-0'>
          <div className='relative  w-[100vh] rounded-lg md:h-[60vh] lg:w-[100vh] '>
            <Image
              className='xl: absolute my-auto -translate-x-2/4 rounded-xl md:-translate-x-2/4 lg:-translate-x-1/4 '
              src={Lepi}
              layout='responsive'
              objectFit='contain'
              alt='Laptop of lepi'
            />
          </div>
        </div>
        <div className='my-auto py-4  md:w-1/2 lg:py-8 '>
          <div className='mt-6 px-8 md:px-0'>
            <h3 className='mb-6 text-lg font-bold text-slate-500'>
              {t('as-subtitle')}
            </h3>
            <h1 className='text-2xl text-3xl font-bold md:mb-4 lg:mb-0 lg:text-4xl'>
              {t('as-title')}
            </h1>
            <h3 className='text-lg font-bold text-slate-800'>
              {t('as-title-2')}
            </h3>
            <p className='mt-4 max-w-md'>{t('as-description')}</p>
          </div>

          <div className='mt-6 h-[80%] w-full sm:hidden md:hidden lg:mt-8  lg:max-w-md lg:flex-row lg:justify-evenly lg:space-x-5'>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
            >
              <SwiperSlide className='large-mobile:pl-16 pb-12 pl-8'>
                <div className='h-full max-w-xs  rounded-2xl bg-white p-4 pb-6 shadow-md lg:max-w-xs lg:p-4 lg:pb-8'>
                  <div className='relative aspect-video rounded-xl'>
                    <Image
                      className='my-auto  rounded-xl'
                      src={SERP}
                      layout='fill'
                      objectFit='cover'
                      alt='Laptop of lepi'
                    />
                  </div>
                  <div className='mt-8'>
                    <h4 className='mb-2 font-semibold text-slate-600'>
                      {t('S-ERP.title')}
                    </h4>
                    <h1 className='mb-3 text-lg font-bold'>
                      {t('S-ERP.description')}
                    </h1>
                    <div className='cursor-pointer'>
                      <Link href={'/services/s-erp'}>
                        <div className='inline-flex items-center space-x-3 text-slate-600'>
                          <span> {t('S-ERP.cta')}</span>
                          <span>
                            <ArrowNarrowRightIcon className='h-5 w-5 ' />
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pb-12 pl-8'>
                <div className='h-full max-w-xs  rounded-2xl bg-white p-4 pb-6 shadow-md lg:max-w-xs lg:p-4 lg:pb-8'>
                  <div className='relative aspect-video rounded-xl'>
                    <Image
                      className='my-auto  rounded-xl'
                      src={PERP}
                      layout='fill'
                      objectFit='cover'
                      alt='Laptop of lepi'
                    />
                  </div>
                  <div className='mt-8'>
                    <h4 className='mb-2 font-semibold text-slate-600'>
                      {t('P-ERP.description')}
                    </h4>
                    <h1 className='mb-3 text-lg font-bold'>{t('P-ERP.cta')}</h1>
                    <div className='inline-flex items-center space-x-3 text-slate-600'>
                      {t('P-ERP.cta')}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className='mt-4 hidden h-[80%] w-full sm:flex md:hidden '>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
            >
              <SwiperSlide className='mx-auto px-12 pb-12'>
                <div className='h-full max-w-xs  rounded-2xl bg-white p-4 pb-6 shadow-md lg:max-w-xs lg:p-4 lg:pb-8'>
                  <div className='relative aspect-video rounded-xl'>
                    <Image
                      className='my-auto  rounded-xl'
                      src={SERP}
                      layout='fill'
                      objectFit='cover'
                      alt='Laptop of lepi'
                    />
                  </div>
                  <div className='mt-8'>
                    <h4 className='mb-2 font-semibold text-slate-600'>
                      {t('S-ERP.title')}
                    </h4>
                    <h1 className='mb-3 text-lg font-bold'>
                      {t('S-ERP.description')}
                    </h1>
                    <div className='cursor-pointer'>
                      <Link href={'/solutions/s-erp'} locale={locale}>
                        <div className='inline-flex items-center space-x-3 text-slate-600'>
                          <span>{t('S-ERP.cta')}</span>
                          <span>
                            <ArrowNarrowRightIcon className='h-5 w-5 ' />
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='mx-auto px-10 pb-12'>
                <div className='h-full max-w-xs  rounded-2xl bg-white p-4 pb-6 shadow-md lg:max-w-xs lg:p-4 lg:pb-8'>
                  <div className='relative aspect-video rounded-xl'>
                    <Image
                      className='my-auto  rounded-xl'
                      src={PERP}
                      layout='fill'
                      objectFit='cover'
                      alt='Laptop of lepi'
                    />
                  </div>
                  <div className='mt-8'>
                    <h4 className='mb-2 font-semibold text-slate-600'>
                      {t('P-ERP.title')}
                    </h4>
                    <h1 className='mb-3 text-lg font-bold'>
                      {t('P-ERP.description')}
                    </h1>
                    <div className='inline-flex items-center space-x-3 text-slate-600'>
                      {t('P-ERP.cta')}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Medium Screens */}

          <div className='mt-4 hidden  h-[80%] w-full md:flex lg:hidden '>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
            >
              <SwiperSlide className='mx-auto px-10 pb-12 sm:px-20'>
                <div className='h-full max-w-xs  rounded-2xl bg-white p-4 pb-6 shadow-md lg:max-w-xs lg:p-4 lg:pb-8'>
                  <div className='relative aspect-video rounded-xl'>
                    <Image
                      className='my-auto  rounded-xl'
                      src={SERP}
                      layout='fill'
                      objectFit='cover'
                      alt='Laptop of lepi'
                    />
                  </div>
                  <div className='mt-8'>
                    <h4 className='mb-2 font-semibold text-slate-600'>
                      {t('S-ERP.title')}
                    </h4>
                    <h1 className='mb-3 text-lg font-bold'>
                      {t('S-ERP.description')}
                    </h1>
                    <div className='cursor-pointer'>
                      <Link href={'/services/s-erp'}>
                        <div className='inline-flex items-center space-x-3 text-slate-600'>
                          <span>{t('S-ERP.cta')}</span>
                          <span>
                            <ArrowNarrowRightIcon className='h-5 w-5 ' />
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='mx-auto px-10 pb-12 sm:px-20'>
                <div className='h-full max-w-xs  rounded-2xl bg-white p-4 pb-6 shadow-md lg:max-w-xs lg:p-4 lg:pb-8'>
                  <div className='relative aspect-video rounded-xl'>
                    <Image
                      className='my-auto  rounded-xl'
                      src={PERP}
                      layout='fill'
                      objectFit='cover'
                      alt='Laptop of lepi'
                    />
                  </div>
                  <div className='mt-8'>
                    <h4 className='mb-2 font-semibold text-slate-600'>
                      {t('P-ERP.title')}
                    </h4>
                    <h1 className='mb-3 text-lg font-bold'>
                      {t('P-ERP.description')}
                    </h1>
                    <div className='inline-flex items-center space-x-3 text-slate-600'>
                      {t('P-ERP.cta')}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* Big Screen */}
          <div className='mt-4 hidden h-[80%] w-full lg:mt-8  lg:flex lg:max-w-md lg:flex-row lg:justify-evenly lg:space-x-5'>
            <div className='h-full max-w-xs rounded-2xl bg-white p-4 pb-8 shadow-md'>
              <div className='relative aspect-video rounded-xl'>
                <Image
                  className='my-auto  rounded-xl'
                  src={SERP}
                  layout='fill'
                  objectFit='cover'
                  alt='Laptop of lepi'
                />
              </div>
              <div className='mt-8'>
                <h4 className='mb-2 font-semibold text-slate-600'>
                  {t('S-ERP.title')}
                </h4>
                <h1 className='mb-3 text-lg font-bold'>
                  {t('S-ERP.description')}
                </h1>
                <div className='hover:cursor-pointer'>
                  <Link href={'/services/s-erp'}>
                    <div className='inline-flex items-center space-x-3 text-slate-600'>
                      <span>{t('S-ERP.cta')}</span>
                      <span>
                        <ArrowNarrowRightIcon className='h-5 w-5' />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className='h-full max-w-xs rounded-2xl bg-white p-4 pb-8 shadow-md'>
              <div className='relative aspect-video rounded-xl'>
                <Image
                  className='my-auto  rounded-xl'
                  src={PERP}
                  layout='fill'
                  objectFit='cover'
                  alt='Laptop of lepi'
                />
              </div>
              <div className='mt-8'>
                <h4 className='mb-2 font-semibold text-slate-600'>
                  {t('P-ERP.title')}
                </h4>
                <h1 className='mb-3 text-lg font-bold'>
                  {t('P-ERP.description')}
                </h1>
                <div className='inline-flex items-center space-x-3 text-slate-600'>
                  <span>{t('P-ERP.cta')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ERPSection
