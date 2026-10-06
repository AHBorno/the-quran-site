import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Islamic Software and Apps",
  description:
    "The Quran Site creates free Islamic apps, Windows software, and digital tools for Quran learning, prayer management, Qibla, and everyday Islamic activities.",
  keywords: [
    "The Quran Site",
    "Islamic software",
    "Islamic apps",
    "free Islamic software",
    "Quran software",
    "Quran learning software",
    "prayer app",
    "Qibla finder",
    "Windows Islamic software",
    "Quran learning",
    "Islamic technology",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "Free Islamic Software and Apps | The Quran Site",
    description:
      "Free Islamic apps, Windows software, and digital tools for Quran learning, prayer management, Qibla, and everyday Islamic activities.",
    siteName: "The Quran Site",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Islamic Software and Apps | The Quran Site",
    description:
      "Free Islamic apps, Windows software, and digital tools for Quran learning, prayer management, Qibla, and everyday Islamic activities.",
  },
};

const products = [
  {
    name: "My Own Prayer",
    type: "Android App",
    version: "v1.4 Beta",
    description:
      "A prayer reminder and Qibla finder designed to help manage daily prayer routines with useful Islamic tools.",
    features: [
      "Prayer times & notifications",
      "Qibla Finder",
      "Nafl & forbidden prayer times",
      "Nearby Mosque Finder",
    ],
    href: "/apps/my-own-prayer",
    accent: "emerald",
  },
  {
    name: "My Own Quran",
    type: "Windows Software",
    version: "v1.6 Beta",
    description:
      "A Quran translation tool with verse-by-verse and word-by-word translation for easier Quran study on Windows.",
    features: [
      "Verse-by-verse translation",
      "Word-by-word translation",
      "Portable Windows software",
      "Simple learning-focused interface",
    ],
    href: "/software/my-own-quran",
    accent: "yellow",
  },
  {
    name: "LearnQuran",
    type: "Windows Software",
    version: "v1.0 Beta",
    description:
      "A voice-based Bengali Quran recitation and correction tool designed to support Quran learning and practice.",
    features: [
      "Voice-based learning",
      "Bengali Quran recitation",
      "Recitation correction",
      "Portable Windows software",
    ],
    href: "/software/learnquran",
    accent: "emerald",
  },
];

const values = [
  {
    number: "01",
    title: "Simple",
    text: "We focus on making our software straightforward and comfortable to use.",
  },
  {
    number: "02",
    title: "Useful",
    text: "Every project starts with a practical problem that technology can help solve.",
  },
  {
    number: "03",
    title: "Accessible",
    text: "We aim to make useful Islamic technology available without unnecessary complexity.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden border-b border-emerald-400/10">
        {/* Celestial background */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          {/* Moon glow */}
          <div className="absolute right-[8%] top-[10%] h-56 w-56 rounded-full bg-emerald-300/5 blur-[70px] sm:h-72 sm:w-72" />

          {/* Crescent moon */}
          <div
            className="animate-moon-float absolute right-[10%] top-[12%] h-24 w-24 bg-yellow-100/90 shadow-[0_0_55px_rgba(253,224,71,0.18)] sm:right-[12%] sm:top-[14%] sm:h-32 sm:w-32"
            style={{
              borderRadius: "50%",
              maskImage:
                "radial-gradient(circle at 65% 38%, transparent 0 58%, black 60%)",
              WebkitMaskImage:
                "radial-gradient(circle at 65% 38%, transparent 0 58%, black 60%)",
            }}
          />

          {/* Stars */}
          <span className="absolute left-[9%] top-[18%] h-1 w-1 rounded-full bg-emerald-200 shadow-[0_0_12px_rgba(167,243,208,0.9)] animate-twinkle" />

          <span className="absolute left-[20%] top-[30%] h-1.5 w-1.5 rounded-full bg-yellow-200 shadow-[0_0_14px_rgba(254,240,138,0.8)] animate-twinkle-slow" />

          <span className="absolute left-[31%] top-[12%] h-1 w-1 rounded-full bg-emerald-200 shadow-[0_0_12px_rgba(167,243,208,0.8)] animate-twinkle-delay" />

          <span className="absolute left-[43%] top-[23%] h-0.5 w-0.5 rounded-full bg-emerald-100 animate-twinkle" />

          <span className="absolute left-[57%] top-[13%] h-1 w-1 rounded-full bg-yellow-100 shadow-[0_0_12px_rgba(254,240,138,0.7)] animate-twinkle-slow" />

          <span className="absolute left-[68%] top-[29%] h-1.5 w-1.5 rounded-full bg-emerald-200 shadow-[0_0_14px_rgba(167,243,208,0.8)] animate-twinkle-delay" />

          <span className="absolute right-[25%] top-[20%] h-0.5 w-0.5 rounded-full bg-emerald-100 animate-twinkle" />

          <span className="absolute right-[6%] top-[34%] h-1 w-1 rounded-full bg-yellow-100 shadow-[0_0_12px_rgba(254,240,138,0.7)] animate-twinkle-slow" />

          <span className="absolute left-[13%] top-[48%] h-0.5 w-0.5 rounded-full bg-emerald-100 animate-twinkle-delay" />

          <span className="absolute left-[25%] top-[58%] h-1 w-1 rounded-full bg-emerald-200 shadow-[0_0_10px_rgba(167,243,208,0.7)] animate-twinkle-slow" />

          <span className="absolute right-[18%] top-[50%] h-0.5 w-0.5 rounded-full bg-yellow-100 animate-twinkle" />

          <span className="absolute right-[8%] top-[62%] h-1 w-1 rounded-full bg-emerald-200 shadow-[0_0_12px_rgba(167,243,208,0.7)] animate-twinkle-delay" />

          {/* Soft horizon glow */}
          <div className="absolute bottom-[-180px] left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-full bg-emerald-400/5 blur-[100px]" />
        </div>

        {/* Background glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-400/5 blur-[120px]"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-emerald-500/5 blur-[100px]"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-yellow-300/5 blur-[110px]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24 text-center lg:px-8 lg:py-32">
          {/* Logo */}
          <div
            className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[28px] border border-emerald-300/20 bg-[#0a2b20] shadow-[0_0_60px_rgba(52,211,153,0.12)] transition duration-300 hover:border-emerald-300/35 hover:shadow-[0_0_75px_rgba(52,211,153,0.18)]"
            style={{ animation: "float 5s ease-in-out infinite" }}
          >
            <Image
              src="/icon.png"
              alt="The Quran Site"
              width={96}
              height={96}
              className="h-full w-full object-contain p-3"
              priority
            />
          </div>

          <div
            className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-emerald-300"
            style={{ animation: "fadeInUp 0.7s ease-out both" }}
          >
            Welcome to
          </div>

          <h1
            className="text-5xl font-semibold tracking-[-0.04em] text-emerald-50 sm:text-6xl lg:text-7xl"
            style={{ animation: "fadeInUp 0.8s ease-out both" }}
          >
            The Quran Site
          </h1>

          <p
            className="mt-5 text-xl font-medium text-yellow-300 sm:text-2xl"
            style={{ animation: "fadeInUp 0.9s ease-out both" }}
          >
            Free Islamic Software and Tech
          </p>

          <p
            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#a7b8b1] sm:text-lg"
            style={{ animation: "fadeInUp 1s ease-out both" }}
          >
            An independent software and technology project creating simple,
            useful digital tools for Quran learning, prayer management, and
            other aspects of everyday Islamic life.
          </p>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animation: "fadeInUp 1.1s ease-out both" }}
          >
            <Link
              href="/apps"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#34d399] px-7 text-sm font-semibold text-[#051913] shadow-[0_10px_35px_rgba(52,211,153,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6ee7b7] hover:shadow-[0_14px_40px_rgba(52,211,153,0.18)]"
            >
              Explore Apps
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <Link
              href="/software"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-emerald-400/20 bg-[#0a231b]/70 px-7 text-sm font-medium text-[#a7b8b1] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/35 hover:bg-[#0f2e23] hover:text-emerald-200"
            >
              View Software
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="mt-20 flex flex-col items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#788b84]">
            <span>Explore the project</span>
            <div className="h-8 w-px bg-gradient-to-b from-emerald-300/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-b border-emerald-400/10 bg-[#061d16]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                About The Quran Site
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
                Islamic technology made for everyday use.
              </h2>

              <div className="mt-6 h-1 w-14 rounded-full bg-yellow-300" />
            </div>

            <div className="space-y-5 text-base leading-8 text-[#a7b8b1]">
              <p>
                The Quran Site is an independent software and technology
                project focused on creating useful digital tools for Muslims.
                The website brings together applications and software designed
                to support Quran learning, prayer management, and other areas
                of everyday Islamic life.
              </p>

              <p>
                Our projects include Android applications and Windows
                software, with each project built around a practical purpose.
                From prayer times and Qibla tools to Quran translation and
                learning software, the goal is to make useful technology
                simple and accessible.
              </p>

              <p>
                The project is independently developed and continuously
                evolving. New applications, features, guides, experiments, and
                improvements will be added as development continues.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/apps"
                  className="inline-flex min-h-10 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/5 px-5 text-sm font-semibold text-emerald-300 transition duration-300 hover:border-emerald-400/35 hover:bg-emerald-400/10 hover:text-emerald-200"
                >
                  Explore Android Apps →
                </Link>

                <Link
                  href="/software"
                  className="inline-flex min-h-10 items-center justify-center rounded-full border border-emerald-400/20 bg-[#0a231b] px-5 text-sm font-semibold text-[#a7b8b1] transition duration-300 hover:border-emerald-400/35 hover:bg-[#0f2e23] hover:text-emerald-200"
                >
                  Explore Windows Software →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE MAKE */}
      <section className="border-b border-emerald-400/10">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              What we make
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
              Software built around useful ideas.
            </h2>

            <p className="mt-5 leading-8 text-[#a7b8b1]">
              The project explores different types of software and digital
              tools designed to make useful Islamic resources easier to access
              and use.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <article className="group rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:bg-[#0d2b21]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/5 text-emerald-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
                  <path d="M10 18.5h4" />
                </svg>
              </div>

              <h3 className="mt-7 text-xl font-semibold text-emerald-50">
                Android Applications
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#899b94]">
                Mobile applications created to provide practical tools for
                prayer, Qibla, Quran learning, and other everyday Islamic
                activities.
              </p>

              <Link
                href="/apps"
                className="mt-6 inline-flex text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
              >
                Explore apps →
              </Link>
            </article>

            <article className="group rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:bg-[#0d2b21]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-300/15 bg-yellow-300/5 text-yellow-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="13" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                </svg>
              </div>

              <h3 className="mt-7 text-xl font-semibold text-emerald-50">
                Windows Software
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#899b94]">
                Lightweight Windows tools for Quran study, translation,
                learning, and other focused desktop activities.
              </p>

              <Link
                href="/software"
                className="mt-6 inline-flex text-sm font-semibold text-yellow-300 transition hover:text-yellow-200"
              >
                Explore software →
              </Link>
            </article>

            <article className="group rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:bg-[#0d2b21]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/5 text-emerald-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3v18" />
                  <path d="M5 7h14" />
                  <path d="M7 7c0 3-2 5-4 6" />
                  <path d="M17 7c0 3 2 5 4 6" />
                  <path d="M3 13h4" />
                  <path d="M17 13h4" />
                </svg>
              </div>

              <h3 className="mt-7 text-xl font-semibold text-emerald-50">
                Islamic Learning Tools
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#899b94]">
                Software experiments and digital tools focused on making Quran
                learning and beneficial Islamic knowledge more accessible.
              </p>

              <Link
                href="/articles"
                className="mt-6 inline-flex text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
              >
                Read articles →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="border-b border-emerald-400/10 bg-[#061d16]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Our projects
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
                Explore the software.
              </h2>

              <p className="mt-5 leading-8 text-[#a7b8b1]">
                Explore the applications and software currently being
                developed as part of The Quran Site.
              </p>
            </div>

            <Link
              href="/apps"
              className="inline-flex items-center text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
            >
              View all projects →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="group flex h-full flex-col rounded-3xl border border-emerald-400/10 bg-[#0a231b] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400/25 hover:bg-[#0c281f] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                      product.accent === "yellow"
                        ? "border-yellow-300/15 bg-yellow-300/5 text-yellow-300"
                        : "border-emerald-400/15 bg-emerald-400/5 text-emerald-300"
                    }`}
                  >
                    {product.type}
                  </span>

                  <span className="rounded-full bg-white/[0.03] px-2.5 py-1 text-[11px] text-[#788b84]">
                    {product.version}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-emerald-50 transition-colors duration-300 group-hover:text-white">
                  {product.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#9aaca5]">
                  {product.description}
                </p>

                <div className="my-7 h-px bg-emerald-400/10" />

                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f857d]">
                  Key features
                </div>

                <ul className="mt-4 space-y-3">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[#a7b8b1]"
                    >
                      <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.35)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-9">
                  <Link
                    href={product.href}
                    className={`inline-flex min-h-10 items-center justify-center rounded-full border px-5 text-sm font-semibold transition-all duration-300 ${
                      product.accent === "yellow"
                        ? "border-yellow-300/20 text-yellow-300 hover:border-yellow-300/35 hover:bg-yellow-300/5"
                        : "border-emerald-400/20 text-emerald-300 hover:border-emerald-400/35 hover:bg-emerald-400/5"
                    }`}
                  >
                    View project
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPER */}
      <section className="border-b border-emerald-400/10">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                The developer
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
                Built independently, one project at a time.
              </h2>
            </div>

            <div className="grid items-center gap-10 md:grid-cols-[220px_1fr] md:gap-14">
              <div className="mx-auto">
                <div className="relative h-48 w-48 overflow-hidden rounded-[32px] border border-emerald-400/20 bg-[#0a231b] shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                  <Image
                    src="/images/developer.png"
                    alt="Ashiqul Haque Borno, developer of The Quran Site"
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="text-2xl font-semibold tracking-tight text-emerald-50">
                  Ashiqul Haque Borno
                </div>

                <div className="mt-2 text-sm font-medium text-emerald-300">
                  Independent Software Developer
                </div>

                <p className="mt-6 leading-8 text-[#a7b8b1]">
                  The Quran Site is an independent software project created and
                  maintained by Ashiqul Haque Borno. The project combines
                  software development, experimentation, and learning with a
                  focus on creating useful digital tools for Quran learning,
                  prayer management, and everyday Islamic activities.
                </p>

                <p className="mt-4 leading-8 text-[#899b94]">
                  Each project is developed independently, with new ideas,
                  features, improvements, and experiments added as the work
                  continues.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
  <Link
    href="/about"
    className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#34d399] px-6 text-sm font-semibold text-[#051913] transition duration-300 hover:bg-[#6ee7b7]"
  >
    About the developer
  </Link>

  <Link
    href="/contact"
    className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 px-6 text-sm font-semibold text-emerald-300 transition duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/5"
  >
    Get in touch
  </Link>

  <a
    href="https://bhokto.com.bd/pay/thequransite"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex min-h-11 items-center justify-center rounded-full border border-yellow-300/20 bg-yellow-300/5 px-6 text-sm font-semibold text-yellow-300 transition duration-300 hover:border-yellow-300/35 hover:bg-yellow-300/10"
  >
    Support the Project
  </a>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="border-b border-emerald-400/10 bg-[#061d16]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Articles & guides
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
                Learn, explore, and follow the projects.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-[#a7b8b1]">
                The Articles section brings together useful guides, software
                tutorials, development notes, project updates, and information
                about the technology behind our applications.
              </p>

              <p className="mt-4 max-w-2xl leading-8 text-[#899b94]">
                As the project grows, more original articles and practical
                resources will be published here to help visitors understand
                the software and use it effectively.
              </p>

              <Link
                href="/articles"
                className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 px-6 text-sm font-semibold text-emerald-300 transition duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/5 hover:text-emerald-200"
              >
                Browse articles →
              </Link>
            </div>

            <div className="rounded-3xl border border-emerald-400/10 bg-[#0a231b] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <div className="grid gap-5">
                <div className="rounded-2xl border border-emerald-400/10 bg-[#0d2b21] p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
                    Guides
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[#a7b8b1]">
                    Practical instructions for using our applications and
                    software.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-400/10 bg-[#0d2b21] p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-yellow-300">
                    Development
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[#a7b8b1]">
                    Notes about projects, development experiments, and software
                    improvements.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-400/10 bg-[#0d2b21] p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
                    Updates
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[#a7b8b1]">
                    New releases, project changes, features, and other useful
                    updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/5 blur-[110px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <div className="mx-auto h-px w-20 bg-emerald-400/30" />

          <div className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Explore the project
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
            Useful software, built independently.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#899b94]">
            Explore the applications, Windows software, and resources created
            as part of The Quran Site, or get in touch with the developer to
            learn more about the project.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/apps"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#34d399] px-7 text-sm font-semibold text-[#051913] shadow-[0_10px_35px_rgba(52,211,153,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6ee7b7] hover:shadow-[0_14px_40px_rgba(52,211,153,0.16)]"
            >
              Explore Apps
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-emerald-400/20 bg-[#0a231b] px-7 text-sm font-medium text-[#a7b8b1] transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/35 hover:bg-[#0f2e23] hover:text-emerald-200"
            >
              Contact the developer
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <a
              href="https://bhokto.com.bd/pay/thequransite"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-300/5 px-7 text-sm font-medium text-yellow-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-300/35 hover:bg-yellow-300/10"
            >
              Support the Project
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          <p className="mx-auto mt-5 max-w-xl text-xs leading-6 text-[#667a72]">
            If you find the software useful, you can support the continued
            development of The Quran Site.
          </p>
        </div>
      </section>
    </main>
  );
}