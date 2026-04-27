"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent } from "react";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  function handleWaitlistClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    const target = document.getElementById("waitlist");
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });

    if (window.location.hash !== "#waitlist") {
      router.replace("/#waitlist", { scroll: false });
    }
  }

  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (window.location.hash) {
      router.replace("/", { scroll: false });
    }
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-border-light">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center group"
          aria-label="Perry home"
        >
          <Image
            src="/perry-logo.png"
            alt="Perry"
            width={92}
            height={30}
            priority
            className="h-7 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/perry-tos/perry_florentxlundaisociety"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perry on GitHub"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground/80 px-3 py-1.5 rounded-full border border-border-light bg-white/60 transition-colors duration-200 hover:text-foreground hover:border-border hover:bg-white active:scale-[0.97]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.74-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            GitHub
          </a>

          <Link
            href="/#waitlist"
            onClick={handleWaitlistClick}
            className="text-[13px] font-medium bg-foreground text-white px-4 py-1.5 rounded-full transition-colors duration-200 hover:bg-accent-teal active:scale-[0.97]"
          >
            Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
}
