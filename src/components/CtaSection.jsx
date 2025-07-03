import React from "react";
import icon1 from "@/assets/CtaSectionImg/icon1.png";
import icon2 from "@/assets/CtaSectionImg/icon2.png";
import icon3 from "@/assets/CtaSectionImg/icon3.png";

const CtaSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#1a0003] via-[#5e020b] to-[#ad0e21] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
        
        {/* LEFT TEXT */}
        <div className="lg:col-span-1">
          <h2 className="text-3xl lg:text-4xl font-semibold leading-snug mb-4">
            Solution For Buying, Trading, And <br /> Investing In Digital Assets
          </h2>
          <p className="text-sm mb-6">
            Celchains helps you guide your saving activity with secured and easily
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            Try It Today
          </button>
        </div>

        {/* CTA CARDS */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white text-black p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <img src={icon1} alt="icon1" className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Currencies & <br />Commodities</h3>
            <p className="text-sm text-gray-700">
              Access a wide array of opportunities as you navigate the world of forex, cryptocurrencies, and commodities, each offering unique prospects for traders and investors.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-black p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <img src={icon2} alt="icon2" className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enterprise Grade <br />Security</h3>
            <p className="text-sm text-gray-700">
              With our enterprise-grade security infrastructure, we prioritize the protection of your financial assets and sensitive information.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-black p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <img src={icon3} alt="icon3" className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Trading</h3>
            <p className="text-sm text-gray-700">
              Seamlessly navigate the dynamic world of financial markets as our advanced technology delivers live, up-to-the-second market data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
