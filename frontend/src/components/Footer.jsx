import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm md:text-base leading-relaxed">
            At AgriTech, we empower farmers with cutting-edge tools, weather forecasts, 
            crop management tips, and expert guidance for sustainable agriculture.
          </p>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm md:text-base">
            Email: <a href="mailto:support@agriinfo.com" className="hover:text-gray-300">support@agriinfo.com</a>
          </p>
          <p className="text-sm md:text-base mt-2">
            Phone: <a href="tel:+1234567890" className="hover:text-gray-300">+123-456-7890</a>
          </p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="h-6 w-6 hover:text-gray-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="h-6 w-6 hover:text-gray-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="h-6 w-6 hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm mt-8 px-4">
        <p>© 2024 AgriTech. All Rights Reserved.</p>
        <div className="space-x-4 mt-4">
          <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-gray-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
