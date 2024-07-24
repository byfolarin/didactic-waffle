import React from 'react'
import dash1 from '../assets/Frame 828.png'
import dash2 from '../assets/image.png'
import dash3 from '../assets/Frame 6.png'


const ImgSection = () => {
  return (
    <div>
     <div className='w-full flex gap-3 justify-between  h-96 my-11 relative'>

          <div className='card first rounded-lg  bg-gray-200' >
             <img  src={dash1} alt="" />
          </div>

          <div className='card second relative rounded-lg bg-gray-200 w-full h-full overflow-hidden'>

          <img src={dash2} alt="" className="object-cover w-full h-full" />

          <div className='absolute inset-0 p-2 flex items-end'>
            <div className='set-card rounded-lg bg-white flex items-center w-full px-5'>
              <div className='bg-black rounded-lg size-12 flex-shrink-0'></div>
              <div className='flex flex-col justify-center py-6 p-2 flex-grow'>
                <p className='text-sm font-semibold'>Shipping Order all in a single CRM</p>
                <p className='font-sans text-xs'>Centralize your essential data and systems.</p>
              </div>
            </div>
          </div>

          </div>

          <div className='card third  rounded-lg bg-gray-200'>
             <img src={dash3} alt="" />
          </div>

    </div> 
    </div>
  )
}

export default ImgSection
