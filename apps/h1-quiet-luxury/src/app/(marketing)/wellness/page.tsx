import type { Metadata } from "next";
import { Container, Img, Reveal } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { Hairline } from "@/components/motion/hairline";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { WELLNESS } from "@/data/wellness";
import { RESERVE_HREF } from "@/data/site.config";

export const metadata: Metadata = pageMeta({
  title: "Wellness",
  description:
    "One treatment room, one pool, and a rule that no two treatments are booked at the same hour. One treatment is included with every stay.",
  path: "https://sthira.example/wellness",
});

export default function WellnessPage() {
  const pool = image("pool");
  const room = image("spa-room");
  return (
    <>
      <PageHero label="Wellness" title="A small room, kept quiet" intro={WELLNESS.intro} />
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <Img
                src={pool.url}
                alt={pool.alt}
                ratio={4 / 3}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal delay={120}>
              <Label>The pool</Label>
              <h2 className="mt-3 font-display text-3xl font-light">{WELLNESS.pool.title}</h2>
              <p className="mt-4 text-base leading-7 text-ink/75">{WELLNESS.pool.body}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-bronze-deep">
                {WELLNESS.pool.hours}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
      <section className="border-t border-stone bg-mist">
        <Container className="py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <Reveal>
              <Img
                src={room.url}
                alt={room.alt}
                ratio={4 / 5}
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </Reveal>
            <Reveal delay={120}>
              <Label>Treatments</Label>
              <div className="mt-6 grid gap-6">
                {WELLNESS.treatments.map((t) => (
                  <div key={t.name} className="border-t border-stone pt-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h2 className="font-display text-2xl font-light">{t.name}</h2>
                      <span className="text-sm tracking-wide text-bronze-deep">{t.time}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-ink/70">{t.note}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Hairline className="mt-14" />
          <div className="mt-10">
            <Cta href={RESERVE_HREF}>Reserve a stay</Cta>
          </div>
        </Container>
      </section>
    </>
  );
}
