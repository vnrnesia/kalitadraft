import React from "react";

const articles = [
  {
    id: 1,
    title: "Cross-Platform Compatibility: Web3 Wallet Now Supports Additional Blockchains",
    date: "July 3, 2024",
    category: "Article",
    image: "https://via.placeholder.com/400x300?text=Crypto+1"
  },
  {
    id: 2,
    title: "NFT Integration Revolutionizes Digital Collectibles With Web3 Wallet",
    date: "July 3, 2024",
    category: "Article",
    image: "https://via.placeholder.com/400x300?text=Crypto+2"
  },
  {
    id: 3,
    title: "Web3 Wallet Community AMA: Join Us For An Exclusive Q&A Session",
    date: "July 3, 2024",
    category: "Article",
    image: "https://via.placeholder.com/400x300?text=Crypto+3"
  }
];

const News = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            What Is The Latest News You Get?
          </h2>
          <p className="text-lg text-gray-600">
            Find the latest news about blockchains, crypto, and anything that help you to learn about the digital world
          </p>
        </div>
        <button className="mt-6 md:mt-0 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900">
          Browse Article
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow p-4 transition hover:shadow-lg">
            <img src={item.image} alt={item.title} className="rounded-xl mb-4 w-full h-52 object-cover" />
            <h3 className="text-md font-medium mb-4">{item.title}</h3>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span className="text-red-600 font-medium">{item.category}</span>
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
