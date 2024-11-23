import React from "react";

const CropGuide = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 via-white to-green-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
          🌱 Crop Guide
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          Discover the best practices for growing healthy crops and achieving
          better yields. From sowing techniques to pest management, we’ve got
          you covered!
        </p>

        {/* Crop Sections */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Crop: Rice */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              🌾 Rice
            </h2>
            <p className="text-gray-700">
              <strong>Sowing Time:</strong> June - July <br />
              <strong>Soil Type:</strong> Loamy or clay soil <br />
              <strong>Pest Control:</strong> Use pheromone traps for stem
              borers.
            </p>
          </div>

          {/* Crop: Wheat */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              🌿 Wheat
            </h2>
            <p className="text-gray-700">
              <strong>Sowing Time:</strong> October - November <br />
              <strong>Soil Type:</strong> Well-drained loamy soil <br />
              <strong>Fertilizer:</strong> Use nitrogen-rich fertilizers during
              early growth stages.
            </p>
          </div>

          {/* Crop: Maize */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              🌽 Maize
            </h2>
            <p className="text-gray-700">
              <strong>Sowing Time:</strong> February - June <br />
              <strong>Soil Type:</strong> Sandy loam soil <br />
              <strong>Watering:</strong> Avoid overwatering; ensure moderate
              moisture.
            </p>
          </div>

          {/* Crop: Cotton */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              🌺 Cotton
            </h2>
            <p className="text-gray-700">
              <strong>Sowing Time:</strong> April - May <br />
              <strong>Soil Type:</strong> Black or red soil <br />
              <strong>Pest Control:</strong> Apply neem oil to control aphids
              and whiteflies.
            </p>
          </div>

          {/* Crop: Tomato */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              🍅 Tomato
            </h2>
            <p className="text-gray-700">
              <strong>Sowing Time:</strong> October - January <br />
              <strong>Soil Type:</strong> Well-drained sandy soil <br />
              <strong>Watering:</strong> Regular watering; avoid waterlogging.
            </p>
          </div>

          {/* Crop: Potatoes */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              🥔 Potatoes
            </h2>
            <p className="text-gray-700">
              <strong>Sowing Time:</strong> October - December <br />
              <strong>Soil Type:</strong> Loamy soil with good drainage <br />
              <strong>Fertilizer:</strong> Use potassium-rich fertilizers.
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Want detailed crop guidance? Reach out to our expert community for
            personalized advice.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
            Contact Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropGuide;
