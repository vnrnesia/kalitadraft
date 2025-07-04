// Infinite Logo Slider (Only Mobile)
// Framer Motion v7+ uyumlu

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import image1 from "@/assets/BrandsImg/image1.png";
import image2 from "@/assets/BrandsImg/image2.png";
import image3 from "@/assets/BrandsImg/image3.png";
import image4 from "@/assets/BrandsImg/image4.png";
import image5 from "@/assets/BrandsImg/image5.png";
import image6 from "@/assets/BrandsImg/image6.png";

const images = [image1, image2, image3, image4, image5, image6];
const imageClasses = ["h-6 mt-4", "h-10 mt-2", "h-8 mt-3", "h-10 mt-2", "h-12", "h-10 mt-2"];

const MainSectionBottom = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const startLoop = async () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.scrollWidth / 2;

      while (isMounted) {
        await controls.start({
          x: -containerWidth,
          transition: { duration: 20, ease: "linear" },
        });
        await controls.set({ x: 0 });
      }
    };

    startLoop();

    return () => {
      isMounted = false;
    };
  }, [controls]);

  return (
    <section className="bg-gray-100 py-10 md:py-16">
      {/* Desktop view */}
      <div className="hidden md:flex container mx-auto flex-wrap justify-center items-center gap-12">
        <img src={image1} alt="Brand 1" className="h-6 object-contain" />
        <img src={image2} alt="Brand 2" className="h-12 object-contain" />
        <img src={image3} alt="Brand 3" className="h-8 object-contain" />
        <img src={image4} alt="Brand 4" className="h-10 object-contain" />
        <img src={image5} alt="Brand 5" className="h-12 object-contain" />
        <img src={image6} alt="Brand 6" className="h-10 object-contain" />
      </div>

      {/* Mobile slider */}
      <div className="md:hidden overflow-hidden relative">
        <motion.div
          ref={containerRef}
          className="flex gap-8 px-4"
          animate={controls}
          whileTap={{ cursor: "grabbing" }}
        >
          {[...images, ...images].map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Brand ${index + 1}`}
              className={`${imageClasses[index % imageClasses.length]} object-contain flex-shrink-0`}
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MainSectionBottom;