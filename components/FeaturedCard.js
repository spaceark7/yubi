import React from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedCard = ({ data, useImage }) => {
  const { t } = useTranslation('home', {
    keyPrefix: `featured-software.${data.title}`,
  })

  return data?.cta ? (
    <Link href={`/products/${data.cta}`}>
      <div className='group flex h-fit w-full cursor-pointer select-none space-x-4 rounded-xl p-2 hover:bg-slate-200 md:w-fit md:p-4'>
        {useImage ? (
          <div
            className={`relative flex aspect-square h-24 w-1/3 items-center justify-center rounded-lg font-bold text-primaryBrand sm:w-20 lg:px-5`}
          >
            <Image
              src={data.thumbs}
              layout='fill'
              objectFit='contain'
              alt={data.title}
            />
          </div>
        ) : (
          <div
            className={`${
              data.brand.length == 1
                ? 'px-4 text-4xl sm:text-5xl'
                : data.brand.length == 2
                ? 'px-4 text-4xl sm:text-5xl'
                : 'text-4xl'
            } flex aspect-square h-fit w-1/3 items-center justify-center rounded-lg font-bold text-primaryBrand  sm:w-20 lg:px-5`}
          >
            {t('brand')}
          </div>
        )}

        <div className='w-3/4'>
          <div className='flex space-x-3'>
            <span className='pl-3 text-lg font-bold '>{t('title')}</span>
            <span className='-translate-y-2 rounded-full  bg-primaryBrand/5 px-3 py-1 pl-3 font-medium text-primaryBrand opacity-0 transition duration-300 ease-in-out group-hover:-translate-y-0 group-hover:opacity-100 lg:text-sm'>
              {t('cta')}
            </span>
          </div>
          <p className='pl-3 text-base text-sm md:text-sm lg:text-base '>
            {t('description')}
          </p>
        </div>
      </div>
    </Link>
  ) : (
    <div className='flex h-fit w-full select-none space-x-4 rounded-xl p-2 hover:bg-slate-200 md:w-fit md:p-4'>
      {useImage ? (
        <div
          className={`relative flex aspect-square h-24 w-1/3 items-center justify-center rounded-lg font-bold text-primaryBrand sm:w-20 lg:px-5`}
        >
          <Image
            src={data.thumbs}
            layout='fill'
            objectFit='contain'
            alt={data.title}
          />
        </div>
      ) : (
        <div
          className={`${
            data.brand.length == 1
              ? 'px-4 text-4xl sm:text-5xl'
              : data.brand.length == 2
              ? 'px-4 text-4xl sm:text-5xl'
              : 'text-4xl'
          } flex aspect-square h-fit w-1/3 items-center justify-center rounded-lg font-bold text-primaryBrand  sm:w-20 lg:px-5`}
        >
          {t('brand')}
        </div>
      )}

      <div className='w-3/4'>
        <h2 className='pl-3 text-lg font-bold '> {t('title')}</h2>
        <p className='pl-3 text-base text-sm md:text-sm lg:text-base '>
          {t('description')}
        </p>
      </div>
    </div>
  )
}

FeaturedCard.defaultProps = {
  useImage: false,
}

export default FeaturedCard
