import React from 'react'
import dash1 from '../assets/Frame 828.png'
import dash2 from '../assets/image.png'
import dash3 from '../assets/Frame 6.png'


const ImgSection = () => {
  return (
    <div>
     <div className='w-full flex gap-3 justify-between  h-96 my-11 relative'>

          <div className='w-1/3  bg-gray-200' >
             <img className='' src={dash1} alt="" />
          </div>

          <div className='w-1/3 bg-gray-200'>
             <img className='flex align-middle justify-center' src={dash2} alt="" />
          </div>

          <div className='w-1/3 bg-gray-200'>
             <img className='w-42' src={dash3} alt="" />
          </div>

    </div> 
    </div>
  )
}

export default ImgSection
