import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import slide1 from '../../assets/ServeAssets/Asset-17.png';
import slide2 from '../../assets/ServeAssets/Asset-18.png';
import slide3 from '../../assets/ServeAssets/Asset-19.png';

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
    navigate('project');
  }

  return (
    <section className="w-full bg-[#004FA6] min-h-[90vh] py-16 flex items-center">
      <div className="max-w-[1400px] mx-auto w-full">

        {/* TOP CONTENT */}
        <div className="text-center max-w-full mx-auto mt-6">
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
            Industries we’ve worked across
          </h2>
          <p className="text-blue-100 font-leading max-w-3xl mx-auto text-md md:px-1 px-3 md:text-lg">
            Over the years, Hira Airtek has executed works across diverse industry environments from
            building owners and contractors to architects and manufacturers. Explore the industries we’ve
            served to see where our experience comes from.
          </p>
          <button onClick={handleServe} className="bg-white text-[#004FA6] px-8 py-2 mt-4 font-medium
              hover:bg-[#004FA6] hover:outline hover:outline-2 hover:outline-white md:text-lg
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
              <div key={i} className="w-full h-full flex-shrink-0 mt-12">
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
