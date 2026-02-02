import clientImage from "../../assets/OurClient/clinet.png";
import clientLogo from "../../assets/OurClient/Asset-34.png";

const OurClient = () => {
  return (
    <section
      className="relative max-w-xl md:max-w-7xl mx-auto w-full
                 min-h-[20vh] md:min-h-[90vh] lg:min-h-screen
                 flex items-center justify-center py-30"
    >
      {/* Image */}
      <img
        src={clientImage}
        alt="Our Client"
        className="w-full hidden md:block max-w-md md:max-w-2xl lg:max-w-full
                   h-auto object-contain"
      />

      {/* Text on Image */}
      <div className="absolute top:0 md:top-55 left-0 md:left-50 max-w-2xl md:max-w-4xl px-6">
        <h2 className="text-2xl md:text-5xl tracking-tight font-semibold mb-3 text-[#004fa6]">
          Our Clients
        </h2>

        <p className="text-sm md:text-2xl leading-tight text-gray-700 md:mt-10">
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
