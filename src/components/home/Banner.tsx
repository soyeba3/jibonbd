import Image from "next/image";

export const Banner = () => {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] md:w-full md:left-auto md:right-auto md:ml-0 md:mr-0 aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1] overflow-hidden rounded-none md:rounded-2xl shadow-lg my-8">
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
