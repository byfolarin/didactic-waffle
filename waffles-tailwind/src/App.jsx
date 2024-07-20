import './App.css'
import NavBar from './Components/NavBar'
import Support from './assets/Frame 110.png'

function App() {
  return (
    <div className='mx-32 '>
     <NavBar />


            <div className='border-dropdown flex items-center justify-between  px-9 py-7 rounded-2xl' id='border-dropdown'>

            <div >
           
              <div className='flex gap-2 py-4 '>
                      <div className="div-icons w-12 h-12 rounded-lg bg-black"></div>
                      <div>
                      <div className='font-medium'>Customizable CRM</div>
                      <p className='text-gray-700'>Centralize your essential data <br /> and systems.</p>
                      </div>
                </div>

                <div className='flex gap-2 py-4 '>
                      <div className="div-icons w-12 h-12 rounded-lg bg-black"></div>
                      <div>
                      <div className='font-medium'>Customer Portal</div>
                      <p className=''>Delight your customers with self <br/> service experience..</p>
                      </div>
                </div>

                <div className='flex gap-2 py-4 '>
                      <div className="div-icons w-12 h-12 rounded-lg bg-black"></div>
                      <div>
                      <div className='font-medium'>Streamlining processes</div>
                      <p className='text-gray-700'>Unleash the power of organized <br/> knowledge.</p>
                      </div>
                </div>
            </div>


            <div>
              <div className='flex gap-2 py-4 '>
                      <div className="div-icons w-12 h-12 rounded-lg bg-black"></div>
                      <div>
                      <div className='font-medium'>Customizable CRM</div>
                      <p className='text-gray-700'>Centralize your essential data <br /> and systems.</p>
                      </div>
                </div>

                <div className='flex gap-2 py-4 '>
                      <div className="div-icons w-12 h-12 rounded-lg bg-black"></div>
                      <div>
                      <div className='font-medium'>Customer Portal</div>
                      <p className=''>Delight your customers with self <br/> service experience..</p>
                      </div>
                </div>

                <div className='flex gap-2 py-4 '>
                      <div className="div-icons w-12 h-12 rounded-lg bg-black"></div>
                      <div>
                      <div className='font-medium'>Streamlining processes</div>
                      <p className='text-gray-700'>Unleash the power of organized <br/> knowledge.</p>
                      </div>
                </div>
            </div>


            <div>
              <div className='flex gap-2 py-4 '>
                      <div className="div-icons w-12 h-12 rounded-lg bg-black"></div>
                      <div>
                      <div className='font-medium'>Customizable CRM</div>
                      <p className='text-gray-700'>Centralize your essential data <br /> and systems.</p>
                      </div>
                </div>

                <div className='flex gap-2 py-4 '>
                      <div className="div-icons w-12 h-12 rounded-lg bg-black"></div>
                      <div>
                      <div className='font-medium'>Customer Portal</div>
                      <p className=''>Delight your customers with self <br/> service experience..</p>
                      </div>
                </div>

                <div className='flex gap-2 py-4 '>
                      <div className="div-icons w-12 h-12 rounded-lg bg-black"></div>
                      <div>
                      <div className='font-medium'>Streamlining processes</div>
                      <p className='text-gray-700'>Unleash the power of organized <br/> knowledge.</p>
                      </div>
                </div>
            </div>

            </div>

            

      <div className='text-center py-24'>
      <h1 className='text-7xl font-semibold tracking-tight ' >The core infrastructure <br /> enabling your operations</h1>
      <p className='py-8 text-gray-700 text-lg' >Effortlessly create custom CRMs, internal tools, customer portals <br />
       and other business applications for your team.  Get started in minutes, no coding necessary.</p>
      </div>
      <img src={Support} alt="logo for blank" className='w-120 '/>






      </div>
  )
}

export default App
