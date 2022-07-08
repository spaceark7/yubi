import React from 'react'

const NavLangMobile = ({ lang }) => {
  const [selected, setSelected] = React.useState(lang[0])
  return (
    <div className='flex items-center justify-between text-lg text-slate-500'>
      <span className='font-bold'>Language</span>{' '}
      <div className='mr-2 flex space-x-8 font-bold'>
        {' '}
        {lang.map((item, index) => (
          <span
            onClick={() => {
              setSelected(lang[index])
            }}
            key={index}
            className={`${
              selected.code === item.code
                ? 'text-primaryBrand'
                : 'text-slate-500'
            } cursor-pointer`}
          >
            {item.code}
          </span>
        ))}
      </div>
    </div>
  )
}

export default NavLangMobile
