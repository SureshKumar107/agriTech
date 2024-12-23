import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Logo/Logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-800 text-red shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div>
          <Link to="/">
            <img src={Logo} alt="AgriTech Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute lg:static top-full left-0 w-full bg-gradient-to-r from-green-600 to-green-800 lg:flex lg:items-center lg:space-x-6 text-lg lg:w-auto z-50`}
        >
          <Link
            to="/"
            className="block lg:inline-block px-2 py-1 hover:underline text-left"
          >
            Home
          </Link>
          <Link
            to="/weather-prediction"
            className="block lg:inline-block px-2 py-1 hover:underline text-left"
          >
            Weather Prediction
          </Link>
          <Link
            to="/crop-guide"
            className="block lg:inline-block px-2 py-1 hover:underline text-left"
          >
            Crop Guide
          </Link>
          <Link
            to="/recent-news"
            className="block lg:inline-block px-2 py-1 hover:underline text-left"
          >
            Recent News
          </Link>
          <Link
            to="/about-us"
            className="block lg:inline-block px-2 py-1 hover:underline text-left"
          >
            About Us
          </Link>
          <Link
            to="/register"
            className="block lg:inline-block px-2 py-1 bg-green-700 rounded-full hover:bg-green-600 lg:ml-4 text-left"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="block lg:inline-block px-2 py-1 bg-green-700 rounded-full hover:bg-green-600 lg:ml-4 text-left"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
