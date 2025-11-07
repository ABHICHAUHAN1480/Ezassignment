import React, { useState } from 'react'
import frame1 from '../assets/Frame 1.png'
import frame2 from '../assets/Vector.png'
import letstalk from '../assets/Frame 2.png'
import frame4 from '../assets/Frame 4.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-5 font-instrument text-[18px] font-normal not-italic leading-[100%] tracking-[0] relative ">
      <img className='P-5 h-10' src={frame4} alt="logo" />
      {isOpen && <img onClick={() => setIsOpen(!isOpen)} className='absolute right-0 top-0 p-5' src={frame1} alt="logo" />}
      {!isOpen && 
         <ul className='flex gap-4 items-center right-0 top-0 absolute p-[20px]'>
            <li>Services</li>
            <li>Thier Stories</li>
            <li>Our Story</li>
            <li>Varnan</li>
            <li><img src={letstalk} alt="logo" /></li>
            <li><img className='cursor-pointer' onClick={() => setIsOpen(!isOpen)} src={frame2} alt="logo" /></li>
        </ul>
        }
    </nav>
  )
}

export default Navbar