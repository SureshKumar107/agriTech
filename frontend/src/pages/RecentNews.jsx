import React from "react";

const RecentNews = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-6">
          📰 Recent News
        </h1>
        <p className="text-lg text-gray-600 text-center mb-10">
          Stay informed with the latest updates, trends, and developments in
          the agricultural sector. From policy changes to technological
          advancements, we bring the news to you.
        </p>

        {/* News Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News Item 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/300x200"
              alt="News 1"
              className="rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              🌾 Climate-Smart Farming Techniques
            </h2>
            <p className="text-gray-600">
              Discover how climate-smart farming is helping farmers adapt to
              changing weather conditions and ensure sustainable yields.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline mt-4 block"
            >
              Read more →
            </a>
          </div>

          {/* News Item 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/300x200"
              alt="News 2"
              className="rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              🌍 New Agricultural Policy Announced
            </h2>
            <p className="text-gray-600">
              The government has rolled out a new agricultural policy focusing
              on subsidies, irrigation, and export growth.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline mt-4 block"
            >
              Read more →
            </a>
          </div>

          {/* News Item 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/300x200"
              alt="News 3"
              className="rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              🌱 Breakthrough in Organic Fertilizers
            </h2>
            <p className="text-gray-600">
              Scientists have developed a new organic fertilizer that improves
              soil health while boosting crop yields.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline mt-4 block"
            >
              Read more →
            </a>
          </div>

          {/* News Item 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/300x200"
              alt="News 4"
              className="rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              🚜 Advances in Agri-Tech
            </h2>
            <p className="text-gray-600">
              Explore the latest technological innovations in agriculture, from
              AI-driven tools to drone-based monitoring systems.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline mt-4 block"
            >
              Read more →
            </a>
          </div>

          {/* News Item 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/300x200"
              alt="News 5"
              className="rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              💧 Water Conservation in Agriculture
            </h2>
            <p className="text-gray-600">
              Learn how modern irrigation techniques are helping farmers save
              water and improve productivity.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline mt-4 block"
            >
              Read more →
            </a>
          </div>

          {/* News Item 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/300x200"
              alt="News 6"
              className="rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              📉 Global Crop Market Trends
            </h2>
            <p className="text-gray-600">
              An analysis of global crop prices and how they are influenced by
              market dynamics and climate conditions.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline mt-4 block"
            >
              Read more →
            </a>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Stay ahead in agriculture. Check back daily for the latest updates.
          </p>
          <button className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition">
            Explore All News
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
