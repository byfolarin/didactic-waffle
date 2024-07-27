import React, { useState } from 'react'
import Logo from '../assets/Blank.png'
import Dropdown from './Dropdown'

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='hidden sm:hidden md:hidden lg:block relative'>
      <div className='flex items-center justify-between'>
        <img src={Logo} alt="logo for blank" className='w-20'/>

        <div>
          <ul className='flex gap-5 text-gray-700 font-normal'>
            <li className='cursor-pointer text-gray-700 font-normal hover:text-black'>Product</li>
            <li 
              className='cursor-pointer text-gray-700 font-normal hover:text-black'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Use Case
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

      {isHovered && (
        <div className="absolute left-0 right-0 mt-2 flex justify-center">
          <div className="w-full z-10 max-w-7xl">
            <Dropdown />
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar