import productsData from "@/data/products.json";
import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

const products: Product[] = productsData as Product[];

export const ProductGrid = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="flex justify-between items-center mb-6 md:mb-10">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl text-slate-800">
            আমাদের পণ্যসমূহ
          </h2>
          <p className="mt-1 text-sm md:text-base text-slate-500">
            সেরা মানের খাঁটি পণ্য সরাসরি আপনার ঘরে
          </p>
        </div>
        <div className="hidden px-4 py-2 text-sm font-medium rounded-full border transition-colors md:block text-emerald-600 border-emerald-200 hover:bg-emerald-50">
          সব দেখুন
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
