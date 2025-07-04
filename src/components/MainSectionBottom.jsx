import { Star } from "lucide-react"; 
import image1 from "@/assets/BrandsImg/image1.png";
import image2 from "@/assets/BrandsImg/image2.png";
import image3 from "@/assets/BrandsImg/image3.png";
import image4 from "@/assets/BrandsImg/image4.png";
import image5 from "@/assets/BrandsImg/image5.png";
import image6 from "@/assets/BrandsImg/image6.png";

const MainSectionBottom = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-12">
        <img src={image1} alt="Brand 1" className="h-6 object-contain" />
        <img src={image2} alt="Brand 2" className="h-12 object-contain" />
        <img src={image3} alt="Brand 3" className="h-8 object-contain" />
        <img src={image4} alt="Brand 4" className="h-10 object-contain" />
        <img src={image5} alt="Brand 5" className="h-12 object-contain" />
        <img src={image6} alt="Brand 6" className="h-10 object-contain" />
      </div>
    </section>
  );
};

export default MainSectionBottom;
