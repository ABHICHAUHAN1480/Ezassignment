import React from 'react'
import camimg from '../assets/Cam Group.svg'
import foot from '../assets/PortfolioVector.png'
import group11 from '../assets/Group 11.png'
const Portfolio = () => {
  return (
    <div className='min-w-screen min-h-screen relative'>
      <img src={camimg} alt="Camera Group" className='absolute h-1/2 ml-20 mt-20' />
      <img src={foot} alt="Portfolio Vector" className='absolute bottom-24 right-1 w-1/4'/>
      <h1 className='font-halant font-normal text-4xl text-center'>The Highlight Reel</h1>
      <h2 className='font-instrument text-lg font-normal text-center'>Watch the magic we’ve captured.</h2>
      <img src={group11} alt="Group 11" className='mx-auto mt-20 w-1/2' />
    </div>
  )
}

export default Portfolio
