
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles & Guides",
  description:
    "Practical guides to Android app development, prayer-time applications, Qibla direction, software testing, and independent Islamic technology projects.",
  keywords: [
    "Islamic technology",
    "Android app development",
    "prayer time app guide",
    "Qibla finder",
    "software testing",
    "The Quran Site",
  ],
  openGraph: {
    type: "website",
    title: "Articles & Guides | The Quran Site",
    description:
      "Practical software guides and development notes from The Quran Site.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles & Guides | The Quran Site",
    description:
      "Practical software guides and development notes from The Quran Site.",
  },
};

const articles = [
  {
    category: "Android Development",
    readTime: "8 min read",
    title: "Building a Reliable Prayer-Time App: What Developers Should Consider",
    description:
      "Explore the main technical decisions behind prayer-time applications, including location, calculation methods, time zones, offline access, and notifications.",
    href: "#prayer-time-guide",
  },
  {
    category: "App Development",
    readTime: "6 min read",
    title: "Testing an Android App Before Sharing It With Users",
    description:
      "A practical checklist for testing installation, permissions, screen layouts, notifications, updates, and common failure cases before releasing an app.",
    href: "#android-testing-guide",
  },
  {
    category: "Islamic Technology",
    readTime: "6 min read",
    title: "How a Qibla Finder Works on a Smartphone",
    description:
      "Understand the difference between calculating the direction to the Kaaba and displaying that direction using a phone's compass sensors.",
    href: "#qibla-guide",
  },
];

export default function ArticlesPage() {
  return (
    <main>
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Articles & Guides
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-emerald-50 sm:text-5xl lg:text-6xl">
              Practical guides to software and Islamic technology.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#a7b8b1] sm:text-lg">
              Explore technical explanations, app-testing checklists, and
              development resources covering the challenges involved in
              building useful digital tools.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#061d16]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Published guides
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
              Learn how the technology works.
            </h2>

            <p className="mt-5 leading-8 text-[#899b94]">
              These guides explain practical concepts and testing procedures.
              Actual implementation details may vary by device, software
              version, location, and the libraries used by a developer.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.href}
                className="flex flex-col rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  {article.category}
                </p>

                <h3 className="mt-4 text-xl font-semibold leading-8 text-emerald-50">
                  {article.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-[#899b94]">
                  {article.description}
                </p>

                <p className="mt-5 text-xs text-[#788b84]">
                  {article.readTime}
                </p>

                <Link
                  href={article.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                >
                  Read guide <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="prayer-time-guide"
        className="scroll-mt-24 border-t border-emerald-400/10"
      >
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
            Android Development
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-emerald-50 sm:text-4xl">
            Building a Reliable Prayer-Time App: What Developers Should Consider
          </h2>

          <p className="mt-5 text-sm text-[#788b84]">
            A technical introduction to the calculations, device features, and
            testing decisions behind prayer-time applications.
          </p>

          <div className="mt-8 space-y-5 text-base leading-8 text-[#a7b8b1]">
            <p>
              A prayer-time application needs to do more than display five
              daily times. It must present times appropriate to the user's
              location, handle local time correctly, explain relevant settings,
              and behave predictably when the phone is offline or running in
              the background.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              1. Location and calculation settings
            </h3>

            <p>
              Prayer-time calculations depend on geographical coordinates,
              date, time zone, and the calculation convention being used.
              Different conventions can produce different results, especially
              for Fajr and Isha. Developers should make the selected method
              clear and provide a way to configure it where appropriate.
            </p>

            <p>
              Location permissions should also be handled carefully. Explain
              why location is needed, request permission only when necessary,
              and provide a manual location option if the application supports
              one. Never assume that a device's location is always available
              or accurate.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              2. Time zones and date changes
            </h3>

            <p>
              A calculation can appear incorrect if the application mixes
              UTC, local time, and a device's time zone. Developers should test
              daylight-saving changes where applicable, manual time-zone
              changes, travel between locations, and dates that cross midnight.
              The displayed date and the calculation date should remain
              consistent with the application's documented behavior.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              3. Offline operation
            </h3>

            <p>
              Offline functionality can make a prayer-time app useful when
              internet access is unavailable. If the app calculates times
              locally, it should retain the settings needed for those
              calculations. If it relies on a remote service, it should explain
              what remains available without a connection and handle failed
              requests gracefully.
            </p>

            <p>
              Cached results need clear rules for when they become outdated.
              A location change, a new date, or an updated calculation setting
              may require the application to recalculate or refresh its data.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              4. Notifications and background restrictions
            </h3>

            <p>
              Notifications can be affected by notification permission,
              battery-saving features, background restrictions, and device
              manufacturer settings. Test scheduled notifications on real
              devices as well as emulators. Check behavior after a reboot,
              an application update, a time-zone change, and a change to
              prayer-time settings.
            </p>

            <p>
              Avoid promising that notifications will always be delivered at
              an exact time on every Android device. Explain relevant
              limitations and provide troubleshooting steps when the operating
              system restricts background activity.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              5. A practical testing checklist
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>Compare calculated times with a trusted reference for the same location and calculation method.</li>
              <li>Test multiple cities, time zones, and calendar dates.</li>
              <li>Verify that permission denial does not crash the application.</li>
              <li>Test offline startup, reconnection, and recovery from failed requests.</li>
              <li>Check notification settings and scheduled alerts on different devices.</li>
              <li>Test small screens, different display sizes, and supported languages.</li>
              <li>Verify upgrades from previous versions and document known limitations.</li>
            </ul>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              Conclusion
            </h3>

            <p>
              Reliable prayer-time software depends on transparent calculation
              settings, correct time handling, thoughtful permission requests,
              and testing on real devices. Documenting these decisions helps
              users understand what an application can do and helps developers
              diagnose problems more effectively.
            </p>

            <p className="text-sm text-[#788b84]">
              This is a general development guide, not a religious ruling.
              For religiously significant timing decisions, users should
              consult a trusted local authority and confirm the calculation
              convention appropriate to their community.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-emerald-400/15 bg-[#0a231b] p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-emerald-50">
              Explore My Own Prayer
            </h3>

            <p className="mt-3 leading-7 text-[#899b94]">
              See the application's documented features, supported languages,
              installation information, and development history.
            </p>

            <Link
              href="/apps/my-own-prayer"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#34d399] px-6 text-sm font-semibold text-[#051913] transition hover:bg-[#6ee7b7]"
            >
              View My Own Prayer
            </Link>
          </div>
        </div>
      </section>

      <section
        id="android-testing-guide"
        className="scroll-mt-24 border-t border-emerald-400/10 bg-[#061d16]"
      >
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
            App Development
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
            Testing an Android App Before Sharing It With Users
          </h2>

          <div className="mt-7 space-y-5 leading-8 text-[#a7b8b1]">
            <p>
              An app that works on its developer's phone may still fail on a
              different device. Android versions, screen sizes, permissions,
              memory limits, battery policies, and manufacturer customizations
              can all affect application behavior. Testing should therefore
              cover more than the normal successful path.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              Installation and upgrades
            </h3>

            <p>
              Test a fresh installation and an upgrade from an earlier
              supported version. Confirm that the package installs correctly,
              existing user settings are handled as intended, and an update
              does not unexpectedly remove important information. Keep a
              backup of important test data before testing destructive changes.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              Permissions and failure cases
            </h3>

            <p>
              Test what happens when a user denies a permission, revokes it
              later, or disables a related system service. Show understandable
              error messages instead of leaving a blank screen or crashing.
              Network-dependent features should also be tested with slow,
              unavailable, and interrupted connections.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              Notifications and device compatibility
            </h3>

            <p>
              Check notifications after restarting the phone, changing relevant
              settings, updating the app, and enabling battery-saving modes.
              Verify behavior on the Android versions you claim to support.
              An emulator is useful, but it cannot fully reproduce every
              manufacturer's background-process restrictions.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              Release checklist
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>Confirm the package name, version number, and release notes.</li>
              <li>Install the release build on a clean test device.</li>
              <li>Test the main features and common error scenarios.</li>
              <li>Check readability, navigation, and layout on small screens.</li>
              <li>Verify external links and support contact details.</li>
              <li>Provide clear installation instructions and disclose known issues.</li>
            </ul>

            <p>
              A careful release process reduces avoidable problems, but it
              cannot guarantee that every device will behave identically.
              Record reported bugs and use reproducible test cases to guide
              future fixes.
            </p>
          </div>
        </div>
      </section>

      <section
        id="qibla-guide"
        className="scroll-mt-24 border-t border-emerald-400/10"
      >
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
            Islamic Technology
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
            How a Qibla Finder Works on a Smartphone
          </h2>

          <div className="mt-7 space-y-5 leading-8 text-[#a7b8b1]">
            <p>
              A Qibla finder helps a user determine the direction from their
              current location toward the Kaaba in Makkah. A phone-based tool
              typically combines a geographical calculation with sensor data
              to show that direction on the screen.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              Direction calculation and compass heading
            </h3>

            <p>
              The geographical direction can be calculated from the user's
              coordinates and the Kaaba's coordinates. The phone's compass
              heading is a separate measurement: it estimates the direction
              the device is facing relative to magnetic north or a device
              orientation reference. The application compares these values
              to indicate the direction the user needs to face.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              Why the compass may appear inaccurate
            </h3>

            <p>
              Magnetic interference from metal objects, magnets, electronic
              equipment, or the environment can affect a phone's magnetometer.
              Sensor calibration and the way the phone is held can also
              influence the reading. True-north and magnetic-north references
              are not identical, so implementations must account for their
              chosen reference system correctly.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              How to get a more dependable reading
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>Enable location or enter the correct location if the app supports manual selection.</li>
              <li>Move away from strong magnetic sources and large metal objects.</li>
              <li>Follow the device or app's calibration instructions.</li>
              <li>Hold the phone steadily and check that its heading responds sensibly as you turn.</li>
              <li>Compare the indicated direction with a reliable reference if the result seems unusual.</li>
            </ul>

            <p>
              A compass-based Qibla finder is a practical aid, but its
              precision depends on location accuracy, sensor quality, magnetic
              conditions, and the implementation. If readings remain
              inconsistent, use an appropriate trusted reference rather than
              assuming the displayed direction is exact.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/apps/my-own-prayer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 px-6 text-sm font-semibold text-emerald-300 transition hover:border-emerald-400/40 hover:bg-emerald-400/5"
            >
              Explore the Qibla Finder in My Own Prayer
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-emerald-400/10 bg-[#04150f]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:py-20">
          <h2 className="text-2xl font-semibold text-emerald-50 sm:text-3xl">
            Explore the projects behind these guides.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#899b94]">
            Discover the available applications and software, read their
            feature details, and find installation and support information.
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
