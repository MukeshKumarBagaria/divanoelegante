"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export function PromoBanner() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="mb-40 mt-40 w-full">
      <div className="mx-auto max-w-[1440px] px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-[#DEF2FD]"
          initial={{
            opacity: 0,
            transform: reduceMotion ? "translateY(0px)" : "translateY(24px)",
          }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -right-10 top-[42%] hidden -translate-y-1/2 font-heading text-[150px] font-bold leading-none tracking-tight text-[#BEE1F4] lg:block"
          >
            SALE
          </span>

          <div className="relative grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-[1fr_1fr] md:p-12 lg:pr-[220px]">
            <div>
              <p className="font-heading text-2xl font-bold leading-tight text-[#155679] md:text-[28px]">
                Modern Collection
              </p>

              <div className="mt-5 flex items-end gap-2">
                <span className="font-sans text-[64px] font-bold leading-[0.85] text-[#155679] md:text-[76px]">
                  30
                </span>
                <div className="pb-1">
                  <span className="font-sans text-2xl font-bold text-[#155679]">
                    %
                  </span>
                  <p className="font-sans text-xl font-bold leading-tight text-[#155679]">
                    OFF
                  </p>
                  <p className="font-sans text-xs font-semibold uppercase tracking-wide text-secondary-text-dark">
                    On all products
                  </p>
                </div>
              </div>

              <Link
                href="#shop"
                className="mt-7 inline-flex rounded-full bg-[#155679] px-7 py-3 font-sans text-base font-semibold text-primary-text-light transition-colors duration-150 ease hover:bg-[#155679]/90"
              >
                Shop Now
              </Link>
            </div>

            <div className="relative flex justify-center">
              <div
                aria-hidden
                className="absolute inset-x-[10%] bottom-0 top-[6%] rounded-t-full bg-[#7DC3E8]"
              />
              <div className="relative aspect-square w-full max-w-[300px]">
                <Image
                  src="/products/blue-accent-chair.png"
                  alt="Teal velvet accent chair on sale"
                  fill
                  sizes="(min-width: 768px) 30vw, 70vw"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>

          <div className="relative z-10 px-8 pb-8 md:px-12 md:pb-12 lg:absolute lg:bottom-8 lg:right-10 lg:px-0 lg:pb-0 lg:text-right">
            <p className="font-sans text-sm font-semibold uppercase tracking-wide text-[#155679]">
              Contact Us
            </p>
            <p className="mt-1 font-sans text-sm text-secondary-text-dark">
              +91-9314444747
            </p>
            <p className="font-sans text-sm text-secondary-text-dark">
              hello@divanoelegante.com
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
