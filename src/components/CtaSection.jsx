import React from "react";
import icon1 from "@/assets/CtaSectionImg/icon1.png";
import icon2 from "@/assets/CtaSectionImg/icon2.png";
import icon3 from "@/assets/CtaSectionImg/icon3.png";

const CtaSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#1a0003] via-[#5e020b] to-[#ad0e21] text-white py-32">
      <div className="max-w-[1230px] mx-auto flex flex-col lg:flex-row lg:justify-between">
        <div>
          <h2 className="text-3xl lg:text-5xl mb-10 leading-snug">
            Безопасность и прибыль <br /> — всё в одном месте
          </h2>
        </div>
       
        <div className="flex flex-col mt-6 lg:mt-0">
           <p>Ваши инвестиции в безопасности, а доход  <br /> растёт вместе с золотом. Прозрачность, <br /> быстрые операции и поддержка 24/7 для вашего комфорта.</p>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition self-start">
            <p>Начать инвестировать</p>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 gap-8 items-center mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white text-black p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
            <img src={icon1} alt="icon1" className="w-20 h-20 mb-6" />
            <h3 className="text-2xl font-semibold mb-3">Безопасность</h3>
            <p className="text-base text-gray-700">
              Все ваши данные и финансовые операции надёжно защищены с использованием современных методов шифрования и безопасности.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-black p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
            <img src={icon2} alt="icon2" className="w-20 h-20 mb-6" />
            <h3 className="text-2xl font-semibold mb-3">Доходность</h3>
            <p className="text-base text-gray-700">
              Получайте стабильный доход до 10% в месяц, который напрямую зависит от роста мировой цены на золото.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-black p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
            <img src={icon3} alt="icon3" className="w-20 h-20 mb-6" />
            <h3 className="text-2xl font-semibold mb-3">Прозрачность</h3>
            <p className="text-base text-gray-700">
              Открытая статистика и понятные условия без скрытых комиссий позволяют вам полностью контролировать свои инвестиции.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
