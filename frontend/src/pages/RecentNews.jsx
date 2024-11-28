import React, { useState } from "react";
import climateFarming from "../img/RecentNews/image1.jpg";
import newAgricultural from "../img/RecentNews/image2.jpg";
import breakthrough from "../img/RecentNews/image3.jpg";
import advances from "../img/RecentNews/image4.jpg";
import waterConservation from "../img/RecentNews/image5.jpg";
import globalCrop from "../img/RecentNews/image6.jpg";
import sustainable from "../img/RecentNews/image7.jpg";
import agriculturalData from "../img/RecentNews/image8.jpg";
import satelliteFarming from "../img/RecentNews/image9.jpg";
import geneticallyModified from "../img/RecentNews/image10.jpg";
import aidrivenCrop from "../img/RecentNews/image11.jpg";
import innovativeFarming from "../img/RecentNews/image12.jpg";

const RecentNews = () => {
  const [news, setNews] = useState([
    {
      title: "🌾 Climate-Smart Farming Techniques",
      description:
        "Discover how climate-smart farming is helping farmers adapt to changing weather conditions and ensure sustainable yields.",
      img: climateFarming,
      url: "https://krishijagran.com",
    },
    {
      title: "🌍 New Agricultural Policy Announced",
      description:
        "The government has rolled out a new agricultural policy focusing on subsidies, irrigation, and export growth.",
      img: newAgricultural,
      url: "https://krishijagran.com/",
    },
    {
      title: "🌱 Breakthrough in Organic Fertilizers",
      description:
        "Scientists have developed a new organic fertilizer that improves soil health while boosting crop yields.",
      img: breakthrough,
      url: "https://krishijagran.com/",
    },
    {
      title: "🚜 Advances in Agri-Tech",
      description:
        "Explore the latest technological innovations in agriculture, from AI-driven tools to drone-based monitoring systems.",
      img: advances,
      url: "https://krishijagran.com/",
    },
    {
      title: "💧 Water Conservation in Agriculture",
      description:
        "Learn how modern irrigation techniques are helping farmers save water and improve productivity.",
      img: waterConservation,
      url: "https://krishijagran.com/",
    },
    {
      title: "📉 Global Crop Market Trends",
      description:
        "An analysis of global crop prices and how they are influenced by market dynamics and climate conditions.",
      img: globalCrop,
      url: "https://krishijagran.com/",
    },
  ]);

  const additionalNews = [
    {
      title: "🌟 Sustainable Agriculture Initiatives",
      description:
        "Learn about new initiatives aiming to make agriculture more sustainable and eco-friendly.",
      img: sustainable,
      url: "https://krishijagran.com/",
    },
    {
      title: "📊 Agricultural Data Analytics",
      description:
        "How data-driven insights are shaping the future of farming and boosting productivity.",
      img: agriculturalData,
      url: "https://krishijagran.com/",
    },
    {
      title: "🛰️ Satellite Farming Technology",
      description:
        "Discover how satellites are being used to monitor crops and optimize farming strategies.",
      img: satelliteFarming,
      url: "https://krishijagran.com/",
    },
    {
      title: "🧬 Genetically Modified Crops Debate",
      description:
        "A closer look at the pros and cons of genetically modified crops and their impact on global agriculture.",
      img: geneticallyModified,
      url: "https://krishijagran.com/",
    },
    {
      title: "🤖 AI-Driven Crop Predictions",
      description:
        "How artificial intelligence is revolutionizing agriculture by predicting crop yields and disease outbreaks.",
      img: aidrivenCrop,
      url: "https://krishijagran.com/",
    },
    {
      title: "💡 Innovative Greenhouse Farming",
      description:
        "The latest advancements in greenhouse farming, maximizing yields while conserving resources.",
      img: innovativeFarming,
      url: "https://krishijagran.com/",
    },
  ];

  const loadMoreNews = () => {
    setNews((prevNews) => {
      const newNews = additionalNews.filter(
        (item) => !prevNews.some((newsItem) => newsItem.title === item.title)
      );
      return [...prevNews, ...newNews];
    });
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-700 mb-6">
          📰 Recent News
        </h1>
        <p className="text-base sm:text-lg text-gray-600 text-center mb-10">
          Stay informed with the latest updates, trends, and developments in
          the agricultural sector. From policy changes to technological
          advancements, we bring the news to you.
        </p>

        {/* News Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto rounded-md mb-4"
              />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-4 block text-sm"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-12 text-center">
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Stay ahead in agriculture. Check back daily for the latest updates.
          </p>
          <button
            onClick={loadMoreNews}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition transform hover:scale-110"
          >
            Explore All News
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
