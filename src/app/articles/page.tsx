import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles & Guides",
  description:
    "Read original articles, software guides, development notes, and practical resources about Islamic technology and independent software projects from The Quran Site.",
  keywords: [
    "Islamic technology articles",
    "software guides",
    "Islamic software guides",
    "development notes",
    "Quran technology",
    "Islamic apps development",
    "The Quran Site articles",
  ],
  openGraph: {
    type: "website",
    title: "Articles & Guides | The Quran Site",
    description:
      "Original articles, software guides, development notes, and practical resources about Islamic technology and independent software projects.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles & Guides | The Quran Site",
    description:
      "Original articles, software guides, development notes, and practical resources about Islamic technology and independent software projects.",
  },
};

const plannedTopics = [
  {
    number: "01",
    title: "Software Guides",
    description:
      "Practical guides explaining how to install, configure, and use software and applications developed through The Quran Site.",
  },
  {
    number: "02",
    title: "Development Notes",
    description:
      "Articles about software development, experimentation, design decisions, and lessons learned while building independent projects.",
  },
  {
    number: "03",
    title: "Islamic Technology",
    description:
      "Thoughts and practical resources about using technology to create useful tools for Quran learning, prayer, and everyday Islamic activities.",
  },
];

export default function ArticlesPage() {
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
              Articles & Guides
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-emerald-50 sm:text-5xl lg:text-6xl">
              Guides, ideas, and development notes.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#a7b8b1] sm:text-lg">
              A growing collection of original articles about the software,
              applications, development work, and technology projects behind
              The Quran Site.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#061d16]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              What to expect
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
              Useful content, not filler.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#899b94]">
              The Articles section is intended for practical, original content
              based on real projects and development experience. Articles will
              be added as they are written and reviewed.
            </p>
          </div>

          {/* TOPICS */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {plannedTopics.map((topic) => (
              <article
                key={topic.number}
                className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25"
              >
                <div className="text-sm font-semibold text-emerald-400">
                  {topic.number}
                </div>

                <h3 className="mt-4 text-xl font-semibold text-emerald-50">
                  {topic.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#899b94]">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="border-t border-emerald-400/10">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-[#067756] text-xl font-bold text-emerald-50 shadow-[0_0_30px_rgba(52,211,153,0.08)]">
            QS
          </div>

          <h2 className="mt-7 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
            Articles are being prepared.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-[#899b94]">
            New articles and guides will appear here as original content is
            published. In the meantime, explore the software and applications
            already available on the site.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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