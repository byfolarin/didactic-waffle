import React from 'react'
import HiDef from '../assets/Group 5791.png'

const FifthSection = () => {
  return (
    <div>
        <section>
            <div className='mt-24'>

                <div className='flex gap-3 items-center'>
                    <div className='w-6 h-2 rounded bg-black'></div>
                    <p>Project and long term planning</p>
                </div>

                <h2 className='font-sans font-semibold text-5xl w-3/5 py-6'>Made for Infrastructure<br/>Development</h2>
                <p className='w-full  lg:w-2/4'>Align your team around a unified product timeline. Plan, manage, and track all product initiatives with Linear’s visual planning tools</p>
            </div>

            <div className='grid lg:grid-cols-3 mt-6 gap-2'>

                <div className='w-full h-full border rounded-lg border-gray-200 py-4 px-6'>
                    <h2 className='font-semibold'>Build momentum with Cycles</h2>
                    <p>Create healthy routines and focus your team on what work should happen next.</p>

                    <div className='bg-slate-200 mt-4 w-full h-64'></div>
                </div>

                <div className='w-full h-full border rounded-lg  border-gray-200 py-4 px-6'>
                    <h2 className='font-semibold'>Build momentum with Cycles</h2>
                    <p>Create healthy routines and focus your team on what work should happen next.</p>

                    <div className='bg-slate-200 mt-4 w-full h-64'></div>
                </div>

                <div className='w-full h-full border rounded-lg border-gray-200 py-4 px-6'>
                    <h2 className='font-semibold'>Build momentum with Cycles</h2>
                    <p>Create healthy routines and focus your team on what work should happen next.</p>

                    <div className='bg-slate-200 mt-4 w-full h-64'></div>
                </div>

                

                </div>

                
                <div className='mt-24'>

                <div className='flex gap-3 items-center'>
                <div className='w-6 h-2 rounded bg-black'></div>
                <p>Pricing</p>
                </div>

                <h2 className='font-sans font-semibold text-5xl py-6'>Works where your team already is</h2>
                <p className='w-3/4'>Align your team around a unified product timeline. Plan, manage, and track all product initiatives with Blank’s visual planning tools</p>
                </div>

                <button className='py-2 px-6 my-6 rounded-lg text-white bg-black'>Request a trial</button>


</section>
    </div>
  )
}

export default FifthSection
