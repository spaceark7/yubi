import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { Navigation, Autoplay } from 'swiper'
import Image from 'next/image'

const SliderCustomer = ({ customers }) => {
  return (
    <>
      <div className='hidden bg-gradient-to-r from-transparent via-slate-100 to-transparent  px-2 md:block'>
        <Swiper
          slidesPerView={
            customers.length > 4 ? customers.length / 2 : customers.length
          }
          loop={true}
          autoplay={{
            delay: 700,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          modules={[Navigation, Autoplay]}
        >
          {customers.map((customer, index) => (
            <SwiperSlide key={index}>
              <div className='relative aspect-video h-20'>
                <Image
                  className='object-contain grayscale'
                  src={customer.image}
                  layout='fill'
                  alt={customer.name}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='bg-slate-200 bg-gradient-to-r from-transparent via-slate-100 to-transparent px-2 md:hidden'>
        <Swiper
          slidesPerView={
            customers.length > 4 ? customers.length / 5 : customers.length
          }
          loop={true}
          autoplay={{
            delay: 700,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          modules={[Navigation, Autoplay]}
        >
          {customers.map((customer, index) => (
            <SwiperSlide key={index}>
              <div className='relative aspect-video h-20'>
                <Image
                  className='object-contain grayscale'
                  src={customer.image}
                  layout='fill'
                  width={16}
                  height={16}
                  alt={customer.name}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default SliderCustomer
