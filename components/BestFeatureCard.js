import React from 'react'

const BestFeatureCard = ({ selected, data }) => {
  return (
    <div
      className={`${
        selected
          ? 'outline-dashed outline-2 outline-primaryBrand focus:outline-dashed'
          : ' '
      } w-80 rounded-lg border border-gray-200 px-4 py-5 text-left shadow-lg ring-0 hover:bg-gray-100 md:max-w-screen-lg  md:px-8 md:py-7 md:shadow-md lg:w-full`}
    >
      <h1 className='mb-4 text-2xl font-bold'>{data.subtitle}</h1>
      <p className='text-slate-700'>{data.description}</p>
    </div>
  )
}

export default BestFeatureCard
