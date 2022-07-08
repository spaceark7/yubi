import Image from 'next/image'
import Layout from './Layout'
import woman from '../assets/woman_sitting@2x.png'
import woman2 from '../assets/woman-sitting2@2x.png'
import { useTranslation } from 'next-i18next'

const RequestDemo = ({ model }) => {
  const { t } = useTranslation('home', { keyPrefix: 'CTA' })
  return (
    <div className='relative overflow-hidden bg-primaryBrand'>
      <div
        className={`absolute ${
          model
            ? '-bottom-1/4 -left-6 h-[70vh] w-[70vh] sm:-left-0 sm:-bottom-1/4 sm:block md:left-1/2 md:block  lg:bottom-0 lg:right-0'
            : 'bottom-0 -right-1/4 h-[50vh] w-screen sm:-right-1/4 sm:-bottom-1/4 sm:h-[70vh] md:-right-1/3 md:h-[80vh]  md:w-fit lg:-right-1/4 lg:-bottom-0'
        }  `}
      >
        <div
          className={`relative aspect-square ${
            model
              ? '-left-6 h-[70vh] w-[70vh] 2xl:-bottom-1/4'
              : ' bottom-0 right-0 h-[50vh] w-screen sm:right-0 md:top-0 md:h-[70vh] lg:h-[90vh]'
          }`}
        >
          <Image
            className={`hidden object-contain lg:block`}
            layout={`${model ? 'responsive' : 'fill'}`}
            src={model ? woman : woman2}
            width={'100%'}
            height={'100%'}
            alt='woman holding laptop'
          />
        </div>
      </div>
      <Layout>
        <div className='flex min-h-[80vh] flex-col px-8 sm:py-12 lg:flex-row lg:px-12'>
          <div className='mt-12 h-full w-full sm:mt-0 md:my-auto md:w-3/4 lg:w-1/2 lg:pl-8'>
            <h1 className='text-5xl font-bold text-white'>{t('title')}</h1>
            <div className='btn mt-12 bg-tertiaryBrand text-lg hover:text-opacity-100 hover:shadow-md active:scale-95 active:bg-tertiaryBrand'>
              {t('action')}
            </div>
          </div>
          <div className='w-full lg:w-1/2'></div>
        </div>
      </Layout>
    </div>
  )
}

RequestDemo.defaultProps = {
  model: true,
}

export default RequestDemo
