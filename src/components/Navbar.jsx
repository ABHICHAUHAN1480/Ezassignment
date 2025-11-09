import React, { useState } from "react";
import frame1 from "../assets/Frame 1.png";
import frame2 from "../assets/Vector.png";
import letstalk from "../assets/Frame 2.png";
import frame4 from "../assets/Frame 4.png";
import bg from "../assets/BG.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <nav className="p-5 font-instrument text-[18px] font-normal not-italic leading-[100%] tracking-[0] relative  z-50">
      <div className="flex items-center justify-between">
        <img className="h-10" src={frame4} alt="logo" />


        <button
          className="block md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={isOpen ? frame2 : frame1}
            alt="menu toggle"
            className="h-6 w-6 cursor-pointer"
          />
        </button>

        <ul className="hidden md:flex gap-6 items-center absolute right-5 top-5">
          {isOpen && (
            <>
              <li className="cursor-pointer hover:text-[#F15D2B] transition-colors"
                onClick={() => scrollToSection("services")}>
                Services
              </li>
              <li onClick={() => scrollToSection("portfolio")} className="cursor-pointer hover:text-[#F15D2B] transition-colors">
                Their Stories
              </li>
              <li onClick={()=>scrollToSection("about")}  className="cursor-pointer hover:text-[#F15D2B] transition-colors">
                Our Story
              </li>
              <li className="cursor-pointer hover:text-[#F15D2B] transition-colors" onClick={() => scrollToSection("hero")}>
                Varnan
              </li>
              <li onClick={() => scrollToSection("contact")}>
                <img
                  src={letstalk}
                  alt="Let's talk"
                  className="cursor-pointer hover:scale-105 transition-transform"
                />
              </li>
            </>
          )}

          <li>
            <img
              src={isOpen ? frame2 : frame1}
              alt="menu icon"
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setIsOpen(!isOpen)}
            />
          </li>
        </ul>

      </div>


      {isOpen && (
        <div className="md:hidden absolute top-[70px] left-0 w-full shadow-md py-6 transition-all duration-500 ease-in-out">
          <img
            src={bg}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover -z-10 opacity-90"
          />
          <ul className="flex flex-col items-center gap-6 text-[18px]">
            <li
              className="cursor-pointer hover:text-[#F15D2B] transition-colors"
              onClick={() => scrollToSection("services")}
            >
              Services
            </li>
            <li
              className="cursor-pointer hover:text-[#F15D2B] transition-colors"
              onClick={() => scrollToSection("portfolio")}
            >
              Their Stories
            </li>
            <li
              className="cursor-pointer hover:text-[#F15D2B] transition-colors"
              onClick={() => scrollToSection("about")}
            >
              Our Story
            </li>
            <li
              className="cursor-pointer hover:text-[#F15D2B] transition-colors"
              onClick={() => scrollToSection("hero")}
            >
              Varnan
            </li>
            <li>
              <img
                src={letstalk}
                alt="Let's talk"
                className="h-8 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => scrollToSection("contact")}
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
