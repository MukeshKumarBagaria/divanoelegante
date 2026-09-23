import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const panels = [
  {
    src: "/hero/ergonomic-chair.jpg",
    alt: "Upholstered lounge chair on the factory floor",
    title: "Ergonomic Chairs",
    href: "/ergonomic-chairs",
  },
  {
    src: "/hero/sofa.jpg",
    alt: "Tan leather sofas finished and lined up in the workshop",
    title: "Sofas",
    href: "/sofas",
  },
  {
    src: "/hero/phone-booth.jpg",
    alt: "Acoustic phone booths with upholstered seating",
    title: "Phone Booths",
    href: "/phone-booths",
  },
] as const;

export function Hero() {
  return (
    <section className="relative h-dvh w-full overflow-hidden">
      <div className="hero-grid grid h-full w-full">
        {panels.map((panel, index) => (
          <Link
            key={panel.src}
            href={panel.href}
            className="hero-panel group relative min-h-0 min-w-0 overflow-hidden"
          >
            <Image
              src={panel.src}
              alt={panel.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 768px) 70vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/15 transition-colors duration-500 ease-out group-hover:bg-black/40" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/65 to-transparent" />

            <span
              className={cn(
                "pointer-events-none absolute bottom-5 left-5 font-heading text-lg text-primary-text-light md:bottom-8 md:left-7 md:text-2xl",
                index === 0 && "hidden md:block",
              )}
            >
              {panel.title}
            </span>
          </Link>
        ))}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0.25)_42%,transparent_72%)] md:bg-[linear-gradient(to_right,rgba(0,0,0,0.85),rgba(0,0,0,0.3)_34%,transparent_62%)]"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 flex h-[68%] flex-col justify-end px-6 pb-10 md:h-full md:justify-center md:px-12 md:pb-0 lg:px-16">
        <h1 className="max-w-[16ch] font-heading text-[40px] leading-[1.04] tracking-[-0.02em] text-primary-text-light sm:text-[54px] md:text-[62px] lg:text-[76px]">
          We make the furniture we sell.
        </h1>
        <p className="mt-5 max-w-[46ch] font-sans text-base text-primary-text-light/85 md:mt-6 md:text-lg">
          Ergonomic seating, sofas and acoustic phone booths — designed, built
          and finished in our own factory.
        </p>
        <div className="mt-7 md:mt-9">
          <Link
            href="#contact"
            className="pointer-events-auto inline-flex rounded-full bg-brand px-7 py-3 font-sans text-base font-semibold text-primary-text-dark transition-colors duration-150 ease hover:bg-brand/90"
          >
            Request a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
