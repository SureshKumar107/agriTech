import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate fade-in effect after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer
      className={`bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-10 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid Layout for Footer */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* About Us Section */}
          <div className="transition-transform transform hover:-translate-y-1 duration-300">
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-300 leading-relaxed">
              At AgriTech, we empower farmers with cutting-edge tools, weather
              forecasts, crop management tips, and expert guidance for
              sustainable agriculture.
            </p>
          </div>

          {/* Contact Section */}
          <div className="transition-transform transform hover:-translate-y-1 duration-300">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              Email:{" "}
              <a
                href="mailto:support@agriinfo.com"
                className="underline hover:text-white transition"
              >
                support@agriinfo.com
              </a>
            </p>
            <p className="text-gray-300 mt-2">
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="underline hover:text-white transition"
              >
                +123-456-7890
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="transition-transform transform hover:-translate-y-1 duration-300">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition duration-300"
              >
                <FaFacebook className="h-8 w-8 text-gray-300 hover:text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition duration-300"
              >
                <FaTwitter className="h-8 w-8 text-gray-300 hover:text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition duration-300"
              >
                <FaInstagram className="h-8 w-8 text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section for Copyright and Links */}
        <div className="mt-10 border-t border-blue-500 pt-6 text-center text-gray-300 text-sm">
          <p>© 2024 AgriTech. All Rights Reserved.</p>
          <div className="mt-3 space-x-4">
            <a
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-white transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
