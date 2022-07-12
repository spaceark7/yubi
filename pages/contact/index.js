import Head from 'next/head'
import HeroSection from '../../components/HeroSection'
import contact_data from '../../data/contact'
import customers from '../../data/customers'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '../../components/Layout'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'

const ContactPage = ({ data }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <Head>
        <title>{`Yubi | ${data.name}`}</title>
        <meta name='description' content={`${data.name}  ${data.brand}  `} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeroSection data={data.hero_section} customers={customers} />

      <div className='bg-slate-100'>
        <Layout>
          <div className='grid min-h-[70vh] w-full grid-cols-2 gap-x-6 xl:px-12 xl:py-8'>
            <div className='mt-4 space-y-6 pr-4'>
              <h1 className='text-4xl font-bold'>
                Let&apos;s talk and tell us what you need!
              </h1>
              <h3 className='text-lg font-light'>
                We&apos;ll response to you ASAP! you can ask us anything or
                requesting demo for our software.
              </h3>
              <h3 className='text-lg font-light'>
                We wants to inform that our live support available at
              </h3>
              <div className='text-lg font-light'>
                <h3 className='font-semibold'>Monday - Saturday</h3>
                <h3>9 a.m - 5 p.m</h3>
              </div>
              <div className='text-lg font-light'>
                <h3>Or you may call us via telephone</h3>
                <a className='font-semibold' href='tel:+622122452092'>
                  021-22452092
                </a>
              </div>
            </div>
            <div className='rounded-xl  px-8 py-5 pb-12 shadow-lg'>
              <Tab.Group>
                <Tab.List>
                  <Tab as={Fragment}>
                    <button className='btn'>Ask Question</button>
                  </Tab>
                  <Tab as={Fragment}>
                    <button className='btn'>Request Demo</button>
                  </Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>
                    <form onSubmit={handleSubmit}>
                      <div className='space-y-6'>
                        <label className='block'>
                          <span className='block text-sm font-medium text-slate-700 after:ml-0.5 '>
                            Your name
                          </span>
                          <input
                            autoComplete='name'
                            type='text'
                            name='name'
                            className='mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                            placeholder='Enter your full name ...'
                          />
                        </label>
                        <label className='block'>
                          <span className='block text-sm font-medium text-slate-700 after:ml-0.5 '>
                            Company name
                          </span>
                          <input
                            autoComplete='company'
                            type='text'
                            name='name'
                            className='mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                            placeholder='Enter your company name ...'
                          />
                        </label>
                        <label className='block'>
                          <span className='block text-sm font-medium text-slate-700 after:ml-0.5 '>
                            Email
                          </span>
                          <input
                            type='email'
                            name='email'
                            className='mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                            placeholder='you@example.com'
                          />
                        </label>
                        <label className='block'>
                          <span className='block text-sm font-medium text-slate-700 after:ml-0.5 '>
                            Phone number
                          </span>
                          <div className='flex items-center'>
                            <div className='rounded-l-md bg-slate-200 px-3 py-2 text-sm'>
                              +62
                            </div>
                            <input
                              type='tel'
                              name='phone'
                              className='mt-1 block w-full rounded-r-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                              placeholder='857 2255 8899'
                            />
                          </div>
                          <p className='text-right text-xs text-pink-700'>
                            Please do not enter 0 (zero) digit
                          </p>
                        </label>
                        <label className='block'>
                          <span className='block text-sm font-medium text-slate-700 after:ml-0.5 '>
                            Message
                          </span>
                          <textarea
                            rows={5}
                            maxLength={250}
                            name='message'
                            className='mt-1 block w-full resize-none rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                            placeholder='Enter your message ...'
                          />
                          <p className='text-right text-xs text-slate-500'>
                            Max. 250 characters
                          </p>
                        </label>
                      </div>
                      <button className='btn mt-6 block w-full rounded-md bg-primaryBrand text-center'>
                        Send Message
                      </button>
                    </form>
                  </Tab.Panel>
                  <Tab.Panel>
                    <form onSubmit={handleSubmit}>
                      <div className='space-y-6'>
                        <label className='block'>
                          <span className='block text-sm font-medium text-slate-700 after:ml-0.5 '>
                            Your name
                          </span>
                          <input
                            autoComplete='name'
                            type='text'
                            name='name'
                            className='mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                            placeholder='Enter your full name ...'
                          />
                        </label>
                        <label className='block'>
                          <span className='block text-sm font-medium text-slate-700 after:ml-0.5 '>
                            Company name
                          </span>
                          <input
                            autoComplete='company'
                            type='text'
                            name='name'
                            className='mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                            placeholder='Enter your company name ...'
                          />
                        </label>
                        <label className='block'>
                          <span className='block text-sm font-medium text-slate-700 after:ml-0.5 '>
                            Email
                          </span>
                          <input
                            type='email'
                            name='email'
                            className='mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                            placeholder='you@example.com'
                          />
                        </label>
                        <label className='block'>
                          <span className='block text-sm font-medium text-slate-700 after:ml-0.5 '>
                            Phone number
                          </span>
                          <div className='flex items-center'>
                            <div className='rounded-l-md bg-slate-200 px-3 py-2 text-sm'>
                              +62
                            </div>
                            <input
                              type='tel'
                              name='phone'
                              className='mt-1 block w-full rounded-r-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                              placeholder='857 2255 8899'
                            />
                          </div>
                          <p className='text-right text-xs text-pink-700'>
                            Please do not enter 0 (zero) digit
                          </p>
                        </label>
                        <label className='block'>
                          <span className='block text-sm font-medium text-slate-700 after:ml-0.5 '>
                            Message
                          </span>
                          <textarea
                            rows={5}
                            maxLength={250}
                            name='message'
                            className='mt-1 block w-full resize-none rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                            placeholder='Enter your message ...'
                          />
                          <p className='text-right text-xs text-slate-500'>
                            Max. 250 characters
                          </p>
                        </label>
                      </div>
                      <button className='btn mt-6 block w-full rounded-md bg-primaryBrand text-center'>
                        Send Message
                      </button>
                    </form>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
              b
            </div>
          </div>
        </Layout>
      </div>
    </>
  )
}

export const getStaticProps = async ({ params, locale }) => {
  const data = contact_data
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['nav', 'common', 'home'])),
    },
  }
}

export default ContactPage
