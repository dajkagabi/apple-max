import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Apple Logo" className="h-8" />
          </Link>
        </div>

        {/* Desktop  */}
        <div className="hidden md:flex space-x-8 items-center text-gray-700">
          <Link
            to="/termekek"
            className="hover:text-black transition-colors duration-300"
          >
            Termékek
          </Link>
          <Link
            to="/funkciok"
            className="hover:text-black transition-colors duration-300"
          >
            Funkciók
          </Link>
          <Link
            to="/dizajn"
            className="hover:text-black transition-colors duration-300"
          >
            Dizájn
          </Link>

          <Link
            to="/adat"
            className="hover:text-black transition-colors duration-300"
          >
            Adatok
          </Link>
          <Link to="/vasarlas">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-black transition-colors duration-300">
              Vásárlás
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile  */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4`}>
        <div className="flex flex-col space-y-2 text-gray-700">
          <Link
            to="/termekek"
            onClick={toggleMenu}
            className="block hover:text-black transition-colors duration-300 py-2 px-4 rounded-md"
          >
            Termékek
          </Link>
          <Link
            to="/funkciok"
            onClick={toggleMenu}
            className="block hover:text-black transition-colors duration-300 py-2 px-4 rounded-md"
          >
            Funkciók
          </Link>
          <Link
            to="/dizajn"
            onClick={toggleMenu}
            className="block hover:text-black transition-colors duration-300 py-2 px-4 rounded-md"
          >
            Dizájn
          </Link>
          <Link
            to="/adat"
            className="hover:text-black transition-colors duration-300"
          >
            Adatok
          </Link>
          <Link to="/vasarlas" onClick={toggleMenu}>
            <button className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300 mt-2">
              Vásárlás
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
