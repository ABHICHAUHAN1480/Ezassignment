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
        <div className='min-w-screen min-h-screen relative'>
            <p className="font-halant  mt-24 font-normal not-italic text-4xl leading-[100%] tracking-[0] text-center">
                The storyboard reveals the breadth of our craft.
            </p>
            
            <img className='mx-auto w-1/2 ' src={vector5} alt="decorative line" />
            <div className='flex justify-center gap-10 mt-10 '>
                <span className='w-[29%] h-1/3 relative hover:scale-95 cursor-pointer' onMouseEnter={()=>setServiceSelected(1)}>
                <img src={image6} alt ="images" className='absolute h-20 ml-5' />
                <img src={frame31} alt ="images"   />
                </span> 
                <span className='w-[25%] mt-12 h-1/3 relative hover:scale-95 cursor-pointer' onMouseEnter={()=>setServiceSelected(2)}>
                <img src={image8} alt ="images" className='absolute h-20 ml-20 -mt-5' />
                <img src={frame31_1} alt ="images"/></span>
                <span className='w-[29%] h-1/3 relative hover:scale-95 cursor-pointer' onMouseEnter={()=>setServiceSelected(3)}>
                <img src={image7} alt ="images" className='absolute h-20 right-6' />
                <img src={frame31_2} alt ="images" /></span>
            </div>
             <img className='absolute bottom-24 ' src={frame33} alt="decorative line" />
        </div>
    )
}

export default MainServicePage
