"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-border-light">
      <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Image
            src="/perry-logo.png"
            alt="Perry"
            width={92}
            height={30}
            priority
            className="h-7 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        <div className="flex items-center gap-1">
          <NavLink href="/" active={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/dashboard" active={pathname === "/dashboard"}>
            Dashboard
          </NavLink>
          <NavLink href="/demo" active={pathname === "/demo"}>
            Demo
          </NavLink>
          <NavLink
            href="/presentation"
            active={pathname === "/presentation"}
          >
            Presentation
          </NavLink>
        </div>

        <a
          href="#install"
          className="text-[13px] font-medium bg-foreground text-white px-4 py-1.5 rounded-full transition-all hover:bg-foreground/85 active:scale-[0.97]"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`text-[13px] px-3 py-1.5 rounded-full transition-colors ${
        active
          ? "text-foreground font-medium bg-black/[0.05]"
          : "text-muted hover:text-foreground"
      }`}
    >
      {children}
    </Link>
  );
}
