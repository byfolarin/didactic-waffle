import React from 'react'
import Logo from '../assets/Blank.png'
import Dropdown from './Dropdown'

const NavBar = () => {
  return (
    <div className='hidden sm:hidden md:hidden lg:flex  items-center justify-between relative'>

      <img src={Logo} alt="logo for blank" className='w-20 '/>

      <div>
        <ul className='flex gap-5 text-gray-700 font-normal hover:text-black '>
            <li className='cursor-pointer'>Product</li>
            <li className='cursor-pointer'>Use Case</li>
            <li className='cursor-pointer'>Integration</li>
            <li className='cursor-pointer'>Resources</li>
            <li className='cursor-pointer'>Pricing</li>
        </ul>
      </div>


      <div className='flex items-center gap-5 ' >
        <button>Sign In</button>
        <button className='bg-black text-white px-4 py-2 rounded-lg'>Try Starter for free</button>
      </div>
    </div>
  )
}

export default NavBar
