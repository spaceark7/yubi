import Layout from './Layout'
import Image from 'next/image'
import Link from 'next/link'

const Banner = ({ data }) => {
  return (
    <section
      className={`${data.slate ? 'bg-slate-100' : 'bg-white'} lg:min-h-[70vh]`}
    >
      <Layout>
        <div
          className={`mt-8 flex md:space-x-6 ${
            data.rtl ? 'md:flex-row-reverse' : 'md:flex-row'
          }  flex-col `}
        >
          <div className='h-auto w-full lg:w-1/2'>
            <div className='relative mx-auto h-80 rounded-lg md:h-[60vh] lg:h-[55vh] lg:max-w-lg'>
              <Image
                className='rounded-xl'
                src={data.image}
                layout='fill'
                objectFit='contain'
                alt={data.title}
              />
            </div>
          </div>
          <div
            className={`${
              data.rtl ? 'md:pl-8' : 'pl-0'
            } py-4 lg:w-1/2 lg:py-24`}
          >
            <h1 className='pt-4 text-2xl text-3xl font-bold md:mb-4 lg:text-5xl xl:leading-[52px]'>
              {data.title}
            </h1>
            <p className='max-w-lg pt-4 text-lg text-slate-700 lg:mt-6'>
              {data.description}
            </p>
            {data.cta ? (
              <div className='mt-4'>
                <Link href={`/services/${data.cta}`}>
                  <p className='mt-4 cursor-pointer py-2 pr-4 text-primaryBrand hover:underline'>
                    Learn More
                  </p>
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default Banner
