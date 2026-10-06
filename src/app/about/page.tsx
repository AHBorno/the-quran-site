import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Quran Site, an independent software and technology project creating useful digital tools for Quran learning, prayer, and everyday Islamic activities.",
  keywords: [
    "The Quran Site",
    "about The Quran Site",
    "Islamic software developer",
    "Islamic technology",
    "Quran software developer",
    "Islamic apps developer",
    "independent software developer",
  ],
  openGraph: {
    type: "website",
    title: "About The Quran Site",
    description:
      "Learn about the independent developer, projects, and approach behind The Quran Site.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About The Quran Site",
    description:
      "Learn about the independent developer, projects, and approach behind The Quran Site.",
  },
};

const principles = [
  {
    number: "01",
    title: "Useful first",
    description:
      "The goal is to build practical tools that solve real problems rather than adding technology simply for the sake of it.",
  },
  {
    number: "02",
    title: "Simple experiences",
    description:
      "Projects are designed to be understandable and accessible, with interfaces that focus on the things users actually need.",
  },
  {
    number: "03",
    title: "Continuous learning",
    description:
      "Every project is an opportunity to learn, experiment, improve existing ideas, and build better software over time.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-emerald-400/10">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/5 blur-[120px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href="/"
            className="text-sm text-[#788b84] transition hover:text-emerald-300"
          >
            ← The Quran Site
          </Link>

          <div className="mt-10 max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              About The Quran Site
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-emerald-50 sm:text-5xl lg:text-6xl">
              Technology for beneficial Islamic projects.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#a7b8b1]">
              The Quran Site is an independent software project focused on
              creating simple and useful digital tools around Quran learning,
              Islamic practices, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#061d16]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                The project
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
                What is The Quran Site?
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-[#9aaca5]">
              <p>
                The Quran Site is an independent project created to explore how
                software and technology can make learning, listening to, and
                engaging with the Quran and daily Islamic practices more
                accessible.
              </p>

              <p>
                The project includes Android applications, Windows software,
                experiments, guides, and other digital tools developed as part
                of an ongoing learning and development process.
              </p>

              <p>
                The aim is not to create complicated systems. Instead, the
                focus is on building simple, practical, and useful experiences
                that people can actually use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="border-t border-emerald-400/10">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              What we do
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
              Building at the intersection of faith and technology.
            </h2>

            <p className="mt-5 leading-8 text-[#899b94]">
              The projects developed through The Quran Site explore several
              areas where software can provide useful support.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Quran Learning",
                description:
                  "Digital tools and experiments designed to support Quran learning and practice.",
              },
              {
                title: "Quran Resources",
                description:
                  "Software and resources that make Quran translation, listening, and exploration easier to access.",
              },
              {
                title: "Prayer Tools",
                description:
                  "Applications designed to help with prayer times, reminders, Qibla, and related daily practices.",
              },
              {
                title: "Islamic Software",
                description:
                  "Independent software projects exploring practical uses of technology for beneficial Islamic activities.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25"
              >
                <h3 className="text-lg font-semibold text-emerald-50">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#899b94]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-t border-emerald-400/10 bg-[#061d16]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Our approach
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
              How the projects are built.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7"
              >
                <div className="text-sm font-semibold text-emerald-400">
                  {principle.number}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-emerald-50">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#899b94]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPER */}
      <section className="border-t border-emerald-400/10">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Developer
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
                Built by an independent developer.
              </h2>
            </div>

            <div>
              <div className="rounded-3xl border border-emerald-400/10 bg-[#0a231b] p-8 sm:p-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-[#067756] text-xl font-bold text-emerald-50 shadow-[0_0_35px_rgba(52,211,153,0.08)]">
                    AH
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-emerald-50">
                      Ashiqul Haque Borno
                    </h3>

                    <p className="mt-2 text-sm text-emerald-300">
                      Independent software & application developer
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-5 text-sm leading-7 text-[#899b94]">
                  <p>
                    The Quran Site began as a personal effort to learn coding
                    and create software that could be useful for Islamic
                    activities.
                  </p>

                  <p>
                    Development continues as an ongoing learning process,
                    combining programming, experimentation, and ideas for
                    practical digital tools.
                  </p>

                  <p>
                    The project is independently developed and is not operated
                    by or officially affiliated with a mosque, Islamic
                    organization, scholar, or other religious institution.
                  </p>
                </div>

                <div className="mt-8 border-t border-emerald-400/10 pt-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#788b84]">
                    Contact
                  </div>

                  <a
                    href="mailto:ashiqul2699@gmail.com"
                    className="mt-2 inline-block text-sm font-medium text-emerald-300 transition hover:text-emerald-200"
                  >
                    ashiqul2699@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="border-t border-emerald-400/10 bg-[#061d16]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="rounded-3xl border border-yellow-300/10 bg-yellow-300/5 p-8 sm:p-10">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              Important information
            </div>

            <h2 className="mt-4 text-2xl font-semibold text-emerald-50">
              Independent software project
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-[#899b94]">
              <p>
                The Quran Site is an independent software and technology
                project. Unless explicitly stated otherwise, it does not
                represent or speak on behalf of any mosque, Islamic
                organization, scholar, institution, or religious authority.
              </p>

              <p>
                Software and informational content published on this website
                are provided for their stated purposes. Religious questions
                that require scholarly interpretation or a formal ruling
                should be referred to qualified and trusted scholars.
              </p>

              <p>
                Software may contain bugs, limitations, or inaccuracies,
                particularly while projects are in beta testing. Always check
                important information through appropriate trusted sources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="border-t border-emerald-400/10">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <div className="mx-auto h-px w-12 bg-emerald-400/40" />

          <div className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Looking ahead
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
            More useful tools, one project at a time.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#899b94]">
            The project will continue exploring new ideas around Quran
            learning, Islamic education, prayer management, and other useful
            applications of technology.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/apps"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#34d399] px-6 text-sm font-semibold text-[#051913] transition hover:bg-[#6ee7b7]"
            >
              Explore Apps
            </Link>

            <Link
              href="/software"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 px-6 text-sm font-semibold text-emerald-300 transition hover:border-emerald-400/40 hover:bg-emerald-400/5"
            >
              Explore Software
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}