import React from 'react'
import group9 from '../assets/Group 9.png'
import insdiagate from '../assets/indiagate.svg'
import group2 from '../assets/Group 2.svg'
import vector1 from '../assets/Vector1.svg'
import vector2 from '../assets/Vector2.svg'
import vector3 from '../assets/Vector3.svg'
import portfolio from '../assets/Frame 2 (1).png'
const About = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between overflow-hidden">


      <div className="relative flex flex-col items-center md:items-start w-full md:w-1/2 h-full space-y-6 md:space-y-10 mt-10 md:mt-0">
        <img
          src={group9}
          alt="Group 9"
          className="object-contain w-[55%] sm:w-[50%] md:w-[65%] lg:w-[70%]  ml-0 md:ml-30  transition-all duration-300"
        />
        <img
          src={insdiagate}
          alt="Indiagate"
          className="object-contain w-[30%] sm:w-[25%] md:w-[40%] lg:w-[45%] ml-0 md:ml-10 transition-all duration-300"
        />
      </div>


      <div className="relative flex items-center justify-center w-full md:w-1/2 h-full mt-10 md:mt-0">
        <img
          src={group2}
          alt="Group 2"
          className="object-contain absolute w-[55%] sm:w-[50%] md:w-[60%] lg:w-[70%] -ml-40  mt-0  transition-all duration-300"
        />
        <div className='-mt-120 -ml-90  absolute'>
          <p className="font-island font-normal not-italic text-[42px] leading-[100%] tracking-[0] -ml-20">
            Film Makers
          </p><br />

          <img
            className=' '
            src={vector1}
            alt="Vector 1" />
        </div>
        <div className='absolute left-0 -ml-50 -mt-5 top-1/2'>
          <img
            className=' '
            src={vector2}
            alt="Vector 2" />
          <br />
          <span className="font-island font-normal not-italic text-[42px] leading-[100%] tracking-[0] -ml-40">
            Branding Experts
          </span>

        </div>
        <div className='absolute right-6 -mt-60  '>
          <span className="font-island font-normal not-italic text-[42px] leading-[100%] tracking-[0] ">
            Art Curators
          </span>
          <br /><br />
          <img src={vector3} alt="Vector 3" />
        </div>
        <div className='absolute w-full h-full mt-100 -ml-30'>
        <p className=" font-halant font-normal  not-italic text-4xl leading-[100%] tracking-[0] text-center">
          Take a closer look at the stories V bring to life.
        </p>
        <img
          className='mt-6 mx-auto cursor-pointer'
          src={portfolio}
          alt="Portfolio" />
        </div>

      </div>

    </div>

  )
}

export default About
