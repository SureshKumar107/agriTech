import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../img/Home/Background.jpg"; // Ensure this path is correct

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="max-w-4xl mx-auto text-center p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-6">
          Welcome to AgriTech 🌾
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-8">
          Your one-stop solution for empowering farmers with the latest
          agricultural insights. Discover tools, tips, and updates to enhance
          your farming journey.
        </p>

        {/* Current Weather Forecast Section */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-10 transition transform hover:scale-105">
          <h2 className="text-lg md:text-xl font-semibold text-green-600 mb-4">
            🌤️ Current Weather Forecast
          </h2>
          <div className="text-left text-gray-700">
            <p className="flex items-center">
              <span className="font-bold text-green-600">Temperature:</span> 28°C{" "}
              <span role="img" aria-label="sun" className="ml-2">☀️</span>
            </p>
            <p className="flex items-center">
              <span className="font-bold text-green-600">Condition:</span> Sunny{" "}
              <span role="img" aria-label="sun with face" className="ml-2">🌞</span>
            </p>
            <p className="flex items-center">
              <span className="font-bold text-green-600">Humidity:</span> 45%{" "}
              <span role="img" aria-label="droplet" className="ml-2">💧</span>
            </p>
            <p className="flex items-center">
              <span className="font-bold text-green-600">Wind Speed:</span> 10 km/h{" "}
              <span role="img" aria-label="wind" className="ml-2">💨</span>
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Weather Prediction */}
          <Link
            to="/weather-prediction"
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 hover:bg-green-50"
          >
            <h2 className="text-lg md:text-xl font-semibold text-green-600 mb-3">
              🌤️ Weather Prediction
            </h2>
            <p className="text-gray-700 mb-4">
              Get accurate weather forecasts tailored to your region to plan
              your farming activities better.
            </p>
            <p className="text-green-500 font-semibold">Click to Explore</p>
          </Link>

          {/* Crop Guides */}
          <Link
            to="/crop-guide"
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 hover:bg-green-50"
          >
            <h2 className="text-lg md:text-xl font-semibold text-green-600 mb-3">
              🌱 Crop Guides
            </h2>
            <p className="text-gray-700 mb-4">
              Access detailed guides on various crops, including sowing methods,
              pest control, and harvesting tips.
            </p>
            <p className="text-green-500 font-semibold">Click to Explore</p>
          </Link>

          {/* Recent News */}
          <Link
            to="/recent-news"
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 hover:bg-green-50"
          >
            <h2 className="text-lg md:text-xl font-semibold text-green-600 mb-3">
              📰 Recent News
            </h2>
            <p className="text-gray-700 mb-4">
              Stay updated with the latest agricultural news and government
              policies impacting farmers.
            </p>
            <p className="text-green-500 font-semibold">Click to Explore</p>
          </Link>

          {/* Expert Support */}
          <Link
            to="/expert-support"
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 hover:bg-green-50"
          >
            <h2 className="text-lg md:text-xl font-semibold text-green-600 mb-3">
              📞 Expert Support
            </h2>
            <p className="text-gray-700 mb-4">
              Connect with agricultural experts for personalized advice and
              problem-solving.
            </p>
            <p className="text-green-500 font-semibold">Click to Explore</p>
          </Link>

          {/* Market Place */}
          <Link
            to="/market-place"
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 hover:bg-green-50"
          >
            <h2 className="text-lg md:text-xl font-semibold text-green-600 mb-3">
              🛒 Market Place
            </h2>
            <p className="text-gray-700 mb-4">
              Discover a wide range of tools, seeds, and services designed to
              enhance your agricultural journey.
            </p>
            <p className="text-green-500 font-semibold">Click to Explore</p>
          </Link>

          {/* About Us */}
          <Link
            to="/about-us"
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 hover:bg-green-50"
          >
            <h2 className="text-lg md:text-xl font-semibold text-green-600 mb-3">
              ℹ️ About Us
            </h2>
            <p className="text-gray-700 mb-4">
              Transforming lives with innovative, sustainable solutions for a
              brighter future.
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
