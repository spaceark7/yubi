import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonial } from '../data/software'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

import { Pagination, FreeMode, Navigation } from 'swiper'
import Layout from './Layout'
import TestimoniCard from './TestimoniCard'
import { useTranslation } from 'react-i18next'

const SliderTestimony = ({ is_slate }) => {
  const { t } = useTranslation('home', { keyPrefix: 'testimony' })
  return (
    <section
      className={`${
        is_slate ? 'bg-slate-100' : 'bg-white'
      } 'min-h-[80vh] pb-16'`}
    >
      <Layout>
        <h1 className='mx-auto mb-12 max-w-lg pt-16 text-center text-4xl font-bold'>
          {t('title')}
        </h1>
      </Layout>
      {/* For bigger desktop */}
      <div className='hidden lg:pb-8 xl:block'>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          navigation={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, FreeMode, Navigation]}
        >
          {testimonial.map((data, index) => (
            <SwiperSlide className='pb-12' key={index}>
              <TestimoniCard className='w-full' data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* For small desktop */}
      <div className='hidden lg:block lg:pb-8 xl:hidden'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, FreeMode]}
        >
          {testimonial.map((data, index) => (
            <SwiperSlide className='px-16 pb-12' key={index}>
              <TestimoniCard className='w-[80vh]' data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* For Mobile */}
      <div className=' lg:hidden'>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          navigation
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, FreeMode, Navigation]}
        >
          {testimonial.map((data, index) => (
            <SwiperSlide className='px-6 pb-8  md:pb-12' key={index}>
              <TestimoniCard
                className='max-w-screen-sm md:max-w-screen-md'
                data={data}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

SliderTestimony.defaultProps = {
  is_slate: false,
}

export default SliderTestimony
