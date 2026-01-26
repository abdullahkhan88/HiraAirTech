import { useEffect, useState } from "react";
import "animate.css";
import slide1 from "../../assets/HomeImage/Homepage_01.jpg";
import slide2 from "../../assets/HomeImage/Homepage_02.jpg";
import slide3 from "../../assets/HomeImage/Homepage_03.jpg";

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
      "HVAC systems executed with",
      "precision and accountability",
    ],
    para: [
      "From planning to installation, we deliver HVAC",
      "solutions that perform reliably across commercial.",
      "and industrial projects",
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
  const isanimation = true;
  useEffect(() => {
    if (!isanimation) return
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
              <div key={index} className="min-w-full h-full relative border-2">
                {/* ================= SLIDE 1 & 2 ================= */}
                {index !== 2 && (
                  <>
                    <img
                      src={slide.img}
                      alt="slide"
                      className="w-full h-full object-contain"
                    />

                    <div className="absolute
                     top-6 left-4 sm:top-10 sm:left-10 md:top-24 md:left-24 text-white max-w-xl md:max-w-4xl">
                      {slide.text.map((line, i) => (
                        <p
                          key={i}
                          className={`font-semibold ${index === 1
                            ? "text-lg sm:text-2xl md:text-6xl"
                            : "text-base sm:text-xl md:text-6xl"
                            }`}
                        >
                          {line}
                        </p>
                      ))}

                      {/* SLIDE-2 PARAGRAPH */}
                      {slide.para && (
                        <div className="mt-6 space-y-1">
                          {slide.para.map((p, i) => (
                            <p
                              key={i}
                              className="text-[11px] leading-tight  sm:text-sm md:text-xl font-normal"
                            >
                              {p}
                            </p>
                          ))}
                        </div>
                      )}

                      <button className="mt-4 sm:mt-6 px-3 sm:px-5 py-1.5 sm:py-3
                       text-base sm:text-xl bg-[#004FA6] hover:bg-blue-800 text-white cursor-pointer">
                        Explore Our Solutions
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

                        <button className="mt-4 w-fit px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700">
                          Explore our solutions
                        </button>
                      </div>
                    </div>

                    {/* DESKTOP */}
                    {index === 2 && (
                      <div className="relative w-full h-full">
                        {/* FULL WIDTH IMAGE */}
                        <img
                          src={slide.img}
                          alt="slide 3"
                          className="w-full h-full object-cover"
                        />

                        {/* TEXT OVER IMAGE – LEFT ALIGNED */}
                        <div
                          className="absolute
                          top-6 left-4
                           sm:top-10 sm:left-10
                           md:top-24 md:left-24
                            text-white max-w-xl"
                        >
                          {slide.text.map((line, i) => (
                            <p
                              key={i}
                              className="text-lg sm:text-2xl text-[#004FA6] md:text-[3.25rem] font-semibold leading-tight"
                            >
                              {line}
                            </p>
                          ))}

                          <button
                            className="mt-6 px-5 py-2 bg-[#004FA6]
                             hover:bg-blue-700 text-white text-base sm:text-lg"
                          >
                            Explore our solution
                          </button>
                        </div>
                      </div>
                    )}

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
                className={`h-[3px] w-8 sm:w-16 cursor-pointer transition-all duration-300 ${current === index ? "bg-blue-500" : "bg-white/60"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ================= SECTIONS ================= */}
      <About />
      <Services />
      {/* <OurServices/> */}
      <OurChoice />
      <Serve />
      <OurClient />
      <Testimonial />
      {/* <ServiceSection /> */}


    </>
  );
};

export default Home;
