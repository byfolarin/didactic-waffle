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
import PricingCards from './Components/PricingCards'
import Footer from './Components/Footer'
import Sixth from './Components/Sixth'
import MenuIcon from './Components/MenuIcon'
import Logo from './assets/Blank.png'
import { useState } from 'react'





function App() {

  const [isNavOpen, setIsNavOpen] = useState(false);


  const openNav = () => {
    setIsNavOpen(true);
    console.log('Nav opened'); // Debug log
  };

  const closeNav = () => {
    setIsNavOpen(false);
    console.log('Nav closed'); // Debug log
  };


  return (
    <div className='mx-auto overflow-hidden md:mx-3 lg:mx-32'>

          <div className='flex justify-between items-center'>

        <div className='lg:hidden'>
        <img src={Logo} alt="logo for blank" className='w-20'/>
        </div>
        <MenuIcon openNav = {openNav} />

    </div>

    <div className="flex  w-full " >
    <img src={Mesh} className='absolute top-0 bottom-0 left-0 right-0' alt="" />
    </div>

          <div className='hidden lg:block'>
          <NavBar closeNav={closeNav}/>
          </div>

         
      <div className='lg:hidden'>
        {isNavOpen && <NavBar closeNav={closeNav} />}
      </div>


    <H1comp/>
    <ImgSection/>
    <FirstSection />
    <SecondSection/>
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <PricingCards />
    <Sixth />
    <Footer />
 

    




    </div>

  
           
    
  )
}

export default App
