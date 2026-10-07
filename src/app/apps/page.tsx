import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Android Apps",
  description:
    "Explore free Android applications developed by The Quran Site, including practical Islamic tools for prayer, Qibla, and everyday Islamic activities.",
  keywords: [
    "Islamic Android apps",
    "free Islamic apps",
    "prayer app",
    "Qibla finder",
    "Islamic apps",
    "The Quran Site apps",
  ],
  openGraph: {
    type: "website",
    title: "Android Apps | The Quran Site",
    description:
      "Explore free Android applications developed by The Quran Site for prayer, Qibla, and everyday Islamic activities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Android Apps | The Quran Site",
    description:
      "Explore free Android applications developed by The Quran Site for prayer, Qibla, and everyday Islamic activities.",
  },
};

const apps = [
  {
    name: "My Own Prayer",
    platform: "Android",
    version: "v1.5 Beta",
    category: "Prayer & Daily Practice",
    description:
      "A prayer reminder and Qibla finder designed to help manage prayer times and everyday Islamic practices.",
    details:
      "Includes prayer times, prayer notifications, Nafl prayer times, forbidden prayer times, Qibla Finder, Tasbeeh Counter, Hijri Calendar, Nearby Mosque Finder, and more.",
    href: "/apps/my-own-prayer",
    image: "/images/my-own-prayer/Logo.png",
  },
];

export default function AppsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-emerald-400/10">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-400/5 blur-[110px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href="/"
            className="text-sm text-[#788b84] transition hover:text-emerald-300"
          >
            ← The Quran Site
          </Link>

          <div className="mt-10 max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Android Apps
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-emerald-50 sm:text-5xl lg:text-6xl">
              Islamic apps built for everyday use.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#a7b8b1] sm:text-lg">
              Explore Android applications developed as part of The Quran Site.
              These projects are designed to create simple and practical
              digital tools for prayer, Quran learning, and everyday Islamic
              activities.
            </p>
          </div>
        </div>
      </section>

      {/* APPS */}
      <section className="bg-[#061d16]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Projects
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
                Android applications
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#788b84]">
              Browse the Android applications currently developed and tested
              through The Quran Site.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {apps.map((app) => (
              <article
                key={app.name}
                className="group overflow-hidden rounded-3xl border border-emerald-400/10 bg-[#0a231b] transition duration-300 hover:-translate-y-1.5 hover:border-emerald-400/25 hover:shadow-[0_25px_70px_rgba(0,0,0,0.25)]"
              >
                {/* APP PREVIEW */}
                <div className="border-b border-emerald-400/10 bg-[#0c3729] p-8 sm:p-10">
                  <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-[24px] border border-emerald-400/20 bg-[#067756] shadow-[0_0_40px_rgba(52,211,153,0.10)]">
                      <Image
                        src={app.image}
                        alt={`${app.name} logo`}
                        width={96}
                        height={96}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-1 text-xs font-medium text-emerald-300">
                          {app.platform}
                        </span>

                        <span className="rounded-full border border-yellow-300/15 bg-yellow-300/5 px-3 py-1 text-xs font-medium text-yellow-300">
                          {app.version}
                        </span>
                      </div>

                      <h3 className="mt-5 text-3xl font-semibold tracking-tight text-emerald-50">
                        {app.name}
                      </h3>

                      <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-yellow-300/80">
                        {app.category}
                      </p>
                    </div>
                  </div>
                </div>

                {/* APP INFORMATION */}
                <div className="p-8 sm:p-10">
                  <p className="text-base leading-8 text-[#a7b8b1]">
                    {app.description}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-[#899b94]">
                    {app.details}
                  </p>

                  <div className="my-8 h-px bg-emerald-400/10" />

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href={app.href}
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#34d399] px-6 text-sm font-semibold text-[#051913] transition hover:bg-[#6ee7b7]"
                    >
                      View app
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>

                    <span className="text-xs text-[#5f736b]">
                      Currently in beta testing
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="border-t border-emerald-400/10">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              What we build
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
              Practical tools for everyday use.
            </h2>

            <p className="mt-5 leading-8 text-[#899b94]">
              The projects on The Quran Site are built around a simple idea:
              use software and technology to make useful Islamic tools easier
              to access and use.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              [
                "01",
                "Prayer",
                "Tools designed to support prayer routines, timings, reminders, and related daily practices.",
              ],
              [
                "02",
                "Learning",
                "Digital projects exploring different ways technology can support Quran learning and practice.",
              ],
              [
                "03",
                "Technology",
                "Independent software projects built while learning, experimenting, and improving.",
              ],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25"
              >
                <div className="text-sm font-semibold text-emerald-400">
                  {number}
                </div>

                <h3 className="mt-4 text-lg font-semibold text-emerald-50">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#899b94]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT NOTE */}
      <section className="border-t border-emerald-400/10 bg-[#061d16]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="rounded-3xl border border-emerald-400/10 bg-[#0a231b] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Independent development
                </div>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-emerald-50 sm:text-3xl">
                  Built independently. Improved continuously.
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-[#899b94]">
                  These applications are independent personal projects.
                  Features, compatibility, and design may change as development
                  and testing continue.
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 px-6 text-sm font-semibold text-emerald-300 transition hover:border-emerald-400/40 hover:bg-emerald-400/5"
              >
                About the developer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOFTWARE CTA */}
      <section className="border-t border-emerald-400/10">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-[#067756] text-xl font-bold text-emerald-50 shadow-[0_0_30px_rgba(52,211,153,0.08)]">
            QS
          </div>

          <h2 className="mt-7 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
            Looking for Windows software?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-[#899b94]">
            Explore the Windows software developed as part of The Quran Site's
            independent projects.
          </p>

          <Link
            href="/software"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#34d399] px-8 text-sm font-semibold text-[#051913] transition hover:bg-[#6ee7b7]"
          >
            Explore Software
          </Link>
        </div>
      </section>
    </main>
  );
}