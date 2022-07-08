import Layout from './Layout'
import { Tab, Transition } from '@headlessui/react'
import { useState, Fragment, useRef } from 'react'
import BestFeatureCard from './BestFeatureCard'
import Image from 'next/image'

const BestFeature = ({ rtl, data }) => {
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <section className='min-h-[80vh] overflow-x-hidden pt-8 pb-12 md:pt-0 md:pb-0'>
      <Layout>
        <div>
          <h1 className='text-center text-3xl font-bold'>{data.title}</h1>
        </div>
      </Layout>
      <div className='mx-auto w-full max-w-screen-lg px-4  sm:px-0 md:py-2 xl:max-w-screen-xl 2xl:py-16'>
        <Tab.Group
          vertical
          manual
          selectedIndex={tabIndex}
          onChange={(index) => setTabIndex(index)}
          as={'div'}
          className={`flex flex-col-reverse ${
            rtl ? 'md:flex-row-reverse' : 'md:flex-row'
          }  w-full md:space-x-6 md:px-12`}
        >
          <Tab.List className='flex w-full gap-y-0 gap-x-4 overflow-x-scroll px-4 py-4 md:w-2/3 md:flex-col md:gap-x-0 md:gap-y-6 md:overflow-hidden md:p-8'>
            {data.features.map((data, index) => (
              <Tab
                onMouseEnter={() => setTabIndex(index)}
                key={index}
                className={
                  'cursor-pointer focus:border-none focus:outline-none focus:ring-0'
                }
              >
                {({ selected }) => (
                  <BestFeatureCard data={data} selected={selected} />
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className='w-full md:w-1/2 md:p-0'>
            {data.features.map((data, index) => (
              <Tab.Panel as='div' key={index}>
                <div
                  className={`${
                    rtl
                      ? '-translate-x-0 xl:-translate-x-14 2xl:-translate-x-1/3'
                      : '-translate-x-0'
                  } 'relative mx-auto h-[50vh] w-[80vw] md:h-[60vh] md:w-[50vw] `}
                >
                  <Image
                    src={data.image}
                    alt={'pos'}
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  )
}

BestFeature.defaultProps = {
  rtl: false,
}

export default BestFeature
