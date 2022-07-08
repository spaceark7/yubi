import more_info from '../../data/moreInfo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import HeroSection from '../../components/HeroSection'
import customers from '../../data/customers'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

const MoreName = ({ data }) => {
  const router = useRouter()

  return (
    <>
      <HeroSection data={data.hero_section} customers={customers} />
      {router.query.MoreName === 'faq' && (
        <div>
          <Layout>
            <h1 className='text-2xl font-bold text-primaryBrand'>
              Common Question
            </h1>

            <div className='mt-4'>
              {data.faqs?.map((faq) => (
                <div className='mb-8 max-w-screen-md py-2 pr-4' key={faq.id}>
                  <h1 className='text-xl font-bold'>{faq.question}</h1>
                  <p className='text-medium text-lg'>{faq.answer}</p>
                </div>
              ))}
            </div>
          </Layout>
        </div>
      )}
    </>
  )
}

export const getStaticPaths = async ({ locales }) => {
  let paths = []
  more_info.forEach((info) => {
    for (const locale of locales) {
      paths.push({
        params: { MoreName: info.localesId },
        locale: locale,
      })
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params, locale }) => {
  const { MoreName } = params
  const data = more_info.find((item) => item.localesId === MoreName)

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['nav', 'common', 'home'])),
    },
  }
}

export default MoreName
