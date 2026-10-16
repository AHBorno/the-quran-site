
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles & Guides",
  description:
    "Practical guides to Islamic technology, daily prayer times, Android app testing, prayer-time calculations, and Qibla direction.",
  keywords: [
    "Islamic technology",
    "daily prayer times explained",
    "prayer time calculation",
    "prayer time app guide",
    "Qibla finder",
    "Android app testing",
    "The Quran Site",
  ],
  openGraph: {
    type: "website",
    title: "Articles & Guides | The Quran Site",
    description:
      "Understand Islamic technology, prayer times, Qibla direction, and useful software.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles & Guides | The Quran Site",
    description:
      "Understand Islamic technology, prayer times, Qibla direction, and useful software.",
  },
};

const articles = [
  {
    category: "Prayer Technology",
    readTime: "8 min read",
    title: "Building a Reliable Prayer-Time App: What Developers Should Consider",
    description:
      "Explore location, calculation methods, time zones, offline access, and notifications in prayer-time applications.",
    href: "#prayer-time-guide",
  },
  {
    category: "App Development",
    readTime: "6 min read",
    title: "Testing an Android App Before Sharing It With Users",
    description:
      "A practical checklist for testing installation, permissions, screen layouts, notifications, updates, and common errors.",
    href: "#android-testing-guide",
  },
  {
    category: "Islamic Technology",
    readTime: "6 min read",
    title: "How a Qibla Finder Works on a Smartphone",
    description:
      "Understand how geographical calculations and phone compass sensors work together to indicate the Qibla direction.",
    href: "#qibla-guide",
  },
  {
    category: "Prayer Guide",
    readTime: "7 min read",
    title: "Understanding Daily Prayer Times: A Practical Guide",
    description:
      "Learn about the five daily prayers, why their times change, how location affects timings, and how to check them responsibly.",
    href: "#daily-prayer-times-guide",
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
              Explore helpful explanations of prayer times, Qibla direction,
              app testing, and the technology behind useful Islamic digital
              tools.
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
              These guides cover practical concepts, common questions, and
              useful checks for people who use or develop digital tools.
              Prayer-time information can vary according to location and
              calculation convention, so always check the settings relevant
              to your community.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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

      {/* GUIDE 1: PRAYER-TIME APP DEVELOPMENT */}
      <section
        id="prayer-time-guide"
        className="scroll-mt-24 border-t border-emerald-400/10"
      >
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
            Prayer Technology
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-emerald-50 sm:text-4xl">
            Building a Reliable Prayer-Time App: What Developers Should Consider
          </h2>

          <p className="mt-5 text-sm text-[#788b84]">
            A technical introduction to the calculations, device features,
            and testing decisions behind prayer-time applications.
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
              Location permissions should be handled carefully. Explain why
              location is needed, request permission only when necessary, and
              provide a manual location option if the application supports
              one. Never assume that a device's location is always available
              or accurate.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              2. Time zones and date changes
            </h3>

            <p>
              A calculation can appear incorrect if an application mixes UTC,
              local time, and a device's time zone. Developers should test
              time-zone changes, travel between locations, and dates that
              cross midnight. The displayed date and calculation date should
              remain consistent with the application's documented behavior.
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

      {/* GUIDE 2: ANDROID APP TESTING */}
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

      {/* GUIDE 3: QIBLA FINDER */}
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
              influence the reading. True north and magnetic north are not
              identical, so implementations must account for their chosen
              reference system correctly.
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

      {/* GUIDE 4: UNDERSTANDING DAILY PRAYER TIMES */}
      <section
        id="daily-prayer-times-guide"
        className="scroll-mt-24 border-t border-emerald-400/10 bg-[#061d16]"
      >
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
            Prayer Guide
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-emerald-50 sm:text-4xl">
            Understanding Daily Prayer Times: A Practical Guide
          </h2>

          <p className="mt-5 text-sm text-[#788b84]">
            Learn what the five daily prayer times represent, why their clock
            times change, and how to check a timetable carefully.
          </p>

          <div className="mt-8 space-y-5 text-base leading-8 text-[#a7b8b1]">
            <p>
              The five obligatory daily prayers are Fajr, Dhuhr, Asr, Maghrib,
              and Isha. Their times are connected to the position of the Sun
              and the progression of the day. Because sunrise and sunset change
              throughout the year and differ from place to place, prayer times
              do not remain fixed at the same clock time every day.
            </p>

            <p>
              A prayer timetable or app can help people plan their day and
              receive reminders. To use one properly, it helps to understand
              what each time represents and why the location and settings
              selected in the app matter.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              1. Fajr: The dawn prayer
            </h3>

            <p>
              Fajr begins at true dawn, when the morning light appears along
              the horizon, and ends at sunrise. The beginning of Fajr is
              commonly calculated using the Sun's position below the horizon.
              Different calculation conventions use different angles, so
              published timetables may not always show identical times.
            </p>

            <p>
              When comparing two prayer timetables, check whether they use
              the same calculation convention and location before assuming
              one is incorrect.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              2. Dhuhr: The midday prayer
            </h3>

            <p>
              Dhuhr begins after the Sun passes its highest point in the sky
              for the day. This event is called solar noon. Solar noon is not
              always exactly 12:00 on a clock because clock time depends on
              the time zone, the date, and the location.
            </p>

            <p>
              A prayer timetable accounts for the local date and geographical
              position when determining the displayed time.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              3. Asr: The afternoon prayer
            </h3>

            <p>
              Asr is an afternoon prayer whose beginning is determined using
              the length of an object's shadow in relation to its height,
              according to the relevant calculation convention. Different
              jurisprudential methods are commonly used for this calculation,
              which is one reason two otherwise reliable timetables may show
              different Asr times.
            </p>

            <p>
              If the Asr times in two apps differ, review the selected Asr
              calculation setting and consult a trusted local religious
              authority if you are unsure which convention to follow.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              4. Maghrib: The sunset prayer
            </h3>

            <p>
              Maghrib begins after sunset. The time therefore changes with
              the date and location. Local terrain and the accuracy of the
              location information can also matter when observing sunset
              directly, while a calculated timetable estimates the event
              using astronomical data.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              5. Isha: The night prayer
            </h3>

            <p>
              Isha begins after the disappearance of evening twilight. The
              calculation convention selected by a timetable can affect how
              this time is determined. In some places and seasons, twilight
              conditions make the calculation more complex, and local
              religious guidance may be important.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              Why prayer times change every day
            </h3>

            <p>
              Earth's rotation produces the daily movement of the Sun across
              the sky, while Earth's tilted axis and orbit cause daylight
              patterns to change over the year. As a result, sunrise, sunset,
              and the other solar reference points shift over time. The
              amount of change depends on the location and season.
            </p>

            <p>
              A prayer app needs an accurate location, the correct local date
              and time zone, and an appropriate calculation convention. If
              any of these settings are wrong, the displayed times may differ
              from a local timetable.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              How to check your prayer timetable
            </h3>

            <ol className="list-decimal space-y-3 pl-6">
              <li>
                <strong className="text-emerald-50">Check your location.</strong>{" "}
                Make sure the app is using your current city or the correct
                manually selected location.
              </li>
              <li>
                <strong className="text-emerald-50">Check the date and time zone.</strong>{" "}
                Travel, device settings, and date changes can affect the
                displayed timetable.
              </li>
              <li>
                <strong className="text-emerald-50">Review calculation settings.</strong>{" "}
                Fajr, Isha, and Asr can vary according to the convention
                selected.
              </li>
              <li>
                <strong className="text-emerald-50">Compare like with like.</strong>{" "}
                Compare your app with a trusted local timetable using the
                same location and relevant calculation settings.
              </li>
              <li>
                <strong className="text-emerald-50">Check after changing location.</strong>{" "}
                If you travel, make sure the app updates the location and
                timetable as intended.
              </li>
            </ol>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              Using a prayer-time app responsibly
            </h3>

            <p>
              Prayer-time applications are useful for viewing daily schedules
              and setting reminders, but their accuracy depends on their data,
              calculation method, and device settings. Notifications can also
              be affected by battery restrictions and operating-system
              permissions. Check the timetable directly if a reminder appears
              unexpectedly or seems inconsistent.
            </p>

            <p>
              My Own Prayer provides prayer-related tools designed to help
              users view daily timings and manage reminders. You can explore
              its documented features, supported languages, installation
              information, and version history on its app page.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              Final thoughts
            </h3>

            <p>
              Understanding what the five daily prayer times represent makes
              it easier to interpret a timetable and identify settings that
              may need attention. Location, date, time zone, and calculation
              convention are all important when comparing displayed times.
            </p>

            <p className="text-sm text-[#788b84]">
              This article provides general educational information and is
              not a religious ruling. For decisions about the correct prayer
              times or calculation convention for your community, follow
              guidance from a trusted local religious authority.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-emerald-400/15 bg-[#0a231b] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-400">
              Related app
            </p>

            <h3 className="mt-3 text-xl font-semibold text-emerald-50">
              My Own Prayer
            </h3>

            <p className="mt-3 leading-7 text-[#899b94]">
              Explore prayer times, prayer notifications, Qibla Finder, the
              Hijri Calendar, Tasbeeh Counter, and other documented features.
            </p>

            <Link
              href="/apps/my-own-prayer"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#34d399] px-6 text-sm font-semibold text-[#051913] transition hover:bg-[#6ee7b7]"
            >
              Explore My Own Prayer
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
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
