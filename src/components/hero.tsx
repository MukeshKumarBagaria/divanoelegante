"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    src: "/hero/sofa.jpg",
    alt: "Leather sofas finished on the factory floor",
    eyebrow: "New Arrival",
    title: "Leather Sofas, Made In-House",
    href: "/sofas",
  },
  {
    src: "/sofas/showroom.jpg",
    alt: "Cream leather sofa set styled in the showroom",
    eyebrow: "Handcrafted",
    title: "Every Piece Finished By Hand",
    href: "/sofas",
  },
  {
    src: "/booths/booth-1.jpg",
    alt: "Acoustic phone booth in an open-plan office",
    eyebrow: "Focus Space",
    title: "Acoustic Phone Booths",
    href: "/phone-booths",
  },
];

const sideCards = [
  {
    image: "/products/aurelia-executive.png",
    title: "Ergonomic Chairs",
    subtitle: "Built for long work days.",
    href: "/ergonomic-chairs",
  },
  {
    image: "/products/elara-wood-chair.png",
    title: "Dining & Accent Chairs",
    subtitle: "Solid wood, hand-finished.",
    href: "/sofas",
  },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full bg-background-light py-8 md:py-12">
      <div className="grid grid-cols-12 px-6">
        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <div className="grid grid-cols-1 gap-4 md:h-[520px] md:grid-cols-[1.6fr_1fr]">
            {/* Big carousel */}
            <div className="group relative h-[320px] overflow-hidden rounded-2xl md:h-full">
              <div ref={emblaRef} className="h-full overflow-hidden">
                <div className="flex h-full">
                  {slides.map((slide) => (
                    <div
                      key={slide.src}
                      className="relative h-full min-w-0 flex-[0_0_100%]"
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        priority
                        sizes="(min-width: 768px) 55vw, 100vw"
                        className="object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 md:p-8">
                        <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                          {slide.eyebrow}
                        </span>
                        <h2 className="max-w-sm font-heading text-2xl text-primary-text-light md:text-3xl">
                          {slide.title}
                        </h2>
                        <Link
                          href={slide.href}
                          className="mt-2 inline-flex w-fit items-center gap-1.5 font-sans text-sm font-medium text-primary-text-light underline underline-offset-4 transition-colors duration-150 ease hover:text-primary-text-light/70"
                        >
                          Explore
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => emblaApi?.scrollPrev()}
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background-light/85 text-primary-text-dark opacity-0 transition-opacity duration-200 ease group-hover:opacity-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => emblaApi?.scrollNext()}
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background-light/85 text-primary-text-dark opacity-0 transition-opacity duration-200 ease group-hover:opacity-100"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={cn(
                      "h-2 w-2 rounded-full transition-colors duration-200 ease",
                      index === selectedIndex ? "bg-brand" : "bg-borders-light",
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Two stacked side cards */}
            <div className="grid grid-rows-2 gap-4">
              {sideCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group relative flex h-[150px] items-center justify-between overflow-hidden rounded-2xl bg-surface-light px-6 md:h-full"
                >
                  <div className="max-w-[55%]">
                    <h3 className="font-heading text-lg text-primary-text-dark md:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-1 font-sans text-sm text-secondary-text-dark">
                      {card.subtitle}
                    </p>
                  </div>
                  <div className="relative h-full w-[45%]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="200px"
                      className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
