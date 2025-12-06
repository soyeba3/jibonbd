"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const bannerImages = [
  { src: "/assets/images/banner/gorommoshla.webp", alt: "Gorom Moshla" },
  { src: "/assets/images/banner/holudgura.webp", alt: "Holud Gura" },
  { src: "/assets/images/banner/jiragura.webp", alt: "Jira Gura" },
  { src: "/assets/images/banner/morichgura.webp", alt: "Morich Gura" },
  { src: "/assets/images/banner/musterdoil.jpeg", alt: "Muster Oil" },
  { src: "/assets/images/banner/pachforon.webp", alt: "Pach Foron" },
];

export const Banner = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
      onSelect();
    }
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] md:w-full md:left-auto md:right-auto md:ml-0 md:mr-0 my-8">
      <div
        className="overflow-hidden rounded-none shadow-lg md:rounded-xl"
        ref={emblaRef}
      >
        <div className="flex">
          {bannerImages.map((image, index) => (
            <div
              key={image.src}
              className="relative flex-[0_0_100%] min-w-0 aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex absolute bottom-3 left-1/2 z-10 gap-2 -translate-x-1/2 md:bottom-5">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-white scale-125 shadow-md"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t to-transparent rounded-none pointer-events-none from-black/20 md:rounded-xl" />
    </section>
  );
};
