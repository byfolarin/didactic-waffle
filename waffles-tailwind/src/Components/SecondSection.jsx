import React from 'react'
import HiDef from '../assets/Group 5791.png'

const SecondSection = () => {
  return (
    <div>
       <section>
            <div className='mt-24 flex-col lg:flex-row items-center justify-center py-4'>    

                <h2 className='font-sans font-semibold text-5xl w-3/5 py-6'>Streamlining Process, Easily</h2>
                
                <p className='w-full lg:w-2/4'>Align your team around a unified product timeline. Plan, manage, and track all product initiatives with Linear’s visual planning tools</p>
            </div>

            <div className='w-full'>
              <div className='relative'>
              <div className='bg-gradient-to-t left-0 top-0 absolute from-[#f6f6f690] to-transparent w-full h-full'></div>
              <img src={HiDef} alt=""  className='w-128'/>
              </div>
            </div>
        </section>
    </div>
  )
}

export default SecondSection
