import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import serviceSection from './ServiceSection.jsx'
import slide1 from "../../assets/services/Asset-04.png";
import slide2 from "../../assets/services/Asset-05.png";
import slide3 from "../../assets/services/Asset-06.png";
import mobileslide1 from "../../assets/services/mobileAsset4.png";
import mobileslide2 from "../../assets/services/mobileAsset5.png";
import mobileslide3 from "../../assets/services/mobileAsset6.png";


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
    navigate('/service-section');
  }

  return (
    <>
      {/* hero section */}
      <section className="relative bg-gray-200 min-h-[320px] md:min-h-[350px] flex items-center px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 py-10 md:py-28 px-2 md:px-0">

            {/* LEFT */}
            <div className="text-center lg:text-left  lg:w-md">
              <p className="text-[#004FA6] uppercase text-md md:text-xl font-semibold mb-3">
                Our Services
              </p>

              <h2 className="text-3xl md:text-2xl lg:text-4xl font-bold
               text-gray-900 leading-tight mb-4 md:space-y-4">
                Core technical works
                delivered with precision
                and accountability
              </h2>
            </div>

            {/* RIGHT */}
            <div className="pt-4 md:pt-0">
              <p className="text-gray-900 mb-6 leading-tight text-center lg:text-left text-md sm:text-2xl">
                We deliver HVAC systems, fire fighting services, and
                false ceiling works for commercial and industrial
                projects. Each service is handled by experienced teams
                who understand on-site coordination and take
                responsibility for delivering systems that perform
                reliably after handover.
              </p>

              <div className="text-center lg:text-left">
                <button
                  onClick={handleBookService}
                  className="border-[#004FA6] border-2 text-[#004FA6]
             w-1/2 sm:w-auto
             px-4 md:px-8 py-2 md:py-2
             cursor-pointer text-md md:text-2xl 
             hover:bg-[#004FA6] hover:text-white transition"
                >
                  View Services
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SLIDER SECTION */}
      <section className="bg-gray-200 pb-10 md:pb-20 relative">
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
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 px-4 w-full justify-center">
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
