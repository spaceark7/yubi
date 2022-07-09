import { Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment } from 'react'
import logo from '../assets/yubi_logo.png'
const LoadingScreen = ({ isLoading }) => {
  return (
    <Transition
      as={Fragment}
      show={isLoading}
      enter='transform transition-all duration-300'
      enterFrom='opacity-75 scale-80'
      enterTo='opacity-100 scale-100'
      leave='transform duration-300  transition-all ease-in-out'
      leaveFrom='opacity-100 rounded-none scale-100 '
      leaveTo='opacity-0 '
    >
      <div
        className={
          'fixed top-0 z-50 flex h-screen w-full w-full justify-center bg-[#003e73]'
        }
      >
        <div className='relative my-auto mx-auto aspect-video h-16'>
          <Image layout='fill' objectFit='contain' src={logo} alt='yubi logo' />
        </div>
      </div>
    </Transition>
  )
}

export default LoadingScreen
