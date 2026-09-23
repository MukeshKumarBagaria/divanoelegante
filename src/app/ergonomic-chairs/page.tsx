import type { Metadata } from "next";
import Image from "next/image";
import { CategoryHero } from "@/components/category-hero";
import { QuoteBand } from "@/components/quote-band";

export const metadata: Metadata = {
  title: "Ergonomic Chairs — Divano Elegante",
  description:
    "Task, executive, cafeteria and visitor seating, built to order in our own factory.",
};

// PLACEHOLDER SPECS — replace back heights and prices with your real figures.
const range = [
  {
    name: "Low Back Chair",
    image: "/chairs/low-back-chair.jpg",
    backHeight: "480 mm",
    summary:
      "Short backrest that tucks under a desk. Built for hot desks and shared workstations.",
    features: ["Pneumatic height adjust", "Nylon castors", "Fixed arms"],
    price: "₹8,500",
  },
  {
    name: "Mid Back Chair",
    image: "/chairs/mid-back-chair.jpg",
    backHeight: "620 mm",
    summary:
      "Breathable mesh back with lumbar support. The everyday choice for full working days.",
    features: ["Flip-up armrests", "Tilt lock", "Mesh back"],
    price: "₹11,200",
  },
  {
    name: "High Back Chair",
    image: "/chairs/high-back-chair.jpg",
    backHeight: "780 mm",
    summary:
      "Full-height back with a headrest, upholstered in leather or fabric for cabins and boardrooms.",
    features: ["Headrest", "Synchro recline", "Aluminium base"],
    price: "₹18,900",
  },
  {
    name: "Cafeteria Chairs",
    image: "/chairs/cafeteria-chair.jpg",
    backHeight: "420 mm",
    summary:
      "Stacking shell chairs that wipe clean and store flat between shifts.",
    features: ["Stacks 6 high", "Steel frame", "Wipe-clean shell"],
    price: "₹6,400",
  },
  {
    name: "Visitor Chairs",
    image: "/chairs/visitor-chair.jpg",
    backHeight: "560 mm",
    summary:
      "Cantilever frame with no moving parts, for reception areas and meeting rooms.",
    features: ["Cantilever frame", "Upholstered arms", "No mechanism"],
    price: "₹9,750",
  },
];

const adjustments = [
  {
    title: "Seat height",
    body: "Gas lift rated to 120 kg, tested to 50,000 cycles before it leaves the floor.",
  },
  {
    title: "Lumbar support",
    body: "Depth-adjustable lumbar on mesh backs, moulded foam on upholstered ones.",
  },
  {
    title: "Recline",
    body: "Synchro tilt keeps your feet down as the back reclines, with a four-position lock.",
  },
  {
    title: "Armrests",
    body: "Fixed, flip-up or 3D adjustable, specified per order rather than per catalogue.",
  },
];

export default function ErgonomicChairsPage() {
  return (
    <>
      <CategoryHero
        image="/hero/ergonomic-chair.jpg"
        alt="Upholstered chair on the factory floor"
        title="Chairs measured by the hours you sit."
        lead="Five back heights, one factory. Every chair is cut, foamed, stitched and assembled by us, then specified to the fabric and mechanism you need."
      />

      <section className="w-full bg-background-light py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6">
          <h2 className="font-heading text-[32px] leading-[1.1] tracking-[-0.01em] text-primary-text-dark md:text-[44px]">
            The range
          </h2>
          <p className="mt-4 max-w-[52ch] font-sans text-base text-secondary-text-dark md:text-lg">
            Back height is the thing that changes how a chair feels over eight
            hours, so it is how we organise the range.
          </p>

          <ul className="mt-14 space-y-14 md:space-y-0">
            {range.map((chair) => (
              <li
                key={chair.name}
                className="grid gap-6 border-t border-borders-light pt-8 md:grid-cols-12 md:gap-8 md:py-10"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface-light md:col-span-3">
                  <Image
                    src={chair.image}
                    alt={chair.name}
                    fill
                    sizes="(min-width: 768px) 22vw, 90vw"
                    className="object-contain p-4 mix-blend-multiply"
                  />
                </div>

                <div className="md:col-span-5">
                  <h3 className="font-heading text-2xl text-primary-text-dark md:text-[28px]">
                    {chair.name}
                  </h3>
                  <p className="mt-3 max-w-[46ch] font-sans text-base text-secondary-text-dark">
                    {chair.summary}
                  </p>
                  <p className="mt-4 font-sans text-base text-primary-text-dark">
                    <span className="font-semibold">{chair.price}</span> onwards
                  </p>
                </div>

                <dl className="md:col-span-4">
                  <div className="flex items-baseline justify-between gap-4 border-b border-borders-light pb-3">
                    <dt className="font-sans text-sm text-secondary-text-dark">
                      Back height
                    </dt>
                    <dd className="font-sans text-base tabular-nums text-primary-text-dark">
                      {chair.backHeight}
                    </dd>
                  </div>
                  {chair.features.map((feature) => (
                    <div
                      key={feature}
                      className="border-b border-borders-light py-3 font-sans text-base text-secondary-text-dark last:border-b-0"
                    >
                      {feature}
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-surface-light py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6">
          <h2 className="max-w-[20ch] font-heading text-[32px] leading-[1.1] tracking-[-0.01em] text-primary-text-dark md:text-[44px]">
            What actually adjusts
          </h2>

          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {adjustments.map((item) => (
              <div key={item.title} className="border-t border-borders-light pt-5">
                <h3 className="font-sans text-base font-semibold text-primary-text-dark">
                  {item.title}
                </h3>
                <p className="mt-2 font-sans text-base text-secondary-text-dark">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteBand
        heading="Trialling chairs before you commit?"
        body="Tell us how many seats and how they will be used. We will send samples from the range to sit on before you order."
      />
    </>
  );
}
