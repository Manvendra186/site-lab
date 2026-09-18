import type { Metadata } from "next";
import { Container, Img, Reveal } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { Hairline } from "@/components/motion/hairline";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { ABOUT } from "@/data/content";
import { RESERVE_HREF } from "@/data/site.config";

export const metadata: Metadata = pageMeta({
  title: "The House",
  description:
    "Sthira is a 14-room private house on the edge of Lake Pichola, built to be stayed in, not looked at.",
  path: "https://sthira.example/about",
});

export default function AboutPage() {
  const img = image("palace");
  return (
    <>
      <PageHero label={ABOUT.label} title={ABOUT.title} intro={ABOUT.body[0]} />
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div className="space-y-5 text-base leading-7 text-ink/75">
                {ABOUT.body.slice(1).map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Img
                src={img.url}
                alt={img.alt}
                ratio={4 / 5}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
          </div>
        </Container>
      </section>
      <section className="border-t border-stone bg-mist">
        <Container className="py-16 md:py-20">
          <Label>What we hold to</Label>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {ABOUT.principles.map((p) => (
              <div key={p.title}>
                <h2 className="font-display text-2xl font-light">{p.title}</h2>
                <p className="mt-3 text-sm leading-6 text-ink/70">{p.body}</p>
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
