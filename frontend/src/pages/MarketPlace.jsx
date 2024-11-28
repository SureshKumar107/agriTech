import React from "react";
import { Link } from "react-router-dom";
import cropsAndSeeds from "../img/MarketPlace/image1.jpg";
import toolsAndEquipments from "../img/MarketPlace/image2.jpg";
import fertilizers from "../img/MarketPlace/image3.jpg";
import agriculturalServices from "../img/MarketPlace/image4.jpg";
import livestockAndPoultry from "../img/MarketPlace/image5.jpg";
import organicProducts from "../img/MarketPlace/image6.jpg";

const categories = [
  {
    title: "🌾 Crops & Seeds",
    img: cropsAndSeeds,
    description:
      "Buy and sell high-quality crops and certified seeds. Find everything from rice and wheat to exotic vegetables and fruits.",
    price: "$25 - $100",
    action: "Buy Now",
  },
  {
    title: "🛠️ Tools & Equipment",
    img: toolsAndEquipments,
    description:
      "Discover affordable farming tools and machinery. From tractors to irrigation systems, we’ve got it all!",
    price: "$150 - $500",
    action: "Buy Now",
  },
  {
    title: "🧪 Fertilizers & Pesticides",
    img: fertilizers,
    description:
      "Access organic and chemical fertilizers, as well as pest control solutions, to ensure healthy crops and a thriving farm.",
    price: "$10 - $50",
    action: "Buy Now",
  },
  {
    title: "🤝 Agricultural Services",
    img: agriculturalServices,
    description:
      "Connect with experts offering services such as soil testing, irrigation planning, and crop consultation.",
    price: "$30 - $200",
    action: "Contact Now",
  },
  {
    title: "🐄 Livestock & Poultry",
    img: livestockAndPoultry,
    description:
      "Buy and sell livestock, poultry, and related products. Ensure you get healthy animals for your farm.",
    price: "$100 - $1000",
    action: "Contact Seller",
  },
  {
    title: "🥗 Organic Products",
    img: organicProducts,
    description:
      "Shop for fresh organic produce or sell your homegrown fruits and vegetables directly to consumers.",
    price: "$5 - $40",
    action: "Buy Now",
  },
];

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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
                {category.title}
              </h2>
              <img
                src={category.img}
                alt={category.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-700 mb-4">{category.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg text-yellow-700 font-semibold">
                  {category.price}
                </span>
                <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
                  {category.action}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to start trading? Join our community and connect with buyers
            and sellers today!
          </p>
          <Link to="/tradepage">
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
