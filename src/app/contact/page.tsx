import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the developer behind The Quran Site for app and software support, bug reports, suggestions, feedback, and questions about its projects.",
  keywords: [
    "The Quran Site contact",
    "Islamic software support",
    "app support",
    "software bug report",
    "Islamic app developer contact",
    "The Quran Site developer",
  ],
  openGraph: {
    type: "website",
    title: "Contact | The Quran Site",
    description:
      "Contact the developer behind The Quran Site for software support, bug reports, suggestions, feedback, and project questions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | The Quran Site",
    description:
      "Contact the developer behind The Quran Site for software support, bug reports, suggestions, feedback, and project questions.",
  },
};

const contactOptions = [
  {
    number: "01",
    title: "App & software support",
    description:
      "Having trouble with one of the applications or Windows software? You can contact the developer with details about the issue.",
  },
  {
    number: "02",
    title: "Bug reports",
    description:
      "If you find a bug, unexpected behavior, or something that does not work as intended, please provide as much useful information as possible.",
  },
  {
    number: "03",
    title: "Suggestions & feedback",
    description:
      "Ideas, feature suggestions, usability feedback, and other constructive suggestions are welcome.",
  },
];

export default function ContactPage() {
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

          <div className="mt-10 max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Contact
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-emerald-50 sm:text-5xl lg:text-6xl">
              Get in touch.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#a7b8b1]">
              Have a question about an app, found a bug, or have an idea for a
              future project? You can contact the developer directly.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT METHOD */}
      <section className="bg-[#061d16]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-[1fr_1.4fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Direct contact
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50">
                Contact the developer
              </h2>

              <p className="mt-5 leading-8 text-[#899b94]">
                The easiest way to get in touch is through email. Please
                include enough information about your question or issue so it
                can be understood clearly.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-400/10 bg-[#0a231b] p-8 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-[#067756] text-emerald-50">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <div className="mt-7 text-xs font-semibold uppercase tracking-[0.15em] text-[#788b84]">
                Email
              </div>

              <a
                href="mailto:ashiqul2699@gmail.com"
                className="mt-2 block break-all text-xl font-semibold text-emerald-300 transition hover:text-emerald-200 sm:text-2xl"
              >
                ashiqul2699@gmail.com
              </a>

              <p className="mt-4 text-sm leading-7 text-[#899b94]">
                You can use this address for app support, bug reports,
                suggestions, feedback, and other questions related to The Quran
                Site.
              </p>

              <a
                href="mailto:ashiqul2699@gmail.com"
                className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-[#34d399] px-6 text-sm font-semibold text-[#051913] transition hover:bg-[#6ee7b7]"
              >
                Send an email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN CONTACT ABOUT */}
      <section className="border-t border-emerald-400/10">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Before contacting
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
              What can you contact us about?
            </h2>

            <p className="mt-5 leading-8 text-[#899b94]">
              The contact address is available for questions and feedback
              related to the projects published on this website.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {contactOptions.map((option) => (
              <div
                key={option.number}
                className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25"
              >
                <div className="text-sm font-semibold text-emerald-400">
                  {option.number}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-emerald-50">
                  {option.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#899b94]">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOD BUG REPORT */}
      <section className="border-t border-emerald-400/10 bg-[#061d16]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="rounded-3xl border border-emerald-400/10 bg-[#0a231b] p-8 sm:p-10">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Reporting an issue
            </div>

            <h2 className="mt-4 text-2xl font-semibold text-emerald-50 sm:text-3xl">
              Help make the software better.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-[#899b94]">
              When reporting a problem, it helps to mention the application
              name, version, operating system or device, what you were trying
              to do, and what happened instead. Screenshots can also be useful
              when relevant.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Application or software name",
                "Version number",
                "Device or operating system",
                "Steps that caused the problem",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-emerald-400/10 bg-[#061d16] px-4 py-3 text-sm text-[#899b94]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT LINKS */}
      <section className="border-t border-emerald-400/10">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-[#067756] text-xl font-bold text-emerald-50 shadow-[0_0_30px_rgba(52,211,153,0.08)]">
            QS
          </div>

          <h2 className="mt-7 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
            Explore the projects
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-[#899b94]">
            Before contacting the developer, you may also find useful
            information on the individual application and software pages.
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

            <Link
              href="/about"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 px-6 text-sm font-semibold text-emerald-300 transition hover:border-emerald-400/40 hover:bg-emerald-400/5"
            >
              About
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}