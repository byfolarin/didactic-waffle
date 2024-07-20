import './App.css'
import NavBar from './Components/NavBar'
import Support from './assets/Frame 110.png'
import Mesh from './assets/Mesh.png'



function App() {
  return (
    <div className='mx-32 '>

    <div className="flex h-vh w-full " >
    <img src={Mesh} className='absolute top-0 bottom-0 left-0 right-0' alt="" />
    </div>
  
    

    <NavBar />
      
     <div className='text-center py-24 relative'>
          <h1 className='text-7xl font-semibold tracking-tight ' >The core infrastructure <br /> enabling your operations</h1>
          <p className='py-8 text-gray-700 text-lg' >Effortlessly create custom CRMs, internal tools, customer portals <br />
          and other business applications for your team.  Get started in minutes, no coding necessary.</p>
          </div>
          <img src={Support} alt="logo for blank" className='w-120'/>
      </div>
  
           
    
  )
}

export default App
