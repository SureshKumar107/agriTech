import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          At AgriInfo, we strive to revolutionize the agricultural landscape by
          providing farmers with the tools, knowledge, and support they need to
          succeed. Learn about our journey, vision, and commitment to a greener
          future.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Our Mission */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              🌟 Our Mission
            </h2>
            <p className="text-gray-700">
              Our mission is to empower farmers by bridging the gap between
              technology and agriculture. We aim to provide reliable weather
              predictions, crop management techniques, and valuable insights to
              help farmers maximize their yield and income.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              🌏 Our Vision
            </h2>
            <p className="text-gray-700">
              We envision a future where every farmer has access to modern
              resources and is equipped to combat climate change, ensure food
              security, and practice sustainable farming methods.
            </p>
          </div>

          {/* What We Offer */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              💡 What We Offer
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Accurate and localized weather forecasts</li>
              <li>Comprehensive crop guides and pest management tips</li>
              <li>Access to the latest agricultural news and policies</li>
              <li>Support from a network of agricultural experts</li>
            </ul>
          </div>

          {/* Join Us */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              🤝 Join Us
            </h2>
            <p className="text-gray-700">
              Whether you’re a farmer, agricultural enthusiast, or technology
              innovator, we welcome you to join our community. Together, we can
              build a brighter and more sustainable future for agriculture.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
