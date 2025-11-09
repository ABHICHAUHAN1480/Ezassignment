import { useState } from 'react'
import Home from './pages/Home'
import bg from './assets/BG.png'

function App() {
  

  return (
    <>
      <div className=''>
        <img src={bg} alt="background" className='fixed top-0 left-0 w-full h-full object-cover -z-10' />
        <Home />
       
      </div>
    </>
  )
}

export default App
