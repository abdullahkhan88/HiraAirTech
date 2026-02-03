import { Outlet, } from "react-router-dom";
import Navbar from "../Components/Client/Navbar.jsx";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const ClientLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}

      <Navbar />
      {/* Main Content */}

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}

      <footer className="bg-[#004FA6] text-white py-10 md:py-16">
        <hr className="hidden md:block text-[#71b6e4]" />
        {/* TOP FOOTER */}
        <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* QUICK LINKS */}
          <div className="md:py-6 px-8 md:border-l-1 border-[#71b6e4]">
            <h3 className="font-bold text-md md:text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-md">
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Services</li>
              <li className="hover:underline cursor-pointer">Projects</li>
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div className="md:border-r-1 border-[#71b6e4] md:py-6 px-8">
            <h3 className="font-bold text-lg mb-4">CONTACT US</h3>
            <ul className="space-y-2 text-sm md:text-md opacity-90">
              <li> +9188582 60701, +9177539 15836,
                +9173797 43372
              </li>
              <li> info@hiraairtech.com</li>

            </ul>
          </div>

          {/* HEAD OFFICE */}
          <div className="py-6 px-8">
            <h3 className="font-bold text-lg">HEAD OFFICE</h3>
            <p className="text-sm md:text-md leading-tight mt-2 opacity-90">
              P-2, Sapna City Colony,<br/>
              New Gomti Nagar, Lucknow-226028
            </p>

            <div className="mt-6">
              <h3 className="font-bold text-md md:text-lg:">OUR BRANCH OFFICE</h3>
              <p className="text-sm md:text-md leading-tight mt-2">
                Matiyari Chinhat Chauraha,<br/>
                New Gomti Nagar, Lucknow-226028
              </p>
            </div>

          </div>

          <div className="py-2 md:py-6 px-8 border-r border-[#71b6e4]">
            <h2 className="text-2xl font-bold mb-4">HiraAirtek</h2>
            <p className="text-sm md:text-md leading-relaxed">
              Your trusted partner for
              complete building solutions.
              We deliver excellence in air
              conditioning, fire safety, and
              interior design.
            </p>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="border-1 border-r-0 border-l-0 border-[#71b6e4]">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row border-[#71b6e4] border-l-1
           border-r-1 items-center justify-between gap-4">
           
             {/* SOCIAL */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold">FOLLOW US</span>
              <FaFacebookF className="text-xl cursor-pointer hover:text-blue-300 transition" />
              <FaInstagram className="text-xl cursor-pointer hover:text-pink-400 transition" />
              <FaWhatsapp className="text-xl cursor-pointer hover:text-green-300 transition" />
            </div>
           
             {/* COPYRIGHT */}
            <p className="text-sm md:text-md opacity-80">
              © {new Date().getFullYear()} HiraAirtech. All rights reserved.
            </p>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default ClientLayout;
