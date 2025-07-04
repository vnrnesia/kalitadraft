import React from "react";
import WalletImage from "@/assets/homeimage.png";

const MainSection = () => {
  return (
    <section className="w-full bg-white pt-12 md:pt-14 pb-12">
      {/* Buradaki container padding'i header ile aynı yapılmalı */}
      <div className="max-w-6xl mx-auto px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-3">
        {/* Sol Metin */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-3xl md:text-[3vw] text-black leading-tight">
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

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-black text-white md:px-10 py-3 rounded-full hover:bg-[#ad0e21] transition">
              🔐 Зарегистрироваться{" "}
            </button>
            <button className="bg-black text-white md:px-10 py-3 rounded-full hover:bg-[#ad0e21] transition">
              📖 Как это работает?{" "}
            </button>
          </div>
        </div>

        {/* Sağ Görsel */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img
            src={WalletImage}
            alt="Web3 Wallet"
            className="w-[85%] max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
