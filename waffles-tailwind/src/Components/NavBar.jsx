import React from 'react'
import Logo from '../assets/Blank.png'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between'>

      <img src={Logo} alt="logo for blank" className='w-24 '/>

      <div>
        <ul className='flex gap-2'>
            <li>Product</li>
            <li>Use Case</li>
            <li>Integration</li>
            <li>Resources</li>
            <li>Pricing</li>
        </ul>
      </div>


      <div className='flex items-center' >
        <button>Sign In</button>
        <button>Try Starter for free</button>
      </div>
    </div>
  )
}

export default NavBar
