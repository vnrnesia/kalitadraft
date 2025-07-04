import { useEffect } from "react";

const TradingViewChart = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        width: "100%",
        height: "96%",
        symbol: "OANDA:XAUUSD",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: "tradingview_xauusd",
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="my-6 bg-white rounded-xl overflow-hidden shadow-md h-full">
      <div id="tradingview_xauusd" className="h-[600px] w-full"></div>
    </div>
  );
};

export default TradingViewChart;
