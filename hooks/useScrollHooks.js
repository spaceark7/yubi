import React, { useEffect } from 'react'
const useScrollHooks = () => {
  const [scroll, setScroll] = React.useState(0)

  useEffect(() => {
    const updateScrollPosition = () => {
      setScroll(window.pageYOffset)
    }
    window.addEventListener('scroll', updateScrollPosition)
    updateScrollPosition()

    return () => {
      window.removeEventListener('scroll', updateScrollPosition)
    }
  }, [])
  return scroll
}

const classNames = (...className) => {
  return className.filter(Boolean).join(' ')
}

export { useScrollHooks, classNames }
