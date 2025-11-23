import Image from "next/image";

export const Banner = () => {
  return (
    <section className="relative w-full aspect-[21/9] md:aspect-[3/1] lg:aspect-[4/1] overflow-hidden rounded-2xl shadow-lg my-8">
      <Image
        src="/assets/images/banner/artboard_1.png"
        alt="Promotional Banner"
        fill
        className="object-cover hover:scale-105 transition-transform duration-700"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent flex items-center p-8 md:p-16">
        <div className="text-white space-y-4 max-w-xl animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            New Collection <br />
            <span className="text-emerald-400">Arrival</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-200">
            Discover the latest trends in fashion and lifestyle.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:translate-x-1">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};
