import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import topslide1 from "../../assets/ourserviceAsset/services6.png";
import topslide2 from "../../assets/ourserviceAsset/services1.png";
import topslide3 from "../../assets/ourserviceAsset/services2.png";
import topslide4 from "../../assets/ourserviceAsset/services3.png";
import topslide5 from "../../assets/ourserviceAsset/services4.png";
import topslide6 from "../../assets/ourserviceAsset/services5.png";

import bigSlides1 from "../../assets/ourserviceAsset/bottomSlide1.png";
import bigSlides2 from "../../assets/ourserviceAsset/bottomSlide2.png";
import bigSlides3 from "../../assets/ourserviceAsset/bottomSlide3.png";
import bigSlides4 from "../../assets/ourserviceAsset/bottomSlide4.png";

const topSlides = [
  topslide1,
  topslide2,
  topslide3,
  topslide4,
  topslide5,
  topslide6,
];

const bigSlides = [
  bigSlides1,
  bigSlides2,
  bigSlides3,
  bigSlides4,
];

const OurChoice = () => {
  const [topIndex, setTopIndex] = useState(0);
  const [bigIndex, setBigIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  //  RESPONSIVE COUNT
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);

      setTopIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSteps = Math.ceil(topSlides.length / visibleCount);

  const handlePrev = () => {
    setTopIndex((prev) => (prev === 0 ? totalSteps - 1 : prev - 1));
  };

  const handleNext = () => {
    setTopIndex((prev) => (prev === totalSteps - 1 ? 0 : prev + 1));
  };

  //  BIG SLIDER AUTO
  useEffect(() => {
    const timer = setInterval(() => {
      setBigIndex((prev) =>
        prev === bigSlides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-10">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4 max-w-7xl mx-auto">
        <h1 className="text-[#004FA6] text-2xl md:text-5xl font-bold mb-2 md:mb-4">
          Why Hira Airtek is trusted?
        </h1>

        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            className="p-2 text-[#004FA6] cursor-pointer border hover:bg-[#004FA6] hover:text-white transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-2 text-[#004FA6] cursor-pointer border hover:bg-[#004FA6] hover:text-white transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* TOP SLIDER */}
      <div className="relative overflow-hidden max-w-7xl mx-auto">
        <div
          className="flex transition-transform duration-500 gap-6"
          style={{ transform: `translateX(-${topIndex * 100}%)` }}
        >
          {topSlides.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="relative h-[260px] sm:h-[320px] md:h-[400px] md:w-[400px] overflow-hidden">
                <img
                  src={img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BIG SLIDER */}
      <div className="relative overflow-hidden mt-10 max-w-7xl mx-auto">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${bigIndex * 100}%)` }}
        >
          {bigSlides.map((img, i) => (
            <div key={i} className="w-full flex-shrink-0">
              <div className="h-[300px] sm:h-[400px] md:h-[600px] overflow-hidden">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <p className="text-gray-700 text-md md:text-2xl max-w-2xl py-5">
          Our role is to simplify execution for our clients by handling
          our scope responsibly and working seamlessly with other
          teams on site.
        </p>

        <button className="px-8 py-3 bg-[#004FA6] text-white md:text-lg cursor-pointer hover:bg-blue-700 transition">
          Send Enquiry
        </button>
      </div>
    </section>
  );
};

export default OurChoice;
