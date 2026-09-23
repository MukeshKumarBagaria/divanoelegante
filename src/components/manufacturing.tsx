import Link from "next/link";

// PLACEHOLDER FIGURES — replace with Divano Elegante's real numbers before launch.
const figures = [
  { value: "12 years", label: "Manufacturing in-house" },
  { value: "40,000 seats", label: "Produced each year" },
  { value: "3–4 weeks", label: "Typical lead time on bulk orders" },
  { value: "5 years", label: "Warranty on frames and mechanisms" },
];

export function Manufacturing() {
  return (
    <section className="w-full bg-ink-deep py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="max-w-[52ch]">
          <h2 className="font-heading text-[34px] leading-[1.1] tracking-[-0.01em] text-primary-text-light md:text-[46px]">
            One roof, start to finish
          </h2>
          <p className="mt-5 font-sans text-base text-ink-soft md:text-lg">
            Frames are cut, foam is shaped, upholstery is stitched and
            mechanisms are fitted in our own factory. Nothing is subcontracted,
            so a fault never becomes somebody else&apos;s problem.
          </p>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-20 md:grid-cols-4 md:gap-x-10">
          {figures.map((figure) => (
            <div key={figure.label} className="border-t border-ink-line pt-5">
              <dt className="font-heading text-[28px] tabular-nums text-primary-text-light md:text-[36px]">
                {figure.value}
              </dt>
              <dd className="mt-2 font-sans text-sm text-ink-soft md:text-base">
                {figure.label}
              </dd>
            </div>
          ))}
        </dl>

        <Link
          href="#contact"
          className="mt-14 inline-flex rounded-full border border-ink-line px-7 py-3 font-sans text-base font-semibold text-primary-text-light transition-colors duration-150 ease hover:border-brand hover:text-brand md:mt-20"
        >
          Visit the factory
        </Link>
      </div>
    </section>
  );
}
