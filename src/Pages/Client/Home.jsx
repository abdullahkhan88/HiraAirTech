import { useEffect, useState } from "react";
import slide1 from "../../assets/HomeImage/Home1.svg";
import slide2 from "../../assets/HomeImage/Home2.jpg";
import slide3 from "../../assets/HomeImage/Home3.svg";

/* import components */
import OurChoice from "./OurChoice.jsx";
import Industries from "./Industries.jsx";
import Serve from './Serve.jsx';
import Project from "./Project.jsx";
import OurClient from "./OurClient.jsx";
import Testimonial from "./Testimonial.jsx";
import ServiceSection from './ServiceSection.jsx';
import PartnerShipSection from "./PartnerShipSection.jsx";

const slides = [
  {
    img: slide1,
    text: [
      "HVAC Services (Heating, Ventilation",
      "and Air Conditioning)"
    ],
  },
  {
    img: slide2,
    text: [
      "HVAC Services",
      "(Heating Ventilation",
      "And Air Conditionaing)",
    ],
    para: [
      "We offer end-to-end HVAC services for residential and commercial projects.",
      "Our systems are designed for maximum comfort and energy efficiency."
    ]
  },
  {
    img: slide3,
    text: [
      "We delivers",
      "integrated building",
      "services solutions",
      "with precision and",
      "relability"
    ],
  },
];

const Home = () => {
  const [current, setCurrent] = useState(1);
  const debug = true;

  useEffect(() => {
    if (debug) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full relative">
        {/* Slider Container */}
        <div className="relative overflow-hidden w-full h-[260px] sm:h-[400px] md:h-[700px]">
          {/* Sliding Wrapper */}
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full h-full relative">
                {/* 🔹 SLIDE 1 & 2 */}
                {index !== 2 && (
                  <>
                    <img
                      src={slide.img}
                      alt={`slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute top-6 left-4 sm:top-8 sm:left-10 md:top-15 md:left-30 text-white max-w-[100%] sm:max-w-3xl">
                      {slide.text.map((line, i) => (
                        <p
                          key={i}
                          className={`sm:text-xl md:text-4xl font-medium`}
                        >
                          {line}
                        </p>
                      ))}
                      {/* second slide mein para */}
                      <div className="w-xs md:w-sm mt-4">
                        {slide.para && (
                        <p className="mt-2 font-normal text-[10px] sm:text-sm md:text-lg">
                          {slide.para}
                        </p>
                      )}
                      </div>
                      <button className="mt-4 sm:mt-6 px-2 sm:px-4 sm:py-3 py-1 text-md sm:text-base bg-[#004FA6] hover:bg-blue-700 rounded-sm">
                        Explore our solutions
                      </button>
                    </div>
                  </>
                )}


                {/* 🔹 SLIDE 3 (Mobile: Image + Overlay | Desktop: Split) */}
                {index === 2 && (
                  <>
                    {/* MOBILE VIEW */}
                    <div className="relative h-full md:hidden">
                      <img
                        src={slide.img}
                        alt="slide 3"
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-4 text-white">
                        {slide.text.map((line, i) => (
                          <p
                            key={i}
                            className="text-base sm:text-lg font-semibold leading-snug"
                          >
                            {line}
                          </p>
                        ))}

                        <button className="mt-4 w-fit px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded-lg">
                          Explore our solutions
                        </button>
                      </div>
                    </div>

                    {/*  DESKTOP / TABLET VIEW */}
                    <div className="hidden md:flex h-full bg-gray-200 text-white">
                      {/* Left Text */}
                      <div className="w-1/2 flex flex-col justify-center px-16">
                        {slide.text.map((line, i) => (
                          <p key={i} className="text-5xl font-medium leading-tight text-[#004FA6]">
                            {line}
                          </p>
                        ))}

                        <button className="mt-6 w-fit px-4 cursor-pointer py-2 bg-[#004FA6] hover:bg-blue-700 rounded-sm">
                          Explore our solutions
                        </button>
                      </div>

                      {/* Right Image */}
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

          {/* Status Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-[3px] w-8 sm:w-16 cursor-pointer transition-all duration-300 ${current === index ? "bg-blue-500" : "bg-white/60"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
      <OurChoice />
      <Serve />
      <Project />
      <OurClient />
      <Testimonial />
      {/* click krne ke baad */}
      <ServiceSection />
      <Industries />
      <PartnerShipSection />
    </>
  );
};

export default Home;
