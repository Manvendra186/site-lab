import type { Metadata } from "next";
import { Container, Reveal } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Label } from "@/components/ui/label";
import { Specimen } from "@/components/ui/specimen";
import { ReserveForm } from "@/components/forms/reserve-form";
import { pageMeta } from "@/lib/seo";
import { RESERVE } from "@/data/content";
import { site } from "@/data/site.config";

export const metadata: Metadata = pageMeta({
  title: "Reserve — Understory",
  description:
    "Reserve a stay at the lodge. Tell us when you would like to come, and we will do the rest.",
  path: "https://understory.example/reserve",
});

export default function Reserve() {
  return (
    <>
      <PageHero label={RESERVE.label} title={RESERVE.title} intro={RESERVE.intro} />

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_320px] md:gap-16">
            <Reveal>
              <ReserveForm />
            </Reveal>

            <Reveal delay={120}>
              <div className="border border-stone bg-mist p-8">
                <Label>Good to know</Label>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-ink/75">
                  <li className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 border-b border-dotted border-fern" />
                    {RESERVE.details.hours}
                  </li>
                  <li className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 border-b border-dotted border-fern" />
                    {RESERVE.details.address}
                  </li>
                </ul>
                <div className="mt-8 border-t border-dotted border-stone pt-6">
                  <Label>Reach us</Label>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-3 block break-all text-sm text-ink/75 transition-colors hover:text-ink"
                  >
                    {site.email}
                  </a>
                  <a
                    href={`tel:${site.phone?.replace(/\s/g, "")}`}
                    className="mt-2 block text-sm text-ink/75 transition-colors hover:text-ink"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Getting here — a quiet list */}
          <div className="mt-16 grid gap-8 border-t border-stone pt-12 md:grid-cols-4">
            {RESERVE.reach.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <Specimen number={String(i + 1).padStart(2, "0")} label={r.title} />
                <p className="mt-4 text-sm leading-6 text-ink/70">{r.body}</p>
              </Reveal>
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-xs leading-5 text-ink/50">{RESERVE.demoNote}</p>
        </Container>
      </section>
    </>
  );
}

