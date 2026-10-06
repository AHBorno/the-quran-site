import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Read the Disclaimer for The Quran Site, covering religious information, prayer-time calculations, Qibla features, software limitations, downloads, and third-party services.",
  keywords: [
    "The Quran Site disclaimer",
    "software disclaimer",
    "Islamic software disclaimer",
    "prayer time disclaimer",
    "Qibla disclaimer",
    "Quran software disclaimer",
    "beta software disclaimer",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Disclaimer | The Quran Site",
    description:
      "Important information about The Quran Site's software, religious content, calculations, downloads, and digital resources.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | The Quran Site",
    description:
      "Important information about The Quran Site's software, religious content, calculations, downloads, and digital resources.",
  },
};

const sections = [
  {
    number: "01",
    title: "Independent project",
    content: [
      "The Quran Site is an independently developed software and technology project.",
      "The website and its applications are not operated by, affiliated with, sponsored by, or officially representing any mosque, Islamic organization, scholar, educational institution, or religious authority unless explicitly stated otherwise.",
      "The name and purpose of the project reflect its focus on developing technology related to Quran learning, Islamic practices, and beneficial digital tools.",
    ],
  },
  {
    number: "02",
    title: "Religious information",
    content: [
      "Some content and software published through The Quran Site relates to the Quran, prayer, Islamic practices, and religious learning.",
      "Information provided through the website is intended for the purposes stated with the relevant content or software. It should not be treated as a substitute for qualified religious scholarship.",
      "Questions requiring scholarly interpretation, a formal religious ruling, or guidance on matters of religious disagreement should be referred to qualified and trusted scholars.",
    ],
  },
  {
    number: "03",
    title: "Prayer times and calculations",
    content: [
      "Applications published through The Quran Site may provide prayer times, prayer notifications, forbidden prayer times, or other time-related information.",
      "Prayer times can vary depending on location, calculation method, geographical conditions, timezone configuration, daylight-saving rules where applicable, and other settings.",
      "Users should verify important prayer-time information with a trusted local source, mosque, qualified authority, or another reliable reference when accuracy is important.",
      "The Quran Site does not guarantee that calculated prayer times will always exactly match every local calculation method or religious authority.",
    ],
  },
  {
    number: "04",
    title: "Qibla and location-related features",
    content: [
      "Applications may provide Qibla direction or other location-related functionality.",
      "The accuracy of such features can depend on the device's sensors, location information, calibration, hardware, environmental conditions, and software calculations.",
      "Users should use appropriate practical judgment when relying on digital Qibla or location-based features.",
    ],
  },
  {
    number: "05",
    title: "Software accuracy and limitations",
    content: [
      "Software published through The Quran Site may contain bugs, glitches, incomplete features, compatibility issues, or other technical limitations.",
      "Software is developed and tested on available devices and operating systems, but behavior may differ across hardware, operating-system versions, configurations, and environments.",
      "Features, calculations, interfaces, requirements, and compatibility may change between releases.",
    ],
  },
  {
    number: "06",
    title: "Beta and experimental software",
    content: [
      "Some applications and software are published as beta, testing, experimental, or development releases.",
      "Beta software should be used with appropriate caution. Users should maintain backups of important data and should not rely on beta software as their only source of critical information.",
      "The availability and behavior of beta features may change without notice.",
    ],
  },
  {
    number: "07",
    title: "Quran translations and educational material",
    content: [
      "Where Quran translations, transliterations, explanations, or other educational material are displayed, the material may come from particular translation sources or project resources.",
      "Translations and explanatory material should not be treated as replacing the Arabic Quran or as an authoritative scholarly interpretation in every context.",
      "Users should consult reliable scholarly and educational sources when studying matters that require detailed interpretation or context.",
    ],
  },
  {
    number: "08",
    title: "Third-party services and external links",
    content: [
      "The website may link to external websites, repositories, download providers, app stores, documentation, or other third-party services.",
      "The Quran Site does not control these external services and is not responsible for their content, availability, security, privacy practices, or policies.",
      "Third-party names, trademarks, software, and services remain the property of their respective owners.",
    ],
  },
  {
    number: "09",
    title: "Downloads and device security",
    content: [
      "Users are responsible for taking reasonable precautions before downloading, installing, or running software.",
      "This includes checking download sources, using appropriate device security tools, keeping operating systems updated, and maintaining backups of important files.",
      "The Quran Site cannot guarantee that every third-party download environment or external service will remain secure or available.",
    ],
  },
  {
    number: "10",
    title: "No professional or authoritative advice",
    content: [
      "Information on this website should not be interpreted as professional legal, medical, financial, security, or religious advice.",
      "For matters requiring professional or scholarly judgment, users should consult an appropriately qualified professional or trusted authority.",
    ],
  },
  {
    number: "11",
    title: "Changes to content",
    content: [
      "Website content, software features, documentation, calculations, screenshots, download links, and other project information may be updated, corrected, removed, or changed over time.",
      "Although reasonable effort is made to keep information useful, no guarantee is made that every page will always reflect the latest version of a project.",
    ],
  },
  {
    number: "12",
    title: "Acceptance of this disclaimer",
    content: [
      "By using The Quran Site and its resources, you acknowledge that software and informational content may have limitations and that you are responsible for using appropriate judgment when relying on them.",
      "If you do not agree with these limitations, you should discontinue use of the relevant website feature or software.",
    ],
  },
];

export default function DisclaimerPage() {
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
              Legal
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-emerald-50 sm:text-5xl lg:text-6xl">
              Disclaimer
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#a7b8b1]">
              Important information about the software, religious content,
              calculations, and resources provided through The Quran Site.
            </p>

            <div className="mt-7 inline-flex rounded-full border border-emerald-400/15 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
              Last updated: October 7, 2026
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section className="bg-[#061d16]">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="rounded-3xl border border-yellow-300/10 bg-yellow-300/5 p-8 sm:p-10">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              Important notice
            </div>

            <h2 className="mt-4 text-2xl font-semibold text-emerald-50">
              Please use appropriate judgment when relying on digital tools.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#899b94]">
              The Quran Site creates software and digital resources as an
              independent development project. Some projects are still under
              testing, and digital calculations or informational content may
              not always perfectly match every local, technical, or scholarly
              requirement.
            </p>
          </div>
        </div>
      </section>

      {/* DISCLAIMER SECTIONS */}
      <section className="border-t border-emerald-400/10">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="space-y-6">
            {sections.map((section) => (
              <article
                key={section.number}
                className="rounded-3xl border border-emerald-400/10 bg-[#0a231b] p-7 sm:p-9"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-400">
                  Section {section.number}
                </div>

                <h2 className="mt-3 text-xl font-semibold text-emerald-50 sm:text-2xl">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-8 text-[#899b94]">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-emerald-400/10 bg-[#061d16]">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="rounded-3xl border border-emerald-400/10 bg-[#0a231b] p-8 sm:p-10">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Questions
            </div>

            <h2 className="mt-4 text-2xl font-semibold text-emerald-50 sm:text-3xl">
              Have a question about this disclaimer?
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#899b94]">
              If you have questions about the information presented on this
              page or the practices of The Quran Site, you can contact the
              developer directly.
            </p>

            <a
              href="mailto:ashiqul2699@gmail.com"
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-[#34d399] px-6 text-sm font-semibold text-[#051913] transition hover:bg-[#6ee7b7]"
            >
              Contact the developer
            </a>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="border-t border-emerald-400/10">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3 px-6 py-16 lg:px-8">
          <Link
            href="/privacy"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 px-6 text-sm font-semibold text-emerald-300 transition hover:border-emerald-400/40 hover:bg-emerald-400/5"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 px-6 text-sm font-semibold text-emerald-300 transition hover:border-emerald-400/40 hover:bg-emerald-400/5"
          >
            Terms of Use
          </Link>

          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 px-6 text-sm font-semibold text-emerald-300 transition hover:border-emerald-400/40 hover:bg-emerald-400/5"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}