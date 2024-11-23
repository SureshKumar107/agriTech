import React from "react";
import { Link } from "react-router-dom";

const WeatherPrediction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Weather Prediction
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Access precise weather forecasts and climate insights to optimize your
          farming practices.
        </p>

        {/* Weather Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Current Weather */}
          <div className="bg-blue-100 rounded-lg p-4 shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Current Weather
            </h2>
            <p className="text-gray-700">Sunny</p>
            <p className="text-gray-600">Temperature: 30°C</p>
            <p className="text-gray-600">Humidity: 40%</p>
          </div>

          {/* Weekly Forecast */}
          <div className="bg-green-100 rounded-lg p-4 shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              Weekly Forecast
            </h2>
            <ul className="text-gray-700">
              <li>Monday: Rainy, 25°C</li>
              <li>Tuesday: Cloudy, 28°C</li>
              <li>Wednesday: Sunny, 32°C</li>
              <li>Thursday: Windy, 30°C</li>
              <li>Friday: Sunny, 33°C</li>
            </ul>
          </div>

          {/* Weather Alerts */}
          <div className="bg-red-100 rounded-lg p-4 shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold text-red-700 mb-2">
              Weather Alerts
            </h2>
            <p className="text-gray-700">
              ⚠️ High winds expected in the northern regions.
            </p>
            <p className="text-gray-700">
              ⚠️ Heavy rainfall forecasted on Monday.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-8 bg-blue-50 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Plan Your Activities with Confidence
          </h2>
          <p className="text-gray-600 mb-4">
            Use our advanced weather prediction tools to stay prepared for any
            weather changes and make informed farming decisions.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-200">
          <Link to="/detailed-forecast">
           View Detailed Forecast
           </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherPrediction;
