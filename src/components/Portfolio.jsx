import React from 'react'
import camimg from '../assets/Cam Group.svg'
import foot from '../assets/portfolioVector.png'
import group11 from '../assets/Group 11.png'
const Portfolio = () => {
  return (
    <div className='min-w-screen min-h-screen relative '>
      <img src={camimg} alt="Camera Group" className="absolute   h-[30%] sm:h-[40%] md:h-[50%] lg:h-[55%] xl:h-[60%] lg:left-20 bottom-30 xl:top-20 object-contain pointer-events-none" />
      <img src={foot} alt="Portfolio Vector" className='absolute bottom-24 right-1 w-1/4'/>
      <div className='flex flex-col justify-center items-center'>
      <h1 className="font-halant font-normal text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] xl:text-[54px] leading-tight">
          The Highlight Reel
        </h1>

        <h2 className="font-instrument text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-normal mt-3 sm:mt-4 text-gray-700 max-w-[600px]">
          Watch the magic we’ve captured.
        </h2>
      <img src={group11} alt="Group 11" className=' mx-automt-12 sm:mt-16 md:mt-20  lg:mt-24 w-[85%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[45%] 2xl:w-[40%]' /></div>
    </div>
  )
}

export default Portfolio
