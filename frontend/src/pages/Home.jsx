import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Manage image state
  const [currentImage, setCurrentImage] = useState(
    "https://via.placeholder.com/600x300.png?text=Agriculture+1"
  );

  // Function to change image when clicked
  const handleImageClick = (imageUrl) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="p-6 bg-gradient-to-b from-green-100 via-white to-green-50 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Welcome to AgriInfo 🌾
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your one-stop solution for empowering farmers with the latest
          agricultural insights. Discover tools, tips, and updates to enhance
          your farming journey.
        </p>

        {/* Interactive Image */}
        <div className="mb-8">
          <img
            src={currentImage}
            alt="Agriculture"
            className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleImageClick("https://via.placeholder.com/600x300.png?text=Agriculture+2")}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Weather Prediction */}
          <Link to="/weather-prediction" className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105">
            <h2 className="text-xl font-semibold text-green-600 mb-3">
              🌤️ Weather Prediction
            </h2>
            <p className="text-gray-700 mb-4">
              Get accurate weather forecasts tailored to your region to plan
              your farming activities better.
            </p>
            <p className="text-green-500 font-semibold">Click to Explore</p>
          </Link>

          {/* Crop Guides */}
          <Link to="/crop-guide" className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105">
            <h2 className="text-xl font-semibold text-green-600 mb-3">
              🌱 Crop Guides
            </h2>
            <p className="text-gray-700 mb-4">
              Access detailed guides on various crops, including sowing methods,
              pest control, and harvesting tips.
            </p>
            <p className="text-green-500 font-semibold">Click to Explore</p>
          </Link>

          {/* Recent News */}
          <Link to="/recent-news" className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105">
            <h2 className="text-xl font-semibold text-green-600 mb-3">
              📰 Recent News
            </h2>
            <p className="text-gray-700 mb-4">
              Stay updated with the latest agricultural news and government
              policies impacting farmers.
            </p>
            <p className="text-green-500 font-semibold">Click to Explore</p>
          </Link>

          {/* Expert Support */}
          <Link to="/expert-support" className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105">
            <h2 className="text-xl font-semibold text-green-600 mb-3">
              📞 Expert Support
            </h2>
            <p className="text-gray-700 mb-4">
              Connect with agricultural experts for personalized advice and
              problem-solving.
            </p>
            <p className="text-green-500 font-semibold">Click to Explore</p>
          </Link>
        </div>

        <div className="mt-10">
          <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
