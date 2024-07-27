import React from 'react'
import dash1 from '../assets/Frame 828.png'
import dash2 from '../assets/image.png'
import dash3 from '../assets/Frame 6.png'
import Stack from '../assets/Stacks.png'


const ImgSection = () => {
  return (
    <div>
     <div className='w-full flex flex-col lg:flex-row my-11 gap-3'>


          <div className='card first rounded-lg lg:w-1/3 hidden lg:flex my-4 bg-gray-200' >
             <img  src={dash1} alt=""/>
          </div>



          <div className='card second w-full lg:w-1/3 relative rounded-lg my-4 bg-gray-200 overflow-hidden'>

                <img src={dash2} alt="" className="object-cover w-full h-full" />

                    <div className='absolute inset-0 p-2 flex items-end'>

                          <div className='set-card rounded-lg bg-white flex items-center w-full px-2'>
                            <div className='bg-black rounded-lg size-12 flex-shrink-0'>
                              <img className='size-9 my-1 mx-auto'  src={Stack} alt="" />
                            </div >

                            <div className='flex flex-col justify-center py-4 p-2 flex-grow'>
                              <p className='text-sm font-semibold'>Shipping Order all in a single CRM</p>
                              <p className='font-sans text-xs'>Centralize your essential data and systems.</p>
                            </div>

                          </div>

                    </div>

          </div>



          <div className='card third my-4 hidden lg:w-1/3 lg:flex rounded-lg bg-gray-200'>
             <img src={dash3} alt="" />
          </div>

    </div> 



    </div>
  )
}

export default ImgSection
