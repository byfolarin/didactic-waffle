import React from 'react'
import HiDef from '../assets/Group 5791.jpg'

const FirstSection = () => {
  return (
    <div>
        <section>


                <div className='my-16 '>

                    <div className='flex gap-3 items-center'>
                    <div className='w-6 h-2 rounded bg-black'></div>
                    <p>Project and long term planning</p>
                    </div>

                <h2 className='font-sans font-semibold text-5xl w-3/5 py-6'>Made for Infrastructure<br/>Development</h2>
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

export default FirstSection
