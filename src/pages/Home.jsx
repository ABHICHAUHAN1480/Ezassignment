import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import AboutUs from '../components/AboutUs'
const Home = () => {
  return (
    <div className=''>
        <div className='fixed top-0 left-0 w-full z-10'><Navbar /></div>
        <Hero />
        <About />
        <AboutUs />
    </div>
  )
}

export default Home