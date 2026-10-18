
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

export const metadata: Metadata = {
  title: "My Own Prayer",
  description:
    "Explore My Own Prayer, a free Android prayer reminder and Qibla finder with prayer times, Nafl and forbidden prayer information, a Hijri calendar, mosque finder, Tasbeeh counter, and English, Bengali, and Arabic support.",
  keywords: [
    "My Own Prayer",
    "free Android prayer app",
    "Islamic prayer app",
    "prayer times",
    "Qibla finder",
    "Nafl prayer times",
    "forbidden prayer times",
    "Hijri calendar",
    "mosque finder",
    "Tasbeeh counter",
  ],
  openGraph: {
    type: "website",
    title: "My Own Prayer | The Quran Site",
    description:
      "Explore the features, installation guide, troubleshooting tips, and development history of My Own Prayer for Android.",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Own Prayer | The Quran Site",
    description:
      "Explore My Own Prayer's prayer tools, installation guide, and troubleshooting tips.",
  },
};

const features = [
  {
    title: "Watch My Own Prayer",
    description:
      "Watch the application in action before installing it. The video provides a visual introduction to its interface and features.",
    type: "video",
  },
  {
    title: "Prayer Times",
    description:
      "View daily prayer times in one place. The application also includes timing-related improvements intended to help keep displayed times updated.",
    image: "/images/my-own-prayer/prayer-times.png",
    type: "image",
  },
  {
    title: "Qibla Finder",
    description:
      "Use the Qibla finder to help determine the direction of the Kaaba. Check your device's location and compass conditions for a more reliable result.",
    image: "/images/my-own-prayer/qibla.png",
    type: "image",
  },
  {
    title: "Nafl & Forbidden Times",
    description:
      "Review information about Nafl prayers and traditionally restricted prayer periods. Consult a trusted local Islamic authority if you need religious guidance.",
    image: "/images/my-own-prayer/nafl-prayers.png",
    type: "image",
  },
  {
    title: "Hijri Calendar",
    description:
      "View the Islamic Hijri date through the application's calendar feature. Calendar dates may differ according to local moon-sighting practices.",
    image: "/images/my-own-prayer/hijri-calendar.png",
    type: "image",
  },
  {
    title: "Nearby Mosque Finder",
    description:
      "Explore the mosque-finding feature to help locate nearby places of worship. Location availability and map information may affect the results.",
    image: "/images/my-own-prayer/mosque-finder.png",
    type: "image",
  },
  {
    title: "Tasbeeh Counter",
    description:
      "Use a digital counter to keep track of Dhikr and Tasbeeh without needing a separate physical counting device.",
    image: "/images/my-own-prayer/tasbeeh-counter.png",
    type: "image",
  },
  {
    title: "Three Languages",
    description:
      "Choose between English, Bengali, and Arabic to use the application in a language that suits you.",
    image: "/images/my-own-prayer/3-languages.png",
    type: "image",
  },
];

const versions = [
  {
    version: "1.5 Beta",
    details: [
      "Reorganized the side menu.",
      "Added Settings.",
      "Added Data Saver inside Settings.",
      "Improved synchronization between offline and online timings.",
      "Added Eid prayer rules to Some Important Prayers.",
      "Added a Support My Works button for Hadiyah.",
      "Added landscape orientation support.",
      "Added Live Sun Location and Solar Path.",
      "Published the new website.",
    ],
  },
  {
    version: "1.4 Beta",
    details: [
      "Fixed some important timings.",
      "Added Nearby Mosque Finder.",
      "Fixed broken widget thumbnails.",
    ],
  },
  {
    version: "1.3 Beta",
    details: [
      "Optimized the app update-checking algorithm.",
      "Optimized the timing update algorithm.",
      "Fixed notification stacking.",
      "Added Tasbeeh Counter.",
      "Added custom alert sounds.",
      "Added Important Special Prayers.",
      "Integrated an astronomical prayer calculator for offline timing updates.",
      "Fixed notification stoppage while offline.",
      "Fixed time-zone resets while offline.",
      "Fixed text display issues on smaller screens.",
      "Updated the notification icon.",
      "Implemented automatic deletion of old files after updates to free up space.",
    ],
  },
  {
    version: "1.2 Beta",
    details: [
      "Visualized prayer end times.",
      "Optimized prayer times.",
      "Improved the user interface.",
      "Corrected spelling errors.",
      "Added a web-synced Hijri Calendar.",
      "Added bug reporting.",
    ],
  },
  {
    version: "1.1 Beta",
    details: [
      "Added the side menu.",
      "Added support for three languages.",
      "Improved the prayer card.",
      "Optimized prayer timings.",
      "Introduced a light theme.",
    ],
  },
  {
    version: "1.0 Beta",
    details: [
      "Introduced prayer times.",
      "Added prayer-time notifications.",
      "Added Nafl Prayer Times.",
      "Added Forbidden Prayer Times.",
      "Added Qibla Finder.",
      "Designed the application to avoid continuous background resource usage.",
    ],
  },
];

const troubleshooting = [
  {
    problem: "Prayer notifications do not appear",
    cause:
      "Notification permission, device power management, or background restrictions may prevent notifications from appearing on time.",
    steps: [
      "Open Android Settings and check whether notifications are allowed for My Own Prayer.",
      "Check whether Do Not Disturb or a similar device setting is suppressing alerts.",
      "Review your phone's battery or background activity settings if notifications remain unreliable.",
      "Confirm that the displayed prayer schedule and your device time are correct.",
    ],
  },
  {
    problem: "Prayer timings look incorrect or outdated",
    cause:
      "Location, time-zone settings, synchronization, or differences in prayer-time calculation conventions can affect displayed times.",
    steps: [
      "Check that your device's date, clock, and time zone are correct.",
      "Review the location information available to the application.",
      "If internet access is available, reopen the app and allow its timing information to update.",
      "Compare the displayed schedule with a trusted local mosque or Islamic authority.",
    ],
  },
  {
    problem: "Qibla direction appears inaccurate",
    cause:
      "Compass interference, device orientation, or unavailable or inaccurate location information can affect direction readings.",
    steps: [
      "Check that the app has the location access it needs for the feature.",
      "Move away from magnetic objects, speakers, and other potential sources of interference.",
      "Follow any compass calibration instructions supported by your device.",
      "Compare the direction with a trusted Qibla reference if the result remains uncertain.",
    ],
  },
  {
    problem: "A feature does not load or the app behaves unexpectedly",
    cause:
      "The beta application may encounter device-specific bugs, temporary connectivity problems, or operating-system restrictions.",
    steps: [
      "Close and reopen the application.",
      "Check whether your internet connection is required for the particular feature.",
      "Restart your device if the problem continues.",
      "Contact the developer with your device model, Android version, app version, and the steps that reproduce the issue.",
    ],
  },
];

const faqs = [
  {
    question: "Is My Own Prayer free?",
    answer:
      "My Own Prayer is offered as a free Android application. Check the download source and release notes for the latest available build and any updated distribution information.",
  },
  {
    question: "Is My Own Prayer a finished, stable release?",
    answer:
      "No. The version shown on this page is a beta release. Features may change, and bugs or device-specific problems may occur. Keep this in mind before relying on the app for time-sensitive reminders.",
  },
  {
    question: "Can I use the app without an internet connection?",
    answer:
      "The development history documents an astronomical calculator for offline prayer-timing updates. However, not every feature is necessarily available offline, and information that depends on online synchronization or external map data may require connectivity.",
  },
  {
    question: "Why might prayer times differ from another app?",
    answer:
      "Prayer schedules can differ because of calculation methods, location coordinates, time-zone configuration, and local conventions. Compare the settings and consult a trusted local Islamic authority when accuracy matters.",
  },
  {
    question: "Why might the Hijri date differ from the date used locally?",
    answer:
      "Hijri dates can differ according to moon-sighting practices and calendar conventions. The displayed date should not automatically be treated as the official date announced by your local religious authority.",
  },
  {
    question: "How do I report a bug or suggest a feature?",
    answer:
      "Use the Contact page to send the developer a description of the issue or suggestion. Include your device model, Android version, application version, and steps to reproduce the problem. Do not send passwords or other sensitive information.",
  },
];

export default function MyOwnPrayerPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-emerald-400/10">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8 lg:pb-24 lg:pt-20">
          <Link
            href="/apps"
            className="inline-flex items-center text-sm text-[#788b84] transition hover:text-emerald-300"
          >
            ← All apps
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-emerald-400/15 bg-[#0a231b] px-3 py-1.5 text-xs font-medium text-emerald-300">
                Android · v1.5 Beta
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-emerald-50 sm:text-5xl lg:text-6xl">
                My Own Prayer
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#a7b8b1]">
                A free Android prayer reminder and Qibla finder with practical
                tools for everyday prayer management.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#788b84]">
                The application brings prayer times, Qibla direction, Nafl
                prayer information, traditionally restricted prayer periods,
                a Hijri calendar, mosque-finding tools, and a Tasbeeh counter
                together in one place. Its interface supports English,
                Bengali, and Arabic.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com/AHBorno/My-Own-Prayer/releases/download/v1.5-beta/My.Own.Prayer.apk"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#34d399] px-6 text-sm font-semibold text-[#051913] transition hover:bg-[#6ee7b7]"
                >
                  Download APK
                </a>

                <a
                  href="https://apkpure.com/p/com.theQuranSite.pray"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-yellow-300/25 bg-yellow-300/10 px-6 text-sm font-semibold text-yellow-200 transition hover:border-yellow-300/40 hover:bg-yellow-300/15"
                >
                  Download from APKPure
                </a>

                <a
                  href="#version-history"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 bg-[#0a231b] px-6 text-sm font-semibold text-emerald-100 transition hover:border-emerald-400/35 hover:bg-[#0f2e23]"
                >
                  View Releases
                </a>
              </div>

              <p className="mt-5 max-w-xl text-xs leading-6 text-[#788b84]">
                Beta software may contain bugs or behave differently across
                devices. Verify important prayer schedules independently
                rather than relying on an unverified app reading alone.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[280px] overflow-hidden rounded-[2rem] border border-emerald-400/15 bg-[#0a231b] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:max-w-sm">
                <Image
                  src="/images/my-own-prayer/Logo.png"
                  alt="My Own Prayer application logo"
                  width={700}
                  height={700}
                  className="h-auto w-full rounded-[1.5rem]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features and screenshots */}
      <section id="features" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Features
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
              Tools for everyday prayer management
            </h2>

            <p className="mt-5 text-base leading-8 text-[#788b84]">
              Explore the application video and screenshots to see the
              available tools before installing the beta version. Select a
              screenshot to view it at a larger size.
            </p>
          </div>

          <div className="-mx-6 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain px-6 pb-6 [scrollbar-color:rgba(52,211,153,0.4)_transparent] [scrollbar-width:thin] sm:mx-0 sm:px-0">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="w-[82vw] min-w-[82vw] max-w-[360px] shrink-0 snap-start overflow-hidden rounded-2xl border border-emerald-400/10 bg-[#0a231b] transition duration-300 hover:border-emerald-400/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:w-[340px] sm:min-w-[340px] lg:w-[360px] lg:min-w-[360px]"
              >
                <div className="flex h-[440px] items-center justify-center overflow-hidden bg-[#071d16] p-4 sm:h-[480px]">
                  {feature.type === "video" ? (
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/kn-RBwtFYTo"
                      title="My Own Prayer app promotional video"
                      className="h-full w-full rounded-xl border border-emerald-400/10"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : feature.image ? (
                    <ImageLightbox
                      src={feature.image}
                      alt={`${feature.title} in My Own Prayer`}
                    />
                  ) : null}
                </div>

                <div className="min-h-[145px] border-t border-emerald-400/10 px-5 py-5">
                  <h3 className="text-base font-semibold text-emerald-50">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#788b84]">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-2 text-xs text-[#5f736b]">
            On a computer, use Shift + mouse wheel or your trackpad to scroll
            horizontally.
          </p>
        </div>
      </section>

      {/* Practical guidance */}
      <section className="border-y border-emerald-400/10 bg-[#071d16]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Using the app
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
              Getting more reliable results
            </h2>

            <p className="mt-5 text-base leading-8 text-[#788b84]">
              Prayer-related applications depend on correct device settings,
              location information, and the behavior of the Android operating
              system. These checks can help you identify common problems.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-6">
              <h3 className="text-lg font-semibold text-emerald-50">
                Check your device settings
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[#788b84]">
                <li>
                  • Confirm that the device date, clock, and time zone are
                  correct.
                </li>
                <li>
                  • Review location and notification permissions when a feature
                  requires them.
                </li>
                <li>
                  • Check battery restrictions if notifications stop arriving
                  reliably.
                </li>
                <li>
                  • Allow an internet connection for features that need online
                  information.
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-6">
              <h3 className="text-lg font-semibold text-emerald-50">
                Understand timing differences
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[#788b84]">
                <li>
                  • Prayer schedules may differ between calculation methods.
                </li>
                <li>
                  • Location coordinates and time-zone settings affect the
                  displayed schedule.
                </li>
                <li>
                  • Hijri dates may vary with local moon-sighting practices.
                </li>
                <li>
                  • Confirm important timings with a trusted local mosque or
                  Islamic authority.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section id="installation" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Installation
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50">
                Install the Android application
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#788b84]">
                My Own Prayer is distributed as an APK through the links on
                this page. An APK is an Android application installation file.
                Because this beta is distributed outside Google Play, Android
                may require additional steps before installing it.
              </p>

              <a
                href="https://github.com/AHBorno/My-Own-Prayer/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 bg-[#0a231b] px-5 text-sm font-semibold text-emerald-100 transition hover:border-emerald-400/35"
              >
                View GitHub releases
              </a>
            </div>

            <div className="space-y-7">
              {[
                {
                  title: "1. Download the APK",
                  text: "Use the official GitHub release link above or the alternative APKPure listing. Check the release version before installing.",
                },
                {
                  title: "2. Open the downloaded file",
                  text: "Locate the APK in your Downloads folder and open it to begin installation.",
                },
                {
                  title: "3. Review installation permissions",
                  text: "Android may ask you to allow your browser or file manager to install unknown apps. Only enable this permission for a source you trust, and turn it off again when it is no longer needed.",
                },
                {
                  title: "4. Complete the security check",
                  text: "Review any Play Protect or Android security warning carefully. Do not bypass a warning you do not understand; verify the file's source and authenticity before proceeding.",
                },
                {
                  title: "5. Open and configure the app",
                  text: "After installation, review the available settings and grant only the permissions needed for the features you choose to use.",
                },
              ].map((step) => (
                <article
                  key={step.title}
                  className="border-b border-emerald-400/10 pb-6 last:border-0"
                >
                  <h3 className="font-semibold text-emerald-100">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#788b84]">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section
        id="troubleshooting"
        className="scroll-mt-24 border-y border-emerald-400/10 bg-[#071d16]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Troubleshooting
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
              Common problems and possible solutions
            </h2>

            <p className="mt-5 text-base leading-8 text-[#788b84]">
              If something does not work as expected, start with the relevant
              checks below. Android menu names vary by manufacturer and
              operating-system version, so the exact steps may differ on your
              phone.
            </p>
          </div>

          <div className="mt-10 space-y-5">
            {troubleshooting.map((item, index) => (
              <article
                key={item.problem}
                className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-6 sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-300">
                  Issue {index + 1}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-emerald-50">
                  {item.problem}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#a7b8b1]">
                  {item.cause}
                </p>

                <h4 className="mt-5 text-sm font-semibold text-emerald-100">
                  What to check
                </h4>

                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#788b84]">
                  {item.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </article>
            ))}
          </div>

          <p className="mt-7 text-sm leading-7 text-[#788b84]">
            These are general Android troubleshooting suggestions, not
            guaranteed fixes for every device. If the issue continues, contact
            the developer and describe what happened.
          </p>
        </div>
      </section>

      {/* Compatibility */}
      <section id="compatibility" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Compatibility
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50">
                Tested across Android versions
              </h2>
            </div>

            <div className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7">
              <p className="text-sm leading-7 text-[#a7b8b1]">
                The developer has tested the current version on Android 9,
                Android 14, and Android 17. These tests do not guarantee
                identical behavior on every phone. Manufacturers may implement
                different battery controls, notification rules, permission
                prompts, and hardware features.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#788b84]">
                In particular, compass accuracy depends on the device's
                hardware and surrounding magnetic interference. Notification
                delivery may also be affected by operating-system restrictions
                and user settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-24 border-y border-emerald-400/10 bg-[#071d16]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              FAQ
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
              Frequently asked questions
            </h2>

            <p className="mt-5 text-base leading-8 text-[#788b84]">
              Answers to common questions about installing, using, and
              troubleshooting My Own Prayer.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-6"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-emerald-50 marker:content-none">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl text-emerald-300 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-4 text-sm leading-7 text-[#788b84]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Version history */}
      <section
        id="version-history"
        className="scroll-mt-24 border-b border-emerald-400/10"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Version history
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
              Development history
            </h2>

            <p className="mt-5 text-base leading-8 text-[#788b84]">
              This changelog records the features, improvements, and fixes
              documented during the development of My Own Prayer. It helps
              users understand how the application has evolved across its beta
              versions.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {versions.map((item) => (
              <article
                key={item.version}
                className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-6 transition duration-200 hover:border-emerald-400/20 sm:p-7"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="shrink-0">
                    <span className="inline-flex rounded-full border border-emerald-400/15 bg-[#071d16] px-3 py-1.5 text-xs font-semibold text-emerald-300">
                      v{item.version}
                    </span>
                  </div>

                  <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[#788b84]">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <a
            href="https://github.com/AHBorno/My-Own-Prayer/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 bg-[#0a231b] px-6 text-sm font-semibold text-emerald-100 transition hover:border-emerald-400/35"
          >
            Browse GitHub releases
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="rounded-3xl border border-emerald-400/15 bg-[#0a231b] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Contact
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50">
                  Need help with My Own Prayer?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#788b84]">
                  Report a bug, ask a question, or suggest an improvement. When
                  reporting a technical issue, include your device model,
                  Android version, app version, and the steps that caused the
                  problem. Please do not include passwords or sensitive
                  personal information.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://forms.gle/ChdZvxk8KoebLEYb8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#34d399] px-6 text-sm font-semibold text-[#051913] transition hover:bg-[#6ee7b7]"
                >
                  Report a Bug
                </a>

                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 bg-[#0a231b] px-6 text-sm font-semibold text-emerald-100 transition hover:border-emerald-400/40 hover:bg-[#0f2e23]"
                >
                  Contact the developer
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-[#5f736b]">
            My Own Prayer is a project by Ashiqul Haque Borno, published on
            The Quran Site.
          </p>
        </div>
      </section>
    </main>
  );
}
