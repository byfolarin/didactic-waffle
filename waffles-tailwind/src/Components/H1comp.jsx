import React from 'react'
import Support from '../assets/Frame 110.png'

const H1comp = () => {
  return (
    <div className='container mx-auto'>
         <div className='text-center py-24 relative '>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight'>The core infrastructure <br /> enabling your operations</h1>
          <p className='py-8 text-gray-700 text-lg' >Effortlessly create custom CRMs, internal tools, customer portals <br />
          and other business applications for your team.  Get started in minutes, no coding necessary.</p>
      </div>
      <img src={Support} alt="logo for blank" className='w-120'/>
    </div>
  )
}

export default H1comp
