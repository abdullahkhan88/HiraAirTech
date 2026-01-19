import { useEffect, useState } from "react";
import slide1 from "../../assets/HomeImage/Home1.svg";
import slide2 from "../../assets/HomeImage/Home2.jpg";
import slide3 from "../../assets/HomeImage/Home3.svg";

/* components */
import About from "./About.jsx";
import Services from './Services.jsx'
/* import OurServices from "./ServiceSection.jsx"; */
import OurChoice from "./OurChoice.jsx";
import Industries from "./Industries.jsx";
import Serve from "./Serve.jsx";
/* import Project from "./Project.jsx"; */
import OurClient from "./OurClient.jsx";
import Testimonial from "./Testimonial.jsx";
/* import ServiceSection from "./ServiceSection.jsx"; */


const slides = [
  {
    img: slide1,
    text: [
      "HVAC Services (Heating, Ventilation",
      "and Air Conditioning)",
    ],
  },
  {
    img: slide2,
    text: [
      "HVAC Services",
      "(Heating Ventilation",
      "And Air Conditioning)",
    ],
    para: [
      "We offer end-to-end HVAC services for residential and commercial projects.",
      "Our systems are designed for maximum comfort and energy efficiency.",
    ],
  },
  {
    img: slide3,
    text: [
      "We delivers",
      "integrated building",
      "services solutions",
      "with precision and",
      "reliability",
    ],
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= SLIDER ================= */}
      <div className="relative w-full overflow-hidden">
        <div className="h-[240px] sm:h-[380px] md:h-[700px]">
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
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute top-6 left-4 sm:top-10 sm:left-10 md:top-24 md:left-24 text-white max-w-xl md:max-w-2xl">
                      {slide.text.map((line, i) => (
                        <p
                          key={i}
                          className={`font-medium ${
                            index === 1
                              ? "text-lg sm:text-2xl md:text-5xl"
                              : "text-base sm:text-xl md:text-4xl"
                          }`}
                        >
                          {line}
                        </p>
                      ))}

                      {/* SLIDE-2 PARAGRAPH */}
                      {slide.para && (
                        <div className="mt-4 space-y-2">
                          {slide.para.map((p, i) => (
                            <p
                              key={i}
                              className="text-[11px] sm:text-sm md:text-lg font-normal"
                            >
                              {p}
                            </p>
                          ))}
                        </div>
                      )}

                      <button className="mt-4 sm:mt-6 px-3 sm:px-5 py-1.5 sm:py-3 text-sm sm:text-base bg-[#004FA6] hover:bg-blue-700 rounded-sm">
                        Explore our solutions
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

                        <button className="mt-4 w-fit px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded-sm">
                          Explore our solutions
                        </button>
                      </div>
                    </div>

                    {/* DESKTOP */}
                    <div className="hidden md:flex h-full">
                      <div className="w-1/2 flex flex-col justify-center px-16">
                        {slide.text.map((line, i) => (
                          <p
                            key={i}
                            className="text-5xl font-medium leading-tight text-[#004FA6]"
                          >
                            {line}
                          </p>
                        ))}

                        <button className="mt-6 w-fit px-5 py-2 bg-[#004FA6] hover:bg-blue-700 rounded-sm text-white">
                          Explore our solutions
                        </button>
                      </div>

                      <div className="w-1/2 h-full">
                        <img
                          src={slide.img}
                          alt="slide 3"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* ================= INDICATORS ================= */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-[3px] w-8 sm:w-16 cursor-pointer transition-all duration-300 ${
                  current === index ? "bg-blue-500" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ================= SECTIONS ================= */}
      <About/>
      <Services/>
      {/* <OurServices/> */}
      <OurChoice />
      <Serve />
      
      <OurClient />
      <Testimonial />
      {/* <ServiceSection /> */}
      <Industries />
     
    </>
  );
};

export default Home;
