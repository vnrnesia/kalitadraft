import img1 from "@/assets/SolutionImg/img1.jpg";
import img2 from "@/assets/SolutionImg/img2.jpg";
import img3 from "@/assets/SolutionImg/img3.jpg";
import img4 from "@/assets/SolutionImg/img4.jpg";

const testimonials = [
  {
    name: "Сара",
    image: img1,
    message:
      "Удобный интерфейс и первоклассные функции безопасности делают управление моей криптовалютой очень простым. Наконец-то кошелёк, который соответствует стремительному миру блокчейна.",
  },
  {
    name: "Фрэнк",
    image: img2,
    message:
      "Этот кошелёк не только обеспечивает удобный просмотр NFT, но и делает транзакции быстрыми и безопасными. Настоятельно рекомендую другим коллекционерам!",
  },
  {
    name: "Фьюри",
    image: img3,
    message:
      "Я не эксперт в технологиях, но пользоваться этим Web3-кошельком оказалось удивительно просто. Отправка и получение криптовалюты ещё никогда не были такими лёгкими и без стресса.",
  },
  {
    name: "Алита",
    image: img4,
    message:
      "Безопасность — мой главный приоритет, и этот Web3-кошелёк полностью оправдывает мои ожидания. Наконец-то кошелёк, соответствующий моим стандартам безопасности.",
  },
];

const Solution = () => {
  return (
    <section className="bg-gradient-to-br from-[#1a0003] via-[#5e020b] to-[#ad0e21] text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl mb-4 ">
              Решение для покупки, торговли и инвестиций в цифровые активы
            </h2>
            <p className="text-2xl">
              Присоединяйтесь к нашему огромному сообществу, чтобы узнать о
              возможностях блокчейна, криптовалют и Web3
            </p>
          </div>
          <div className="self-start mt-6">
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
              Присоединяйтесь к нашему сообществу в Discord
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div key={i}>
              <div className="rounded-xl overflow-hidden mb-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-1">{t.name}</h3>
              <p className="text-lg leading-relaxed">“{t.message}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
