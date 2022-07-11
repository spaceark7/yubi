import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { classNames, useScrollHooks } from '../hooks/useScrollHooks'

const NavLang = ({ lang }) => {
  const scrollPos = useScrollHooks()
  const router = useRouter()
  const { locale, locales } = router
  const [isShowing, setIsShowing] = useState(false)

  const [selected, setSelected] = useState(locale)
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className='relative mt-1 ml-2'>
        <Listbox.Button
          onMouseEnter={() => setIsShowing(true)}
          className={classNames(
            scrollPos > 20 ? 'text-gray-700' : 'text-white',
            'relative  w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'
          )}
        >
          <span className='block w-5 truncate'>{selected.toUpperCase()}</span>
          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <ChevronDownIcon className='h-5 w-5 ' aria-hidden='true' />
          </span>
        </Listbox.Button>
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
          <Listbox.Options className='absolute mt-1 h-fit w-fit overflow-auto rounded-md bg-white px-4 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {locales.map((item, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative block cursor-default select-none py-2  pr-4 ${
                    active ? ' text-blue-500 ' : ''
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <span
                    className={`block font-bold hover:cursor-pointer ${
                      selected ? 'text-primaryBrand' : 'text-gray-900'
                    }`}
                  >
                    <Link href={router.asPath} locale={item}>
                      {item.toUpperCase() === 'EN'
                        ? 'English'
                        : item.toUpperCase() === 'ID'
                        ? 'Bahasa'
                        : item.toUpperCase() === 'KR'
                        ? 'Korean'
                        : 'Test'}
                    </Link>
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default NavLang
