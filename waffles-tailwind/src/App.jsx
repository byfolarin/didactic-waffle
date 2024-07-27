import './App.css'
import NavBar from './Components/NavBar'
import Mesh from './assets/Mesh.png'
import H1comp from './Components/H1comp'
import ImgSection from './Components/ImgSection'
import FirstSection from './Components/FirstSection'
import SecondSection from './Components/SecondSection'
import ThirdSection from './Components/ThirdSection'
import FourthSection from './Components/FourthSection'
import FifthSection from './Components/FifthSection'
import Footer from './Components/Footer'




function App() {
  return (
    <div className='mx-2 sm:mx-3 md:mx-3 lg:mx-32'>

    <div className="flex  w-full " >
    <img src={Mesh} className='absolute top-0 bottom-0 left-0 right-0' alt="" />
    </div>
    <NavBar/>
    <H1comp/>
    <ImgSection/>
    <FirstSection />
    <SecondSection/>
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <Footer />

    




    </div>

  
           
    
  )
}

export default App
