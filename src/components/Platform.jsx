import React from "react";
import icon1 from "@/assets/PlatformImg/icon1.png";
import icon2 from "@/assets/PlatformImg/icon2.png";
import icon3 from "@/assets/PlatformImg/icon3.png";
import icon4 from "@/assets/PlatformImg/icon4.png";
import { Check, X } from "lucide-react";
import TradingViewChart from "@/components/TradingViewChart.jsx";

const chains = [
  {
    name: "Energy Web (EWT)",
    icon: icon1,
    span: false,
    sell: true,
    buy: true,
    earn: true,
  },
  {
    name: "Bitcoin (BTC)",
    icon: icon2,
    span: true,
    sell: true,
    buy: true,
    earn: true,
  },
  {
    name: "Ethereum (ETH)",
    icon: icon3,
    span: true,
    sell: true,
    buy: true,
    earn: true,
  },
  {
    name: "Solana (SOL)",
    icon: icon4,
    span: true,
    sell: true,
    buy: true,
    earn: true,
  },
];

const Platform = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-start mb-12">
        <h2 className="text-3xl md:text-6xl mb-4">
          Следите за курсом и считайте доход за секунды
        </h2>
        <p className="text-2xl text-start max-w-6xl">
          Онлайн-график золота и токена в реальном времени. Укажите количество
          токенов и узнайте, сколько вы можете заработать уже сегодня.
        </p>
      </div>

      {/* Chart ve Calculator container */}
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
        <div
          className="w-full md:w-2/3 rounded-3xl"
          style={{ height: "70vh", maxHeight: "550px" }}
        >
          <TradingViewChart />
        </div>

        {/* Sağ: Calculator */}
        <div className="w-full md:w-1/3 h-[550px]  pt-7 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl shadow-md w-full h-full flex flex-col justify-between">
            <h2 className="text-center text-lg font-medium mb-6">
              Купить сейчас!
            </h2>

            <div className="flex gap-2 mb-4">
              <select className="w-1/2 p-3 border rounded-xl">
                <option>Купить</option>
                <option>Продать</option>
              </select>
              <select className="w-1/2 p-3 border rounded-xl">
                <option>Золото</option>
              </select>
            </div>

            <div className="text-right text-xs text-gray-400 mb-2">
              1 XAU ≈ $3,340.735USD
            </div>

            <div className="flex gap-2 mb-4">
              <input
                type="number"
                placeholder="Amount"
                className="w-2/3 p-3 border rounded-xl"
              />
              <select className="w-1/3 p-3 border rounded-xl">
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>

            <div className="mb-6">
              <select className="w-full p-3 border rounded-xl">
                <option>All payment methods</option>
                <option>Bank Transfer</option>
                <option>PayPal</option>
              </select>
            </div>

            <button className="w-full bg-[#ad0e21] text-white font-medium py-3 rounded-xl transition">
              поиск предложений{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
