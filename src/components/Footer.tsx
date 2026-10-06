import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-emerald-400/10 bg-[#04150f]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-emerald-300/15 bg-[#0a231b] shadow-[0_0_25px_rgba(52,211,153,0.1)]">
                <Image
                  src="/icon.png"
                  alt="The Quran Site"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain p-1"
                />
              </div>

              <div>
                <div className="text-sm font-semibold text-emerald-50">
                  The Quran Site
                </div>

                <div className="mt-0.5 text-[10px] text-[#788b84]">
                  Free Islamic Software and Tech
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#788b84]">
              An independent software and technology project creating useful
              digital tools for Quran learning, prayer management, and everyday
              Islamic activities.
            </p>

            <p className="mt-4 max-w-md text-xs leading-6 text-[#5f736b]">
              Built independently with a focus on simplicity, usefulness, and
              continuous learning.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Products
            </h2>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href="/apps"
                className="text-sm text-[#788b84] transition hover:text-emerald-300"
              >
                Apps
              </Link>

              <Link
                href="/software"
                className="text-sm text-[#788b84] transition hover:text-emerald-300"
              >
                Software
              </Link>

              <Link
                href="/articles"
                className="text-sm text-[#788b84] transition hover:text-emerald-300"
              >
                Articles
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Information
            </h2>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href="/about"
                className="text-sm text-[#788b84] transition hover:text-emerald-300"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-sm text-[#788b84] transition hover:text-emerald-300"
              >
                Contact
              </Link>

              <Link
                href="/privacy"
                className="text-sm text-[#788b84] transition hover:text-emerald-300"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-sm text-[#788b84] transition hover:text-emerald-300"
              >
                Terms
              </Link>

              <Link
                href="/disclaimer"
                className="text-sm text-[#788b84] transition hover:text-emerald-300"
              >
                Disclaimer
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-emerald-400/10 pt-7 text-xs text-[#5f736b] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Quran Site. All rights reserved.</p>

          <p>Independent software &amp; application developer.</p>
        </div>
      </div>
    </footer>
  );
}