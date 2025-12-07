import { Product } from "@/types/product";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group flex flex-col h-full bg-white rounded-2xl border border-slate-100 transition-all duration-300 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50/40 relative overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative aspect-[5/6] overflow-hidden bg-slate-50/50 m-2 rounded-xl group-hover:bg-emerald-50/30 transition-colors duration-300">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />

        {/* Premium Indicator */}
        <div className="absolute top-3 left-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-slate-100 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-wider text-slate-600 uppercase">
              Premium
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col grow px-4 pb-4 pt-1">
        <div className="mb-1 text-[11px] font-bold tracking-wide text-emerald-600/80 uppercase">
          {product.weight} {product.weightUnit}
        </div>

        <h3 className="text-sm md:text-base font-bold text-slate-800 leading-snug mb-3 line-clamp-2 group-hover:text-emerald-700 transition-colors">
          {product.name}
        </h3>

        <div className="mt-auto flex items-center justify-between pt-2 border-t border-slate-50">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 font-medium line-through">
              ৳{Math.round(product.price * 1.2)}
            </span>
            <span className="text-lg md:text-xl font-extrabold text-slate-900">
              ৳{product.price}
            </span>
          </div>

          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-900 border border-slate-100 transition-all duration-300 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white group-hover:shadow-lg group-hover:scale-110">
            <Plus className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  );
};
