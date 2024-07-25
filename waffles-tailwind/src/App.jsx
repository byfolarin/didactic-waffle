import './App.css'
import NavBar from './Components/NavBar'
import Mesh from './assets/Mesh.png'
import H1comp from './Components/H1comp'
import ImgSection from './Components/ImgSection'
import FirstSection from './Components/FirstSection'
import SecondSection from './Components/SecondSection'
import one from './assets/Frame 87.png'



function App() {
  return (
    <div className='mx-32 '>

    <div className="flex  w-full " >
    <img src={Mesh} className='absolute top-0 bottom-0 left-0 right-0' alt="" />
    </div>
    <NavBar/>
    <H1comp/>
    <ImgSection/>
    <FirstSection />
    <SecondSection/>

    <div className='flex my-32 gap-4 '>


    
    <div>
      <img src={one} className='size-16' alt="" />
      <div className='mt-2'>
      <h2 className='font-semibold text-lg'>Build momentum </h2>
      <p>Create healthy routines and focus your team on what work should happen next.</p>
      </div>
    </div>

    <div>
    <img src={one} className='size-16' alt="" />
    <div className='mt-2'>
      <h2 className='font-semibold text-lg'>Manage incoming works</h2>
      <p>Create healthy routines and focus your team on what work should happen next.</p>
      </div>
    </div>

    <div>
    <img src={one} className='size-16' alt="" />
    <div className='mt-2'>
      <h2 className='font-semibold text-lg'>Tailored workflows</h2>
      <p>Create healthy routines and focus your team on what work should happen next.</p>
      </div>
    </div>

    <div>
      <img src={one} className='size-16' alt="" />
      <div className='mt-2'>
      <h2 className='font-semibold text-lg'>Custom views</h2>
      <p>Create healthy routines and focus your team on what work should happen next.</p>
      </div>
    </div>

    </div>




    </div>

  
           
    
  )
}

export default App
