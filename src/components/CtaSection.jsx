import React from "react";
import icon1 from "@/assets/CtaSectionImg/icon1.png";
import icon2 from "@/assets/CtaSectionImg/icon2.png";
import icon3 from "@/assets/CtaSectionImg/icon3.png";

const CtaSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#1a0003] via-[#5e020b] to-[#ad0e21] text-white py-32">
      <div className="max-w-[1230px] mx-auto lg:row-span-1 flex flex-col lg:flex-row lg:justify-between">
        <div>
          <h2 className="text-3xl lg:text-5xl mb-10 leading-snug">
            Solution For Buying, Trading, And <br /> Investing In Digital Assets
          </h2>
        </div>
        <div className="flex flex-col mt-6 lg:mt-0">
          <p className="mb-6">
            Celchains helps you guide your saving activity with <br /> secured
            and easily
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition self-start">
            Try It Today
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-col-1 lg:grid-row-4 justify-between gap-8 items-center">
        {/* CTA CARDS */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white text-black p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
            <img src={icon1} alt="icon1" className="w-20 h-20 mb-6" />
            <h3 className="text-2xl font-semibold mb-3">
              Currencies & <br />
              Commodities
            </h3>
            <p className="text-base text-gray-700">
              Access a wide array of opportunities as you navigate the world of
              forex, cryptocurrencies, and commodities, each offering unique
              prospects for traders and investors.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-black p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
            <img src={icon2} alt="icon2" className="w-20 h-20 mb-6" />
            <h3 className="text-2xl font-semibold mb-3">
              Enterprise Grade <br />
              Security
            </h3>
            <p className="text-base text-gray-700">
              With our enterprise-grade security infrastructure, we prioritize
              the protection of your financial assets and sensitive information.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-black p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
            <img src={icon3} alt="icon3" className="w-20 h-20 mb-6" />
            <h3 className="text-2xl font-semibold mb-3">
              Real-Time Trading
            </h3>
            <p className="text-base text-gray-700">
              Seamlessly navigate the dynamic world of financial markets as our
              advanced technology delivers live, up-to-the-second market data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;