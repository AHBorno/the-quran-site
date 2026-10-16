
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles & Guides",
  description:
    "Practical guides to Android app development, APK releases, prayer-time applications, Qibla direction, software testing, and Islamic technology.",
  keywords: [
    "Islamic technology",
    "Android app development",
    "APK release guide",
    "prayer time app guide",
    "Qibla finder",
    "Android app testing",
    "The Quran Site",
  ],
  openGraph: {
    type: "website",
    title: "Articles & Guides | The Quran Site",
    description:
      "Practical software guides and development resources from The Quran Site.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles & Guides | The Quran Site",
    description:
      "Practical software guides and development resources from The Quran Site.",
  },
};

const articles = [
  {
    category: "Android Development",
    readTime: "8 min read",
    title:
      "Building a Reliable Prayer-Time App: What Developers Should Consider",
    description:
      "Explore the technical decisions behind prayer-time applications, including location, calculation methods, time zones, offline access, and notifications.",
    href: "#prayer-time-guide",
  },
  {
    category: "App Development",
    readTime: "6 min read",
    title: "Testing an Android App Before Sharing It With Users",
    description:
      "A practical checklist for testing installation, permissions, screen layouts, notifications, updates, and common failure cases.",
    href: "#android-testing-guide",
  },
  {
    category: "Islamic Technology",
    readTime: "6 min read",
    title: "How a Qibla Finder Works on a Smartphone",
    description:
      "Understand how geographical calculations and a phone's compass sensors help indicate the direction of the Kaaba.",
    href: "#qibla-guide",
  },
  {
    category: "Android Development",
    readTime: "8 min read",
    title: "Building and Releasing an Android App: A Practical Guide",
    description:
      "Learn how to prepare an Android app for distribution, test an APK, organize releases, communicate privacy information, and manage updates.",
    href: "#android-app-release-guide",
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
              Articles &amp; Guides
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-emerald-50 sm:text-5xl lg:text-6xl">
              Practical guides to software and Islamic technology.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#a7b8b1] sm:text-lg">
              Explore technical explanations, app-testing checklists, release
              guides, and development resources covering the challenges involved
              in building useful digital tools.
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
              version, location, and the tools used by a developer.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {articles.map((article) => (
              <article
                key={article.href}
                className="flex flex-col rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25"
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
            Building a Reliable Prayer-Time App: What Developers Should
            Consider
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
              A calculation can appear incorrect if the application mixes UTC,
              local time, and a device's time zone. Developers should test
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
              <li>
                Compare calculated times with a trusted reference for the same
                location and calculation method.
              </li>
              <li>Test multiple cities, time zones, and calendar dates.</li>
              <li>
                Verify that permission denial does not crash the application.
              </li>
              <li>
                Test offline startup, reconnection, and recovery from failed
                requests.
              </li>
              <li>
                Check notification settings and scheduled alerts on different
                devices.
              </li>
              <li>
                Test small screens, different display sizes, and supported
                languages.
              </li>
              <li>
                Verify upgrades from previous versions and document known
                limitations.
              </li>
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
              <li>
                Confirm the package name, version number, and release notes.
              </li>
              <li>Install the release build on a clean test device.</li>
              <li>Test the main features and common error scenarios.</li>
              <li>
                Check readability, navigation, and layout on small screens.
              </li>
              <li>Verify external links and support contact details.</li>
              <li>
                Provide clear installation instructions and disclose known
                issues.
              </li>
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
              influence the reading. True north and magnetic north are not
              identical, so implementations must account for their chosen
              reference system correctly.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              How to get a more dependable reading
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Enable location or enter the correct location if the app
                supports manual selection.
              </li>
              <li>
                Move away from strong magnetic sources and large metal objects.
              </li>
              <li>Follow the device or app's calibration instructions.</li>
              <li>
                Hold the phone steadily and check that its heading responds
                sensibly as you turn.
              </li>
              <li>
                Compare the indicated direction with a reliable reference if
                the result seems unusual.
              </li>
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

      <section
        id="android-app-release-guide"
        className="scroll-mt-24 border-t border-emerald-400/10 bg-[#061d16]"
      >
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
            Android Development
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-emerald-50 sm:text-4xl">
            Building and Releasing an Android App: A Practical Guide
          </h2>

          <p className="mt-5 text-sm text-[#788b84]">
            A practical overview of preparing an Android application for
            distribution, documenting its features, and maintaining releases.
          </p>

          <div className="mt-8 space-y-5 text-base leading-8 text-[#a7b8b1]">
            <p>
              Building an Android application is only one part of making
              software available to users. A useful release also needs a
              suitable installation package, clear instructions, understandable
              privacy information, and a way for users to report problems.
              These details help people make informed decisions before
              installing an application.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              1. Decide what the release should contain
            </h3>

            <p>
              Before preparing a release, list the features that are actually
              available and identify any known limitations. Check the app name,
              version number, package identity, supported Android versions,
              and installation requirements. The release description should
              match the application users will receive, rather than promising
              features that are still planned.
            </p>

            <p>
              It is also helpful to keep a record of changes between versions.
              A concise changelog can explain newly added features, resolved
              issues, and important behavior changes. This gives returning
              users a clearer understanding of what has changed.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              2. Understand the APK file
            </h3>

            <p>
              An Android Package Kit, commonly called an APK, is an Android
              application installation package. It can be distributed through
              a supported app store or shared through another distribution
              channel. The appropriate approach depends on the application's
              release requirements and intended audience.
            </p>

            <p>
              Before sharing an APK, verify that the file is complete and
              comes from the intended release. Use a clear filename and
              provide the version number, supported Android requirements,
              release notes, and installation instructions alongside it.
              Do not rename an unrelated file and present it as a verified
              application package.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              3. Test the installation process
            </h3>

            <p>
              Test the actual release package rather than checking only the
              development preview. Where possible, install it on a clean test
              device and verify that the application opens, its main features
              work, and its permissions are requested appropriately.
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Check that the package installs without unexpected errors.</li>
              <li>Open the app and test its main user journeys.</li>
              <li>Check layout, text readability, and navigation.</li>
              <li>
                Test features that rely on location, sensors, or notifications.
              </li>
              <li>
                Test behavior with and without an internet connection where
                relevant.
              </li>
              <li>
                Check updates from a previous version if upgrading is supported.
              </li>
            </ul>

            <p>
              Results should be recorded accurately. Testing one device or
              Android version does not establish compatibility with every
              device. Clearly state known requirements and limitations instead
              of making universal compatibility claims.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              4. Choose a distribution method
            </h3>

            <p>
              An application can be distributed through an app marketplace or
              through a direct download page. Each method has different
              requirements. App marketplaces generally have their own developer
              registration, review, signing, and policy processes. Direct
              distribution requires the publisher to provide a trustworthy
              download source and clear installation guidance.
            </p>

            <p>
              For example, a project may publish its release files and changelog
              on a version-control hosting service such as GitHub. A release
              page can keep the version information and associated files
              together. Users should be able to distinguish official release
              files from source code, experimental builds, and unrelated
              attachments.
            </p>

            <p>
              When providing a download link, identify the file clearly and
              direct users to the intended release. Explain that Android may
              display a warning when an app is installed from outside a
              recognized app store. Users should only proceed when they trust
              the source and understand what they are installing.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              5. Explain privacy and permissions
            </h3>

            <p>
              Users should be able to understand what an app does with device
              permissions and information. Document the permissions the app
              actually uses, why they are needed, and whether any information
              is transmitted to an external service. If the app does not collect
              personal data, make sure that statement accurately reflects the
              app's behavior and any third-party services it includes.
            </p>

            <p>
              A privacy policy should describe the real implementation rather
              than simply claiming that no data is collected. Review the app's
              behavior, libraries, analytics, advertising components, and
              network requests before making such a statement. Keep the policy
              accessible and update it when relevant behavior changes.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              6. Maintain versions and updates
            </h3>

            <p>
              Releasing an application is an ongoing process. Maintain a
              version history that records meaningful changes, known issues,
              and fixes. Use consistent version numbers and make it clear which
              release is current. Keep copies of release files and relevant
              project records so that a previous version can be identified
              when investigating a reported problem.
            </p>

            <p>
              Before publishing an update, test the new package and review
              changes to permissions, settings, and existing user data.
              Installation and upgrade behavior may differ, so do not assume
              that a successful fresh installation proves every update path
              works correctly.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              7. Make support straightforward
            </h3>

            <p>
              Give users a clear way to report bugs or ask questions. Useful
              reports often include the app version, Android version, device
              model, the steps that caused the problem, and what the user
              expected to happen. Remind users not to include passwords,
              private documents, or other sensitive information in a bug
              report.
            </p>

            <p>
              A helpful support page can also explain common installation
              problems, known limitations, and how to find the current release.
              Clear documentation can reduce confusion and help users determine
              whether an issue is related to the application, device settings,
              or installation method.
            </p>

            <h3 className="pt-3 text-xl font-semibold text-emerald-50">
              Final release checklist
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>Confirm the app name, version, and release description.</li>
              <li>Test the actual installation package.</li>
              <li>Verify the official download link and file.</li>
              <li>Document supported devices and known limitations.</li>
              <li>Review permissions and ensure privacy statements are accurate.</li>
              <li>Publish a useful changelog and installation instructions.</li>
              <li>Provide a contact method for bug reports and support.</li>
            </ul>

            <p>
              A well-prepared release is more than a downloadable file. It
              combines a usable application with accurate documentation,
              sensible testing, transparent privacy information, and a
              maintainable update process. These practices help users
              understand what they are installing and help developers manage
              future improvements.
            </p>

            <p className="text-sm text-[#788b84]">
              This guide provides general technical information. Exact
              distribution requirements, Android behavior, and marketplace
              policies may change, so consult the relevant official
              documentation before publishing a release.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-emerald-400/15 bg-[#0a231b] p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-emerald-50">
              See a real project
            </h3>

            <p className="mt-3 leading-7 text-[#899b94]">
              Explore My Own Prayer to see its documented features,
              installation instructions, compatibility information, and
              version history.
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
