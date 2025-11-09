import React from 'react'
import vector5 from '../assets/Vector 5.svg'
import frame33 from '../assets/Frame 33.svg'
import frame31 from '../assets/Frame 31.png'
import frame31_1 from '../assets/Frame 31 (1).png'
import frame31_2 from '../assets/Frame 31 (2).png'
import image6 from '../assets/image 6.png'
import image7 from '../assets/image 7.png'
import image8 from '../assets/image 8.png'

const MainServicePage = ({ setServiceSelected }) => {
    return (
        <div className='w-full min-h-screen relative pb-32 md:pb-24'>
           
            <p className="font-halant mt-16 md:mt-24 font-normal not-italic text-2xl sm:text-3xl md:text-4xl leading-[100%] tracking-[0] text-center px-4">
                The storyboard reveals the breadth of our craft.
            </p>

         
            <img className='mx-auto w-3/4 sm:w-2/3 md:w-1/2 mt-3' src={vector5} alt="decorative line" />

         
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-10 px-4 md:px-8 place-items-center md:place-items-stretch'>
              
                <button
                    type="button"
                    className='group relative w-full max-w-[420px] md:max-w-none cursor-pointer transition-transform duration-200 hover:scale-[0.98]'
                    onMouseEnter={() => setServiceSelected(1)}
                    onClick={() => setServiceSelected(1)}
                    aria-label="Explore Service 1"
                >
                    <img src={image6} alt="decorative sticker" className='absolute top-0 md:top-[6%]  left-[12%] w-24 sm:w-32 md:w-28 lg:w-38 pointer-events-none select-none' />
                    <img src={frame31} alt="Service 1" className='w-[90%] h-auto block' />
                </button>

                
                <button
                    type="button"
                    className='group relative w-full max-w-[420px] md:max-w-none cursor-pointer transition-transform duration-200 hover:scale-[0.98] md:mt-12'
                    onClick={() => setServiceSelected(2)}
                    aria-label="Explore Service 2"
                >
                    <img src={image8} alt="decorative sticker" className='absolute -top-[1%] left-[45%] -translate-x-1/2  w-24 sm:w-32 md:w-28 lg:w-38 pointer-events-none select-none' />
                    <img src={frame31_1} alt="Service 2" className='w-[90%] h-auto block' />
                </button>

              
                <button
                    type="button"
                    className='group relative w-full max-w-[420px] md:max-w-none cursor-pointer transition-transform duration-200 hover:scale-[0.98]'
                    onClick={() => setServiceSelected(3)}
                    aria-label="Explore Service 3"
                >
                    <img src={image7} alt="decorative sticker" className='absolute top-[2%] md:top-[6%] right-[22%]  w-24 sm:w-32 md:w-28 lg:w-38 pointer-events-none select-none' />
                    <img src={frame31_2} alt="Service 3" className='w-[90%] h-auto block' />
                </button>
            </div>

            <img className='md:hidden mx-auto mt-12 w-2/3' src={frame33} alt="decorative line" />
            <img className='hidden md:block absolute left-1/2 -translate-x-1/2 bottom-10' src={frame33} alt="decorative line" />
        </div>
    )
}

export default MainServicePage
