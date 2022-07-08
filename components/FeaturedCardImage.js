import Image from 'next/image'

const FeaturedCardImage = ({ data }) => {
  return (
    <div className='flex h-fit w-full select-none space-x-4 rounded-xl p-2 hover:bg-slate-200 md:w-fit md:p-4'>
      <div
        className={`relative flex aspect-square h-16 w-1/3 items-center justify-center rounded-lg font-bold text-primaryBrand sm:w-20 lg:h-16 lg:px-5`}
      >
        <Image
          src={data.thumbs}
          layout='fill'
          objectFit='contain'
          alt={data.title}
        />
      </div>

      <div className='w-3/4'>
        <h2 className='pl-3 text-lg font-bold '>{data.title}</h2>
        <p className='pl-3 text-base text-sm leading-tight md:text-sm md:leading-none lg:text-base '>
          {data.description}
        </p>
      </div>
    </div>
  )
}

export default FeaturedCardImage
