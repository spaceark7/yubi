import Image from 'next/image'
import Layout from './Layout'

const HardwareSection = ({ data }) => {
  return (
    <div className='mt-12 min-h-[60vh] w-full pb-20'>
      <Layout>
        <h1 className='text-center text-4xl font-bold'>{data.title}</h1>
        <div className='mt-20 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3'>
          {data.list_product.map((item, index) => (
            <div key={index} className='h-full max-w-md rounded-lg px-5 py-3'>
              <div className='relative w-full rounded-xl pb-8 transition duration-200 ease-out hover:scale-105'>
                <Image
                  className='rounded-2xl'
                  src={item.image}
                  layout='responsive'
                  height={'100%'}
                  width={'100%'}
                  alt={item.name}
                />
              </div>
              <div>
                <h3 className='text-lg font-bold'>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  )
}

export default HardwareSection
