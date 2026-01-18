import clientImage from "../../assets/OurClient/Asset-35.png";
import clientLogo from "../../assets/OurClient/Asset-34.png";

const OurClient = () => {
  return (
    <section className="relative max-w-xl md:max-w-5xl  mx-auto w-full min-h-[30vh] md:min-h-[100vh] lg:min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src={clientImage}
        alt="Client Pattern"
        className="
          absolute md:top-10
           max-h-[auto]
          md:max-w-full
          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div className="relative h-30 sm:h-24 md:h-[250px] top-0 md:top-35 z-10 sm:max-w-xs md:max-w-3xl mx-auto p-8">
        <h2 className="text-md px-6 md:text-3xl font-bold uppercase text-blue-500">
          Our Clients
        </h2>

        <p className="max-w-md text-md md:text-xl text-gray-700 px-6 mb-16">
          We collaborate with trusted brands and clients across multiple
          industries worldwide.
        </p>

        {/* CLIENT LOGOS */}
        
      </div>
      <div className="relative max-w-xs md:max-w-3xl left-10  top-10 md:top-20 md:left-36 md:p-6">
          <img src={clientLogo} alt="Client Logo" />
        </div>
    </section>
  );
};

export default OurClient;
