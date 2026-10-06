import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the Terms of Use for The Quran Site, covering website usage, software downloads, intellectual property, third-party services, religious content, and user responsibilities.",
  keywords: [
    "The Quran Site terms",
    "terms of use",
    "website terms",
    "software terms",
    "Islamic software terms",
    "software download terms",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Terms of Use | The Quran Site",
    description:
      "Read the terms and conditions for using The Quran Site, its software, resources, and external services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | The Quran Site",
    description:
      "Read the terms and conditions for using The Quran Site, its software, resources, and external services.",
  },
};

const sections = [
  {
    number: "01",
    title: "Acceptance of these terms",
    content: [
      "Welcome to The Quran Site. By accessing or using this website, you agree to follow these Terms of Use.",
      "If you do not agree with these terms, please do not use the website or download software provided through it.",
      "These terms apply to the website, its pages, content, software information, download links, and related services unless a separate agreement or notice specifically applies.",
    ],
  },
  {
    number: "02",
    title: "About The Quran Site",
    content: [
      "The Quran Site is an independently developed software and technology project. It publishes information about Android applications, Windows software, articles, guides, and other digital projects.",
      "The website and its projects are developed as part of an ongoing independent learning and development process.",
      "The Quran Site is not an official representative of any mosque, Islamic organization, scholar, institution, or religious authority unless explicitly stated otherwise.",
    ],
  },
  {
    number: "03",
    title: "Use of the website",
    content: [
      "You may use this website for lawful personal, informational, and educational purposes.",
      "You agree not to intentionally misuse the website, attempt to interfere with its operation, introduce malicious software, attempt unauthorized access, or use the website for unlawful activities.",
      "You should not use website content or services in a way that could damage the website, its infrastructure, other users, or third-party services connected to it.",
    ],
  },
  {
    number: "04",
    title: "Software and applications",
    content: [
      "The Quran Site may provide information, download links, installation instructions, screenshots, version information, and other material relating to Android applications and Windows software.",
      "Software may be provided as beta, experimental, testing, or development releases. Such software may contain bugs, limitations, compatibility issues, or unexpected behavior.",
      "You are responsible for checking the compatibility and requirements of software before installation and for maintaining appropriate backups of your own files and systems.",
      "The availability of a particular application, version, download link, or feature may change without notice.",
    ],
  },
  {
    number: "05",
    title: "Downloads and external services",
    content: [
      "Some software may be distributed through third-party platforms or external download services.",
      "When you follow an external download link, you may become subject to the terms, privacy policy, security practices, and other rules of that third-party service.",
      "The Quran Site does not guarantee the availability, performance, security, or policies of external websites and services.",
      "You should obtain software only from download sources presented or recommended through the official project information where possible and use appropriate security precautions before opening downloaded files.",
    ],
  },
  {
    number: "06",
    title: "Intellectual property",
    content: [
      "Unless otherwise stated, the website's original text, design, branding, graphics, software descriptions, and other original materials are owned by or used by The Quran Site and its developer.",
      "You may view and use website content for normal personal and informational purposes.",
      "You may not reproduce, redistribute, modify, sell, or republish substantial portions of original website content without appropriate permission, except where applicable law permits such use.",
      "Third-party names, trademarks, software, logos, libraries, and other materials remain the property of their respective owners.",
    ],
  },
  {
    number: "07",
    title: "User feedback",
    content: [
      "If you voluntarily send feedback, suggestions, bug reports, or ideas to The Quran Site, you allow the developer to use that information for purposes such as improving software, fixing issues, and developing future features.",
      "Do not send confidential information, passwords, financial information, or other sensitive information through ordinary project-support communications unless specifically requested through an appropriate secure method.",
    ],
  },
  {
    number: "08",
    title: "Religious and informational content",
    content: [
      "Some projects and website content relate to the Quran, Islamic practices, learning, or other religious subjects.",
      "Information provided through the website and its software is presented for the stated informational, educational, or software-related purposes.",
      "The Quran Site is not a substitute for qualified religious scholarship. Questions requiring scholarly interpretation, a formal ruling, or authoritative religious guidance should be referred to qualified and trusted scholars.",
      "Users should independently verify important religious information through appropriate reliable sources.",
    ],
  },
  {
    number: "09",
    title: "Accuracy and availability",
    content: [
      "Reasonable effort is made to keep website information useful and accurate, but no guarantee is made that all information will always be complete, current, or error-free.",
      "Software features, screenshots, requirements, version information, download availability, and other project details may change as development continues.",
      "The website may occasionally be unavailable because of maintenance, technical problems, hosting issues, third-party service failures, or circumstances outside the developer's control.",
    ],
  },
  {
    number: "10",
    title: "Third-party links",
    content: [
      "The website may contain links to external websites, repositories, download services, app stores, documentation, or other third-party resources.",
      "These links are provided for convenience or additional information. The Quran Site does not control third-party websites and does not necessarily endorse all content, products, services, or opinions found there.",
      "You are responsible for reviewing the terms and policies of third-party websites before using them.",
    ],
  },
  {
    number: "11",
    title: "Limitation of liability",
    content: [
      "To the extent permitted by applicable law, The Quran Site and its developer are not responsible for losses, damages, data loss, device problems, software incompatibilities, security issues, or other consequences arising from the use of the website, downloaded software, or third-party services.",
      "This does not exclude or limit any responsibility that cannot legally be excluded or limited under applicable law.",
      "Users are responsible for taking reasonable precautions, including maintaining backups, using appropriate security software, and checking downloads before installation.",
    ],
  },
  {
    number: "12",
    title: "Changes to these terms",
    content: [
      "These Terms of Use may be updated when the website, software projects, services, or applicable requirements change.",
      "Updated terms will be published on this page with a revised last-updated date.",
      "Continuing to use the website after an updated version is published means that you accept the revised terms to the extent permitted by applicable law.",
    ],
  },
];

export default function TermsPage() {
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
              Terms of Use
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#a7b8b1]">
              These terms explain the rules and conditions for using The Quran
              Site and the software and resources provided through it.
            </p>

            <div className="mt-7 inline-flex rounded-full border border-emerald-400/15 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
              Last updated: October 7, 2026
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-[#061d16]">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="rounded-3xl border border-emerald-400/10 bg-[#0a231b] p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-emerald-50">
              Please read before using the site
            </h2>

            <div className="mt-5 space-y-5 text-sm leading-8 text-[#899b94]">
              <p>
                The Quran Site provides software, project information,
                articles, guides, and other resources as part of an independent
                technology project.
              </p>

              <p>
                These Terms of Use are intended to establish reasonable
                expectations about the website, software downloads, external
                services, and information provided through the project.
              </p>

              <p>
                By using the website or downloading software through links
                provided by it, you agree to these terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TERMS */}
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
              Need to contact us?
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#899b94]">
              If you have a question about these Terms of Use, the website, or
              any of the published projects, you can contact the developer
              directly.
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
            href="/disclaimer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 px-6 text-sm font-semibold text-emerald-300 transition hover:border-emerald-400/40 hover:bg-emerald-400/5"
          >
            Disclaimer
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