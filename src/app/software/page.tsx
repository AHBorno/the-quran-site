import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Windows Software",
  description:
    "Explore free Windows software developed by The Quran Site, including My Own Quran and LearnQuran, independent projects for Quran learning, translation, and recitation.",
  keywords: [
    "Islamic Windows software",
    "free Islamic software",
    "Quran software for Windows",
    "Quran translation software",
    "Quran learning software",
    "Quran recitation software",
    "My Own Quran",
    "LearnQuran",
  ],
  openGraph: {
    type: "website",
    title: "Windows Software | The Quran Site",
    description:
      "Explore independent Windows software projects developed by The Quran Site for Quran learning, translation, recitation, and related digital experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Windows Software | The Quran Site",
    description:
      "Explore independent Windows software projects developed by The Quran Site for Quran learning, translation, recitation, and related digital experiences.",
  },
};

const software = [
  {
    number: "01",
    name: "My Own Quran",
    version: "v1.6",
    status: "Beta",
    description:
      "A Windows Quran translation application with verse-by-verse and word-by-word translation.",
    details:
      "Explore Arabic Quran text together with English and Bengali translation, with tools for selecting individual Surahs and verses.",
    href: "/software/my-own-quran",
  },
  {
    number: "02",
    name: "LearnQuran",
    version: "v1.0",
    status: "Beta",
    description:
      "A voice-based Bengali Quran recitation and correction tool for Windows.",
    details:
      "A learning-focused desktop project exploring how voice-based technology can support Quran recitation and practice.",
    href: "/software/learnquran",
  },
];

export default function SoftwarePage() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b border-emerald-400/10">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Windows Software
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-emerald-50 sm:text-5xl lg:text-6xl">
              Software built to make Islamic learning more accessible.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#9aaca5]">
              Explore independent Windows software projects created to use
              technology in practical ways for Quran learning, translation,
              recitation, and related digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#061d16]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Our software
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50">
                Small projects with a practical purpose.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#9aaca5]">
              <p>
                These projects are independently developed as part of an
                ongoing effort to explore how software and technology can be
                used for beneficial Islamic purposes.
              </p>

              <p>
                Each project is developed and tested over time. Some releases
                are still in beta, so features may change and bugs or glitches
                may occur.
              </p>

              <p>
                The goal is simple: create useful software that is accessible,
                practical, and easy to understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOFTWARE LIST */}
      <section className="border-t border-emerald-400/10">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Projects
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
                Windows software
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#788b84]">
              Browse the current Windows projects and learn more about what
              each one does.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {software.map((item) => (
              <article
                key={item.name}
                className="group flex flex-col overflow-hidden rounded-3xl border border-emerald-400/10 bg-[#0a231b] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
              >
                {/* CARD TOP */}
                <div className="border-b border-emerald-400/10 bg-[#0c3729] p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-[#067756] text-lg font-bold text-emerald-50 shadow-[0_0_30px_rgba(52,211,153,0.08)]">
                      QS
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-semibold text-emerald-400">
                        {item.number}
                      </div>

                      <div className="mt-2 text-xs text-[#788b84]">
                        {item.version}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-1 text-xs text-emerald-300">
                      Windows
                    </span>

                    <span className="rounded-full border border-yellow-300/15 bg-yellow-300/5 px-3 py-1 text-xs text-yellow-300">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-emerald-50">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-[#a7b8b1]">
                    {item.description}
                  </p>
                </div>

                {/* CARD CONTENT */}
                <div className="flex flex-1 flex-col p-8">
                  <p className="text-sm leading-7 text-[#899b94]">
                    {item.details}
                  </p>

                  <div className="mt-8 flex flex-1 items-end">
                    <Link
                      href={item.href}
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#34d399] px-6 text-sm font-semibold text-[#051913] transition hover:bg-[#6ee7b7]"
                    >
                      View software
                      <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
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
                  Independent projects
                </div>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-emerald-50 sm:text-3xl">
                  Built independently. Improved continuously.
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-[#899b94]">
                  The software published on The Quran Site is developed as
                  independent personal projects. Releases, features, and
                  compatibility may change as development and testing continue.
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

      {/* APPS CTA */}
      <section className="border-t border-emerald-400/10">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-[#067756] text-xl font-bold text-emerald-50 shadow-[0_0_30px_rgba(52,211,153,0.08)]">
            QS
          </div>

          <h2 className="mt-7 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
            Looking for mobile apps?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-[#899b94]">
            Explore the Android applications developed as part of The Quran
            Site's software projects.
          </p>

          <Link
            href="/apps"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#34d399] px-8 text-sm font-semibold text-[#051913] transition hover:bg-[#6ee7b7]"
          >
            Explore Apps
          </Link>
        </div>
      </section>
    </main>
  );
}