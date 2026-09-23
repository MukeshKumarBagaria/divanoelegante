"use client";

import { motion, useReducedMotion } from "motion/react";

export function FactoryVideo() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative h-dvh w-full overflow-hidden">
      <motion.video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/Factory-video.mp4"
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
        className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black/85 via-black/45 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 px-6 pb-12 text-center">
        <motion.h2
          className="max-w-[18ch] text-balance font-heading text-[32px] leading-[1.08] tracking-[-0.01em] text-primary-text-light sm:text-[42px] md:text-[54px] lg:text-[64px]"
          initial={{
            opacity: 0,
            transform: reduceMotion ? "translateY(0px)" : "translateY(24px)",
          }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
        >
          Built In-House, From Frame to Finish
        </motion.h2>

        <motion.p
          className="max-w-xl text-balance font-sans text-sm text-primary-text-light/80 md:text-base"
          initial={{
            opacity: 0,
            transform: reduceMotion ? "translateY(0px)" : "translateY(16px)",
          }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
        >
          Our own factory, our own craftsmen — every piece is checked by the
          people who made it before it reaches you.
        </motion.p>
      </div>
    </section>
  );
}
