"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconArrowRight,
} from "@tabler/icons-react";

const shopLinks = [
  { label: "Ergonomic Chairs", href: "/ergonomic-chairs" },
  { label: "Sofas", href: "/sofas" },
  { label: "Phone Booths", href: "/phone-booths" },
  { label: "New Arrivals", href: "/#products" },
  { label: "Best Sellers", href: "/#products" },
] as const;

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Story", href: "#about" },
  { label: "Our Manufacturing", href: "/#factory" },
  { label: "Careers", href: "#careers" },
  { label: "Contact Us", href: "#contact" },
] as const;

const supportLinks = [
  { label: "Contact Us", href: "#contact" },
  { label: "Track Order", href: "#track-order" },
  { label: "Shipping Policy", href: "#shipping-policy" },
  { label: "Returns & Refunds", href: "#returns-refunds" },
  { label: "FAQs", href: "#faqs" },
] as const;

const legalLinks = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
  { label: "Shipping", href: "#shipping-policy" },
] as const;

// PLACEHOLDER — point these at the real profiles once they exist.
const socialLinks = [
  { label: "Instagram", href: "#", icon: IconBrandInstagram },
  { label: "Facebook", href: "#", icon: IconBrandFacebook },
  { label: "LinkedIn", href: "#", icon: IconBrandLinkedin },
  { label: "YouTube", href: "#", icon: IconBrandYoutube },
] as const;

// PLACEHOLDER CONTACT DETAILS — replace with the real address.
const contact = {
  address: ["Divano Elegante", "Factory / Office address line 1", "City, State 000000"],
  phone: "+91-9314444747",
  email: "hello@divanoelegante.com",
};

const whatsappHref = `https://wa.me/${contact.phone.replace(/\D/g, "")}`;

export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer id="contact" className="w-full scroll-mt-24 bg-ink-deep">
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-3">
            <Image
              src="/brand/logo.png"
              alt="Divano Elegante"
              width={600}
              height={105}
              className="h-auto w-[180px] brightness-0 invert"
            />
            <p className="mt-5 max-w-[32ch] font-sans text-base text-ink-soft">
              Premium furniture designed for comfortable, productive and
              beautiful spaces.
            </p>
          </div>

          <nav className="lg:col-span-2">
            <h2 className="font-sans text-base font-semibold text-primary-text-light">
              Shop
            </h2>
            <ul className="mt-4 space-y-3">
              {shopLinks.map((link) => (
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

          <nav className="lg:col-span-2">
            <h2 className="font-sans text-base font-semibold text-primary-text-light">
              Company
            </h2>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
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

          <nav className="lg:col-span-2">
            <h2 className="font-sans text-base font-semibold text-primary-text-light">
              Support
            </h2>
            <ul className="mt-4 space-y-3">
              {supportLinks.map((link) => (
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

          <div className="sm:col-span-2 lg:col-span-3">
            <h2 className="font-sans text-base font-semibold text-primary-text-light">
              Contact
            </h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5">
                <IconMapPin
                  size={18}
                  stroke={1.75}
                  className="mt-0.5 shrink-0 text-brand"
                />
                <address className="font-sans text-base not-italic text-ink-soft">
                  {contact.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
              <li className="flex items-center gap-2.5">
                <IconPhone size={18} stroke={1.75} className="shrink-0 text-brand" />
                <Link
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="font-sans text-base text-ink-soft transition-colors duration-150 ease hover:text-primary-text-light"
                >
                  {contact.phone}
                </Link>
              </li>
              <li className="flex items-center gap-2.5">
                <IconMail size={18} stroke={1.75} className="shrink-0 text-brand" />
                <Link
                  href={`mailto:${contact.email}`}
                  className="font-sans text-base text-ink-soft transition-colors duration-150 ease hover:text-primary-text-light"
                >
                  {contact.email}
                </Link>
              </li>
              <li className="flex items-center gap-2.5">
                <IconBrandWhatsapp
                  size={18}
                  stroke={1.75}
                  className="shrink-0 text-[#25D366]"
                />
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-base text-ink-soft transition-colors duration-150 ease hover:text-primary-text-light"
                >
                  WhatsApp Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-ink-line pt-12 lg:mt-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[42ch]">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                Join our community
              </p>
              <p className="mt-3 font-sans text-base text-ink-soft">
                Get new product launches, offers and design inspiration.
              </p>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                // PLACEHOLDER — wire this up to a real newsletter service.
                setSubscribed(true);
                event.currentTarget.reset();
              }}
              className="flex w-full max-w-md items-center gap-2 rounded-full border border-ink-line bg-ink-deep py-1.5 pl-5 pr-1.5"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full bg-transparent font-sans text-base text-primary-text-light outline-none placeholder:text-ink-soft"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-primary-text-dark transition-colors duration-150 ease hover:bg-brand/90"
              >
                <IconArrowRight size={18} stroke={2} />
              </button>
            </form>
          </div>

          {subscribed ? (
            <p aria-live="polite" className="mt-3 text-right font-sans text-sm text-brand lg:text-right">
              You&apos;re on the list — thank you.
            </p>
          ) : null}

          <div className="mt-10 flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-ink-soft transition-colors duration-150 ease hover:border-primary-text-light hover:text-primary-text-light"
              >
                <social.icon size={18} stroke={1.75} />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-sm text-ink-soft">
            © {new Date().getFullYear()} Divano Elegante
          </p>
          <nav className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-sm text-ink-soft transition-colors duration-150 ease hover:text-primary-text-light"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
