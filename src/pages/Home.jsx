import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import AboutUs from '../components/AboutUs'
import Services from './Services'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'

const Home = () => {
  
  return (
    <div className=''>
        <div className='fixed top-0 left-0 w-full z-20'><Navbar /></div>
       <div id='hero'><Hero /></div>
        <div id='about'>
          <About />
        </div>
        <AboutUs />
        <div id='services'>
           <Services />
        </div>
       <div id='portfolio'>
           <Portfolio />
       </div>
       <div id='contact'>
           <Contact />
       </div>

    </div>
  )
}

export default Home