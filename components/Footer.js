import Image from 'next/image'
import Layout from './Layout'
import LogoFooter from '../assets/logo_footer@2x.png'
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from '@heroicons/react/outline'
import NavItemMobile from './NavItemMobile'
import { hardware, softwares_detail } from '../data/software'
import Link from 'next/link'
import { solutions } from '../data/businessSolutions'
import { useRouter } from 'next/router'
import more_info from '../data/moreInfo'
import { BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  const { locale } = useRouter()

  let paths = []
  hardware.map((item) => item.products.map((product) => paths.push(product)))

  return (
    <div className='z-20 w-full bg-[#003766] transition duration-300 ease-in-out'>
      <Layout>
        <div className='flex min-h-[70vh] flex-col px-6 py-12 transition duration-300 ease-in-out lg:min-h-[60vh] lg:flex-row'>
          <div className='w-full lg:w-1/3'>
            <div className='mt-4 w-36 lg:mt-0'>
              <Image
                layout='responsive'
                src={LogoFooter}
                alt='yubi tech logo'
              />
            </div>
          </div>
          <div className='flex flex-grow flex-col flex-wrap lg:flex-row lg:justify-between '>
            {/* small screen */}
            <div className='mt-8 text-white lg:hidden'>
              <NavItemMobile title={'Products'}>
                <div className=' pr-4 '>
                  <h1 className='mb-2 font-bold text-gray-400'>
                    Software Solution
                  </h1>
                  {softwares_detail.map((x) => (
                    <Link
                      key={x.id}
                      href={`/services/${x.localesId}`}
                      locale={locale}
                    >
                      <div className='mb-2 font-bold text-white hover:cursor-pointer hover:underline'>
                        {x.name}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className='mt-6'>
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
                          <div className='mb-2 font-bold text-white hover:cursor-pointer hover:underline'>
                            {menu.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </NavItemMobile>
              {/* <NavItemMobile title={'Hardware'}>
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
                        <div className='mb-2 font-bold text-white hover:cursor-pointer hover:underline'>
                          {menu.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                ))}
              </NavItemMobile> */}
              <NavItemMobile title={'Business Solution'}>
                {solutions.map((menu) => (
                  <Link
                    key={menu.id}
                    href={`/solutions/${menu.localesId}`}
                    locale={locale}
                  >
                    <div className='mb-2 font-bold text-white hover:cursor-pointer hover:underline'>
                      {menu.name}
                    </div>
                  </Link>
                ))}
              </NavItemMobile>
              <NavItemMobile title={'More'}>
                {more_info.map((menu) => (
                  <Link
                    key={menu.id}
                    href={`/more/${menu.localesId}`}
                    locale={locale}
                  >
                    <div className='mb-2 font-bold text-white hover:cursor-pointer hover:underline'>
                      {menu.name}
                    </div>
                  </Link>
                ))}
              </NavItemMobile>
              <div className='mt-12 w-full text-white'>
                <h1 className='mb-2 text-xl font-bold'>PT. Yubi Technology</h1>
                <ul className='space-y-4  text-opacity-75'>
                  <a
                    href='https://goo.gl/maps/WqBxgTdxCXw6P5WE6'
                    target={'__blank'}
                  >
                    <div className='flex items-center'>
                      <div>
                        <LocationMarkerIcon className='mr-4 h-6 w-6' />
                      </div>

                      <div>
                        Ruko Inkopal Blok C47, Kelapa Gading Barat, Jakarta
                        Utara 14240
                      </div>
                    </div>
                  </a>
                  <li>
                    <a href='tel:+6222452092' className='flex items-center'>
                      <div>
                        <PhoneIcon className='mr-4 h-6 w-6' />
                      </div>

                      <span>021 - 22452092/93</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className='inline-flex items-center'
                      href={`https://wa.me/+6281290049231?text=${encodeURI(
                        'Halo, saya tertarik dengan produk Yubi Technology'
                      )}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <BsWhatsapp className='h-5 w-5' />
                      <span className='ml-5'>0812 9004 9231</span>
                    </a>
                  </li>
                  <li>
                    <a
                      target='__blank'
                      href='mailto:cs@yubiteck.com'
                      className='flex items-center'
                    >
                      <MailIcon className='mr-4 h-6 w-6' />
                      <span>cs@yubiteck.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bigger Screen */}
            <div className='hidden max-w-xl p-4 text-white lg:block'>
              <h1 className='mb-2 text-xl font-bold'>Products</h1>
              <ul>
                {softwares_detail.map((x) => (
                  <li
                    className='mb-2  text-white hover:cursor-pointer hover:underline'
                    key={x.id}
                  >
                    <Link href={`/products/${x.localesId}`}>{x.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='hidden max-w-xl p-4 text-white lg:block'>
              <h1 className='mb-2 text-xl font-bold'>Hardware Solution</h1>
              <ul className='space-y-2 text-opacity-75'>
                {paths.map((menu) => (
                  <li
                    className='mb-2 text-white hover:cursor-pointer hover:underline'
                    key={menu.name}
                  >
                    <Link href={`/hardware/${menu.localesId}`}>
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='hidden max-w-xl p-4 text-white lg:block'>
              <h1 className='mb-2 text-xl font-bold'>Business Solution</h1>
              <ul className='space-y-2 text-opacity-75'>
                {solutions.map((menu) => (
                  <li
                    className='mb-2 text-white hover:cursor-pointer hover:underline'
                    key={menu.name}
                  >
                    <Link href={`/solutions/${menu.localesId}`}>
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='hidden max-w-md p-4 text-white lg:block'>
              <h1 className='mb-2 text-xl font-bold'>PT. Yubi Technology</h1>
              <ul className='space-y-4  text-opacity-75'>
                <li className='flex items-center text-sm'>
                  <a
                    className='inline-flex items-center'
                    href='https://goo.gl/maps/WqBxgTdxCXw6P5WE6'
                    target={'__blank'}
                  >
                    <LocationMarkerIcon className='mr-2 h-5 w-5' />
                    <p>
                      Ruko Inkopal Blok C47, Kelapa Gading Barat, Jakarta Utara
                      14240
                    </p>
                  </a>
                </li>
                <li className='flex items-center space-x-6'>
                  <a
                    className='inline-flex items-center'
                    href='tel:+6222452092'
                  >
                    <PhoneIcon className='mr-2 h-5 w-5' />
                    <span>021 - 22452092/93</span>
                  </a>
                  <a
                    className='inline-flex items-center'
                    href={`https://wa.me/+6281290049231?text=${encodeURI(
                      'Halo, saya tertarik dengan produk Yubi Technology'
                    )}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <BsWhatsapp className='mr-2 h-5 w-5' />
                    <span>0812 9004 9231</span>
                  </a>
                </li>
                <li className='flex items-center'>
                  <a
                    className='inline-flex items-center'
                    target='__blank'
                    href='mailto:cs@yubiteck.com'
                  >
                    <MailIcon className='mr-2 h-5 w-5' />
                    <span>cs@yubiteck.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Footer
