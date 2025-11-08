import React, { useState, useEffect } from "react";
import MainServicePage from "../servicesComponents/MainServicePage";
import Otherservies from "../servicesComponents/Otherservies";

const Services = () => {
  const [serviceSelected, setServiceSelected] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, [serviceSelected]);

  return (
    <div className="relative min-w-screen min-h-screen ">
    
      <div
        className={` inset-0 transition-all duration-700 ease-in-out transform ${
          visible && serviceSelected === 0
            ? "opacity-100  pointer-events-auto"
            : "opacity-0  pointer-events-none"
        }`}>
        <MainServicePage setServiceSelected={setServiceSelected} />
      </div>

      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
          visible && serviceSelected === 1
            ? "opacity-100  pointer-events-auto"
            : "opacity-0  pointer-events-none"
        }`} >
        <Otherservies page="page1" setServiceSelected={setServiceSelected} />
      </div>

      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
          visible && serviceSelected === 2
            ? "opacity-100  pointer-events-auto"
            : "opacity-0  pointer-events-none"
        }`}  >
        <Otherservies page="page2" setServiceSelected={setServiceSelected} />
      </div>

      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
          visible && serviceSelected === 3
            ? "opacity-100  pointer-events-auto"
            : "opacity-0  pointer-events-none"
        }`}>
        <Otherservies page="page3" setServiceSelected={setServiceSelected} />
      </div>
    </div>
  );
};

export default Services;
