import { useRouter } from 'next/router'
import React, { useState } from 'react'

const NavLangMobile = ({ lang }) => {
  const router = useRouter()
  const { locale, locales } = router

  const [selected, setSelected] = useState(locale)
  return (
    <div className='flex items-center justify-between text-lg text-slate-500'>
      <span className='font-bold'>Language</span>
      <div className='mr-2 flex space-x-8 font-bold'>
        {locales.map((item, index) => (
          <span
            onClick={() => {
              setSelected(item)
            }}
            key={index}
            className={`${
              selected === item ? 'text-primaryBrand' : 'text-slate-500'
            } cursor-pointer`}
          >
            {item.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  )
}

export default NavLangMobile
