import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center">
      <section className="w-full">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-emerald-400/15 bg-[#0a231b] text-2xl font-semibold text-emerald-300 shadow-[0_0_40px_rgba(52,211,153,0.08)]">
            404
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Page not found
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-emerald-50 sm:text-5xl">
            This page doesn&apos;t exist.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#788b84]">
            The page you are looking for may have been moved, removed, or the
            address may be incorrect. You can return to the main site or
            explore the available apps and software.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#34d399] px-6 text-sm font-semibold text-[#051913] transition hover:bg-[#6ee7b7]"
            >
              Back to Home
            </Link>

            <Link
              href="/apps"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 bg-[#0a231b] px-6 text-sm font-semibold text-emerald-100 transition hover:border-emerald-400/35 hover:bg-[#0f2e23]"
            >
              Explore Apps
            </Link>

            <Link
              href="/software"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/20 bg-[#0a231b] px-6 text-sm font-semibold text-emerald-100 transition hover:border-emerald-400/35 hover:bg-[#0f2e23]"
            >
              Explore Software
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}