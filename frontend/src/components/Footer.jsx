import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid Layout for Footer */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-200">
              We are AgriInfo, committed to helping farmers through advanced
              agricultural tools, weather predictions, crop guides, and expert
              advice.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-200">Email: support@agriinfo.com</p>
            <p className="text-gray-200">Phone: +123-456-7890</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-200 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-200 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-200 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section for Copyright and Legal Links */}
        <div className="mt-8 text-center text-gray-200 text-sm">
          <p>© 2024 AgriInfo, All Rights Reserved.</p>
          <div className="mt-2">
            <a
              href="/privacy-policy"
              className="text-gray-200 hover:text-white mr-4 transition"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-gray-200 hover:text-white transition"
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
