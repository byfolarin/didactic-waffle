import React from 'react'
import Logo from '../assets/Blank.png'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between'>

      <img src={Logo} alt="logo for blank" className='w-24 '/>

      <div>
        <ul className='flex gap-5'>
            <li>Product</li>
            <li>Use Case</li>
            <li>Integration</li>
            <li>Resources</li>
            <li>Pricing</li>
        </ul>
      </div>


      <div className='flex items-center gap-5 ' >
        <button>Sign In</button>
        <button className='bg-black text-white px-6 py-2 rounded-lg'>Try Starter for free</button>
      </div>
    </div>
  )
}

export default NavBar
