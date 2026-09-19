import type { Metadata } from "next";
import { Container, Reveal } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { Specimen } from "@/components/ui/specimen";
import { pageMeta } from "@/lib/seo";
import { DAYS } from "@/data/content";
import { RESERVE_HREF } from "@/data/site.config";

export const metadata: Metadata = pageMeta({
  title: "Days — Understory",
  description:
    "A day at the lodge, from the mist at five-thirty to the last light on the veranda. Breakfast and one forest walk are included.",
  path: "https://understory.example/days",
});

export default function Days() {
  return (
    <>
      <PageHero label={DAYS.label} title={DAYS.title} intro={DAYS.intro} />

      {/* The hours — a quiet, numbered sequence */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-10 md:gap-14">
            {DAYS.hours.map((h, i) => (
              <Reveal key={h.time} delay={i * 70}>
                <div className="grid gap-6 md:grid-cols-[120px_1fr] md:gap-10">
                  <Specimen number={h.time} label={h.name} />
                  <p className="max-w-2xl text-base leading-7 text-ink/75">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What is included — a quiet list */}
      <section className="border-t border-stone bg-mist">
        <Container className="py-16 md:py-20">
          <Reveal>
            <Label>What is included</Label>
            <h2 className="mt-4 font-display text-3xl font-light md:text-4xl">
              With every stay
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Breakfast, one seating",
                body: "What the garden and the market offered that morning, made slowly. Coffee from the valley, not a pod.",
              },
              {
                title: "One forest walk",
                body: "A short trail through the understory, with the keeper if you like. Ferns, moss, and the occasional hornbill.",
              },
              {
                title: "The veranda, all day",
                body: "The best seat in the house, at every hour. The forest does the showing; the veranda is where you watch it.",
              },
            ].map((g, i) => (
              <Reveal key={g.title} delay={i * 90}>
                <h3 className="font-display text-xl font-light">{g.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{g.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <Cta href={RESERVE_HREF}>Reserve a stay</Cta>
          </div>
        </Container>
      </section>
    </>
  );
}

