import React from "react";
import CtaImage from "@/assets/CtaImage.png";

const CtaCard = () => {
  return (
    <div className="max-w-xs md:max-w-7xl mx-auto bg-gradient-to-r from-black via-[#430000] to-[#a60e1a] text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Начните бесплатно
        </h2>
        <p className="text-lg mb-6">
          Скачайте приложение или установите расширение для браузера на вашем
          ПК, чтобы начать.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
            Попробовать сегодня
          </button>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
            Узнать больше
          </button>
        </div>
      </div>
      <div>
        <img
          src={CtaImage}
          alt="App Preview"
          className="max-w-[300px] drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default CtaCard;
