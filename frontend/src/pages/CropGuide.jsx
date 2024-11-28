import React from "react";
import { Link } from "react-router-dom";

const CropGuide = () => {
  const crops = [
    {
      name: "Rice",
      emoji: "🌾",
      time: "June - July",
      soil: "Loamy or clay soil",
      tip: "Use pheromone traps for stem borers.",
    },
    {
      name: "Wheat",
      emoji: "🌿",
      time: "October - November",
      soil: "Well-drained loamy soil",
      tip: "Use nitrogen-rich fertilizers during early growth stages.",
    },
    {
      name: "Maize",
      emoji: "🌽",
      time: "February - June",
      soil: "Sandy loam soil",
      tip: "Avoid overwatering; ensure moderate moisture.",
    },
    {
      name: "Cotton",
      emoji: "🌺",
      time: "April - May",
      soil: "Black or red soil",
      tip: "Apply neem oil to control aphids and whiteflies.",
    },
    {
      name: "Tomato",
      emoji: "🍅",
      time: "October - January",
      soil: "Well-drained sandy soil",
      tip: "Regular watering; avoid waterlogging.",
    },
    {
      name: "Potatoes",
      emoji: "🥔",
      time: "October - December",
      soil: "Loamy soil with good drainage",
      tip: "Use potassium-rich fertilizers.",
    },
    {
      name: "Sugarcane",
      emoji: "🍬",
      time: "February - March",
      soil: "Deep, well-drained soil",
      tip: "Requires frequent irrigation.",
    },
    {
      name: "Sunflower",
      emoji: "🌻",
      time: "January - February",
      soil: "Well-drained loamy soil",
      tip: "Use organic sprays to deter pests.",
    },
    {
      name: "Peanuts",
      emoji: "🥜",
      time: "June - July",
      soil: "Light, sandy loam soil",
      tip: "Ensure consistent moisture levels.",
    },
    {
      name: "Carrots",
      emoji: "🥕",
      time: "October - December",
      soil: "Sandy, well-drained soil",
      tip: "Water regularly to keep soil moist.",
    },
    {
      name: "Grapes",
      emoji: "🍇",
      time: "February - April",
      soil: "Sandy loam or clay loam",
      tip: "Use organic compost for better yield.",
    },
    {
      name: "Spinach",
      emoji: "🥬",
      time: "September - February",
      soil: "Moist, fertile soil",
      tip: "Regular, shallow watering.",
    },
  ];

  return (
    <div className="bg-green-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h1 className="text-5xl font-extrabold text-center text-green-800 mb-6">
          🌱 Crop Guide
        </h1>
        <p className="text-xl text-gray-700 text-center mb-10">
          Discover the best practices for growing healthy crops and achieving
          better yields. From sowing techniques to pest management, we’ve got
          you covered!
        </p>

        {/* Dynamic Crop Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {crops.map((crop, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                {crop.emoji} {crop.name}
              </h2>
              <p className="text-gray-700">
                <strong>Sowing Time:</strong> {crop.time} <br />
                <strong>Soil Type:</strong> {crop.soil} <br />
                <strong>Tip:</strong> {crop.tip}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Want detailed crop guidance? Reach out to our expert community for
            personalized advice.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
            <Link to="/contact-experts">Contact Experts</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropGuide;
