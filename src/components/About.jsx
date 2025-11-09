import React from 'react'
import group9 from '../assets/Group 9.png'
import insdiagate from '../assets/indiagate.svg'
import group2 from '../assets/Group 2.svg'
import vector1 from '../assets/Vector1.svg'
import vector2 from '../assets/Vector2.svg'
import vector3 from '../assets/Vector3.svg'
import portfolio from '../assets/Frame 2 (1).png'
const About = () => {
    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      console.log("Scrolling to section:", id);
      setIsOpen(false);
    }else {
      console.log("Section not found:", id);
    }
  };
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center  overflow-hidden">


      <div className="relative flex flex-col items-center md:items-start w-full md:w-1/2 h-full space-y-6 md:space-y-10 mt-10 md:mt-0">
        <img
          src={group9}
          alt="Group 9"
          className="object-contain w-[55%] sm:w-[50%] md:w-[65%] lg:w-[70%]  ml-0 md:ml-30  transition-all duration-300"
        />
        <img
          src={insdiagate}
          alt="Indiagate"
          className="object-contain w-[30%] hidden md:block sm:w-[25%] md:w-[40%] lg:w-[45%] ml-0 md:ml-10 transition-all duration-300"
        />
      </div>


      <div className="relative flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mt-10 md:mt-0">
        <img
          src={group2}
          alt="Group 2"
          className="object-contain hidden md:block md:absolute w-[45%] sm:w-[50%] md:w-[60%] lg:w-[70%] md:-ml-40  mt-0  transition-all duration-300"
        />
        <div className='md:-mt-[70%] md:-ml-[45%]  md:absolute'>
          <p className="font-island font-normal not-italic text-[32px] md:text-[36px] lg:text-[42px] leading-[100%] tracking-[0] md:-ml-20">
            Film Makers
          </p><br className='hidden md:block'  />

          <img
            className='hidden md:block w-[60%] md:w-[80%] lg:w-full'
            src={vector1}
            alt="Vector 1" />
        </div>
        <div className='md:absolute md:left-0 md:-ml-[50%] lg:-ml-[30%] xl:-ml-[20%] 2xl:-ml-[25.5%] md:-mt-5 md:top-1/2'>
          <img
            className=' hidden md:block w-[60%] md:w-[80%] lg:w-full'
            src={vector2}
            alt="Vector 2" />
          <br className='hidden md:block' />
          <span className="font-island font-normal not-italic text-[32px] md:text-[36px] lg:text-[42px] leading-[100%] tracking-[0] md:-ml-40">
            Branding Experts
          </span>

        </div>
        <div className='md:absolute md:right-6 md:-mt-60  '>
          <span className="font-island font-normal not-italic text-[32px] md:text-[36px] lg:text-[42px] leading-[100%] tracking-[0] ">
            Art Curators
          </span>
          <br /><br />
          <img src={vector3} alt="Vector 3" className=' w-[60%] md:w-[80%] hidden md:block' />
        </div>
        <div className='absolute w-full h-full mt-[50%] md:-ml-30'>
        <p className=" font-halant font-normal  not-italic text-lg md:text-2xl lg:text-4xl leading-[100%] tracking-[0] text-center">
          Take a closer look at the stories V bring to life.
        </p>
        <img
          className='mt-6 mx-auto cursor-pointer'
          src={portfolio}
          alt="Portfolio"
          onClick={() => scrollToSection("portfolio")}
        />
        </div>

      </div>

    </div>

  )
}

export default About
