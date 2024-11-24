import React, { useState } from "react";

const RecentNews = () => {
  // State for news items
  const [news, setNews] = useState([
    {
      title: "🌾 Climate-Smart Farming Techniques",
      description:
        "Discover how climate-smart farming is helping farmers adapt to changing weather conditions and ensure sustainable yields.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      title: "🌍 New Agricultural Policy Announced",
      description:
        "The government has rolled out a new agricultural policy focusing on subsidies, irrigation, and export growth.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      title: "🌱 Breakthrough in Organic Fertilizers",
      description:
        "Scientists have developed a new organic fertilizer that improves soil health while boosting crop yields.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      title: "🚜 Advances in Agri-Tech",
      description:
        "Explore the latest technological innovations in agriculture, from AI-driven tools to drone-based monitoring systems.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      title: "💧 Water Conservation in Agriculture",
      description:
        "Learn how modern irrigation techniques are helping farmers save water and improve productivity.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      title: "📉 Global Crop Market Trends",
      description:
        "An analysis of global crop prices and how they are influenced by market dynamics and climate conditions.",
      img: "https://via.placeholder.com/300x200",
    },
  ]);

  // Additional news for "load more"
  const additionalNews = [
    {
      title: "🌟 Sustainable Agriculture Initiatives",
      description:
        "Learn about new initiatives aiming to make agriculture more sustainable and eco-friendly.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      title: "📊 Agricultural Data Analytics",
      description:
        "How data-driven insights are shaping the future of farming and boosting productivity.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      title: "🛰️ Satellite Farming Technology",
      description:
        "Discover how satellites are being used to monitor crops and optimize farming strategies.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      title: "🧬 Genetically Modified Crops Debate",
      description:
        "A closer look at the pros and cons of genetically modified crops and their impact on global agriculture.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      title: "🤖 AI-Driven Crop Predictions",
      description:
        "How artificial intelligence is revolutionizing agriculture by predicting crop yields and disease outbreaks.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      title: "💡 Innovative Greenhouse Farming",
      description:
        "The latest advancements in greenhouse farming, maximizing yields while conserving resources.",
      img: "https://via.placeholder.com/300x200",
    },
  ];

  // Function to load more unique news
  const loadMoreNews = () => {
    setNews((prevNews) => {
      const newNews = additionalNews.filter(
        (item) => !prevNews.some((newsItem) => newsItem.title === item.title)
      );
      return [...prevNews, ...newNews];
    });
  };

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
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.description}</p>
              <a
                href="#"
                className="text-blue-600 hover:underline mt-4 block"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Stay ahead in agriculture. Check back daily for the latest updates.
          </p>
          <button
            onClick={loadMoreNews}
            className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition transform hover:scale-110"
          >
            Explore All News
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
