import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const TestimoniCard = ({ data }) => {
  const { t } = useTranslation('home', { keyPrefix: 'testimony.collections' })
  return (
    <div className='flex w-full flex-col rounded-xl border bg-white p-8 shadow-lg md:max-w-4xl md:flex-row lg:max-w-screen-lg xl:max-w-screen-xl'>
      <div className=' w-full md:w-1/3'>
        <div className='relative h-80 w-full lg:h-96'>
          <Image
            className='rounded-xl'
            layout='fill'
            objectFit='cover'
            objectPosition={'center'}
            src={data.image}
            alt='mockup image'
          />
        </div>
      </div>
      <div className=' w-full md:w-2/3'>
        <div className='flex h-full flex-col justify-between py-6 pl-4 pr-2 lg:py-16'>
          <h1 className='mb-6 text-xl md:m-0 lg:text-2xl'>
            {t(`${data.id}.testimony`)}
          </h1>
          <div>
            <p className='text-xl font-bold'>{t(`${data.id}.name`)}</p>
            <p className='text-primaryBrand'>{t(`${data.id}.owner`)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimoniCard
