import type { Metadata } from "next";
import Image from "next/image";
import { CategoryHero } from "@/components/category-hero";
import { QuoteBand } from "@/components/quote-band";

export const metadata: Metadata = {
  title: "Phone Booths — Divano Elegante",
  description:
    "Acoustic phone booths and meeting pods for open-plan offices, built in our own factory.",
};

// PLACEHOLDER SPECS — confirm footprints and acoustic ratings before publishing.
const sizes = [
  {
    name: "Solo",
    occupancy: "1 person",
    footprint: "1,000 × 1,000 mm",
    height: "2,230 mm",
    use: "Calls and focus work beside the desks people already sit at.",
  },
  {
    name: "Duo",
    occupancy: "2 people",
    footprint: "1,500 × 1,000 mm",
    height: "2,230 mm",
    use: "One-to-ones and interviews, with a bench and a shared worktop.",
  },
  {
    name: "Meeting",
    occupancy: "4 people",
    footprint: "2,200 × 1,500 mm",
    height: "2,230 mm",
    use: "Stand-ups and video calls without booking a meeting room.",
  },
];

const features = [
  {
    title: "Acoustics",
    body: "Double-glazed door and recycled-PET wall panels, rated to a 28 dB reduction so a call stays inside the booth.",
  },
  {
    title: "Ventilation",
    body: "Silent extraction changes the air roughly every two minutes, on a motion sensor that runs it only when occupied.",
  },
  {
    title: "Light and power",
    body: "Dimmable LED overhead, twin sockets and USB-C at the worktop, fed from a single floor point.",
  },
  {
    title: "Installation",
    body: "Delivered flat and assembled on site in about two hours. It bolts to nothing and moves when the floorplan does.",
  },
];

const gallery = [
  { src: "/booths/booth-1.jpg", alt: "Single dark phone booth beside open-plan desks" },
  { src: "/booths/booth-5.jpg", alt: "Blue phone booth in a planted office floor" },
  { src: "/booths/booth-6.jpg", alt: "Interior of two booths with stools and worktops" },
  { src: "/booths/booth-4.jpg", alt: "Yellow and black booths standing side by side" },
  { src: "/booths/booth-2.jpg", alt: "Close view of a booth door and handle detail" },
];

export default function PhoneBoothsPage() {
  return (
    <>
      <CategoryHero
        image="/booths/booth-3.jpg"
        alt="A row of acoustic phone booths installed along an office corridor"
        title="Somewhere to take the call."
        lead="Acoustic booths and meeting pods for open-plan floors, built in the same factory as our seating and upholstered in the same materials."
      />

      <section className="w-full bg-background-light py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6">
          <h2 className="font-heading text-[32px] leading-[1.1] tracking-[-0.01em] text-primary-text-dark md:text-[44px]">
            Three footprints
          </h2>
          <p className="mt-4 max-w-[52ch] font-sans text-base text-secondary-text-dark md:text-lg">
            Sized by how many people need to get in and how much floor you can
            give up.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {sizes.map((size) => (
              <div
                key={size.name}
                className="flex flex-col border-t border-borders-light pt-6"
              >
                <h3 className="font-heading text-[28px] text-primary-text-dark">
                  {size.name}
                </h3>
                <p className="mt-2 font-sans text-base text-secondary-text-dark">
                  {size.use}
                </p>

                <dl className="mt-6 space-y-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="font-sans text-sm text-secondary-text-dark">
                      Occupancy
                    </dt>
                    <dd className="font-sans text-base text-primary-text-dark">
                      {size.occupancy}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="font-sans text-sm text-secondary-text-dark">
                      Footprint
                    </dt>
                    <dd className="font-sans text-base tabular-nums text-primary-text-dark">
                      {size.footprint}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="font-sans text-sm text-secondary-text-dark">
                      Height
                    </dt>
                    <dd className="font-sans text-base tabular-nums text-primary-text-dark">
                      {size.height}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-ink-deep py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6">
          <h2 className="max-w-[18ch] font-heading text-[32px] leading-[1.1] tracking-[-0.01em] text-primary-text-light md:text-[44px]">
            Quiet is an engineering problem
          </h2>

          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="border-t border-ink-line pt-5">
                <h3 className="font-sans text-base font-semibold text-primary-text-light">
                  {feature.title}
                </h3>
                <p className="mt-2 font-sans text-base text-ink-soft">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-background-light py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6">
          <h2 className="font-heading text-[32px] leading-[1.1] tracking-[-0.01em] text-primary-text-dark md:text-[44px]">
            Installed
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:col-span-7 md:aspect-[3/2]">
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:col-span-5 md:aspect-[3/2]">
              <Image
                src={gallery[1].src}
                alt={gallery[1].alt}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            {gallery.slice(2).map((shot) => (
              <div
                key={shot.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl md:col-span-4"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 768px) 32vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteBand
        heading="How many booths does the floor need?"
        body="Send us a floor plan and headcount. We will suggest a mix of sizes, where they sit and what the lead time looks like."
      />
    </>
  );
}
