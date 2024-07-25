import './App.css'
import NavBar from './Components/NavBar'
import Mesh from './assets/Mesh.png'
import H1comp from './Components/H1comp'
import ImgSection from './Components/ImgSection'
import FirstSection from './Components/FirstSection'
import SecondSection from './Components/SecondSection'
import ThirdSection from './Components/ThirdSection'




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
    <ThirdSection />




    <div className='flex'>

        <div className='w-full h-full border border-red-500'>
            <h2>Build momentum with Cycles</h2>
            <p>Create healthy routines and focus your team on what work should happen next.</p>
        </div>

        <div className='w-full h-full border border-red-500'>
            <h2>Build momentum with Cycles</h2>
            <p>Create healthy routines and focus your team on what work should happen next.</p>
        </div>

    </div>

    




    </div>

  
           
    
  )
}

export default App
