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
      "Find nearby mosques using location-based information.",
    image: "/images/my-own-prayer/qibla.png",
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
    version: "1.4 Beta",
    details: [
      "Fixed important timings.",
      "Added Nearby Mosque Finder.",
      "Fixed broken widget thumbnails.",
    ],
  },
  {
    version: "1.3",
    details: [
      "Improved application stability and usability.",
    ],
  },
  {
    version: "1.2",
    details: [
      "Added improvements and fixes based on testing.",
    ],
  },
  {
    version: "1.1",
    details: [
      "Improved the overall application experience.",
    ],
  },
  {
    version: "1.0",
    details: [
      "Initial release of My Own Prayer.",
    ],
  },
];

export default function MyOwnPrayerPage() {
  return (
    <main>
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
                Android · v1.4 Beta
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
                  href="https://github.com/AHBorno/My-Own-Prayer/releases/download/v1.4-beta/My.Own.Prayer.apk"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#34d399] px-6 text-sm font-semibold text-[#051913] transition hover:bg-[#6ee7b7]"
                >
                  Download APK
                </a>

                <a
                  href="https://github.com/AHBorno/My-Own-Prayer/releases"
                  target="_blank"
                  rel="noopener noreferrer"
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
              <div className="relative w-full max-w-sm overflow-hidden rounded-[2rem] border border-emerald-400/15 bg-[#0a231b] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
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
              My Own Prayer brings several useful prayer-related tools
              together in one straightforward Android application.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group overflow-hidden rounded-2xl border border-emerald-400/10 bg-[#0a231b] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              >
                <div className="flex min-h-[420px] items-center justify-center bg-[#071d16] p-5">
                  <ImageLightbox
                    src={feature.image}
                    alt={`${feature.title} in My Own Prayer`}
                  />
                </div>

                <div className="border-t border-emerald-400/10 px-5 py-5">
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
        </div>
      </section>

      <section className="border-y border-emerald-400/10 bg-[#071d16]">
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

      <section className="border-y border-emerald-400/10 bg-[#071d16]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Version history
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50">
              Development history.
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {versions.map((item) => (
              <article
                key={item.version}
                className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-lg font-semibold text-emerald-50">
                    v{item.version}
                  </h3>

                  <div className="space-y-2 text-sm leading-7 text-[#788b84] sm:max-w-2xl">
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
                  the support page or contact the developer directly.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://bhokto.com.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 bg-[#071d16] px-6 text-sm font-semibold text-emerald-100 transition hover:border-emerald-400/35 hover:bg-[#0f2e23]"
                >
                  Support
                </a>

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
            My Own Prayer is an independent project by Ashiqul Haque Borno.
          </p>
        </div>
      </section>
    </main>
  );
}