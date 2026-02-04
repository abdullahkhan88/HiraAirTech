import { useEffect, useState } from "react";
import "animate.css";

import slide1 from "../../assets/HomeImage/HVACBanner_01.jpg";
import slide2 from "../../assets/HomeImage/FireBanner_02.jpg";
import slide3 from "../../assets/HomeImage/FalseCeiling_03.jpg";

/* components */
import About from "./About.jsx";
import Services from "./Services.jsx";
import OurChoice from "./OurChoice.jsx";
import Industries from "./Industries.jsx";
import Serve from "./Serve.jsx";
import OurClient from "./OurClient.jsx";
import Testimonial from "./Testimonial.jsx";
import Project from "./Project.jsx";

const slides = [
  {
    img: slide1,
  },
  {
    img: slide2,

  },
  {
    img: slide3,

  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const isanimation = true; // debug ke liye off

  useEffect(() => {
    if (!isanimation) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= SLIDER ================= */}
      <div className="relative w-full overflow-hidden">
        <div className="aspect-[16/9] w-full">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full h-full relative">
                {/* ================= SLIDE 1 & 2 ================= */}
                {index !== 2 && (
                  <>
                    <img
                      src={slide.img}
                      alt="slide"
                      className="w-full h-full object-contain"
                    />

                    {/* TEXT CONTAINER */}
                    <div
                      className="absolute
                        top-6 left-4
                        sm:top-10 sm:left-10
                        md:top-24 md:left-10 lg:left-20
                        text-white max-w-xl md:max-w-4xl"
                    >
                    
                    </div>
                  </>
                )}

                {/* ================= SLIDE 3 ================= */}
                {index === 2 && (
                  <>
                    {/* MOBILE */}
                    <div className="relative h-full md:hidden">
                      <img
                        src={slide.img}
                        alt="slide 3"
                        className="w-full h-full object-cover"
                      />
                    
                    </div>

                    {/* DESKTOP */}
                    <div className="relative w-full h-full hidden md:block">
                      <img
                        src={slide.img}
                        alt="slide 3"
                        className="w-full h-full object-cover"
                      />

                      <div
                        className="absolute
                          top-6 left-4
                          sm:top-10 sm:left-10
                          md:top-24 md:left-22 lg:left-30
                          text-white max-w-xl"
                      >
                     
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* ================= INDICATORS ================= */}
          <div className="absolute bottom-4 md:bottom-7 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-[3px] w-8 sm:w-30 cursor-pointer transition-all duration-300 ${current === index ? "bg-blue-500" : "bg-white/60"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ================= SECTIONS ================= */}
      <About />
      <Services />
      <OurChoice />
      <Serve />
      <Project />
      <OurClient />
      <Testimonial />
    </>
  );
};

export default Home;
