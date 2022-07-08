import { Popover, Transition, Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { Children, Fragment } from 'react'
import { useScrollHooks, classNames } from '../hooks/useScrollHooks'
import { useState } from 'react'

import { useRouter } from 'next/router'
const NavItem = ({ title, children }) => {
  const scrollPos = useScrollHooks()
  const [isShowing, setIsShowing] = useState(false)
  return (
    <Popover onMouseLeave={() => setIsShowing(false)} className='relative'>
      {({ open }) => (
        <>
          <Popover.Button
            onMouseEnter={() => setIsShowing(true)}
            className={classNames(
              scrollPos > 20 ? 'text-gray-800' : 'text-white',
              'group flex w-fit items-center rounded-md px-3 py-2 text-base font-bold  hover:text-opacity-100 focus:outline-none'
            )}
          >
            <span>{title}</span>
            <ChevronDownIcon
              className={` ${isShowing ? '-rotate-180' : ''}
                  ml-2 h-5 w-5  transition duration-200 ease-out group-hover:text-opacity-80`}
              aria-hidden='true'
            />
          </Popover.Button>
          <Transition
            show={isShowing}
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-5'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-5'
          >
            <Popover.Panel className='absolute left-0 z-10  min-w-max max-w-xs  sm:px-0 lg:max-w-3xl'>
              <div className='w-fit max-w-lg overflow-hidden rounded-xl shadow-xl ring-1 ring-gray-500 ring-opacity-30'>
                <div
                  onClick={() => setIsShowing(false)}
                  className='relative grid gap-x-10 bg-white px-12 py-8  lg:grid-flow-col'
                >
                  {children}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default NavItem
