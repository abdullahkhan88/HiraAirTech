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
  {
    img: topslide1,
    title: "Experienced Team",
  },
  {
    img: topslide2,
    title: "After-Work Support",
  },
  {
    img: topslide3,
    title: "Integrated Works",
  },
  {
    img: topslide4,
    title: "Cost Effective",
  },
  {
    img: topslide5,
    title: "Quality Focus",
  },
  {
    img: topslide6,
    title: "Timely Completion",
  },
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

  /*  const totalSteps = Math.ceil(topSlides.length / visibleCount); */
  const maxIndex = topSlides.length - visibleCount;


  const handlePrev = () => {
    setTopIndex(prev => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setTopIndex(prev => (prev < maxIndex ? prev + 1 : 0));
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
    <section className="w-full bg-white py-5 md:py-20">
      {/* HEADER */}
      <div className="flex justify-between items-center max-w-7xl mx-auto py-5 md:py-10">
        <h1 className="text-[#004FA6] tracking-tight flex items-center px-6 md:px-0 text-xl md:text-5xl font-bold">
          Why Hira Airtek is trusted?
        </h1>

        <div className="flex items-center px-6 md:px-0  gap-3">
          <button
            onClick={handlePrev}
            className="p-2 text-[#004FA6] border hover:bg-[#004FA6] hover:text-white transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-2 text-[#004FA6] border hover:bg-[#004FA6] hover:text-white transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>


      {/* TOP SLIDER */}
      <div className="relative overflow-hidden max-w-[1320px] mx-auto">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${topIndex * (100 / visibleCount)}%)` }}
        >
          {topSlides.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="relative h-[390px] sm:h-[320px] md:h-[410px] md:w-[440px] overflow-hidden">

                {/* 🔹 IMAGE */}
                <img
                  src={item.img}
                  alt=""
                  className="absolute inset-0 w-full px-4 h-full object-contain"
                />

                {/* 🔹 TEXT OVER IMAGE */}
                <div className="absolute bottom-5 left-10 z-100">
                  <h3 className="text-white text-xl md:text-2xl font-semibold">
                    {item.title}
                  </h3>

                </div>


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
            <div key={i} className="w-full flex-shrink-0 px-4 md:px-2">
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
      <div className="mt-8 flex flex-col md:flex-row
       items-center justify-between max-w-7xl mx-auto">
        <p className="text-gray-700 px-6 md:px-0  text-md md:text-3xl max-w-3xl py-2 md:py-5">
          Our role is to simplify execution for our clients by handling
          our scope responsibly and working seamlessly with other
          teams on site.
        </p>

        <button className="px-17 py-1.5 bg-[#004FA6] text-white md:text-2xl cursor-pointer transition">
          Send Enquiry
        </button>
      </div>
    </section>
  );
};

export default OurChoice;
