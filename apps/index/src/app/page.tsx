import Link from "next/link";
import { NICHES, SITES, type SiteStatus } from "@/data/sites";

const STATUS_STYLES: Record<SiteStatus, string> = {
  planned: "border-neutral-700 text-neutral-500",
  briefed: "border-sky-800 text-sky-300",
  building: "border-amber-800 text-amber-300",
  qa: "border-violet-800 text-violet-300",
  done: "border-emerald-800 text-emerald-300",
};

export default function Home() {
  const done = SITES.filter((s) => s.status === "done").length;
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-14">
      <header>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">Site Lab</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">30-Site Test</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-400">
          30 local-business websites across 6 niches, built to the Local AI Website Design Bible.
          Every site must be identifiable by niche and direction from a screenshot alone — same
          template, different colors, fails.
        </p>
        <p className="mt-6 font-mono text-xs text-neutral-500">
          {done}/30 done · state in <span className="text-neutral-300">state.md</span>
        </p>
      </header>

      {NICHES.map((niche) => {
        const sites = SITES.filter((s) => s.niche === niche);
        return (
          <section key={niche} className="mt-12" aria-label={niche}>
            <div className="flex items-baseline justify-between border-b border-neutral-800 pb-2">
              <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
                {niche}
              </h2>
              <span className="font-mono text-xs text-neutral-600">{sites.length} sites</span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-px bg-neutral-800 sm:grid-cols-2 lg:grid-cols-3">
              {sites.map((site) => (
                <article key={site.id} className="bg-[#141412] p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-neutral-600">{site.id}</span>
                    <span
                      className={`border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${STATUS_STYLES[site.status]}`}
                    >
                      {site.status}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-medium text-neutral-100">{site.brand}</h3>
                  <p className="mt-1 text-sm text-neutral-400">{site.direction}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-neutral-800 pt-3">
                    <span className="font-mono text-xs text-neutral-600">:{site.port}</span>
                    {site.status === "done" ? (
                      <Link
                        href={`http://localhost:${site.port}`}
                        className="font-mono text-xs text-neutral-300 underline underline-offset-4 hover:text-white"
                      >
                        open →
                      </Link>
                    ) : (
                      <span className="font-mono text-xs text-neutral-700">{site.app}</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <footer className="mt-16 border-t border-neutral-800 pt-6 pb-2 text-xs text-neutral-500">
        Run all built sites: <code className="font-mono text-neutral-300">pnpm dev:all</code> ·
        protocol in <code className="font-mono text-neutral-300">memory/PROTOCOL.md</code>
      </footer>
    </main>
  );
}
