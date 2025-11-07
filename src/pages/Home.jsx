import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import AboutUs from '../components/AboutUs'
import Services from './Services'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'
import Otherservies from '../servicesComponents/Otherservies'
const Home = () => {
  return (
    <div className=''>
        <div className='fixed top-0 left-0 w-full z-20'><Navbar /></div>
        <Hero />
        <About />
        <AboutUs />
        <Services />
        <Portfolio />
        <Contact />
        <Otherservies />
    </div>
  )
}

export default Home