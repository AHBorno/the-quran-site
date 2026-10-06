import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LearnQuran",
  description:
    "LearnQuran is a free Windows voice-based Bengali Quran recitation and correction tool designed to support Quran learning and recitation practice.",
  keywords: [
    "LearnQuran",
    "Quran learning software",
    "Quran recitation software",
    "Bengali Quran software",
    "Quran correction software",
    "voice based Quran software",
    "Windows Quran software",
  ],
  openGraph: {
    type: "website",
    title: "LearnQuran | The Quran Site",
    description:
      "A free Windows voice-based Bengali Quran recitation and correction tool for Quran learning and practice.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LearnQuran | The Quran Site",
    description:
      "A free Windows voice-based Bengali Quran recitation and correction tool for Quran learning and practice.",
  },
};

export default function LearnQuranPage() {
  return (
    <main>
      <section className="border-b border-emerald-400/10">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8 lg:pb-24 lg:pt-20">
          <Link
            href="/software"
            className="inline-flex items-center text-sm text-[#788b84] transition hover:text-emerald-300"
          >
            ← All software
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-emerald-400/15 bg-[#0a231b] px-3 py-1.5 text-xs font-medium text-emerald-300">
                Windows · 1.0 Beta
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-emerald-50 sm:text-5xl lg:text-6xl">
                LearnQuran
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#a7b8b1]">
                A voice-based Bengali Quran recitation and correction tool
                designed to support Quran learning and practice.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#788b84]">
                LearnQuran is a free Windows application developed as an
                independent software project. It uses voice-based interaction
                to help users practice Quran recitation and receive correction
                feedback.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://drive.google.com/file/d/1CUHy3BQfWwVHDeP5nSCM-xWs51lYupLn/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#34d399] px-6 text-sm font-semibold text-[#051913] transition hover:bg-[#6ee7b7]"
                >
                  Download for Windows
                </a>

                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 bg-[#0a231b] px-6 text-sm font-semibold text-emerald-100 transition hover:border-emerald-400/35 hover:bg-[#0f2e23]"
                >
                  Contact Support
                </Link>
              </div>

              <p className="mt-5 max-w-xl text-xs leading-6 text-[#5f736b]">
                LearnQuran is currently in beta testing. Its behavior and
                correction results may vary depending on the system and
                recording environment.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-emerald-400/15 bg-[#0a231b] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <Image
                  src="/images/learnquran/learnquran.png"
                  alt="LearnQuran Windows application"
                  width={1600}
                  height={1000}
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
              About the software
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
              Practice Quran recitation with voice interaction.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#788b84]">
              LearnQuran was created as an experimental learning tool for
              people who want to practice Quran recitation using their voice
              on a Windows computer.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#067756] text-lg font-semibold text-emerald-50">
                🎙
              </div>

              <h3 className="mt-6 text-xl font-semibold text-emerald-50">
                Voice-based interaction
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#788b84]">
                Use your voice as part of the Quran recitation practice
                experience.
              </p>
            </article>

            <article className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#067756] text-lg font-semibold text-emerald-50">
                বাংলা
              </div>

              <h3 className="mt-6 text-xl font-semibold text-emerald-50">
                Bengali-focused learning
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#788b84]">
                Designed around a Bengali-language learning and recitation
                experience.
              </p>
            </article>

            <article className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#067756] text-lg font-semibold text-emerald-50">
                ✓
              </div>

              <h3 className="mt-6 text-xl font-semibold text-emerald-50">
                Recitation correction
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#788b84]">
                The software is intended to provide correction-oriented
                feedback during Quran recitation practice.
              </p>
            </article>
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
                Run LearnQuran on Windows.
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-8 text-[#788b84]">
              <div>
                <h3 className="font-semibold text-emerald-100">
                  1. Download the software
                </h3>

                <p className="mt-2">
                  Download the current portable ZIP package using the official
                  Google Drive link on this page.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-emerald-100">
                  2. Extract the ZIP file
                </h3>

                <p className="mt-2">
                  Extract the downloaded archive to a location on your Windows
                  computer. A ZIP extraction utility may be required.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-emerald-100">
                  3. Prepare your microphone
                </h3>

                <p className="mt-2">
                  Because LearnQuran uses voice-based interaction, make sure a
                  working microphone is available and that Windows allows the
                  application to access it.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-emerald-100">
                  4. Run the application
                </h3>

                <p className="mt-2">
                  Open the extracted application files and launch LearnQuran.
                  Follow any Windows security prompts carefully.
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
                Windows compatibility.
              </h2>
            </div>

            <div className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7">
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#5f736b]">
                    Windows 7
                  </p>

                  <p className="mt-2 text-sm font-medium text-emerald-100">
                    Not tested
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#5f736b]">
                    Windows 10
                  </p>

                  <p className="mt-2 text-sm font-medium text-emerald-100">
                    Tested
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#5f736b]">
                    Windows 11
                  </p>

                  <p className="mt-2 text-sm font-medium text-emerald-100">
                    Tested
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-[#788b84]">
                Actual behavior can vary depending on the Windows environment,
                microphone, audio configuration, installed components, and
                system hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-emerald-400/10 bg-[#071d16]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Development status
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50">
              Beta software under testing.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#788b84]">
              LearnQuran is an independent beta project. The software is still
              being developed and tested, so users may encounter bugs,
              incomplete functionality, or differences in voice recognition
              and correction results.
            </p>

            <div className="mt-8 rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7">
              <h3 className="text-lg font-semibold text-emerald-50">
                Current release
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#788b84]">
                1.0 Beta
              </p>
            </div>
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
                  Need help with LearnQuran?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#788b84]">
                  For support, bug reports, suggestions, or feedback, contact
                  the developer through the website.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#34d399] px-6 text-sm font-semibold text-[#051913] transition hover:bg-[#6ee7b7]"
              >
                Contact
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-[#5f736b]">
            LearnQuran is an independent project by Ashiqul Haque Borno.
          </p>
        </div>
      </section>
    </main>
  );
}