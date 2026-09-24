"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Leather Furniture", href: "#leather-furniture" },
  { label: "Shop", href: "#shop" },
] as const;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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

  return (
    <header className="sticky top-0 z-50 mb-4 border-b border-borders-light bg-background-light">
      <div className="relative mx-auto flex max-w-[1440px] items-center justify-end px-6 pb-3 pt-6 md:justify-center">
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative py-1 font-sans text-sm text-secondary-text-dark transition-colors duration-150 ease hover:text-secondary-text-dark/70",
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
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-borders-light text-primary-text-dark transition-colors duration-150 ease md:hidden"
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
          className="border-t border-borders-light/70 bg-background-light md:hidden"
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
          </nav>
        </div>
      ) : null}
    </header>
  );
}
