import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage1 from "../img/Home/Hero1.jpg";
import heroImage2 from "../img/Home/Hero2.jpg";
import heroImage3 from "../img/Home/Hero3.jpg";
import heroImage4 from "../img/Home/Hero4.jpg";

const Home = () => {
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change hero image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-72 sm:h-80 md:h-96 lg:h-[450px] bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${heroImages[currentImageIndex]})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Empowering Farmers, Changing Lives
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl">
            Discover tools and resources to enhance your agricultural journey.
          </p>
        </div>
      </div>

      {/* Current Weather Forecast Section */}
      <div className="bg-white py-6 md:py-8 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-4">
            🌤️ Current Weather Forecast
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 text-center">
              <h3 className="text-lg md:text-xl font-bold text-green-600">
                Temperature 🌡️
              </h3>
              <p className="text-gray-600 text-base md:text-lg">27°C</p>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg md:text-xl font-bold text-green-600">
                Condition ☀️
              </h3>
              <p className="text-gray-600 text-base md:text-lg">Sunny</p>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg md:text-xl font-bold text-green-600">
                Humidity 💧
              </h3>
              <p className="text-gray-600 text-base md:text-lg">65%</p>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg md:text-xl font-bold text-green-600">
                Wind Speed 💨
              </h3>
              <p className="text-gray-600 text-base md:text-lg">15 km/h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-6 text-center">
          Explore Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Weather Prediction */}
          <Link
            to="/weather-prediction"
            className="p-6 bg-white shadow-md hover:shadow-lg rounded-md"
          >
            <h3 className="text-lg md:text-xl font-bold text-green-600">
              Weather Prediction 🌤️
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Plan better with accurate weather forecasts for your region.
            </p>
            <p className="mt-4 text-green-500 font-semibold text-sm md:text-base">
              Click to Explore
            </p>
          </Link>

          {/* Crop Guide */}
          <Link
            to="/crop-guide"
            className="p-6 bg-white shadow-md hover:shadow-lg rounded-md"
          >
            <h3 className="text-lg md:text-xl font-bold text-green-600">
              Crop Guide 🌱
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Detailed guides to maximize crop yield and quality.
            </p>
            <p className="mt-4 text-green-500 font-semibold text-sm md:text-base">
              Click to Explore
            </p>
          </Link>

          {/* Recent News */}
          <Link
            to="/recent-news"
            className="p-6 bg-white shadow-md hover:shadow-lg rounded-md"
          >
            <h3 className="text-lg md:text-xl font-bold text-green-600">
              Recent News 📰
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Stay informed about the latest in agriculture.
            </p>
            <p className="mt-4 text-green-500 font-semibold text-sm md:text-base">
              Click to Explore
            </p>
          </Link>

          {/* Expert Support */}
          <Link
            to="/expert-support"
            className="p-6 bg-white shadow-md hover:shadow-lg rounded-md"
          >
            <h3 className="text-lg md:text-xl font-bold text-green-600">
              Expert Support 📞
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Connect with agricultural experts for personalized guidance.
            </p>
            <p className="mt-4 text-green-500 font-semibold text-sm md:text-base">
              Click to Explore
            </p>
          </Link>

          {/* Market Place */}
          <Link
            to="/market-place"
            className="p-6 bg-white shadow-md hover:shadow-lg rounded-md"
          >
            <h3 className="text-lg md:text-xl font-bold text-green-600">
              Market Place 🛒
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Buy and sell agricultural products easily.
            </p>
            <p className="mt-4 text-green-500 font-semibold text-sm md:text-base">
              Click to Explore
            </p>
          </Link>

          {/* About Us */}
          <Link
            to="/about-us"
            className="p-6 bg-white shadow-md hover:shadow-lg rounded-md"
          >
            <h3 className="text-lg md:text-xl font-bold text-green-600">
              About Us ℹ️
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Learn more about our mission and values.
            </p>
            <p className="mt-4 text-green-500 font-semibold text-sm md:text-base">
              Click to Explore
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
