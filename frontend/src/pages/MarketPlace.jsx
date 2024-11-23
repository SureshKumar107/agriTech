import React from "react";
import { Link } from "react-router-dom";
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
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Crops & Seeds */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
              🌾 Crops & Seeds
            </h2>
            <img
              src="https://via.placeholder.com/300x200.png?text=Fresh+Seeds"
              alt="Crops & Seeds"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 mb-4">
              Buy and sell high-quality crops and certified seeds. Find
              everything from rice and wheat to exotic vegetables and fruits.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg text-yellow-700 font-semibold">$25 - $100</span>
              <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
                Buy Now
              </button>
            </div>
          </div>

          {/* Tools & Equipment */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
              🛠️ Tools & Equipment
            </h2>
            <img
              src="https://via.placeholder.com/300x200.png?text=Farming+Tools"
              alt="Tools & Equipment"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 mb-4">
              Discover affordable farming tools and machinery. From tractors to
              irrigation systems, we’ve got it all!
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg text-yellow-700 font-semibold">$150 - $500</span>
              <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
                Buy Now
              </button>
            </div>
          </div>

          {/* Fertilizers & Pesticides */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
              🧪 Fertilizers & Pesticides
            </h2>
            <img
              src="https://via.placeholder.com/300x200.png?text=Fertilizers"
              alt="Fertilizers & Pesticides"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 mb-4">
              Access organic and chemical fertilizers, as well as pest control
              solutions, to ensure healthy crops and a thriving farm.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg text-yellow-700 font-semibold">$10 - $50</span>
              <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
                Buy Now
              </button>
            </div>
          </div>

          {/* Agricultural Services */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
              🤝 Agricultural Services
            </h2>
            <img
              src="https://via.placeholder.com/300x200.png?text=Services"
              alt="Agricultural Services"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 mb-4">
              Connect with experts offering services such as soil testing,
              irrigation planning, and crop consultation.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg text-yellow-700 font-semibold">$30 - $200</span>
              <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
                Contact Now
              </button>
            </div>
          </div>

          {/* Livestock & Poultry */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
              🐄 Livestock & Poultry
            </h2>
            <img
              src="https://via.placeholder.com/300x200.png?text=Livestock"
              alt="Livestock & Poultry"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 mb-4">
              Buy and sell livestock, poultry, and related products. Ensure you
              get healthy animals for your farm.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg text-yellow-700 font-semibold">$100 - $1000</span>
              <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
                Contact Seller
              </button>
            </div>
          </div>

          {/* Organic Products */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
              🥗 Organic Products
            </h2>
            <img
              src="https://via.placeholder.com/300x200.png?text=Organic+Produce"
              alt="Organic Products"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 mb-4">
              Shop for fresh organic produce or sell your homegrown fruits and
              vegetables directly to consumers.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg text-yellow-700 font-semibold">$5 - $40</span>
              <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to start trading? Join our community and connect with buyers
            and sellers today!
          </p>

          <Link to= '/tradepage'>
          
          <button className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700 transition">
            Start Trading
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
