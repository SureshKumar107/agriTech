import React, { useState } from "react";
import cropsAndSeeds from "../img/TradingPage/image1.jpg";
import farmingTractors from "../img/TradingPage/image2.jpg";
import naturalFertilizer from "../img/TradingPage/image3.jpg";
import agriculturalConsultation from "../img/TradingPage/image4.jpg";
import freshOrganicApples from "../img/TradingPage/image5.jpg";
import livestockCows from "../img/TradingPage/image6.jpg";

// Sample Data for Products
const products = [
  {
    id: 1,
    name: "Organic Wheat Seeds",
    category: "Crops & Seeds",
    price: 30,
    image: cropsAndSeeds,
  },
  {
    id: 2,
    name: "Farming Tractors",
    category: "Tools & Equipment",
    price: 200,
    image: farmingTractors,
  },
  {
    id: 3,
    name: "Natural Fertilizer",
    category: "Fertilizers & Pesticides",
    price: 25,
    image: naturalFertilizer,
  },
  {
    id: 4,
    name: "Agricultural Consultation",
    category: "Agricultural Services",
    price: 100,
    image: agriculturalConsultation,
  },
  {
    id: 5,
    name: "Fresh Organic Apples",
    category: "Organic Products",
    price: 15,
    image: freshOrganicApples,
  },
  {
    id: 6,
    name: "Livestock - Cows",
    category: "Livestock & Poultry",
    price: 500,
    image: livestockCows,
  },
];

const TradingPage = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-gradient-to-b from-yellow-50 via-white to-yellow-100 min-h-screen p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-yellow-700 mb-6">
          🛒 Trading Page
        </h1>

        {/* Filters Section */}
        <div className="mb-8 text-center">
          <select
            className="border border-yellow-600 p-2 rounded-md w-full sm:w-auto"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Crops & Seeds">Crops & Seeds</option>
            <option value="Tools & Equipment">Tools & Equipment</option>
            <option value="Fertilizers & Pesticides">
              Fertilizers & Pesticides
            </option>
            <option value="Agricultural Services">Agricultural Services</option>
            <option value="Organic Products">Organic Products</option>
            <option value="Livestock & Poultry">Livestock & Poultry</option>
          </select>
        </div>

        {/* Product Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105"
            >
              <h2 className="text-lg sm:text-2xl font-semibold text-yellow-600 mb-4">
                {product.name}
              </h2>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 sm:h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-700 mb-2">{product.category}</p>
              <span className="text-lg text-yellow-700 font-semibold">
                ${product.price}
              </span>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-4">
            Your Cart
          </h2>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            {cart.length === 0 ? (
              <p className="text-gray-700">Your cart is empty!</p>
            ) : (
              cart.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center mb-4"
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-yellow-600">
                      {product.name}
                    </h3>
                    <p className="text-gray-700">{product.category}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg text-yellow-700 font-semibold">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => handleRemoveFromCart(product.id)}
                      className="ml-4 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="mt-6 text-center">
              <button className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700 transition">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TradingPage;
