import icon1 from "@/assets/PlatformImg/icon1.png";
import icon2 from "@/assets/PlatformImg/icon2.png";
import icon3 from "@/assets/PlatformImg/icon3.png";
import icon4 from "@/assets/PlatformImg/icon4.png";
import { Check, X } from "lucide-react"; // lucide-react yüklü olmalı

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
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          One Platform, Millions Of Assets
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          As a leading self-custody multi-chain platform, we support millions of
          assets across 100+ blockchains. From Bitcoin, Ethereum, and Solana,
          Energy Web, Optimism, and much more
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-sm font-medium text-gray-600">Chain</th>
              <th className="p-4 text-sm font-medium text-gray-600">Span</th>
              <th className="p-4 text-sm font-medium text-gray-600">Sell</th>
              <th className="p-4 text-sm font-medium text-gray-600">Buy</th>
              <th className="p-4 text-sm font-medium text-gray-600">Earn</th>
            </tr>
          </thead>
          <tbody>
            {chains.map((chain, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="flex items-center gap-3 p-4">
                  <img src={chain.icon} alt={chain.name} className="w-8 h-8" />
                  <span className="text-sm font-medium">{chain.name}</span>
                </td>
                {[chain.span, chain.sell, chain.buy, chain.earn].map(
                  (val, i) => (
                    <td key={i} className="p-4">
                      {val ? (
                        <Check className="w-5 h-5 text-black" />
                      ) : (
                        <X className="w-5 h-5 text-black" />
                      )}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Platform;
