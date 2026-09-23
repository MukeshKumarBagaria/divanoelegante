import type { Metadata } from "next";
import Image from "next/image";
import { CategoryHero } from "@/components/category-hero";
import { QuoteBand } from "@/components/quote-band";

export const metadata: Metadata = {
  title: "Sofas — Divano Elegante",
  description:
    "Leather and fabric sofas, upholstered to order in our own factory.",
};

const choices = [
  {
    title: "Leather",
    body: "Full-grain and top-grain hides, cut from the roll on our own floor. Tan, cognac, black and ivory are stocked; anything else is ordered in.",
  },
  {
    title: "Fabric",
    body: "Boucle, velvet, linen blends and contract-grade weaves rated for commercial use. Bring your own roll if you have a house fabric.",
  },
  {
    title: "Frame and legs",
    body: "Kiln-dried hardwood frames, corner-blocked and screwed rather than stapled. Legs in solid wood, black steel or brushed metal.",
  },
];

// PLACEHOLDER SPECS — confirm widths and seat counts against your real catalogue.
const configurations = [
  { name: "Two seater", width: "1,650 mm", seats: "2" },
  { name: "Three seater", width: "2,100 mm", seats: "3" },
  { name: "Corner", width: "2,600 × 1,900 mm", seats: "4–5" },
  { name: "Chaise", width: "2,400 mm", seats: "3 + chaise" },
];

export default function SofasPage() {
  return (
    <>
      <CategoryHero
        image="/hero/sofa.jpg"
        alt="Finished leather sofas lined up on the factory floor"
        title="Sofas cut, stitched and stuffed by us."
        lead="Every sofa leaves the same floor you see here. Choose the size, the leather or fabric, the frame and the leg, and we build to that."
      />

      <section className="w-full bg-background-light py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <h2 className="font-heading text-[32px] leading-[1.1] tracking-[-0.01em] text-primary-text-dark md:text-[44px]">
                Made to order, not to stock
              </h2>
              <p className="mt-5 font-sans text-base text-secondary-text-dark md:text-lg">
                We do not build a warehouse of sofas and hope one fits your
                room. Orders go onto the floor as specifications: this frame,
                this hide, this depth, this leg.
              </p>
              <p className="mt-4 font-sans text-base text-secondary-text-dark md:text-lg">
                It means a longer wait than a showroom purchase, and a sofa that
                matches the drawing you approved.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:col-span-7">
              <Image
                src="/sofas/showroom.jpg"
                alt="Cream upholstered sofas and armchairs arranged in the showroom"
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-light py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6">
          <h2 className="font-heading text-[32px] leading-[1.1] tracking-[-0.01em] text-primary-text-dark md:text-[44px]">
            What you choose
          </h2>

          <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
            {choices.map((choice) => (
              <div key={choice.title} className="border-t border-borders-light pt-5">
                <h3 className="font-heading text-2xl text-primary-text-dark">
                  {choice.title}
                </h3>
                <p className="mt-3 font-sans text-base text-secondary-text-dark">
                  {choice.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-background-light py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6">
          <h2 className="font-heading text-[32px] leading-[1.1] tracking-[-0.01em] text-primary-text-dark md:text-[44px]">
            Standard sizes
          </h2>
          <p className="mt-4 max-w-[52ch] font-sans text-base text-secondary-text-dark md:text-lg">
            These are the sizes we cut most often. Anything between them is a
            question of the drawing, not the tooling.
          </p>

          <dl className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {configurations.map((item) => (
              <div key={item.name} className="border-t border-borders-light pt-5">
                <dt className="font-heading text-2xl text-primary-text-dark">
                  {item.name}
                </dt>
                <dd className="mt-3 font-sans text-base tabular-nums text-secondary-text-dark">
                  {item.width}
                </dd>
                <dd className="font-sans text-base text-secondary-text-dark">
                  Seats {item.seats}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <QuoteBand
        heading="Send us the room, we will send the drawing"
        body="Share dimensions or a floor plan and we will come back with a configuration, a fabric shortlist and a price."
      />
    </>
  );
}
