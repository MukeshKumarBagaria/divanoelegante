"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Ergonomic Chairs", href: "/ergonomic-chairs" },
  { label: "Sofas", href: "/sofas" },
  { label: "Phone Booths", href: "/phone-booths" },
] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const isSolid = isScrolled || isMenuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease",
        isSolid
          ? "border-b border-borders-light/70 bg-background-light/75 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent transition-opacity duration-300 ease",
          isSolid && "opacity-0",
        )}
      />

      <div className="relative mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5">
        <Link href="/" aria-label="Divano Elegante home">
          <Image
            src="/brand/logo.png"
            alt="Divano Elegante"
            width={600}
            height={105}
            priority
            className={cn(
              "h-auto w-[160px] transition-all duration-300 ease md:w-[184px]",
              !isSolid && "brightness-0 invert",
            )}
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative py-1 font-sans text-base transition-colors duration-150 ease",
                  isSolid
                    ? "text-primary-text-dark hover:text-primary-text-dark/65"
                    : "text-primary-text-light hover:text-primary-text-light/70",
                  isActive && "font-medium",
                )}
              >
                {link.label}
                {isActive ? (
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-brand" />
                ) : null}
              </Link>
            );
          })}
          <Link
            href="#contact"
            className="rounded-full bg-brand px-6 py-2.5 font-sans text-base font-semibold text-primary-text-dark transition-colors duration-150 ease hover:bg-brand/90"
          >
            Contact Us
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-150 ease md:hidden",
            isSolid
              ? "border-borders-light text-primary-text-dark"
              : "border-primary-text-light/40 text-primary-text-light",
          )}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" strokeWidth={1.75} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.75} />
          )}
        </button>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-borders-light/70 bg-background-light/90 backdrop-blur-xl md:hidden"
        >
          <nav className="mx-auto max-w-[1440px] px-6 py-4">
            <ul>
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className="border-b border-borders-light last:border-b-0"
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-4 font-heading text-xl text-primary-text-dark"
                  >
                    {link.label}
                    {pathname === link.href ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="mt-5 flex justify-center rounded-full bg-brand px-6 py-3.5 font-sans text-base font-semibold text-primary-text-dark"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
