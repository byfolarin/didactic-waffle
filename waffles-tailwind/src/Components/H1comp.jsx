import React from 'react'
import Support from '../assets/Frame 110.png'

const H1comp = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
    <div className='text-left py-12 sm:py-16 md:py-20 lg:py-24 lg:text-center relative'>
      <h1 className='text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight'>
        The core infrastructure <br className='hidden sm:inline' /> enabling your operations
      </h1>
      <p className='py-4 sm:py-6 md:py-8 text-gray-700 text-base sm:text-lg max-w-3xl mx-auto'>
        Effortlessly create custom CRMs, internal tools, customer portals and other business applications for your team. Get started in minutes, no coding necessary.
      </p>
    </div>
    <div className='flex justify-center'>
      <img src={Support} alt="logo for blank" className='w-[1260px] mx-auto' />
    </div>
  </div>
  )
}

export default H1comp
