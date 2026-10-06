import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "My Own Quran",
  description:
    "My Own Quran is a free Windows Quran translation software with verse-by-verse and word-by-word translation features.",
  keywords: [
    "My Own Quran",
    "Quran translation software",
    "Quran software",
    "word by word Quran translation",
    "verse by verse Quran translation",
    "Windows Quran software",
    "free Quran software",
  ],
  openGraph: {
    type: "website",
    title: "My Own Quran | The Quran Site",
    description:
      "A free Windows Quran translation application with verse-by-verse and word-by-word translation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Own Quran | The Quran Site",
    description:
      "A free Windows Quran translation application with verse-by-verse and word-by-word translation.",
  },
};

export default function MyOwnQuranPage() {
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
                Windows · Beta 1.6
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-emerald-50 sm:text-5xl lg:text-6xl">
                My Own Quran
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#a7b8b1]">
                A Quran translation application with verse-by-verse and
                word-by-word translation.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#788b84]">
                My Own Quran is a free Windows application created as an
                independent software project. The current release is in beta
                testing and is intended to make Quran translation easier to
                explore and understand.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://drive.google.com/file/d/1knLePi6ro_fHSDQVSeoM3_KFyBHGaSWT/view?usp=sharing"
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
                My Own Quran is currently in beta testing. Features,
                compatibility, and behavior may change in future releases.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-emerald-400/15 bg-[#0a231b] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <Image
                  src="/images/my-own-quran/my-own-quran.png"
                  alt="My Own Quran Windows application"
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
              Features
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-50 sm:text-4xl">
              Explore Quran translations in detail.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#788b84]">
              My Own Quran focuses on presenting Quran translation information
              in a way that allows users to examine both individual verses and
              individual words.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#067756] text-lg font-semibold text-emerald-50">
                آ
              </div>

              <h3 className="mt-6 text-xl font-semibold text-emerald-50">
                Verse-by-verse translation
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#788b84]">
                Explore Quran translation on a verse-by-verse basis to make
                reading and studying the text more structured.
              </p>
            </article>

            <article className="rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#067756] text-lg font-semibold text-emerald-50">
                1:1
              </div>

              <h3 className="mt-6 text-xl font-semibold text-emerald-50">
                Word-by-word translation
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#788b84]">
                Examine translation information at the individual-word level
                for more detailed study and learning.
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
                Run the portable Windows software.
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
                  3. Run the application
                </h3>

                <p className="mt-2">
                  Open the extracted application files and launch My Own
                  Quran.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-emerald-100">
                  4. Windows security warnings
                </h3>

                <p className="mt-2">
                  Windows may display security or reputation warnings for
                  software downloaded from the internet. Review the information
                  shown by Windows before choosing whether to run the
                  application.
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
                Compatibility can vary depending on the Windows environment,
                installed components, system configuration, and hardware.
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
              My Own Quran is an independent beta project. The software is
              still being developed and tested, so users may encounter bugs,
              incomplete functionality, or changes between releases.
            </p>

            <div className="mt-8 rounded-2xl border border-emerald-400/10 bg-[#0a231b] p-7">
              <h3 className="text-lg font-semibold text-emerald-50">
                Current release
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#788b84]">
                Beta 1.6
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
                  Need help with My Own Quran?
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
            My Own Quran is an independent project by Ashiqul Haque Borno.
          </p>
        </div>
      </section>
    </main>
  );
}