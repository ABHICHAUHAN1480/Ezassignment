import React from 'react'

import vector5 from '../assets/Vector 5.svg'
import left from '../assets/Chevron left.png'
import serviceframe1 from '../assets/serviceframe1.png'
import serviceframe2 from '../assets/serviceframe2.png'
import serviceframe3 from '../assets/serviceframe3.png'
import arrow from '../assets/Arrow.svg'

import page1img1 from '../assets/Camera 01.svg'
import page1img3 from '../assets/Camera 02.svg'
import page1img2 from '../assets/Camera 03.svg'  
import page1img4 from '../assets/Camera 04.svg'

import page2img3 from '../assets/Branding Vector 01.svg'
import page2img4 from '../assets/Branding Vector 02.svg'
import page2img2 from '../assets/Branding Vector 03.svg' 
import page2img1 from '../assets/Branding Vector 04.svg'

import page3img2 from '../assets/Art Curation Icons 01.svg'
import page3img4 from '../assets/Art Curation Icons 02.svg'
import page3img1 from '../assets/Art Curation Icons 03.svg' 
import page3img3 from '../assets/Art Curation Icons 04.svg'


const Otherservies = ({ page = "page1",setServiceSelected  }) => {
    const listSets={
        page1: ["Documentaries","Corporate Videos","2D Animation Videos","3D Animation Videos"],
        page2: ["Branding & Communication","Market Mapping","Content Management","Social Media Management","Rebranding"],
        page3: ["Art Festivals","Live Performances","Community Events","Cultural Storytelling"]
    };
    const imageSets = {
    page1: [page1img1, page1img2, page1img3, page1img4],
    page2: [page2img1, page2img2, page2img3, page2img4],
    page3: [page3img1, page3img2, page3img3, page3img4],
     };
     const paraghraphSets = {
        page1: ["Who says films are just an escape?","We see them as a way to live many lives - to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating","V crafts"],
        page2: ["A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trust","We shape brands that people remember, return to, and fall in love with.","V creates"],
        page3: ["Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong.","Through every festival, every performance, and every gathering, we help stories find their stage and their people.","V curates"]
     }
      const frameSets = {
    page1: serviceframe1,
    page2: serviceframe2,
    page3: serviceframe3,
  };

 
  const currentList = listSets[page];
  const currentImages = imageSets[page];
  const currentText = paraghraphSets[page];
  const currentFrame = frameSets[page];

    return (
        <div className='min-h-screen relative -mt-10 px-4'>
            <h1 className='font-halant font-normal text-center text-3xl'>"Filmmaking is a chance to live many lifetimes." - Robert Altman</h1>
            <img src={vector5} alt="Vector 5" className='mx-auto w-1/2 max-w-[420px] mt-4' />

            <div className='max-w-5xl mx-auto mt-10 relative w-full'>
                <button onClick={()=>setServiceSelected(0)} className='font-instrument text-[#F15D2B] font-normal border border-[#F15D2B] rounded-full px-4 py-3 flex items-center cursor-pointer animate-pulse-scale'><img src={left} alt="Left Arrow" className='inline-block mr-2' />Back</button>

                {/* Content: stack on mobile, side-by-side on md+ */}
                <div className='flex flex-col md:flex-row items-start md:items-center gap-6 mt-6'>
                    <img src={currentFrame} alt="Service Frame 1" className='w-full md:w-[45%] lg:w-[40%] mx-auto' />

                    <div className='w-full md:w-1/2 font-instrument font-normal text-base md:text-2xl'>
                        <p className='mt-4 md:mt-7'>
                            <span>{currentText[0]}</span><br />
                            <span>{currentText[1]}</span><br />
                            <span>{currentText[2]}:</span>
                        </p>
                        <ul className='mt-4 list-disc list-inside space-y-2'>
                            {currentList.map((item, index) => (
                                <li key={index} className='ml-4'>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <p className='mx-auto text-center mt-6 font-instrument font-normal text-xl'>Explore more <br/> <img src={arrow} alt="Arrow" className='mx-auto mt-2' /></p>

                {/* Decorative images - show on md+ only to avoid overlap on small screens */}
                <img src={currentImages[0]} alt="Decorative 1" className='hidden md:block absolute  top-4 right-8 w-16 md:w-24 lg:w-28' />
                <img src={currentImages[2]} alt="Decorative 2" className='hidden md:block absolute right-8 w-16 md:w-24 lg:w-28 top-3/4' />
                <img src={currentImages[1]} alt="Decorative 3" className='hidden md:block absolute right-8 w-16 md:w-24 lg:w-28 top-1/2' />
                <img src={currentImages[3]} alt="Decorative 4" className='hidden md:block absolute -left-10 top-2/3 w-16 md:w-24 lg:w-28' />
            </div>
        </div>
    )
}

export default Otherservies
