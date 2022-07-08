import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
const NavItemMobile = ({ title, children }) => {
  return (
    <div className='mb-6'>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              as='div'
              className='flex w-full select-none items-center text-left'
            >
              <span className='mr-4 text-xl font-bold'>{title}</span>
              <span>
                <ChevronDownIcon
                  className={`${
                    open ? '-rotate-180 transform' : ''
                  } 'h-6 text-gray-600' w-6 transition duration-200 ease-out `}
                />
              </span>
            </Disclosure.Button>
            <Transition
              enter='transition duration-150 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-100 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
            >
              <Disclosure.Panel className='mt-2  text-gray-500 transition duration-200 ease-out'>
                {children}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default NavItemMobile
