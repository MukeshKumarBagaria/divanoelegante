import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    heading: "Seating",
    links: [
      { label: "Ergonomic chairs", href: "/ergonomic-chairs" },
      { label: "Sofas", href: "/sofas" },
      { label: "Phone booths", href: "/phone-booths" },
      { label: "Cafeteria chairs", href: "/ergonomic-chairs" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Leather furniture", href: "#leather-furniture" },
      { label: "Our factory", href: "#factory" },
    ],
  },
] as const;

// PLACEHOLDER CONTACT DETAILS — replace with the real address, phone and email.
const contact = {
  address: ["Divano Elegante", "Factory address line 1", "City, State 000000"],
  phone: "+91 00000 00000",
  email: "hello@divanoelegante.com",
};

export function SiteFooter() {
  return (
    <footer id="contact" className="w-full bg-ink-deep">
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Image
              src="/brand/logo.png"
              alt="Divano Elegante"
              width={600}
              height={105}
              className="h-auto w-[180px] brightness-0 invert"
            />
            <p className="mt-5 max-w-[38ch] font-sans text-base text-ink-soft">
              Ergonomic seating, sofas and acoustic phone booths, built and
              finished in our own factory.
            </p>
            <Link
              href={`mailto:${contact.email}`}
              className="mt-7 inline-flex rounded-full bg-brand px-6 py-3 font-sans text-base font-semibold text-primary-text-dark transition-colors duration-150 ease hover:bg-brand/90"
            >
              Request a quote
            </Link>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} className="md:col-span-2">
              <h2 className="font-sans text-base font-semibold text-primary-text-light">
                {column.heading}
              </h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-base text-ink-soft transition-colors duration-150 ease hover:text-primary-text-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="md:col-span-3">
            <h2 className="font-sans text-base font-semibold text-primary-text-light">
              Visit or call
            </h2>
            <address className="mt-4 space-y-1 font-sans text-base not-italic text-ink-soft">
              {contact.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <div className="mt-4 space-y-1 font-sans text-base">
              <Link
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="block text-ink-soft transition-colors duration-150 ease hover:text-primary-text-light"
              >
                {contact.phone}
              </Link>
              <Link
                href={`mailto:${contact.email}`}
                className="block text-ink-soft transition-colors duration-150 ease hover:text-primary-text-light"
              >
                {contact.email}
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-16 border-t border-ink-line pt-6 font-sans text-sm text-ink-soft">
          © {new Date().getFullYear()} Divano Elegante
        </p>
      </div>
    </footer>
  );
}
