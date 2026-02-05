import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import slide1 from '../../assets/ServeAssets/Industries-01.png';
import slide2 from '../../assets/ServeAssets/Industries-02.png';
import slide3 from '../../assets/ServeAssets/Industries-03.png';

const slides = [slide1, slide2, slide3];

const Serve = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleServe = () => {
    navigate('industries');
  }

  return (
    <section className="w-full bg-[#004FA6] md:min-h-[90vh] py-8 md:py-16 flex items-center">
      <div className="max-w-[1400px] mx-auto w-full">

        {/* TOP CONTENT */}
        <div className="text-center max-w-full mx-auto mt-2 md:mt-6">
          <h2 className="text-white text-2xl px-4 md:px-2 md:text-5xl font-bold mb-4">
            Industries we’ve worked across
          </h2>
          <p className="text-blue-100 font-leading max-w-4xl px-6 md:px-0 mx-auto text-md md:text-2xl">
            Over the years, Hira Airtek has executed works across diverse industry environments from
            building owners and contractors to architects and manufacturers. Explore the industries we’ve
            served to see where our experience comes from.
          </p>
          <button onClick={handleServe} className="bg-white text-[#004FA6] px-4 md:px-14 py-2 md:py-4 mt-6 font-medium
              hover:bg-[#004FA6] hover:outline hover:outline-2 hover:outline-white text-lg md:text-2xl
                cursor-pointer hover:text-white transition duration-300">
            Take a Tour
          </button>
        </div>

        {/* RIGHT ➜ LEFT SLIDER */}
        <div className="relative w-full mx-auto md:max-w-7xl h-[290px] md:h-[650px] overflow-hidden">

          {/* TRACK */}
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((img, i) => (
              <div key={i} className="w-full h-[30vh] md:h-full flex-shrink-0 mt-12 px-4 md:px-6">
                <img
                  src={img}
                  alt="service"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Serve;
