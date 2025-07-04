import img1 from "@/assets/SolutionImg/img1.jpg";
import img2 from "@/assets/SolutionImg/img2.jpg";
import img3 from "@/assets/SolutionImg/img3.jpg";
import img4 from "@/assets/SolutionImg/img4.jpg";

const testimonials = [
  {
    quote:
      "Кулинарные изыски и обслуживание здесь превзошли все ожидания! Дружелюбный персонал делает впечатления ещё более незабываемыми.",
    name: "Алекс Роман",
    title: "Основатель и лидер мнений",
    image: img1,
  },
  {
    quote:
      "Отличный опыт трёхзвёздочного ресторана Мишлен. Были вкусовые сочетания, которые стали для меня новыми и вкусными.",
    name: "Джейсон Миллер",
    title: "Руководитель сообщества @Apple",
    image: img2,
  },
  {
    quote:
      "Потрясающе. Вы входите в лобби и слышите музыку из Звёздных войн. Потому что они на световые годы опережают большинство ресторанов.",
    name: "Наташа Шульц",
    title: "Главный архитектор продукта @Microsoft",
    image: img3,
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-xs md:max-w-7xl mx-auto py-16">
      <div className="text-start mb-12">
        <h2 className="text-3xl md:text-6xl  mb-4">Отзывы наших клиентов</h2>
        <p className="text-2xl text-start max-w-7xl">
          Ниже вы можете прочитать реальные отзывы тех, кто уже воспользовался
          нашими услугами и остался доволен.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3 mt-16">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="bg-gray-50 p-6 rounded-lg shadow-lg relative overflow-hidden"
          >
            {/* Image */}
            <div className="absolute -top-6 right-0 w-44 h-44 overflow-hidden border-4 border-white shadow-md rounded-bl-full">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="object-cover w-[200%] h-[200%] -top-5 absolute"
              />
            </div>

            {/* Quote mark */}
            <div className="text-4xl mt-20 text-gray-300 mb-4">“</div>

            {/* Quote */}
            <p className="text-gray-700 mb-6">{testimonial.quote}</p>

            {/* Name & Title */}
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
