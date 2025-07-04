import phoneImg from "@/assets/phone.png";

const steps = [
  {
    number: "1",
    title: "Пополняете баланс и покупаете токены",
    description:
      "Вы переводите деньги со своей банковской карты на личный счёт в системе. Взамен вы получаете токены, номинированные в «цифровом золоте».",
  },
  {
    number: "2",
    title: "Продавайте другим или ждите выкупа",
    description:
      "Вы можете продать токены участникам платформы или раз в месяц — самой платформе по курсу, привязанному к золоту.",
  },
  {
    number: "3",
    title: "Продавайте токены — участнику или платформе",
    description:
      "Получите деньги сразу или доход до 10% от роста золота раз в месяц.",
  },
];

const GetStarted = () => {
  return (
    <section className=" max-w-md md:max-w-7xl mx-auto p py-16">
      {/* Header */}
      <div className="text-start mb-12">
        <h2 className="text-3xl md:text-6xl  mb-4">
          Инвестируй как профессионал — просто, быстро, надёжно{" "}
        </h2>
        <p className="text-2xl text-start max-w-7xl">
          Купите токены, торгуйте с другими участниками или продайте их нам — и
          зарабатывайте на росте золота
        </p>
      </div>

      {/* Steps + Image */}
      <div className="grid grid-cols-1 md:grid-cols-2  md:grid-rows gap-10 items-center">
        {/* Steps */}
        <div className="space-y-14">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-7 bg-white rounded-xl shadow border"
            >
              <div
                className="border-2 border-black rounded-full flex items-center justify-center text-lg font-medium"
                style={{ width: "64px", height: "64px", minWidth: "64px" }}
              >
                {step.number}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-black">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Phone Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md md:max-w-sm lg:max-w-md  h-[370px] md:h-[550px] md:max-h-[550px] bg-white rounded-2xl shadow-lg py-16 px-16 overflow-hidden">
            <img
              src={phoneImg}
              alt="Web3 Wallet"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
