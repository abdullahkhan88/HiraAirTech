import { Outlet, } from "react-router-dom";
import Navbar from "../Components/Client/Navbar.jsx";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

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

      <footer className="bg-[#004FA6] text-white py-6">
        {/* TOP FOOTER */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 md:border-1 md:border-b-0 gap-10">
          {/* QUICK LINKS */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Services</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div className="md:border-r-1">
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li> +91 98765 43210</li>
              <li> info@hiraairtech.com</li>
              <li> Mon – Sat: 10AM – 6PM</li>
            </ul>
          </div>

          {/* HEAD OFFICE */}
          <div>
            <h3 className="font-bold text-lg mb-4">Head Office</h3>
            <p className="text-sm leading-relaxed opacity-90">
              2nd Floor, Industrial Area,
              New Delhi – 110001, India
            </p>

          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">HiraAirtech</h2>
            <p className="text-sm leading-relaxed opacity-90">
              Delivering reliable air solutions with precision and quality for
              modern infrastructure.
            </p>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="border-1 border-r-0 border-l-0 border-white">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

            {/* COPYRIGHT */}
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} HiraAirtech. All rights reserved.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold">Follow Us</span>
              <FaInstagram className="text-xl cursor-pointer hover:text-pink-400 transition" />
              <FaFacebookF className="text-xl cursor-pointer hover:text-blue-300 transition" />
            </div>

          </div>
        </div>

      </footer>
    </div>
  );
};

export default ClientLayout;
