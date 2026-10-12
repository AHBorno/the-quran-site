import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

export const metadata: Metadata = {
  title: "My Own Prayer",
  description:
    "My Own Prayer is a free Android prayer reminder and Qibla finder with prayer times, Nafl prayer information, forbidden prayer times, Hijri calendar, nearby mosque finder, and support for English, Bengali, and Arabic.",
  keywords: [
    "My Own Prayer",
    "prayer app",
    "Islamic prayer app",
    "Qibla finder",
    "prayer times app",
    "Nafl prayer",
    "forbidden prayer times",
    "Hijri calendar",
    "nearby mosque finder",
    "Tasbeeh Counter",
    "Islamic Android app",
  ],
  openGraph: {
    type: "website",
    title: "My Own Prayer | The Quran Site",
    description:
      "A free Android prayer reminder and Qibla finder with useful tools for everyday prayer management.",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Own Prayer | The Quran Site",
    description:
      "A free Android prayer reminder and Qibla finder with useful tools for everyday prayer management.",
  },
};

const features = [
  {
    title: "Prayer Times",
    description:
      "View daily prayer times in a simple interface designed for everyday use.",
    image: "/images/my-own-prayer/prayer-times.png",
  },
  {
    title: "Qibla Finder",
    description:
      "Find the direction of the Qibla using your Android device.",
    image: "/images/my-own-prayer/qibla.png",
  },
  {
    title: "Nafl & Forbidden Times",
    description:
      "Check Nafl prayer information and times when prayer is traditionally restricted.",
    image: "/images/my-own-prayer/nafl-prayers.png",
  },
  {
    title: "Hijri Calendar",
    description:
      "Keep track of the Islamic Hijri date alongside your daily activities.",
    image: "/images/my-own-prayer/hijri-calendar.png",
  },
  {
    title: "Nearby Mosque Finder",
    description:
      "Find nearby mosques and access offline map information for easier mosque discovery.",
    image: "/images/my-own-prayer/mosque-finder.png",
  },
  {
    title: "Tasbeeh Counter",
    description:
      "Use a simple digital counter for Dhikr and Tasbeeh during your daily worship.",
    image: "/images/my-own-prayer/tasbeeh-counter.png",
  },
  {
    title: "Three Languages",
    description:
      "Use the application in English, Bengali, or Arabic.",
    image: "/images/my-own-prayer/3-languages.png",
  },
];

const versions = [
  {
    version: "1.5 Beta",
    details: [
      "Reorganized side-menu.",
      "Added Settings.",
      "Added Data Saver inside Settings.",
      "Fixed offline and online timings sync.",
      "Added Eid prayer rules in Some Important Prayers.",
      "Added Support My Works button for Hadiyah.",
      "Added Landscape orientation support.",
      "Added Live Sun Location & Solar Path.",
      "New website.",
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
      "Optimized App Update checking algorithm.",
      "Optimized timings update algorithm.",
      "Fixed notifications stacking.",
      "Added Tasbeeh Counter.",
      "Added Custom Alert Sound.",
      "Added Important Special Prayers.",
      "Integrated Astronomical Prayer Calculator for offline timing updates.",
      "Fixed stoppage of notification when offline.",
      "Fixed time zone reset when offline.",
      "Fixed some broken texts on smaller screens.",
      "Notification icon updated.",
      "Implemented auto old files deletion after update to free up space.",
    ],
  },
  {
    version: "1.2 Beta",
    details: [
      "Visualized Prayer end times.",
      "Optimized Prayer times.",
      "UI optimization.",
      "Spelling corrections.",
      "Added Hijri Calendar (Web Synced).",
      "Added bug reporting.",
    ],
  },
  {
    version: "1.1 Beta",
    details: [
      "Side menu added.",
      "Available in 3 different languages.",
      "Optimized Prayer card.",
      "Optimized Prayer timings.",
      "New Light Theme.",
    ],
  },
  {
    version: "1.0 Beta",
    details: [
      "Prayer times.",
      "Prayer time notifications.",
      "Nafl Prayer Times.",
      "Forbidden Prayer Times.",
      "Qibla Finder.",
      "No background resource usage.",
    ],
  },
];

export default function MyOwnPrayerPage() {
  return (
    <main>
      {/* App introduction */}
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
                A prayer reminder and Qibla finder designed to make everyday
                prayer management simple and accessible.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#788b84]">
                My Own Prayer is a free Android application with prayer times,
                Qibla direction, Nafl prayer information, forbidden prayer
                times, a Hijri calendar, nearby mosque information, and support
                for English, Bengali, and Arabic.
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

              <p className="mt-5 max-w-xl text-xs leading-6 text-[#5f736b]">
                My Own Prayer is currently in beta testing. Bugs or glitches
                may occur on some devices.
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

      {/* Horizontally scrollable screenshots on mobile and PC */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Features
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
              Tools for everyday prayer management.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#788b84]">
              Explore the features of My Own Prayer through the screenshots
              below. Scroll horizontally to see more.
            </p>
          </div>

          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-6 [scrollbar-color:#176b50_#071d16] [scrollbar-width:thin]">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="w-[280px] flex-none snap-start overflow-hidden rounded-2xl border border-emerald-400/10 bg-[#0a231b] transition duration-300 hover:border-emerald-400/25 sm:w-[320px] lg:w-[340px]"
              >
                <div className="flex h-[440px] items-center justify-center overflow-hidden bg-[#071d16] p-4 sm:h-[480px]">
                  <ImageLightbox
                    src={feature.image}
                    alt={`${feature.title} in My Own Prayer`}
                  />
                </div>

                <div className="min-h-[130px] border-t border-emerald-400/10 px-5 py-5">
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

          <p className="mt-1 text-xs text-[#5f736b]">
            Tip: Use Shift + mouse wheel, your trackpad, or the scrollbar to
            browse screenshots on a computer.
          </p>
        </div>
      </section>

      {/* YouTube Shorts video */}
      <section className="border-y border-emerald-400/10 bg-[#071d16]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Watch the app in action
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
              Get to know My Own Prayer.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#788b84]">
              Watch this short video to see more of the app.
            </p>
          </div>

          <div className="mx-auto mt-10 w-full max-w-[360px] overflow-hidden rounded-3xl border border-emerald-400/15 bg-[#0a231b] p-2 shadow-[0_25px_70px_rgba(0,0,0,0.3)]">
            <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/kn-RBwtFYTo"
                title="My Own Prayer app video"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <p className="mt-5 text-center text-xs text-[#5f736b]">
            Video hosted on YouTube. Playback may depend on your browser and
            YouTube availability.
          </p>
        </div>
      </section>

      {/* Installation instructions */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Installation
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50">
                Install the Android application.
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-8 text-[#788b84]">
              <div>
                <h3 className="font-semibold text-emerald-100">
                  1. Download the APK
                </h3>
                <p className="mt-2">
                  Download the latest beta APK using the official GitHub
                  release link on this page.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-emerald-100">
                  2. Allow installation if required
                </h3>
                <p className="mt-2">
                  Android may ask you to allow your browser or file manager to
                  install applications from unknown sources.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-emerald-100">
                  3. Install the application
                </h3>
                <p className="mt-2">
                  Open the downloaded APK and follow Android&apos;s installation
                  instructions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-emerald-100">
                  4. Security check
                </h3>
                <p className="mt-2">
                  Android may perform a Play Protect security check before
                  installation. Review the warning or verification information
                  shown on your device before continuing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Compatibility
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50">
                Tested on multiple Android versions.
              </h2>
            </div>

            <div className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7">
              <p className="text-sm leading-7 text-[#788b84]">
                The current version has been tested on Android 9, Android 14,
                and Android 17. Device behavior may vary depending on the
                manufacturer, Android configuration, permissions, and available
                hardware features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development history */}
      <section
        id="version-history"
        className="scroll-mt-24 border-y border-emerald-400/10 bg-[#071d16]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Version history
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
              Development history.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#788b84]">
              A record of the major features, improvements, and fixes released
              throughout the development of My Own Prayer.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {versions.map((item) => (
              <article
                key={item.version}
                className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-6 transition duration-200 hover:border-emerald-400/20"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="shrink-0">
                    <span className="inline-flex rounded-full border border-emerald-400/15 bg-[#071d16] px-3 py-1.5 text-xs font-semibold text-emerald-300">
                      v{item.version}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm leading-7 text-[#788b84]">
                    {item.details.map((detail) => (
                      <p key={detail}>• {detail}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact and support */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="rounded-3xl border border-emerald-400/15 bg-[#0a231b] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Support
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50">
                  Need help with My Own Prayer?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#788b84]">
                  For support, bug reports, suggestions, or feedback, visit
                  the contact page or contact the developer directly.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#34d399] px-6 text-sm font-semibold text-[#051913] transition hover:bg-[#6ee7b7]"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-[#5f736b]">
            My Own Prayer is a project by Ashiqul Haque Borno.
          </p>
        </div>
      </section>
    </main>
  );
}