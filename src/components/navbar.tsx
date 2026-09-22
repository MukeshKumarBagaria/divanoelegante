import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Leather Furniture", href: "#leather-furniture" },
  { label: "Shop", href: "#shop" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black/85 via-black/50 to-transparent"
      />
      <div className="relative grid grid-cols-12 items-center px-6 pt-10">
        <div className="col-span-12 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/brand/logo.png"
              alt="Divano Elegante"
              width={600}
              height={105}
              priority
              className="h-auto w-[170px] md:w-[200px]"
            />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-base font-medium text-primary-text-light transition-colors duration-150 ease hover:text-primary-text-light/70"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="rounded-full bg-brand px-6 py-2.5 font-sans text-base font-medium text-primary-text-dark transition-colors duration-150 ease hover:bg-brand/90"
            >
              Contact Us
            </Link>
          </nav>

          <Link
            href="#contact"
            className="rounded-full bg-brand px-5 py-2 font-sans text-base font-medium text-primary-text-dark transition-colors duration-150 ease hover:bg-brand/90 md:hidden"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
