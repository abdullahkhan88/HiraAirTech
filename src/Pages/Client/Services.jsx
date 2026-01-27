import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import serviceSection from './ServiceSection.jsx'
import slide1 from "../../assets/services/Asset-04.png";
import slide2 from "../../assets/services/Asset-05.png";
import slide3 from "../../assets/services/Asset-06.png";


const slides = [slide1, slide2, slide3];

const Services = () => {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  const handleBookService = () => {
    navigate('service-section');
  }

  return (
    <>
      {/* hero section */}
      <section className="relative bg-gray-200 min-h-[320px] md:min-h-[350px] flex items-center px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-4">

            {/* LEFT */}
            <div className="text-center md:text-left w-sm">
              <p className="text-[#004FA6] uppercase tracking-wider font-semibold mb-3">
                Our Services
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-gray-900 leading-thin space-y-1">
                Core technical works
                delivered with precision
                and accountability
              </h2>
            </div>

            {/* RIGHT */}
            <div className="px-0 md:px-6 text-center md:text-left">
              <p className="text-gray-700 mb-6 leading-relaxed text-base sm:text-lg">
                We deliver HVAC systems, fire fighting services, and
                false ceiling works for commercial and industrial
                projects. Each service is handled by experienced teams
                who understand on-site coordination and take
                responsibility for delivering systems that perform
                reliably after handover.
              </p>

              <button onClick={handleBookService} className="bg-[#004FA6] text-white px-2 md:px-6  py-1 md:py-3 cursor-pointer hover:bg-blue-700 transition">
                Book the Services
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SLIDER SECTION */}
      <section className="bg-gray-200 pb-10 relative">
        <div className="overflow-hidden mx-auto w-[90%] md:w-[90%] h-[200px] sm:h-[380px] md:h-[650px]">

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
