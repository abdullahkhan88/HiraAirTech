import clientImage from "../../assets/OurClient/clinet.png";
import mobileClient from "../../assets/OurClient/mobileClient.png";

import clientLogo from "../../assets/OurClient/Asset-35.png";

const OurClient = () => {
  return (
    <section
      className="relative max-w-xl md:max-w-7xl mx-auto w-full
                 min-h-[20vh] md:min-h-[90vh] lg:min-h-screen
                 flex items-center justify-center py-10 md:py-30"
    >
      {/* mobile Image */}
      <div className="block lg:hidden">
        <img
          src={mobileClient}
          alt="Our Client Mobile"
          className="w-full h-auto object-contain px-4"
        />
      </div>
      {/* Desktop Image */}
      <div className="hidden lg:block">
        <img
          src={clientImage}
          alt="Our Client Desktop"
          className="w-full max-w-md md:max-w-2xl lg:max-w-full
               h-auto object-contain px-4"
        />
      </div>

      {/* Text on Image */}
      <div className="hidden lg:block absolute top-12 md:top-55 left-0 md:left-50 max-w-2xl md:max-w-4xl px-6">
        <h2 className="text-lg px-4 md:px-0 md:text-5xl tracking-tight font-semibold mb-1 md:mb-3 text-[#004fa6]">
          Our Clients
        </h2>

        <p className="text-xs md:text-2xl leading-tight px-4 md:px-0 text-gray-700 md:mt-10">
          We have worked with developers, contractors, institutions, and
          organisations across commercial, industrial, and public-sector
          projects, delivering HVAC, fire safety, and interior works through
          consistent on-site execution.
        </p>
      </div>
    </section>
  );
};

export default OurClient;
