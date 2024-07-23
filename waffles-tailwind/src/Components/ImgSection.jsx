import React from 'react'
import dash1 from '../assets/Frame 828.png'

const ImgSection = () => {
  return (
    <div>
     <div className='w-full flex gap-3 justify-between  h-96 my-11 relative'>
          <div className='w-1/3 h-96  bg-gray-200' >
             <img className='flex align-bottom justify-start' src={dash1} alt="" />
          </div>
          <div className='w-1/3 h-96  bg-gray-200'></div>
          <div className='w-1/3 h-96  bg-gray-200'></div>
    </div> 
    </div>
  )
}

export default ImgSection
