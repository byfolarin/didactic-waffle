import React from 'react'
import Stack from '../assets/Stacks.png'
import Stack1 from '../assets/Stack1.png'
import Stack2 from '../assets/Stack2.png'
import Stack3 from '../assets/Stack3.png'
import Stack4 from '../assets/Stack4.png'
import Stack5 from '../assets/Stack5.png'
import Stack6 from '../assets/Stack6.png'
import Stack7 from '../assets/Stack7.png'
import Stack8 from '../assets/Stack8.png'

const Dropdown = () => {
  return (
    <>
       <div className=' w-full flex flex-col lg:flex-row items-center justify-between  px-9 py-7 rounded-2xl' id='border-dropdown'>

        <div >
               <div className='flex gap-2 py-4 '>
                        <div className="div-icons w-12 h-12 rounded-lg bg-black">
                        <img className='size-7 my-2 mx-auto'  src={Stack} alt="" />
                        </div>

                        <div>
                        <div className='font-medium'>Customizable CRM</div>
                        <p className='text-gray-700'>Centralize your essential data <br /> and systems.</p>
                        </div>
                </div>

                    <div className='flex gap-2 py-4 '>

                        <div className="div-icons w-12 h-12 rounded-lg bg-black">
                        <img className='size-7 my-2 mx-auto'  src={Stack1} alt="" />
                        </div>

                        <div>
                        <div className='font-medium'>Customer Portal</div>
                        <p className=''>Delight your customers with self <br/> service experience..</p>
                        </div>
                    </div>

                    <div className='flex gap-2 py-4 '>

                        <div className="div-icons w-12 h-12 rounded-lg bg-black">
                        <img className='size-7 my-2 mx-auto'  src={Stack2} alt="" />
                        </div>

                        <div>
                        <div className='font-medium'>Streamlining processes</div>
                        <p className='text-gray-700'>Unleash the power of organized <br/> knowledge.</p>
                        </div>
                    </div>
        </div>


<div>
  <div className='flex gap-2 py-4 '>
          <div className="div-icons w-12 h-12 rounded-lg bg-black">
             <img className='w-8 h-7 my-2 mx-auto'  src={Stack3} alt="" />
          </div>
          <div>
          <div className='font-medium'>Unified Data Management</div>
          <p className='text-gray-700'>The foundational infrastructure <br/> enabling your operations.</p>
          </div>
    </div>

    <div className='flex gap-2 py-4 '>
          <div className="div-icons w-12 h-12 rounded-lg bg-black">
             <img className='w-9 h-5 my-3 mx-auto'  src={Stack4} alt="" />
          </div>
          <div>
          <div className='font-medium'>Process Tracker</div>
          <p className=''>Tickets, requests, applications, <br/> done.</p>
          </div>
    </div>

    <div className='flex gap-2 py-4 '>
          <div className="div-icons w-12 h-12 rounded-lg bg-black">
             <img className='w-6 h-7 my-2 mx-auto'  src={Stack5} alt="" />
          </div>
          <div>
          <div className='font-medium'>Partner Portal</div>
          <p className='text-gray-700'>Upgrade your collaboration with <br/> partners, prospects and vendor.</p>
          </div>
    </div>
</div>


<div>
  <div className='flex gap-2 py-4 '>
          <div className="div-icons w-12 h-12 rounded-lg bg-black">
                   <img className='w-8 h-7 my-2 mx-auto'  src={Stack6} alt="" />
          </div>
          <div>
          <div className='font-medium'>Integrations and Automations</div>
          <p className='text-gray-700'>API calls and endpoints with a <br/> slick user experience.</p>
          </div>
    </div>

    <div className='flex gap-2 py-4 '>
          <div className="div-icons w-12 h-12 rounded-lg bg-black">
             <img className='w-9 h-6 my-3 mx-auto'  src={Stack7} alt="" />
          </div>
          <div>
          <div className='font-medium'>Database</div>
          <p className=''>Central collection where all <br/> infromation meets as a</p>
          </div>
    </div>

    <div className='flex gap-2 py-4 '>
          <div className="div-icons w-12 h-12 rounded-lg bg-black">
                  <img className='size-7 my-2 mx-auto'  src={Stack8} alt="" />
          </div>
          <div>
          <div className='font-medium'>Collaboration</div>
          <p className='text-gray-700'>Collaboration with merchants, <br/> vendor and prospective B2C.</p>
          </div>
    </div>
</div>

</div>
    </>
  )
}

export default Dropdown
