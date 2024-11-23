import React from "react";

const MarketPlace = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 via-white to-yellow-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center text-yellow-700 mb-6">
          🛒 Market Place
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          Explore a thriving marketplace for buying and selling agricultural
          products, tools, and services. Connect with sellers and buyers
          directly!
        </p>

        {/* Categories Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Products */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
              🌾 Crops & Seeds
            </h2>
            <p className="text-gray-700">
              Buy and sell high-quality crops and certified seeds. Find
              everything from rice and wheat to exotic vegetables and fruits.
            </p>
          </div>

          {/* Tools */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
              🛠️ Tools & Equipment
            </h2>
            <p className="text-gray-700">
              Discover affordable farming tools and machinery. From tractors to
              irrigation systems, we’ve got it all!
            </p>
          </div>

          {/* Fertilizers */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
              🧪 Fertilizers & Pesticides
            </h2>
            <p className="text-gray-700">
              Access organic and chemical fertilizers, as well as pest control
              solutions, to ensure healthy crops and a thriving farm.
            </p>
          </div>

          {/* Services */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
              🤝 Agricultural Services
            </h2>
            <p className="text-gray-700">
              Connect with experts offering services such as soil testing,
              irrigation planning, and crop consultation.
            </p>
          </div>

          {/* Livestock */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
              🐄 Livestock & Poultry
            </h2>
            <p className="text-gray-700">
              Buy and sell livestock, poultry, and related products. Ensure you
              get healthy animals for your farm.
            </p>
          </div>

          {/* Organic Products */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
              🥗 Organic Products
            </h2>
            <p className="text-gray-700">
              Shop for fresh organic produce or sell your homegrown fruits and
              vegetables directly to consumers.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to start trading? Join our community and connect with buyers
            and sellers today!
          </p>
          <button className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700 transition">
            Start Trading
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
