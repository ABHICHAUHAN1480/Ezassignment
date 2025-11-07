import React from 'react';
import hero from '../assets/Hero Mandala.png';
import logo from '../assets/VFilms Logo.png';
const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12 ">
      
    
      <div className= "  w-full md:w-1/2 flex justify-center md:justify-start mt-10 md:mt-0">
     <div className='w-3/4 relative sm:w-2/3 lg:w-[70%] max-w-[450px]'>  <img
          className=" object-contain"
          src={hero}
          alt="hero"
        />
        <img
          className="absolute top-1/2 left-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2"
          src={logo}
          alt="logo"
        /></div> 
      </div>

     
      <div className="w-full md:w-1/2 flex flex-col items-center   text-center space-y-6">
        
      
        <p className="font-island font-normal text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] leading-[100%] not-italic">
          Varnan is where stories find their voice and form
        </p>

        
        <p className="font-halant font-normal text-[#F15D2B] text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-[110%] not-italic">
          Films . Brands . Art
        </p>

       
        <p className="font-instrument w-2/3 text-[14px] sm:text-[16px] md:text-[18px] text-gray-700 leading-relaxed tracking-[0] max-w-[600px]">
          Since 2009, V’ve been telling stories — stories of people, their journeys, and the places that shape them.
          Some begin in polished boardrooms, others in humble village squares. But every story starts the same way — by listening with intention.
          V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
          V doesn’t just tell stories — V honors them.
        </p>
      </div>
    </section>
  );
};

export default Hero;
