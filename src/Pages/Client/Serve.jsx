import { useEffect, useState } from "react";
import slide1 from '../../assets/ServeAssets/Asset-17.png';
import slide2 from '../../assets/ServeAssets/Asset-18.png';
import slide3 from '../../assets/ServeAssets/Asset-19.png';

const slides = [slide1, slide2, slide3];

const Serve = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-blue-600 min-h-[90vh] py-10 px-12 flex items-center">
      <div className="max-w-[1400px] mx-auto w-full">

        {/* TOP CONTENT */}
        <div className="text-center mb-14">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Industries We Serve
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-base md:text-lg">
            Established & experienced since 2011, delivering modern and reliable HVAC solutions.
          </p>
          <button className="text-white border px-4 py-1 mt-3 rounded">
            Take a Tour
          </button>
        </div>

        {/* RIGHT ➜ LEFT SLIDER */}
        <div className="relative w-full h-[290px] md:h-[700px] overflow-hidden">

          {/* TRACK */}
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((img, i) => (
              <div key={i} className="w-full h-full flex-shrink-0 p-4 md:p-10 lg:p-14">
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
