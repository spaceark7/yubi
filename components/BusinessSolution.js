import { ArrowRightIcon } from '@heroicons/react/outline'
import Layout from './Layout'
import { useTranslation } from 'next-i18next'
import { solutions } from '../data/businessSolutions'
import Link from 'next/link'

const BusinessSolution = () => {
  const { t } = useTranslation('home', { keyPrefix: 'business-solution' })
  return (
    <section className='relative min-h-[90vh] overflow-hidden bg-slate-200 pt-16 pb-20 lg:py-24'>
      <Layout>
        <div className='px-4 lg:px-12'>
          <div className='max-w-xs'>
            <h1 className='text-2xl font-bold'>{t('title')}</h1>
          </div>
          <div className='mt-12'>
            <ul className='select-none space-y-4'>
              {solutions.map((menu) => (
                <li key={menu.id}>
                  <Link href={`/solutions/${menu.localesId}`}>
                    <div className='flex items-center hover:cursor-pointer hover:underline'>
                      <ArrowRightIcon className='mr-2 h-8 w-8' />
                      <span className='text-3xl font-bold'> {menu.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>

      <div className='absolute -right-6 bottom-0 hidden h-[40vh] w-screen bg-business-solution bg-contain  bg-bottom bg-no-repeat opacity-95 sm:block  md:-right-20 md:h-[60vh] md:w-[60vh] lg:right-1 lg:h-[80vh] lg:w-[80vh]'></div>
    </section>
  )
}

export default BusinessSolution
