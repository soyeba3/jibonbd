import Image from "next/image";

export const Banner = () => {
  return (
    <section className="relative w-full aspect-[21/9] md:aspect-[3/1] lg:aspect-[4/1] overflow-hidden rounded-2xl shadow-lg my-8">
      <Image
        src="/assets/images/banner/artboard_1.png"
        alt="Promotional Banner"
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
        priority
      />
    </section>
  );
};
