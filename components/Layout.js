const Layout = ({ children }) => {
  return (
    <div className=' mx-auto h-full p-4 sm:px-8 md:max-w-screen-md md:px-4 md:py-2 lg:max-w-screen-lg lg:py-8 2xl:max-w-screen-xl 2xl:px-12 '>
      {children}
    </div>
  )
}

export default Layout
