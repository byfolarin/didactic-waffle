import React, { useState } from 'react'
import Logo from '../assets/Blank.png'
import Dropdown from './Dropdown'

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='hidden sm:hidden md:hidden lg:flex items-center justify-between relative'>
      <img src={Logo} alt="logo for blank" className='w-20 '/>

      <div>
        <ul className='flex gap-5 text-gray-700 font-normal'>
          <li className='cursor-pointer text-gray-700 font-normal hover:text-black'>Product</li>

          <li 
            className='cursor-pointer text-gray-700 font-normal hover:text-black relative'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Use Case
            {isHovered && (
              <div className="absolute z-50 top-full left-2/2  mt-2 mx-auto w-screen">
                <Dropdown />
              </div>
            )}
          </li>
          
          <li className='cursor-pointer text-gray-700 font-normal hover:text-black'>Integration</li>
          <li className='cursor-pointer text-gray-700 font-normal hover:text-black'>Resources</li>
          <li className='cursor-pointer text-gray-700 font-normal hover:text-black'>Pricing</li>
        </ul>
      </div>

      <div className='flex items-center gap-5'>
        <button>Sign In</button>
        <button className='bg-black text-white px-4 py-2 rounded-lg'>Try Starter for free</button>
      </div>
    </div>
  )
}

export default NavBar