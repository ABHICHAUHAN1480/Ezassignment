import React, { useState } from "react";
import hero from "../assets/Hero Mandala.png";
import logo from "../assets/VFilms Logo.png";

const Hero = () => {
  const [rotation, setRotation] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const handleRotate = () => {
    if (isRotating) return;

    setIsRotating(true);
    setRotation((prev) => prev - 60);

    setTimeout(() => {
      setIsRotating(false);
    }, 3000);
  };

  return (
    <section className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 px-6 sm:px-10 md:px-16 lg:px-20 py-12">
    
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <div className="relative w-[80%] sm:w-[70%] md:w-[90%] lg:w-[75%] ">
          <img
            src={hero}
            alt="hero"
            className="object-contain cursor-pointer w-full"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: "transform 3s ease-in-out",
            }}
          />
          <img
            src={logo}
            alt="logo"
            onClick={handleRotate}
            className="absolute top-1/2 left-1/2 w-[60%] sm:w-[55%] md:w-[65%] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
      
        <p className="font-island font-normal text-[36px] sm:text-[54px] md:text-[70px] lg:text-[90px] xl:text-[100px] leading-[110%] not-italic ">
          Varnan is where stories find their voice and form
        </p>

        
        <p className="font-halant font-normal text-[#F15D2B] text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] leading-[110%] not-italic">
          Films · Brands · Art
        </p>

        <p className="font-instrument text-gray-700 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed tracking-[0] max-w-[520px] md:max-w-[600px]">
          Since 2009, V’ve been telling stories — stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way — by listening with intention. V believes it takes trust,
          patience, and an eye for the unseen to capture what truly matters. V
          doesn’t just tell stories — V honors them.
        </p>
      </div>
    </section>
  );
};

export default Hero;
