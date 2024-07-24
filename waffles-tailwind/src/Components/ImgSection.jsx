import React from 'react'
import dash1 from '../assets/Frame 828.png'
import dash2 from '../assets/image.png'
import dash3 from '../assets/Frame 6.png'


const ImgSection = () => {
  return (
    <div>
     <div className='w-full flex gap-3 justify-between  h-96 my-11 relative'>

          <div className='card first   bg-gray-200' >
             <img  src={dash1} alt="" />
          </div>

          <div className='card second relative bg-gray-200'>

              <div className='p-2 '>

                    <div  className='set-card bg-white flex absolute align-middle bottom-0 justify-center px-2'>

                      <div className='bg-black w-12 h-12'></div>

                        <div className='flex flex-col align-bottom justify-center py-6 p-2'>
                            <p>Shipping Order all in a single CRM</p>
                            <p>Centralize your essential data and systems.</p>
                        </div>

                    </div>

                </div>

                 <img src={dash2} alt=""  class="object-contain w-128" />

          </div>

          <div className='card third  bg-gray-200'>
             <img src={dash3} alt="" />
          </div>

    </div> 
    </div>
  )
}

export default ImgSection
