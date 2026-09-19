import type { Metadata } from "next";
import { Container, Img, Reveal } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { Lineage } from "@/components/ui/lineage";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { COURTYARDS } from "@/data/content";
import { RESERVE_HREF } from "@/data/site.config";

export const metadata: Metadata = pageMeta({
  title: "The Courtyards — The Alkari",
  description:
    "The haveli has three courtyards, each with its own light and its own quiet. The open part of the house — where the sky comes in, and the peacocks come.",
  path: "https://alkari.example/courtyards",
});

export default function Courtyards() {
  return (
    <>
      <PageHero label="The courtyards" title={COURTYARDS.title} intro={COURTYARDS.intro} />

      {COURTYARDS.sections.map((s, i) => {
        const img = image(s.image);
        return (
          <section
            key={s.heading}
            className={i === COURTYARDS.sections.length - 1 ? "pb-20 md:pb-28" : "py-16 md:py-24"}
          >
            <Container>
              <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                <Reveal className={i % 2 === 1 ? "md:order-2" : ""}>
                  <Lineage number={String(i + 1).padStart(2, "0")} label={s.heading} />
                  <p className="mt-5 text-base leading-7 text-ink/75">{s.body}</p>
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

      <section className="border-t border-sandstone bg-mist">
        <Container className="py-16 md:py-20">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <p className="max-w-md text-base leading-7 text-ink/75">
              The courtyards are open all day. Come and sit in the light.
            </p>
            <Cta href={RESERVE_HREF}>Reserve a stay</Cta>
          </div>
        </Container>
      </section>
    </>
  );
}
