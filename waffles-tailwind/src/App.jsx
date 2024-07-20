import './App.css'
import NavBar from './Components/NavBar'
import Support from './assets/Frame 110.png'

function App() {
  return (
    <div className='mx-32 '>
     <NavBar />

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
