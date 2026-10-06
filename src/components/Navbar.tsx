"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Apps", href: "/apps" },
  { name: "Software", href: "/software" },
  { name: "Articles", href: "/articles" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-400/10 bg-[#051913]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="The Quran Site home"
          onClick={closeMenu}
        >
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-emerald-300/15 bg-[#0a231b] shadow-[0_0_25px_rgba(52,211,153,0.12)] transition duration-300 group-hover:border-emerald-300/30 group-hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]">
            <Image
              src="/icon.png"
              alt="The Quran Site"
              width={40}
              height={40}
              className="h-full w-full object-contain p-1"
              priority
            />
          </div>

          <div>
            <div className="text-[15px] font-semibold tracking-tight text-emerald-50">
              The Quran Site
            </div>

            <div className="text-[11px] text-[#788b84]">
              Free Islamic Software and Tech
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-[#a7b8b1] transition-colors duration-200 hover:text-emerald-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/apps"
          className="hidden min-h-10 items-center justify-center rounded-full bg-[#34d399] px-5 text-sm font-semibold text-[#051913] transition duration-200 hover:bg-[#6ee7b7] md:inline-flex"
        >
          Explore Apps
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/15 bg-[#0a231b] text-emerald-300 transition duration-200 hover:border-emerald-400/30 hover:bg-[#0f2e23] md:hidden"
        >
          {menuOpen ? (
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-emerald-400/10 bg-[#051913] transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-7xl flex-col px-6 py-5"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-emerald-400/8 py-4 text-sm font-medium text-[#a7b8b1] transition-colors hover:text-emerald-300"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/apps"
            onClick={closeMenu}
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#34d399] px-5 text-sm font-semibold text-[#051913] transition duration-200 hover:bg-[#6ee7b7]"
          >
            Explore Apps
          </Link>
        </nav>
      </div>
    </header>
  );
}