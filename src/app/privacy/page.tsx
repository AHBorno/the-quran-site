import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy for The Quran Site, including information about website data, cookies, advertising, third-party services, software, and user privacy.",
  keywords: [
    "The Quran Site privacy policy",
    "privacy policy",
    "Islamic software privacy",
    "website privacy",
    "cookies and advertising",
    "Google AdSense privacy",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Privacy Policy | The Quran Site",
    description:
      "Learn how The Quran Site handles website information, cookies, advertising, third-party services, and privacy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | The Quran Site",
    description:
      "Learn how The Quran Site handles website information, cookies, advertising, third-party services, and privacy.",
  },
};

const sections = [
  {
    number: "01",
    title: "Information we collect",
    content: [
      "The Quran Site does not require visitors to create an account or provide personal information simply to browse the website.",
      "We do not intentionally maintain a private database of visitor profiles, passwords, or personal information for marketing purposes.",
      "If you contact us by email, we may receive the information you choose to include in your message, such as your name, email address, application or software details, and the contents of your message. We use that information to respond to your request.",
    ],
  },
  {
    number: "02",
    title: "Website usage and technical information",
    content: [
      "Like most websites, the hosting infrastructure and other technical services used by the website may process limited technical information required to deliver and secure the website.",
      "Depending on the services enabled on the website, this may include information such as IP address, browser type, device information, operating system, referring page, requested pages, approximate access time, and basic diagnostic information.",
      "The Quran Site does not intentionally use this information to personally identify individual visitors.",
    ],
  },
  {
    number: "03",
    title: "Cookies and similar technologies",
    content: [
      "The website may use cookies or similar technologies when required by website functionality, security, analytics, advertising, or third-party services.",
      "Cookies may be used to remember preferences, support website functionality, understand general website usage, provide security, or support advertising services where advertising is enabled.",
      "You can manage or disable cookies through your browser settings. Some website features may not work correctly if certain cookies are disabled.",
    ],
  },
  {
    number: "04",
    title: "Advertising",
    content: [
      "The Quran Site may display advertisements in the future, including advertisements provided through third-party advertising services such as Google AdSense.",
      "If advertising is enabled, advertising providers and their partners may use cookies, device information, or similar technologies to deliver, measure, limit, or personalize advertisements where permitted by applicable law and user consent requirements.",
      "Advertising practices may vary depending on the user's location, consent choices, browser settings, and the advertising provider's policies.",
      "Where required, the website may provide a consent or privacy-management mechanism for applicable visitors.",
    ],
  },
  {
    number: "05",
    title: "Third-party services",
    content: [
      "The website may use third-party services for purposes such as hosting, website delivery, security, analytics, downloads, advertising, or external links.",
      "These services may process information according to their own privacy policies and terms. The Quran Site does not control the privacy practices of independent third-party services.",
      "When appropriate, visitors should review the privacy policy of the relevant third-party service before using it.",
    ],
  },
  {
    number: "06",
    title: "Software and applications",
    content: [
      "The Quran Site publishes information about independently developed Android applications and Windows software.",
      "The privacy practices of an individual application may differ from the privacy practices of this website. An application may have its own permissions, functionality, offline processing, network connections, or third-party services.",
      "Where an application collects or processes information beyond what is described on this website, the applicable application's documentation, privacy notice, or platform listing should be consulted.",
      "Users should review the permissions and information presented by their operating system before installing or using software.",
    ],
  },
  {
    number: "07",
    title: "External links and downloads",
    content: [
      "The website may link to external websites, download providers, source-code repositories, app stores, or other third-party services.",
      "Following an external link or downloading software from a third-party service means that you are interacting with that third party's systems and policies.",
      "The Quran Site is not responsible for the privacy practices, security, availability, or content of external websites and services.",
    ],
  },
  {
    number: "08",
    title: "Children's privacy",
    content: [
      "The website is not designed to intentionally collect personal information from children.",
      "We do not knowingly request personal information from children for registration, marketing, or similar purposes.",
      "If a parent or guardian believes that a child has provided personal information to us directly, they may contact us so that the matter can be reviewed.",
    ],
  },
  {
    number: "09",
    title: "Data security",
    content: [
      "Reasonable measures are taken to keep the website and its systems appropriately protected. However, no website or internet transmission can be guaranteed to be completely secure.",
      "Third-party providers used by the website maintain their own security systems and practices, which are governed by their respective policies.",
    ],
  },
  {
    number: "10",
    title: "Data retention",
    content: [
      "The Quran Site does not intentionally maintain a marketing database of website visitors.",
      "If you contact us by email, correspondence may be retained for as long as reasonably necessary to respond to your request, provide support, maintain relevant records, or resolve follow-up issues.",
      "Information handled by third-party services is subject to those services' own retention policies.",
    ],
  },
  {
    number: "11",
    title: "Your choices",
    content: [
      "You can choose not to provide personal information when it is not required to use a particular feature.",
      "You can manage cookies through your browser settings and, where available, use the website's privacy or consent controls.",
      "If you have contacted us and have a privacy-related question about information contained in your correspondence, you may contact us using the email address below.",
    ],
  },
  {
    number: "12",
    title: "Changes to this Privacy Policy",
    content: [
      "This Privacy Policy may be updated when the website, its features, third-party services, or applicable requirements change.",
      "When changes are made, the updated version will be published on this page together with a revised last-updated date.",
    ],
  },
];

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#a7b8b1]">
              This Privacy Policy explains how The Quran Site handles
              information when you visit and use this website.
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
              Your privacy matters
            </h2>

            <div className="mt-5 space-y-5 text-sm leading-8 text-[#899b94]">
              <p>
                Welcome to The Quran Site. This website is an independent
                software and technology project focused on developing and
                sharing digital tools, applications, software, and information
                related to beneficial Islamic technology projects.
              </p>

              <p>
                This policy describes how information may be handled when you
                visit this website. It is intended to explain the website's
                practices in clear language rather than collect unnecessary
                personal information.
              </p>

              <p>
                By continuing to use the website, you acknowledge the practices
                described in this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POLICY SECTIONS */}
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
              Privacy questions
            </div>

            <h2 className="mt-4 text-2xl font-semibold text-emerald-50 sm:text-3xl">
              Need to contact us about privacy?
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#899b94]">
              If you have a question, concern, or request regarding this
              Privacy Policy or the privacy practices of The Quran Site, you
              can contact the developer directly.
            </p>

            <a
              href="mailto:ashiqul2699@gmail.com"
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-[#34d399] px-6 text-sm font-semibold text-[#051913] transition hover:bg-[#6ee7b7]"
            >
              ashiqul2699@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="border-t border-emerald-400/10">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3 px-6 py-16 lg:px-8">
          <Link
            href="/terms"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 px-6 text-sm font-semibold text-emerald-300 transition hover:border-emerald-400/40 hover:bg-emerald-400/5"
          >
            Terms of Use
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