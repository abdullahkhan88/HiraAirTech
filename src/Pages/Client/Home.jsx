import { useEffect, useState } from "react";
import "animate.css";

import slide1 from "../../assets/HomeImage/Homepage_01.jpg";
import slide2 from "../../assets/HomeImage/Homepage_02.jpg";
import slide3 from "../../assets/HomeImage/Homepage_03.jpg";

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
    text: [
      "HVAC systems executed with",
      "precision and accountability",
    ],
    para: [
      "From planning to installation, we deliver HVAC",
      "solutions that perform reliably across commercial.",
      "and industrial projects",
    ],
    textMobile: [
      "Professional HVAC Ducting",
      "Installation with Proven Execution",
    ],
  },
  {
    img: slide2,
    text: [
      "Fire Fighting Systems",
      "Installed with Complete",
      "Responsibility",
    ],
    para: [
      "Installed as per safety codes, with careful planning",
      "and proper site coordination.",
    ],
    textMobile: [
      "Fire Fighting Systems",
      "Installed with Safety Compliance",
    ],
  },
  {
    img: slide3,
    text: [
      "False ceiling",
      "works with",
      "clean finish",
      "and functional",
      "design",
    ],
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const isanimation = false; // debug ke liye off

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
                      {/* DESKTOP HEADING */}
                      <div className="hidden md:block">
                        {slide.text.map((line, i) => (
                          <p
                            key={i}
                            className={`font-semibold tracking-tight ${
                              index === 1
                                ? "text-lg sm:text-xl md:text-4xl lg:text-6xl"
                                : "text-base sm:text-xl md:text-4xl lg:text-6xl"
                            }`}
                          >
                            {line}
                          </p>
                        ))}
                      </div>

                      {/* MOBILE TEXT / PARA */}
                      {slide.textMobile && (
                        <div className="block md:hidden mt-2">
                          {slide.textMobile.map((line, i) => (
                            <p
                              key={i}
                              className="text-sm sm:text-base font-medium leading-snug"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      )}

                      {/* DESKTOP PARA */}
                      {slide.para && (
                        <div className="mt-6 space-y-1 hidden md:block">
                          {slide.para.map((p, i) => (
                            <p
                              key={i}
                              className="text-[11px] sm:text-sm md:text-xl lg:text-2xl leading-tight"
                            >
                              {p}
                            </p>
                          ))}
                        </div>
                      )}

                      {/* BUTTON */}
                      <button
                        className="mt-4 sm:mt-6 md:mt-12
                        px-2 sm:px-6 md:px-9 lg:px-12
                        py-1 sm:py-3
                        text-base sm:text-lg lg:text-xl
                        bg-[#004FA6] hover:bg-blue-800"
                      >
                        Explore Our Solution
                      </button>
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
                      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-4 text-white">
                        {slide.text.map((line, i) => (
                          <p
                            key={i}
                            className="text-sm sm:text-lg font-semibold leading-relaxed"
                          >
                            {line}
                          </p>
                        ))}
                        <button className="mt-4 w-fit px-4 py-2 text-sm bg-blue-600">
                          Explore our solution
                        </button>
                      </div>
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
                        {slide.text.map((line, i) => (
                          <p
                            key={i}
                            className="text-lg sm:text-2xl md:text-[2.5rem] lg:text-6xl
                            font-semibold leading-tight text-[#004FA6]"
                          >
                            {line}
                          </p>
                        ))}

                        <button
                          className="mt-8 md:px-4 lg:px-8 md:py-3
                          bg-[#004FA6] hover:bg-blue-700
                          text-base sm:text-md md:text-lg lg:text-xl"
                        >
                          Explore our solution
                        </button>
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
                className={`h-[3px] w-8 sm:w-30 cursor-pointer transition-all duration-300 ${
                  current === index ? "bg-blue-500" : "bg-white/60"
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
