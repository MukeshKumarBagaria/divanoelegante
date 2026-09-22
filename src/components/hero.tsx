import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const panels = [
  {
    src: "/hero/hero-1.png",
    alt: "Close-up of a bouclé armchair's curved arm and tapered metal leg",
    title: "Aurelia Executive",
  },
  {
    src: "/hero/hero-2.png",
    alt: "Sculptural beige sectional sofa and leather armchairs styled in a lounge",
    title: "Arden Lounge",
  },
  {
    src: "/hero/hero-3.png",
    alt: "Tan leather-and-wool dining chairs beside a round oak table",
    title: "Elara Wood Chair",
  },
];

export function Hero() {
  return (
    <section className="hero-grid grid h-dvh w-full overflow-hidden">
      {panels.map((panel, index) => (
        <div
          key={panel.src}
          className="hero-panel group relative min-h-0 min-w-0 overflow-hidden"
        >
          <Image
            src={panel.src}
            alt={panel.alt}
            fill
            priority={index === 0}
            sizes="(min-width: 768px) 70vw, 100vw"
            className="object-cover transition-[transform,filter] duration-700 ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/25 transition-colors duration-500 ease-out group-hover:bg-black/60" />

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <h3 className="text-[32px] font-light tracking-widest text-primary-text-light">
              {panel.title}
            </h3>
            <Link
              href="#"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-[16px] border border-primary-text-light px-5 py-2 font-sans text-base font-medium text-primary-text-light transition-colors duration-150 ease hover:border-primary-text-light/70 hover:text-primary-text-light/70"
            >
              Learn more
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <span className="pointer-events-none absolute bottom-6 left-6 font-mono text-xs tracking-[0.3em] text-white/80 mix-blend-difference">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      ))}
    </section>
  );
}
