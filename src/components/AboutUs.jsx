import React from 'react'
import objects from '../assets/OBJECTS.png'
import group10 from '../assets/Group 10.png'
import frame9 from '../assets/Frame 9.png'
import frame22 from '../assets/Frame 22.png'
import frame23 from '../assets/Frame 23.png'
const AboutUs = () => {
    return (
        <div className='w-full min-h-screen relative overflow-x-hidden'>

            <div className='w-full md:w-1/2 lg:w-[48%] xl:w-1/2 absolute top-6 sm:top-8 md:top-12 lg:top-16 xl:top-24 right-0 md:right-6 lg:right-12 px-4 sm:px-6 md:px-0 z-10'>
                <p className="font-island font-normal not-italic text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[70px] leading-[110%] text-center md:text-right">
                    Every project is more than just a brief - it's a new chapter waiting to be written.
                    Together, we've crafted tales that inspire, connect, and endure.
                </p>
            </div>

            <div className='w-full sm:w-[90%] md:w-[45%] lg:w-[42%] xl:w-[40%] absolute top-[30vh] sm:top-[35vh] md:top-[25vh] lg:top-[25vh] left-0 md:left-4 lg:left-8 xl:left-12 min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] lg:min-h-[75vh] items-center flex flex-col px-4 sm:px-6 md:px-4 lg:px-0 z-10'>
                <div className='justify-around items-center flex flex-col gap-4 sm:gap-5 md:gap-6 w-full'>
                    <p className="font-halant font-normal not-italic text-2xl sm:text-2xl md:text-3xl lg:text-3xl leading-[100%] tracking-[0] text-center">
                        A montage of familiar faces and names.
                    </p>
                    <p className="font-instrument font-extralight not-italic text-base sm:text-lg md:text-xl leading-[100%] tracking-[0] text-center w-full sm:w-5/6 md:w-3/4">
                        Some stories come from the biggest names. Others begin with bold, rising voices.
                        We've been fortunate to walk alongside both - listening, creating, and building stories that matter.
                    </p>
                </div>
                <div className='flex gap-0 mt-4 md:mt-10 lg:mt-16 w-full '>
                    <img
                        src={frame9}
                        alt="Frame 9" className=" w-[160px] h-[160px]   
      sm:w-[220px] sm:h-[220px]
      md:w-[240px] md:h-[240px]
      lg:w-[260px] lg:h-[260px]
      xl:w-[300px] xl:h-[300px]
      2xl:w-[340px] 2xl:h-[340px]
     
      "/>


                    <img
                        src={frame22}
                        alt="Frame 22" className="w-[160px] h-[160px]
      sm:w-[220px] sm:h-[220px]
      md:w-[240px] md:h-[240px]
      lg:w-[260px] lg:h-[260px]
      xl:w-[300px] xl:h-[300px]
      2xl:w-[340px] 2xl:h-[340px]
     -ml-[70px] md:-ml-[100px] lg:-ml-[130px] xl:-ml-[150px] "/>


                    <img
                        src={frame23}
                        alt="Frame 23" className="
       w-[160px] h-[160px]
       sm:w-[220px] sm:h-[220px]
      md:w-[240px] md:h-[240px]
      lg:w-[260px] lg:h-[260px]
      xl:w-[300px] xl:h-[300px]
      2xl:w-[340px] 2xl:h-[340px]
      -ml-[70px] md:-ml-[100px] lg:-ml-[130px] xl:-ml-[150px]"/>
                </div>

            </div>


            <img
                src={objects}
                alt="Objects"
                className='absolute bottom-0 right-[8%] sm:right-[6%] md:right-[8%] lg:right-[10%] xl:right-[8.33%] w-[40%] sm:w-[35%] md:w-[32%] lg:w-[28%] xl:w-[25%] 2xl:w-[22%] object-contain z-0 opacity-90'
            />
            <img
                src={group10}
                alt="Group 10"
                className='absolute bottom-0 right-0 w-[60%] sm:w-[55%] md:w-[50%] lg:w-[48%] xl:w-[45%] 2xl:w-[42%] object-contain z-0'
            />
        </div>
    )
}

export default AboutUs
