import Image from 'next/image'
import woman from '../assets/contact_image@2x.png'

import { useTranslation } from 'next-i18next'
import Link from 'next/link'

const ContactSection = ({ bgSlate }) => {
  const { t } = useTranslation('home', { keyPrefix: 'contact' })
  return (
    <div className={`${bgSlate ? ' bg-slate-200' : 'bg-white'} `}>
      <div className='lg: relative mx-auto  my-auto max-w-screen-lg px-8 pt-12 sm:px-8 md:px-12 lg:pt-0'>
        <div className='absolute bottom-0 hidden h-[70vh] w-[70vh] md:block lg:left-8 2xl:-left-1/4 '>
          <div className='relative'>
            <Image
              className=' hidden h-96 w-96 object-contain lg:block'
              layout='responsive'
              src={woman}
              width={'100%'}
              height={'100%'}
              alt='woman holding laptop'
            />
          </div>
        </div>

        <div className='flex min-h-[70vh] flex-col justify-between md:flex-row md:items-center lg:gap-x-20 '>
          <div className='h-full w-full md:w-2/3 lg:w-1/2'>
            <div className='relative w-full md:hidden'>
              <Image
                className='h-96 object-scale-down md:object-contain'
                layout='responsive'
                src={woman}
                width={'100%'}
                height={'100%'}
                alt='woman holding laptop'
              />
            </div>
          </div>

          <div className='mt-6 w-full pb-8 sm:pb-20 md:w-1/2 lg:w-1/2'>
            <h1 className='mb-6 font-bold lg:text-4xl 2xl:text-5xl'>
              {t('title')}
            </h1>
            <p className='max-w-xl text-lg leading-snug lg:max-w-screen-lg'>
              {t('description')}
            </p>
            <div className='btn mt-12 select-none border border-primaryBrand text-xl text-primaryBrand hover:text-opacity-100 hover:shadow-md active:scale-95 active:bg-primaryBrand active:text-white'>
              <Link href={'/contact'}>{t('cta')}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
