import React from 'react'
import objects from '../assets/OBJECTS.png'
import group10 from '../assets/Group 10.png'
import frame9 from '../assets/Frame 9.png'
import frame22 from '../assets/Frame 22.png'
import frame23 from '../assets/Frame 23.png'
const AboutUs = () => {
    return (
        <div className='min-w-screen min-h-screen relative'>
            <div className='w-1/2 right-12 absolute top-6 lg:top-24'>
                <p className="font-island font-normal not-italic text-[28px] sm:text-[36px] md:text-[56px] lg:text-[64px] xl:text-[70px] leading-[110%] text-center md:text-right">
                    Every project is more than just a brief - it’s a new chapter waiting to be written.
                    Together, we've crafted tales that inspire, connect, and endure.
                </p>
            </div>
            <div className='w-[40%] min-h-[75vh] absolute mt-[25vh]   items-center flex flex-col '>
                <div className='justify-around items-center flex flex-col gap-6'>
                <p className="font-halant font-normal not-italic text-3xl leading-[100%] tracking-[0] text-center">
                    A montage of familiar faces and names.
                </p>
                <p className="font-instrument font-extralight not-italic text-xl w-3/4 leading-[100%] tracking-[0] text-center">
                    Some stories come from the biggest names. Others begin with bold, rising voices.
                    We’ve been fortunate to walk alongside both - listening, creating, and building stories that matter.
                </p></div>
                <div className='flex mt-24  '>
                    <img src={frame9} alt="Frame 9" className='mb-6 cursor-pointer w-1/2 h-1/3' />
                    <img src={frame22} alt="Frame 22" className='mb-6 cursor-pointer w-1/2 h-1/2 -ml-[20%]' />
                    <img src={frame23} alt="Frame 23" className='mb-6 cursor-pointer w-1/2 h-1/2 -ml-30' />
                </div>

            </div>

            <img src={objects} alt="Objects" className='absolute bottom-0 right-1/12 w-1/3' />
            <img src={group10} alt="Group 10" className='absolute bottom-0 right-0 w-1/2' />
        </div>
    )
}

export default AboutUs
