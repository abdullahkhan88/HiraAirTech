import clientImage from "../../assets/OurClient/symbol.svg";
import clientLogo from "../../assets/OurClient/Asset-34.png";

const OurClient = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src={clientImage}
        alt="Client Pattern"
        className="
          absolute top-12 left-0
          w-full h-[600px]
          object-contain
          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-10 md:pt-24">
        <h2 className="text-xl md:text-3xl font-bold uppercase text-blue-500 mb-3">
          Our Clients
        </h2>

        <p className="max-w-md text-gray-700 mb-16">
          We collaborate with trusted brands and clients across multiple
          industries worldwide.
        </p>

        {/* CLIENT LOGOS */}
        <div className="p-12">
          <img src={clientLogo} alt="Client Logo" />
        </div>
      </div>
    </section>
  );
};

export default OurClient;
