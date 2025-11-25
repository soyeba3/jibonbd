import productsData from "@/data/products.json";
import Image from "next/image";

export const ProductGrid = () => {
  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="relative text-3xl font-bold text-slate-800">
          Featured Products
          <span className="absolute left-0 -bottom-2 w-1/2 h-1 bg-emerald-500 rounded-full"></span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 md:gap-6">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="flex overflow-hidden flex-col bg-white rounded-xl border shadow-sm transition-all duration-300 group border-slate-100 hover:shadow-xl hover:border-emerald-200"
          >
            <div className="flex overflow-hidden relative justify-center items-center p-1.5 md:p-2 h-40 md:h-64 lg:h-72 bg-white">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={280}
                className="object-contain w-auto h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="hidden absolute top-2 right-2 opacity-0 transition-opacity md:top-3 md:right-3 group-hover:opacity-100 md:block">
                <button className="p-1.5 md:p-2 bg-white rounded-full shadow-md transition-colors text-slate-600 hover:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 md:w-5 md:h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-col p-3 md:p-4 grow">
              <h3 className="mb-0.5 md:mb-1 text-xs md:text-base font-semibold transition-colors text-slate-800 line-clamp-2 group-hover:text-emerald-600">
                {product.name}
              </h3>
              <p className="mb-1.5 md:mb-2 text-[10px] md:text-xs text-slate-500">
                {product.weight}
                {product.weightUnit}
              </p>
              <div className="flex justify-between items-center mt-auto">
                <div className="flex flex-col">
                  <span className="text-base font-bold md:text-xl text-slate-900">
                    ৳{product.price}
                  </span>
                </div>
                <button className="p-1.5 md:p-2.5 rounded-lg transition-all bg-emerald-50 hover:bg-emerald-500 hover:text-white text-emerald-600 shadow-sm hover:shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 md:w-5 md:h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
