"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { ExpoScaleEase } from "gsap/EasePack";

gsap.registerPlugin(ScrollTrigger, Flip, ExpoScaleEase);

const shots = [
  { src: "/booths/booth-1.jpg", alt: "Dark acoustic booth standing beside open-plan desks" },
  { src: "/booths/booth-3.jpg", alt: "A row of booths installed along an office corridor" },
  { src: "/booths/booth-4.jpg", alt: "Yellow and black booths side by side" },
  { src: "/booths/booth-5.jpg", alt: "Blue booth on a planted office floor" },
  { src: "/booths/booth-6.jpg", alt: "Booth interiors with stools and worktops" },
  { src: "/booths/booth-2.jpg", alt: "Close view of a booth door and handle" },
];

export function BoothBento() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const grid = gridRef.current;
    if (!wrap || !grid) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const items = grid.querySelectorAll(".booth-bento__item");

        // Capture the expanded layout, revert to the compact one, then let
        // Flip tween the difference as the pinned section scrubs.
        grid.classList.add("booth-bento--final");
        const finalState = Flip.getState(items);
        grid.classList.remove("booth-bento--final");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: wrap,
            start: "center center",
            end: "+=110%",
            scrub: true,
            pin: wrap,
            anticipatePin: 1,
          },
        });

        timeline.add(
          Flip.to(finalState, { simple: true, ease: "expoScale(1, 2.5)" }),
        );

        return () => {
          gsap.set(items, { clearProps: "all" });
        };
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <section className="w-full bg-ink-deep">
      <div className="mx-auto max-w-[1440px] px-6 pt-24 md:pt-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[46ch]">
            <h2 className="font-heading text-[34px] leading-[1.1] tracking-[-0.01em] text-primary-text-light md:text-[46px]">
              Booths, on real floors
            </h2>
            <p className="mt-4 font-sans text-base text-ink-soft md:text-lg">
              Every one of these we built, delivered and installed.
              <span className="hidden md:inline">
                {" "}
                Keep scrolling to move in closer.
              </span>
            </p>
          </div>

          <Link
            href="/phone-booths"
            className="rounded-full border border-ink-line px-7 py-3 font-sans text-base font-semibold text-primary-text-light transition-colors duration-150 ease hover:border-brand hover:text-brand"
          >
            See the range
          </Link>
        </div>
      </div>

      <div
        ref={wrapRef}
        className="relative mt-12 flex w-full items-center justify-center overflow-hidden px-6 pb-24 md:mt-0 md:h-dvh md:px-0 md:pb-0"
      >
        <div ref={gridRef} className="booth-bento">
          {shots.map((shot) => (
            <div key={shot.src} className="booth-bento__item">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(min-width: 768px) 70vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
