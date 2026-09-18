import type { Metadata } from "next";
import { Container, Img, Reveal } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { Hairline } from "@/components/motion/hairline";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { DINING } from "@/data/dining";
import { RESERVE_HREF } from "@/data/site.config";

export const metadata: Metadata = pageMeta({
  title: "Dining",
  description:
    "One restaurant, one seating, no menu on your phone. Breakfast is included with every stay; dinner is served once, at 7:30.",
  path: "https://sthira.example/dining",
});

export default function DiningPage() {
  const img = image("dining-table");
  return (
    <>
      <PageHero label={DINING.name} title="One seating" intro={DINING.intro} />
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <Img
                src={img.url}
                alt={img.alt}
                ratio={4 / 5}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal delay={120}>
              <Label>Hours</Label>
              <div className="mt-6 grid gap-5">
                {DINING.hours.map((h) => (
                  <div key={h.label} className="border-t border-stone pt-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-bronze-deep">
                      {h.label}
                    </p>
                    <p className="mt-1 text-base">{h.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-4 text-sm leading-6 text-ink/70">
                {DINING.notes.map((n) => (
                  <p key={n}>{n}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      <section className="border-t border-stone bg-mist">
        <Container className="py-16 md:py-20">
          <Label>A typical evening</Label>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-x-16">
            {DINING.menu.map((course) => (
              <div key={course.course}>
                <h2 className="font-display text-2xl font-light">{course.course}</h2>
                <ul className="mt-4 space-y-3">
                  {course.items.map((item) => (
                    <li key={item} className="border-t border-stone pt-3 text-base text-ink/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
