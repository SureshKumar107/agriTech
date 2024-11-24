import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="relative mb-10">
          <img
            src="/images/hero-agriculture.jpg"
            alt="Agriculture landscape"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">
              Empowering Farmers with Technology
            </h1>
          </div>
        </div>

        {/* About Us Header */}
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          At AgriInfo, we strive to revolutionize the agricultural landscape by
          providing farmers with the tools, knowledge, and support they need to
          succeed. Learn about our journey, vision, and commitment to a greener
          future.
        </p>

        {/* Mission, Vision, Offers, Join Us */}
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

        {/* Achievements Section */}
        <div className="mt-12 bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
            📊 Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-700">50k+</h3>
              <p className="text-gray-700">Farmers Empowered</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-700">100+</h3>
              <p className="text-gray-700">Crop Guides Published</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-700">30+</h3>
              <p className="text-gray-700">Experts Onboarded</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-700">20+</h3>
              <p className="text-gray-700">States Reached</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-600 text-center mb-6">
            🌾 What Farmers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "AgriInfo has been a game-changer for me! The weather
                predictions and pest management tips saved my crop this year."
              </p>
              <h3 className="text-blue-600 font-semibold mt-4">
                - Balaji Patil
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Thanks to AgriInfo, I learned sustainable farming techniques
                that increased my yield and income."
              </p>
              <h3 className="text-blue-600 font-semibold mt-4">
                - Suresh Kumar
              </h3>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
