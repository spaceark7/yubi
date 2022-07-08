import FeaturedCardImage from './FeaturedCardImage'
import Layout from './Layout'

const FeaturedSection = ({ data }) => {
  return (
    <Layout>
      <h1 className='mb-12 text-center text-3xl font-bold'>{`Features`}</h1>
      <div className='mt-4 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-y-0 md:gap-x-1 lg:gap-x-3 lg:gap-y-6'>
        {data.map((data, index) => (
          <FeaturedCardImage key={index} data={data} />
        ))}
      </div>
    </Layout>
  )
}

export default FeaturedSection
