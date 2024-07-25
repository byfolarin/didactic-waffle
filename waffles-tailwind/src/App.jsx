import './App.css'
import NavBar from './Components/NavBar'
import Mesh from './assets/Mesh.png'
import H1comp from './Components/H1comp'
import ImgSection from './Components/ImgSection'
import HiDef from './assets/Group 5791.png'



function App() {
  return (
    <div className='mx-32 '>

    <div className="flex  w-full " >
    <img src={Mesh} className='absolute top-0 bottom-0 left-0 right-0' alt="" />
    </div>
    <NavBar />
    <H1comp />
    <ImgSection/>


    <div className='mt-24'>
      <h2 className='font-sans font-semibold text-5xl w-3/5 py-6'>Made for Infrastructure<br/>Development</h2>
      <p className='w-2/4'>Align your team around a unified product timeline. Plan, manage, and track all product initiatives with Linear’s visual planning tools</p>
    </div>

    <div className='relative w-full'>
    <div className='size-24  w-full top-0 right-0 border-red-600'>
      <div className='bg-gradient-to-t left-0 top-0 absolute from-[#f6f6f690] to-transparent w-full h-full border-red-600'></div>
      <img src={HiDef} alt=""  className='w-128 bottom-24 '/>
    </div>
    </div>


    </div>
  
           
    
  )
}

export default App
