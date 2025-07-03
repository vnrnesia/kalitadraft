import img1 from "@/assets/SolutionImg/img1.jpg";
import img2 from "@/assets/SolutionImg/img2.jpg";
import img3 from "@/assets/SolutionImg/img3.jpg";
import img4 from "@/assets/SolutionImg/img4.jpg";

const testimonials = [
  {
    name: "Sarah",
    image: img1,
    message:
      "The user-friendly interface and top-notch security features make managing my crypto a breeze. Finally, a wallet that keeps up with the fast-paced world of blockchain.",
  },
  {
    name: "Frank",
    image: img2,
    message:
      "This wallet not only provides a seamless NFT browsing experience but also makes transactions swift and secure. Highly recommended for fellow collectors!",
  },
  {
    name: "Fury",
    image: img3,
    message:
      "I’m not a tech expert, but using this Web3 wallet is surprisingly simple. Sending and receiving crypto has never been this easy and stress-free.",
  },
  {
    name: "Alita",
    image: img4,
    message:
      "Security is my top priority, and this Web3 wallet delivers on that front. Finally, a wallet that aligns with my security standards.",
  },
];

const Solution = () => {
  return (
    <section className="bg-gradient-to-br from-[#1a0003] via-[#5e020b] to-[#ad0e21] text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl mb-4 leading-[5]">
              Solution For Buying, Trading, And Investing In Digital Assets
            </h2>
            <p className="text-2xl">
              Join our massive community to learn about the power of
              blockchains, crypto, and Web3
            </p>
          </div>
          <div className="self-start">
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
              Join our community on Discord
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
