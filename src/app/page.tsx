import { Banner } from "@/components/home/Banner";
import { ProductGrid } from "@/components/home/ProductGrid";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="container px-4 mx-auto grow">
        <Banner />
        <ProductGrid />
      </main>

      <Footer />
    </div>
  );
}
