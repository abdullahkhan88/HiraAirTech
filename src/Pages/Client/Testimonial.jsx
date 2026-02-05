import reachImg from "../../assets/Testimonial/Asset-33.png";
import ImgMobile from "../../assets/Testimonial/mobileBanner.png"; 
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();

  const handleQuations = () => {
    navigate("/enquiryform");
  };

  return (
    <section className="w-full h-[70vh] md:h-screen relative">

      {/* DESKTOP IMAGE */}
      <img
        src={reachImg}
        alt="Reach Out Today"
        className="hidden md:block w-full h-full object-cover"
      />

      {/* MOBILE IMAGE */}
      <img
        src={ImgMobile}
        alt="Reach Out Today"
        className="block md:hidden w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div
        className="
          absolute 
          bottom-75 left-8 right-4 
          md:bottom-auto md:left-20 md:top-20 md:right-auto
        "
      >
        {/* TEXT (DESKTOP ONLY) */}
        <h2 className="hidden md:block text-[#004FA6] text-5xl font-semibold">
          Let’s discuss your project
        </h2>

        <p className="hidden md:block text-gray-900 mt-4 text-2xl max-w-xl">
          Share your requirement with us. Our team will review the scope and
          provide a clear project quotation.
        </p>

        {/* BUTTON (MOBILE + DESKTOP) */}
        <button
          onClick={handleQuations}
          className="
            mt-4 
            bg-[#004FA6] 
            text-white 
            text-sm md:text-lg 
            px-4 md:px-6 
            py-2 md:py-3 
          "
        >
          Request a Quotation
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
