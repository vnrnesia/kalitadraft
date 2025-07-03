import { Star } from "lucide-react"; 

const MainSectionBottom = () => {
  return (
    <section className="bg-gray-100  py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {/* 1. Kutu */}
        <div>
          <p className="text-black text-2xl mb-3">Trusted by</p>
          <h3 className="text-rose-700 text-2xl font-semibold">15M+ Users</h3>
        </div>

        {/* 2. Kutu */}
        <div>
          <p className="text-black text-2xl mb-3 ">Globally</p>
          <h3 className="text-rose-700 text-2xl font-semibold">Audited</h3>
        </div>

        {/* 3. Kutu - Yıldızlı */}
        <div>
          <p className="text-black text-2xl  mb-4">Top reviews</p>
          <div className="flex justify-center text-2xl gap-2 text-rose-700">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" stroke="currentColor" />
            ))}
          </div>
        </div>

        {/* 4. Kutu */}
        <div>
          <p className="text-black text-2xl mb-3 ">Founded in</p>
          <h3 className="text-rose-700 text-2xl font-semibold">2018</h3>
        </div>
      </div>
    </section>
  );
};

export default MainSectionBottom;
