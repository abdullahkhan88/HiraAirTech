import { Link } from "react-router-dom";
import { useState } from "react";
import NavLogo from "../../assets/NavAssets/hiralogo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white text-blue-700 px-4 md:px-20 py-4 shadow-md relative z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={NavLogo}
            alt="Logo"
            className="w-20 md:w-28"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          {["Home", "Project", "About", "Services", "Pages", "Contact"].map(
            (item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative hover:text-blue-500
                after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px]
                after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100
                after:transition-transform after:origin-left"
              >
                {item}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md
        transition-all duration-300 ease-in-out
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <div className="flex flex-col gap-5 px-6 py-6 font-medium">
          {["Home", "Project", "About", "Services", "Pages", "Contact"].map(
            (item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="hover:text-blue-500"
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
