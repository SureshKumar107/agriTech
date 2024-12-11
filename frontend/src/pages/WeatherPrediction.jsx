import React from "react";

const WeatherPrediction = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Header */}
      <header className="flex flex-wrap justify-between items-center p-6 bg-purple-600">
        <h1 className="text-2xl font-bold text-white">🌤️ WEATHER FORECAST</h1>
        <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-center">
          <p className="text-sm md:text-base text-white">Weather in Konotop / Sumy region</p>
          <button className="px-3 py-1 bg-purple-700 hover:bg-purple-600 text-white rounded text-sm md:text-base">
            °C | °F
          </button>
          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="🔍 Search for cities"
              className="w-full bg-white text-gray-700 placeholder-gray-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Weather Overview */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md p-6 rounded mb-6">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-gray-800">📅 Friday 27 July 15:00</p>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <span className="text-6xl font-bold text-purple-600">+22°C</span>
              <p className="text-gray-700">Feels like 23°</p>
            </div>
            <p className="text-sm mt-2 text-gray-600">☁️ The whole day will be cloudy. No precipitation.</p>
            <p className="text-sm text-gray-600">🌅 Sunrise: 4:59 | 🌇 Sunset: 20:47</p>
          </div>
          {/* Right Section */}
          <div className="bg-gray-100 rounded p-4 mt-6 md:mt-0 shadow">
            <h2 className="text-lg font-semibold text-gray-800">📋 More Details:</h2>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>🌬️ Wind speed: 1-8 m/s</li>
              <li>💧 Air humidity: 42-76%</li>
              <li>🌡️ Pressure: 747-749mm</li>
              <li>🌧️ Precipitation probability: 2%</li>
            </ul>
          </div>
        </div>

        {/* Hourly Forecast */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-4 text-gray-800">🕒 Hourly Forecast</h2>
          <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-300">
            {[
              { time: "0:00", temp: 17 },
              { time: "3:00", temp: 16 },
              { time: "6:00", temp: 15 },
              { time: "9:00", temp: 16 },
              { time: "12:00", temp: 22 },
              { time: "15:00", temp: 22 },
              { time: "18:00", temp: 21 },
              { time: "21:00", temp: 19 },
            ].map((hour, index) => (
              <div
                key={index}
                className="bg-purple-100 rounded p-4 flex flex-col items-center min-w-[75px] hover:bg-purple-200 transition duration-200"
              >
                <p className="text-gray-800">{hour.time}</p>
                <p className="text-xl font-bold text-purple-600">{hour.temp}°</p>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Forecast */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-4 text-gray-800">📅 Weekly Forecast</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { day: "Friday", min: 15, max: 22, condition: "Cloudy" },
              { day: "Saturday", min: 12, max: 25, condition: "Partly cloudy" },
              { day: "Sunday", min: 17, max: 28, condition: "Partly cloudy" },
              { day: "Monday", min: 18, max: 29, condition: "Cloudy, light rain" },
              { day: "Tuesday", min: 18, max: 30, condition: "Sunny" },
              { day: "Wednesday", min: 18, max: 29, condition: "Partly cloudy" },
              { day: "Thursday", min: 18, max: 29, condition: "Cloudy, thunderstorm" },
            ].map((day, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded p-4 text-center hover:bg-gray-100 transition duration-200"
              >
                <p className="font-bold text-sm md:text-base text-gray-800">{day.day}</p>
                <p className="text-sm text-gray-700">🌡️ min: {day.min}° | max: {day.max}°</p>
                <p className="text-xs md:text-sm text-gray-600">{day.condition}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Details Section */}
        <div className="mt-6 bg-white shadow-md rounded p-6">
          <h2 className="text-lg font-bold mb-4 text-gray-800">🌟 Weather Insights</h2>
          <p className="text-sm md:text-base mb-4 text-gray-700">
            🌈 Stay updated with live weather changes, and get recommendations for outdoor activities.
            Plan your week efficiently with detailed forecasts and data on wind, humidity, and temperature trends.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>🩺 Health Tips:</strong> Protect yourself from extreme weather conditions. Stay hydrated during heat waves and wear warm clothing during cold days.
            </li>
            <li>
              <strong>✈️ Travel Recommendations:</strong> Check weather updates before heading out to avoid unexpected conditions like heavy rainfall or storms.
            </li>
            <li>
              <strong>🌾 Agriculture Insights:</strong> Monitor precipitation chances and humidity levels to plan irrigation and crop protection effectively.
            </li>
            <li>
              <strong>🏞️ Outdoor Activities:</strong> Find the best times for hiking, biking, or picnics based on hourly and weekly forecasts.
            </li>
            <li>
              <strong>🌍 Climate Awareness:</strong> Observe trends in your region's weather and understand how climate changes might affect daily life.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default WeatherPrediction;
