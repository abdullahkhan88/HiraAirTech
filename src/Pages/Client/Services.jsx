import { useEffect, useState } from "react";
import slide1 from "../../assets/services/Asset-04.png";
import slide2 from "../../assets/services/Asset-05.png";
import slide3 from "../../assets/services/Asset-06.png";


const slides = [slide1, slide2, slide3];

const Services = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* hero section */}
      <section className="relative bg-gray-100 min-h-[420px] md:min-h-[500px] flex items-center px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div className="text-center md:text-left">
              <p className="text-blue-600 uppercase tracking-wider font-semibold mb-3">
                Our Services
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight space-y-1">
                <p>What we offer?</p>
                <p>Build with Precision.</p>
                <p>Design to Scale.</p>
              </h2>
            </div>

            {/* RIGHT */}
            <div className="px-0 md:px-6 text-center md:text-left">
              <p className="text-gray-700 mb-6 leading-relaxed text-base sm:text-lg">
                Today, under the name of Hira Airtech, we provide comprehensive HVAC
                system, fire-fighting services, and false-ceiling / interior work —
                offering our clients an integrated, end-to-end solutions.
              </p>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Book the Services
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SLIDER SECTION */}
      <section className="bg-gray-100 py-10 relative overflow-hidden">
        <div className="overflow-hidden w-full h-[240px] sm:h-[380px] md:h-[600px]">

          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((img, index) => (
              <div key={index} className="min-w-full h-full">
                <img
                  src={img}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* INDICATOR */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 w-full justify-center">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-[3px] w-12 sm:w-32 md:w-56 cursor-pointer transition-all duration-300
                ${current === index ? "bg-blue-500" : "bg-white/60"}`}
              />
            ))}
          </div>

        </div>
      </section>

  
      
    </>
  );
};

export default Services;
