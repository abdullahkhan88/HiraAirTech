import { Link } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white text-blue-700 px-6 py-4 shadow-md relative">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-800">
          HiraAirtech
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium mx-4">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/project" className="hover:text-blue-500">Project</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/services" className="hover:text-blue-500">Services</Link>
          <Link to="/pages" className="hover:text-blue-500">Pages</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 font-medium">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/project" onClick={() => setOpen(false)}>Project</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/pages" onClick={() => setOpen(false)}>Pages</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
