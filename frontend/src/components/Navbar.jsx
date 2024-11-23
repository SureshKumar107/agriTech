import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Logo/Logo.jpg";


const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/"><img src={ Logo } alt="AgriTech Logo" className="h-9 w-auto" /></Link>
        </div>
        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/weather-prediction" className="hover:underline">
            Weather Prediction
          </Link>
          <Link to="/crop-guide" className="hover:underline">
            Crop Guide
          </Link>
          <Link to="/recent-news" className="hover:underline">
            Recent News
          </Link>
          <Link to="/market-place" className="hover:underline">
            Market Place
          </Link>
          <Link to="/about-us" className="hover:underline">
            About Us
          </Link>
          <Link to="/contact-us" className="hover:underline">
            Contact Us
          </Link>
          <Link to="/sign-up" className="hover:underline">
            Sign Up
          </Link>
          <Link to="/sign-in" className="hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
