import Image from "next/image";
import Link from "next/link";
import { IconPhone, IconHelp } from "@tabler/icons-react";

export function TopBar() {
  return (
    <div className="h-9 w-full bg-surface-light">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6">
        <Link href="/" aria-label="Divano Elegante home">
          <Image
            src="/brand/logo.png"
            alt="Divano Elegante"
            width={600}
            height={105}
            className="h-6 w-auto"
          />
        </Link>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="tel:+919314444747"
              className="flex items-center gap-1.5 font-sans text-sm text-secondary-text-dark transition-colors duration-150 ease hover:text-secondary-text-dark/70"
            >
              <IconPhone size={16} stroke={1.75} />
              +91-9314444747
            </a>

            <div className="h-4 w-px bg-borders-light" />

            <Link
              href="#help"
              className="flex items-center gap-1.5 font-sans text-sm text-secondary-text-dark transition-colors duration-150 ease hover:text-secondary-text-dark/70"
            >
              <IconHelp size={16} stroke={1.75} />
              Help Center
            </Link>
          </div>

          <Link
            href="#contact"
            className="whitespace-nowrap rounded-full bg-brand px-4 py-1.5 font-sans text-sm font-semibold text-primary-text-dark transition-colors duration-150 ease hover:bg-brand/90"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
