import Head from 'next/head'
import HeroSection from '../../components/HeroSection'
import contact_data from '../../data/contact'
import customers from '../../data/customers'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '../../components/Layout'
import { Dialog, Listbox, Tab, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { software, softwares_detail } from '../../data/software'
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline'
import axios from 'axios'

const ContactPage = ({ data, softwares }) => {
  const [selected, setSelected] = useState([softwares[0]])
  const [is_question, setIsQuestion] = useState('question')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [question, setQuestion] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const token = await captchaRef.current.getValue()
    // const { data } = await axios.post('/api/verifyCaptcha', { token })

    const body = {
      name,
      company,
      email,
      phone,
      message,
      question,
      software: selected.map((item) => item.name).join(', '),
    }
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    if (!name || !company || !email || !phone || !question) {
      return
    } else {
      const { data } = await axios.post(
        '/api/contact',
        {
          type: is_question,
          name,
          company,
          email,
          phone,
          message,
          question,
          software: selected.map((item) => item.name).join(', '),
        },
        config
      )
      openModal()
      setName('')
      setCompany('')
      setEmail('')
      setPhone('')
      setMessage('')
      setQuestion('')
      setSelected([softwares[0]])
    }
  }

  const handleSubmitDemo = async (e) => {
    e.preventDefault()
    const body = {
      name,
      company,
      email,
      phone,
      message,
      question,
      software: selected.map((item) => item.name).join(', '),
    }
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    if (!name || !company || !email || !phone || !software) {
      return
    } else {
      const { data } = await axios.post(
        '/api/contact',
        {
          type: is_question,
          name,
          company,
          email,
          phone,
          message,
          question,
          software: selected.map((item) => item.name).join(', '),
        },
        config
      )
      openModal()
      setName('')
      setCompany('')
      setEmail('')
      setPhone('')
      setMessage('')
      setQuestion('')
      setSelected([softwares[0]])
    }

    // const token = await captchaRef.current.getValue()
    // const { data } = await axios.post('/api/verifyCaptcha', { token })
  }

  return (
    <>
      <Head>
        <title>{`Yubi | ${data.name}`}</title>
        <meta name='description' content={`${data.name}  ${data.brand}  `} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-50' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    {`Your ${is_question} is successfully sent!`}
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      We&apos;ll inform you via email or phone very soon.
                      Don&apos;t forget to check your inbox or spam folder.
                    </p>
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      Okay, Thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <HeroSection data={data.hero_section} customers={customers} />

      <section id='request' className='bg-slate-100 py-16'>
        <Layout>
          <div className='grid min-h-[70vh] w-full grid-flow-row gap-y-8 lg:grid-cols-2 lg:gap-x-6 xl:px-12 xl:py-8'>
            <div className='mt-4 space-y-6 xl:pr-4 2xl:pr-8'>
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
            <div className='rounded-xl bg-white px-8 py-5 pb-12 '>
              <Tab.Group
                onChange={(value) => {
                  if (value === 0) {
                    setIsQuestion('question')
                  } else {
                    setIsQuestion('request')
                  }
                  console.log(
                    'selected value & type: ',
                    value,
                    ' ',
                    is_question
                  )
                }}
              >
                <Tab.List
                  className={'mb-4 rounded-xl bg-slate-200 p-2 md:w-fit'}
                >
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`btn w-full rounded-lg px-4 py-2 text-center md:w-fit ${
                          selected
                            ? 'bg-primaryBrand/70 font-bold text-white'
                            : 'text-slate-600'
                        }`}
                      >
                        Ask Question
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`btn w-full rounded-lg px-4 py-2 text-center md:w-fit ${
                          selected
                            ? 'bg-primaryBrand/70 font-bold text-white'
                            : 'text-slate-600'
                        }`}
                      >
                        Request Demo
                      </button>
                    )}
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                            placeholder='Enter your full name ...'
                          />
                        </label>
                        <label className='block'>
                          <span className='block text-sm font-medium text-slate-700 after:ml-0.5 '>
                            Company name
                          </span>
                          <input
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              type='tel'
                              name='phone'
                              className='mt-1 block w-full rounded-r-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                              placeholder='857 2255 8899'
                            />
                          </div>
                        </label>
                        <label className='block'>
                          <span className='block text-sm font-medium text-slate-700 after:ml-0.5 '>
                            Your Question
                          </span>
                          <textarea
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
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

                      <button
                        disabled={!name || !email || !phone || !question}
                        className='btn mt-6 block w-full rounded-md bg-primaryBrand text-center transition duration-200 ease-in-out hover:bg-primaryBrand/80 active:scale-95 disabled:cursor-not-allowed disabled:bg-slate-400'
                      >
                        Send Message
                      </button>
                    </form>
                  </Tab.Panel>
                  <Tab.Panel>
                    <form onSubmit={handleSubmitDemo}>
                      <div className='space-y-6'>
                        <Listbox
                          value={selected}
                          onChange={setSelected}
                          multiple
                        >
                          <div className='relative mt-1'>
                            <Listbox.Label
                              className={
                                'text-sm font-medium text-slate-700 after:ml-0.5'
                              }
                            >
                              Choose for demo
                            </Listbox.Label>
                            <Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                              <span className='block truncate'>
                                {selected.map((item) => item.name).join(', ')}
                              </span>
                              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                                <SelectorIcon
                                  className='h-5 w-5 text-gray-400'
                                  aria-hidden='true'
                                />
                              </span>
                            </Listbox.Button>
                            <Transition
                              as={Fragment}
                              leave='transition ease-in duration-100'
                              leaveFrom='opacity-100'
                              leaveTo='opacity-0'
                            >
                              <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                                {softwares
                                  .filter((item) => item.name !== 'P-ERP')
                                  .map((software) => (
                                    <Listbox.Option
                                      key={software.id}
                                      className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                          active
                                            ? 'bg-primaryBrand text-white'
                                            : 'text-gray-900'
                                        }`
                                      }
                                      value={software}
                                    >
                                      {({ selected }) => (
                                        <>
                                          <span
                                            className={`block truncate ${
                                              selected
                                                ? 'font-medium'
                                                : 'font-normal'
                                            }`}
                                          >
                                            {software.name}
                                          </span>
                                          {selected ? (
                                            <span
                                              className={`absolute inset-y-0 left-0 flex items-center pl-3 text-tertiaryBrand`}
                                            >
                                              <CheckIcon
                                                className='h-5 w-5'
                                                aria-hidden='true'
                                              />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </Listbox>

                        <label className='block'>
                          <span className='block text-sm font-medium text-slate-700 after:ml-0.5 '>
                            Your name
                          </span>
                          <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              type='tel'
                              name='phone'
                              className='mt-1 block w-full rounded-r-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                              placeholder='857 2255 8899'
                            />
                          </div>
                        </label>
                        <label className='block'>
                          <span className='block text-sm font-medium text-slate-700 after:ml-0.5 '>
                            Message
                          </span>
                          <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
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

                      <button
                        disabled={
                          !name || !email || !phone || selected.length === 0
                        }
                        className='btn mt-6 block w-full rounded-md bg-primaryBrand text-center transition duration-200 ease-in-out hover:bg-primaryBrand/80 active:scale-95 disabled:cursor-not-allowed disabled:bg-slate-400'
                      >
                        Send Message
                      </button>
                    </form>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </Layout>
      </section>
    </>
  )
}

export const getStaticProps = async ({ params, locale }) => {
  const softwares = softwares_detail.map((item) => item)

  const data = contact_data
  return {
    props: {
      data,
      softwares,
      ...(await serverSideTranslations(locale, ['nav', 'common', 'home'])),
    },
  }
}

export default ContactPage
