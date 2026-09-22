"use client";

import { motion, useReducedMotion } from "motion/react";

export function FactoryVideo() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative h-dvh w-full overflow-hidden">
      <motion.video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/factory-tour.mp4"
        poster="/hero/hero-2.png"
        autoPlay
        muted
        loop
        playsInline
        initial={{
          opacity: 0,
          transform: reduceMotion ? "scale(1)" : "scale(1.06)",
        }}
        whileInView={{ opacity: 1, transform: "scale(1)" }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 flex justify-center px-6 pb-10">
        <motion.h2
          className="whitespace-nowrap text-center text-[15px] font-light uppercase tracking-widest text-primary-text-light sm:text-[22px] md:text-[32px] lg:text-[44px]"
          initial={{
            opacity: 0,
            transform: reduceMotion ? "translateY(0px)" : "translateY(24px)",
          }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
        >
          From Our Factory to Your Space
        </motion.h2>
      </div>
    </section>
  );
}
