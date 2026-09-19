import type { Metadata } from "next";
import { Container, Img, Reveal } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { Specimen } from "@/components/ui/specimen";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { FOREST } from "@/data/content";
import { RESERVE_HREF } from "@/data/site.config";

export const metadata: Metadata = pageMeta({
  title: "The Forest — Understory",
  description:
    "The Coorg understory, the middle layer of the forest, where the light goes soft and green. That is where the lodge lives.",
  path: "https://understory.example/the-forest",
});

export default function TheForest() {
  return (
    <>
      <PageHero label={FOREST.label} title={FOREST.title} intro={FOREST.intro} />

      {/* The three layers — alternating text / image */}
      {FOREST.layers.map((layer, i) => {
        const img = image(layer.image);
        return (
          <section key={layer.number} className={i === 0 ? "py-4 md:py-8" : "py-16 md:py-24"}>
            <Container>
              <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                <Reveal className={i % 2 === 1 ? "md:order-2" : undefined}>
                  <Specimen number={layer.number} label={layer.height} />
                  <h2 className="mt-5 font-display text-3xl font-light md:text-4xl">{layer.name}</h2>
                  <p className="mt-5 text-base leading-7 text-ink/75">{layer.body}</p>
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
        );
      })}

      {/* Principles — a quiet list */}
      <section className="border-t border-stone bg-mist">
        <Container className="py-16 md:py-20">
          <Reveal>
            <Label>How we build</Label>
            <h2 className="mt-4 font-display text-3xl font-light md:text-4xl">
              The forest does the showing
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {FOREST.principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <h3 className="font-display text-xl font-light">{p.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{p.body}</p>
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

