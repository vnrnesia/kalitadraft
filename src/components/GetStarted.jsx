import phoneImg from "@/assets/phone.png";

const steps = [
  {
    number: "1",
    title: "Create Your Account",
    description:
      "Started with create the account on the Celchains app that navigate your digital assets and invest them",
  },
  {
    number: "2",
    title: "Create Your First Wallet",
    description:
      "By create wallet, you are able to take action consist of buying, trading, and investing",
  },
  {
    number: "3",
    title: "Buy And Sell Any Asset",
    description:
      "Any asset that you chosen on the market such as Crypto.com, Solana, Ethereum, Energy Web, and etc",
  },
];

const GetStarted = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Get Started With Web3 Wallet In 3 Easy Steps
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          As the cryptocurrency ecosystem continues to evolve, it’s essential
          for users to stay informed, exercise caution, and adopt best practices
          for managing and securing their digital assets in this exciting and
          dynamic financial frontier
        </p>
      </div>

      {/* Steps + Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 bg-white rounded-xl shadow border"
            >
              <div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center text-lg font-medium">
                {step.number}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Phone Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={phoneImg}
            alt="Web3 Wallet"
            className="max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
