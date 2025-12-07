import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Topbar } from "@/components/layout/Topbar";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";
import { promises as fs } from "fs";
import { ArrowLeft, Phone, ShoppingCart, Star, Truck } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PageProps {
  params: Promise<{ id: string }>;
}

const products: Product[] = productsData as Product[];

function findProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}

async function getProductDescription(descriptionPath: string): Promise<string> {
  try {
    const fullPath = path.join(process.cwd(), "src", descriptionPath);
    const content = await fs.readFile(fullPath, "utf-8");
    return content;
  } catch {
    return "";
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = findProductById(parseInt(id, 10));

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: `Buy ${product.name} at ৳${product.price}. Premium quality from JibonBD.`,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = findProductById(parseInt(id, 10));

  if (!product) {
    notFound();
  }

  const description = await getProductDescription(product.description);

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Topbar />
      <Navbar />

      <main className="container px-4 py-6 mx-auto grow md:py-10">
        <Link
          href="/"
          className="inline-flex gap-2 items-center mb-6 text-sm font-medium transition-colors text-emerald-600 hover:text-emerald-700"
        >
          <ArrowLeft className="w-4 h-4" />
          সকল পণ্য দেখুন
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative">
            <div className="sticky top-24">
              <div className="relative p-6 md:p-10">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-50/80 via-teal-50/50 to-transparent"></div>

                <div className="relative flex justify-center items-center h-72 md:h-[450px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={450}
                    height={450}
                    className="object-contain w-auto max-w-full h-full transition-transform duration-500 drop-shadow-2xl hover:scale-105"
                    priority
                  />
                </div>

                <div className="flex absolute top-6 left-6 z-10">
                  <span className="inline-flex gap-1.5 items-center px-4 py-2 text-sm font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-emerald-500 to-teal-500">
                    <Star className="w-4 h-4 fill-current" />
                    প্রিমিয়াম কোয়ালিটি
                  </span>
                </div>

                <div className="flex absolute right-6 bottom-6 gap-2">
                  <div className="flex gap-2 items-center px-4 py-2 text-sm font-medium rounded-full shadow-lg backdrop-blur-sm bg-white/90 text-slate-700">
                    <Truck className="w-4 h-4 text-emerald-500" />
                    সারাদেশে ডেলিভারি
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm font-medium tracking-wide uppercase text-emerald-600">
                JibonBD Premium
              </p>
              <h1 className="mb-3 text-2xl font-bold leading-tight md:text-4xl text-slate-800">
                {product.name}
              </h1>
              <div className="flex gap-2 items-center text-sm text-slate-500">
                <span className="px-2 py-1 rounded-md bg-slate-100">
                  {product.weight} {product.weightUnit}
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex gap-1 items-center text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </span>
              </div>
            </div>

            <div className="flex gap-4 items-end">
              <div className="flex flex-col">
                <span className="text-xs font-medium text-slate-500">
                  মূল্য
                </span>
                <span className="text-4xl font-bold md:text-5xl text-emerald-600">
                  ৳{product.price}
                </span>
              </div>
              <span className="px-3 py-1 mb-2 text-xs font-semibold text-green-700 rounded-full bg-green-50">
                স্টকে আছে
              </span>
            </div>

            <div className="p-4 rounded-2xl border-2 border-dashed bg-amber-50/50 border-amber-200">
              <p className="flex gap-2 items-center text-sm font-medium text-amber-800">
                <span className="text-lg">🎁</span>
                অর্ডার করতে ফোন/হোয়াটসঅ্যাপ করুন
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+8801885517676"
                className="flex flex-1 gap-2 justify-center items-center px-6 py-4 text-lg font-semibold text-white rounded-2xl shadow-lg transition-all duration-300 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                কল করুন
              </a>
              <a
                href="https://wa.me/8801885517676"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 gap-2 justify-center items-center px-6 py-4 text-lg font-semibold rounded-2xl border-2 shadow-sm transition-all duration-300 text-emerald-600 border-emerald-500 hover:bg-emerald-50 hover:shadow-md"
              >
                <ShoppingCart className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-3">
              <div className="flex flex-col gap-1 items-center p-3 text-center bg-white rounded-xl border shadow-sm border-slate-100">
                <span className="text-2xl">🌿</span>
                <span className="text-xs font-medium text-slate-600">
                  ১০০% খাঁটি
                </span>
              </div>
              <div className="flex flex-col gap-1 items-center p-3 text-center bg-white rounded-xl border shadow-sm border-slate-100">
                <span className="text-2xl">🚚</span>
                <span className="text-xs font-medium text-slate-600">
                  হোম ডেলিভারি
                </span>
              </div>
              <div className="flex flex-col gap-1 items-center p-3 text-center bg-white rounded-xl border shadow-sm border-slate-100">
                <span className="text-2xl">✨</span>
                <span className="text-xs font-medium text-slate-600">
                  প্রিমিয়াম কোয়ালিটি
                </span>
              </div>
            </div>

            {description && (
              <div className="p-6 mt-6 bg-white rounded-2xl border shadow-sm border-slate-100">
                <h2 className="relative mb-4 text-xl font-bold text-slate-800">
                  পণ্যের বিবরণ
                  <span className="absolute left-0 -bottom-1 w-12 h-1 rounded-full bg-emerald-500"></span>
                </h2>
                <div className="markdown-content">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {description}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="pt-16 mt-16 border-t border-slate-100">
            <h2 className="relative mb-8 text-2xl font-bold text-slate-800">
              আরও পণ্য দেখুন
              <span className="absolute left-0 -bottom-2 w-16 h-1 rounded-full bg-emerald-500"></span>
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/product/${relatedProduct.id}`}
                  className="flex overflow-hidden flex-col bg-white rounded-xl border shadow-sm transition-all duration-300 group border-slate-100 hover:shadow-xl hover:border-emerald-200"
                >
                  <div className="flex overflow-hidden relative justify-center items-center p-2 h-32 bg-white md:p-4 md:h-48">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      width={150}
                      height={150}
                      className="object-contain w-auto h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="mb-1 text-xs font-semibold transition-colors md:text-sm text-slate-800 line-clamp-2 group-hover:text-emerald-600">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm font-bold md:text-base text-emerald-600">
                      ৳{relatedProduct.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
