import { Tab } from '@headlessui/react'
import { solutions } from '../data/businessSolutions'
import { useState } from 'react'
import Link from 'next/link'
const NavItemBusiness = () => {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <Tab.Group
      selectedIndex={tabIndex}
      onChange={(index) => setTabIndex(index)}
      as={'div'}
      className={'flex'}
      vertical
      manual
    >
      <Tab.List
        className={'flex flex-col space-y-2 border-r-2 border-r-slate-300 pr-4'}
      >
        {solutions.map((data, index) => (
          <Tab
            className={({ selected }) =>
              selected
                ? 'before:w-100 relative z-10 px-4 py-2 text-left text-lg font-bold text-primaryBrand before:absolute before:left-0 before:bottom-0 before:z-0 before:h-full before:border-b-2 before:border-b-primaryBrand before:content-[""] '
                : 'before:content-[" "] relative rounded-lg px-4 py-2 text-left text-lg font-bold text-slate-400 before:absolute before:left-0 before:bottom-0 before:w-0 hover:bg-gray-100 hover:text-slate-500'
            }
            key={index}
          >
            <span>{data.name}</span>
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className={'min-w-[280px] max-w-lg'}>
        {solutions.map((data, index) => (
          <Tab.Panel className={'px-4'} key={index}>
            <div>
              <h1 className='font-medium text-gray-500'>Software Solution</h1>
              <div className='grid grid-cols-2'>
                {data.solutions?.software.map((solution, index) => (
                  <Link href={`/products/${solution.localesId}`} key={index}>
                    <div className='mb-2 rounded-xl p-2 hover:cursor-pointer hover:bg-slate-100'>
                      <h2 className='font-bold text-primaryBrand  xl:text-lg'>
                        {solution.name}
                      </h2>

                      <p className='text-sm'>{solution.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className='mt-4'>
              <h1 className='mb-2 font-medium text-gray-500'>
                Hardware Solution
              </h1>
              <div className='grid grid-cols-2'>
                {data.solutions?.hardware.map((solution, index) => (
                  <Link href={`/hardware/${solution.localesId}`} key={index}>
                    <div className='rounded-xl p-1 hover:cursor-pointer hover:bg-slate-100'>
                      <h2 className='font-bold text-primaryBrand '>
                        {solution.name}
                      </h2>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default NavItemBusiness
