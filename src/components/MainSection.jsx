import React from "react";
import WalletImage from "@/assets/homeimage.png"; 

const MainSection = () => {
  return (
    <section className="w-full bg-white  pt-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Sol Metin Kısmı */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-7xl text-black leading-tight flex flex-row flex-wrap gap-2">
            <div>
              Manage Your <span className="inline-block px-4 py-1 border border-rose-500 rounded-full">Digital</span>
            </div>
            <div>
              Assets With <span className="inline-block px-4 py-1 border border-rose-500 rounded-full">Confidence</span>
            </div>
          </h1>

          <p className="text-xl text-black mt-6">
            Seamlessly Secure Your Assets with Our <br className="hidden md:block" />
            Cutting-Edge Web3 Wallet
          </p>

          {/* Butonlar */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-black text-white px-10 py-3 rounded-full hover:bg-rose-600 transition">
              Try It Today
            </button>
            <button className="bg-black text-white px-10 py-3 rounded-full hover:bg-gray-800 transition">
              Find Out More
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