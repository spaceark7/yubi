import { Popover, Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Logo from '../assets/yubi_logo.png'
import LogoBlue from '../assets/yubi_logo_blue.png'
import { useScrollHooks, classNames } from '../hooks/useScrollHooks'
import NavItem from './NavItem'
import NavLang from './NavLang'
import NavItemMobile from './NavItemMobile'
import NavLangMobile from './NavLangMobile'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { hardware, softwares_detail } from '../data/software'
import { useRouter } from 'next/router'
import { solutions } from '../data/businessSolutions'
import more_info from '../data/moreInfo'

const Nav = ({ open, setOpen, lang }) => {
  const scrollPos = useScrollHooks()
  const { t } = useTranslation('nav')
  const { locale } = useRouter()

  return (
    <header
      className={classNames(
        scrollPos > 20
          ? 'bg-white bg-opacity-90 text-gray-700 shadow-lg backdrop-blur-md'
          : open
          ? 'bg-white  text-gray-700 shadow-lg '
          : 'bg-transparent',
        'fixed top-0 z-40 w-full  transition-all duration-300 ease-out'
      )}
    >
      <nav
        className={classNames(
          scrollPos > 20
            ? 'border-none py-3 md:py-4'
            : open
            ? 'border-none py-3 md:py-4'
            : 'py-2 md:border-b',
          'item-center  relative mx-auto flex max-w-screen-lg justify-between px-4  transition-all duration-300 ease-out md:py-2 lg:justify-start xl:max-w-screen-xl'
        )}
      >
        <Link href={'/'}>
          <div className='relative mr-5 h-fit cursor-pointer p-2'>
            {scrollPos > 20 || open ? (
              <Image
                className='my-auto w-full'
                src={LogoBlue}
                alt='yubi tech logo'
              />
            ) : (
              <Image
                className='my-auto w-full'
                src={Logo}
                alt='yubi tech logo'
              />
            )}
          </div>
        </Link>

        <Popover.Group className='menu-item flex hidden flex-grow items-center justify-evenly lg:flex'>
          <NavItem title={t('nav-item.services')}>
            <div className='border-r border-gray-200 pr-4'>
              <h1 className='mb-6 font-bold text-gray-400'>
                Resto/Office/Business
              </h1>

              {softwares_detail
                .filter(
                  (value) => value.name !== 'S-ERP' && value.name !== 'P-ERP'
                )
                .map((x) => (
                  <Popover.Button
                    as={Link}
                    onClick={() => close()}
                    key={x.id}
                    href={`/services/${x.localesId}`}
                    locale={locale}
                  >
                    <div className='mb-2 font-bold text-primaryBrand hover:cursor-pointer hover:underline'>
                      {x.name}
                    </div>
                  </Popover.Button>
                ))}
            </div>
            <div className=' pr-4'>
              <h1 className='mb-6 font-bold text-gray-400'>
                Enterprise/Industry
              </h1>

              {softwares_detail
                .filter(
                  (value) => value.name === 'S-ERP' || value.name === 'P-ERP'
                )
                .map((x) => (
                  <Popover.Button
                    as={Link}
                    onClick={() => close()}
                    key={x.id}
                    href={`/services/${x.localesId}`}
                    locale={locale}
                  >
                    <div className='mb-2 font-bold text-primaryBrand hover:cursor-pointer hover:underline'>
                      {x.name}
                    </div>
                  </Popover.Button>
                ))}
            </div>
          </NavItem>

          <NavItem title={t('nav-item.hardware')}>
            <div className='max-w-screen-md border-r border-gray-200 pr-4'>
              <h1 className='mb-6 font-bold text-gray-400 '>
                {hardware[0].category}
              </h1>

              {hardware[0].products.map((x) => (
                <Popover.Button
                  as={Link}
                  href={`/hardware/${x.localesId}`}
                  className='mb-2 font-bold text-primaryBrand hover:cursor-pointer hover:underline'
                  key={x.name}
                >
                  <div className='mb-2 font-bold text-primaryBrand hover:cursor-pointer hover:underline'>
                    {x.name}
                  </div>
                </Popover.Button>
              ))}
            </div>
            <div>
              <h1 className='mb-6 font-bold text-gray-400'>
                {hardware[1].category}
              </h1>

              {hardware[1].products.map((x) => (
                <Popover.Button
                  as={Link}
                  href={`/hardware/${x.localesId}`}
                  className='mb-2 font-bold text-primaryBrand hover:cursor-pointer hover:underline'
                  key={x.name}
                >
                  <div className='mb-2 font-bold text-primaryBrand hover:cursor-pointer hover:underline'>
                    {x.name}
                  </div>
                </Popover.Button>
              ))}
            </div>
          </NavItem>
          <NavItem title={t('nav-item.business-solution')}>
            <div className='w-full'>
              {solutions.map((item) => (
                <Popover.Button
                  as={Link}
                  onClick={() => close()}
                  key={item.id}
                  href={`/solutions/${item.localesId}`}
                  locale={locale}
                >
                  <div className='mb-2 font-bold text-primaryBrand hover:cursor-pointer hover:underline'>
                    {item.name}
                  </div>
                </Popover.Button>
              ))}
            </div>
          </NavItem>

          <div
            className={classNames(
              scrollPos > 20 ? 'text-gray-700' : 'text-white',
              'group inline-flex items-center rounded-md px-3  py-2 text-base font-bold  hover:text-opacity-100 focus:outline-none'
            )}
          >
            <Link href={'/contact'} locale={locale}>
              {t('nav-item.contact-us')}
            </Link>
          </div>
          <NavItem title={t('nav-item.more')}>
            <div className='w-full'>
              {more_info.map((item) => (
                <Popover.Button
                  as={Link}
                  onClick={() => close()}
                  key={item.id}
                  href={`/more/${item.localesId}`}
                  locale={locale}
                >
                  <div className='mb-2 font-bold text-primaryBrand hover:cursor-pointer hover:underline'>
                    {item.name}
                  </div>
                </Popover.Button>
              ))}
            </div>
          </NavItem>
        </Popover.Group>
        <div className='ml-2 flex hidden items-center justify-center lg:flex'>
          <div
            className={classNames(
              scrollPos > 20
                ? 'bg-primaryBrand hover:bg-primaryBrand/80 hover:text-opacity-100 hover:shadow-md active:scale-95 active:bg-primaryBrand'
                : 'bg-tertiaryBrand hover:text-opacity-100 hover:shadow-md active:scale-95 active:bg-tertiaryBrand',
              'btn group select-none '
            )}
          >
            Request Demo
          </div>
          <NavLang />
        </div>

        {/* Mobile Navigation */}
        <div className='p-2 lg:hidden'>
          {open ? (
            <div className='h-full' onClick={() => setOpen(!open)}>
              <XIcon
                className={classNames(
                  scrollPos > 20 || open ? 'text-primaryBrand' : 'text-white',
                  'h-10 w-10 text-white'
                )}
              />
            </div>
          ) : (
            <div className='h-full' onClick={() => setOpen(!open)}>
              <MenuIcon
                className={classNames(
                  scrollPos > 20 || open ? 'text-primaryBrand' : 'text-white',
                  'h-10 w-10 text-white'
                )}
              />
            </div>
          )}

          {open ? (
            <div className='absolute top-full left-0 z-10 h-[88vh] w-full overflow-y-auto  bg-white px-6 pt-4 pb-20'>
              <div className='w-full '>
                <NavItemMobile title={'Services'}>
                  <div className='border-r border-gray-200 pr-4 '>
                    <h1 className='mb-2 font-bold text-gray-400'>
                      Resto/Office/Business
                    </h1>

                    {softwares_detail
                      .filter(
                        (value) =>
                          value.name !== 'S-ERP' && value.name !== 'P-ERP'
                      )
                      .map((x) => (
                        <Link
                          key={x.id}
                          href={`/services/${x.localesId}`}
                          locale={locale}
                        >
                          <div
                            onClick={() => setOpen(!open)}
                            className='mb-2 font-bold text-primaryBrand hover:cursor-pointer hover:underline'
                          >
                            {x.name}
                          </div>
                        </Link>
                      ))}
                  </div>
                  <div className='mt-6'>
                    <h1 className='mb-2 font-bold text-gray-400'>
                      Enterprise/Franchise/Industry
                    </h1>
                    {softwares_detail
                      .filter(
                        (value) =>
                          value.name === 'S-ERP' || value.name === 'P-ERP'
                      )
                      .map((x) => (
                        <Link
                          key={x.id}
                          href={`/services/${x.localesId}`}
                          locale={locale}
                        >
                          <div
                            onClick={() => setOpen(!open)}
                            className='mb-2 font-bold text-primaryBrand hover:cursor-pointer hover:underline'
                          >
                            {x.name}
                          </div>
                        </Link>
                      ))}
                  </div>
                </NavItemMobile>
                <NavItemMobile title={'Hardware'}>
                  {hardware.map((item) => (
                    <div key={item} className='py-2 pr-4'>
                      <h1 className='mb-2 font-bold text-gray-400'>
                        {item.category}
                      </h1>

                      {item.products.map((menu) => (
                        <Link
                          key={menu.id}
                          href={`/hardware/${menu.localesId}`}
                          locale={locale}
                        >
                          <div
                            onClick={() => setOpen(!open)}
                            className='mb-2 font-bold text-primaryBrand hover:cursor-pointer hover:underline'
                          >
                            {menu.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </NavItemMobile>
                <NavItemMobile title={'Business Solution'}>
                  {solutions.map((menu) => (
                    <Link
                      key={menu.id}
                      href={`/solutions/${menu.localesId}`}
                      locale={locale}
                    >
                      <div
                        onClick={() => setOpen(!open)}
                        className='mb-2 font-bold text-primaryBrand hover:cursor-pointer hover:underline'
                      >
                        {menu.name}
                      </div>
                    </Link>
                  ))}
                </NavItemMobile>
                <Link href={'/contact'}>
                  <div
                    onClick={() => setOpen(!open)}
                    className='mb-6 text-xl font-bold'
                  >
                    Contact us
                  </div>
                </Link>

                <NavItemMobile title={'More'}>
                  {more_info.map((menu) => (
                    <Link
                      key={menu.id}
                      href={`/more/${menu.localesId}`}
                      locale={locale}
                    >
                      <div
                        onClick={() => setOpen(!open)}
                        className='mb-2 font-bold text-primaryBrand hover:cursor-pointer hover:underline'
                      >
                        {menu.name}
                      </div>
                    </Link>
                  ))}
                </NavItemMobile>
                <NavLangMobile lang={lang} />
                <div className='mt-8'>
                  <div
                    onClick={() => setOpen(!open)}
                    className='btn mx-auto block w-full bg-primaryBrand text-center text-xl hover:bg-primaryBrand/80 hover:text-opacity-100 hover:shadow-md active:scale-95 active:bg-primaryBrand'
                  >
                    Request Demo
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  )
}

export default Nav
