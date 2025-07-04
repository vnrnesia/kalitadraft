import React from "react";
import WalletImage from "@/assets/homeimage.png";

const MainSection = () => {
  return (
    <section className="w-full bg-white pt-12 md:pt-14 pb-12">
      <div className="max-w-7xl mx-auto md:px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-3">
        {/* Sol Metin Kısmı */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-3xl md:text-7xl text-black leading-tight">
            Инвестируй в{" "}
            <span className="inline-block px-4 py-1 border border-rose-500 rounded-full">
              цифровое
            </span>{" "}
            золото Получай доход каждый{" "}
            <span className="inline-block px-4 py-1 border border-rose-500 rounded-full">
              месяц
            </span>
          </h1>

          <p className=" md:text-lg text-black mt-6">
            Покупай токены, торгуй с другими участниками или <br /> получай
            прибыль по цене золота
          </p>

          {/* Butonlar */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-black text-white md:px-10 py-3 rounded-full hover:bg-rose-600 transition">
              🔐 Зарегистрироваться{" "}
            </button>
            <button className="bg-black text-white px-10 py-3 rounded-full hover:bg-gray-800 transition">
              📖 Как это работает?{" "}
            </button>
          </div>
        </div>

        {/* Sağ Görsel */}
        <div className="flex justify-center md:justify-end">
          <img
            src={WalletImage}
            alt="Web3 Wallet"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
