import type { Metadata } from "next";
import { Container, Img, Reveal, jsonLd } from "@site-lab/shared";
import { Hero } from "@/components/motion/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { Lineage } from "@/components/ui/lineage";
import { Diamond } from "@/components/motion/diamond";
import { pageMeta, lodgingSchema } from "@/lib/seo";
import { image, IMAGES } from "@/data/images";
import { HOME } from "@/data/content";
import { SUITES } from "@/data/suites";
import { RESERVE_HREF } from "@/data/site.config";

export const metadata: Metadata = pageMeta({
  title: "The Alkari — a haveli inside the Jaisalmer fort",
  description:
    "A five-suite haveli inside the Jaisalmer fort, kept by one family for six generations. Breakfast and one heritage hour are included with every stay.",
  path: "https://alkari.example/",
  ogImage: IMAGES.hero.url,
});

export default function Home() {
  const haveli = image("haveli");
  const preview = [SUITES[0], SUITES[1]];
  const fullBleed = image("courtyard");

  return (
    <>
      {jsonLd(lodgingSchema())}
      <Hero />

      {/* The haveli — split text / image */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <Label>{HOME.haveliLabel}</Label>
              <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
                {HOME.haveliTitle}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-7 text-ink/75">
                {HOME.haveliBody.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <Cta href="/the-haveli">Enter the haveli</Cta>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Img
                src={haveli.url}
                alt={haveli.alt}
                ratio={4 / 5}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Facts — a quiet row, not cards */}
      <section className="border-y border-sandstone bg-mist">
        <Container className="py-14 md:py-16">
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-sandstone">
            {HOME.facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 90} className="px-2 text-center md:px-8">
                <p className="font-display text-4xl md:text-5xl">{f.value}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-maroon">
                  {f.label}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Suites — alternating rows */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading label="Suites" title="Five suites, no more" />
          <div className="mt-14 grid gap-16 md:gap-20">
            {preview.map((s, i) => {
              const img = image(s.image);
              return (
                <Reveal key={s.slug} delay={i * 120}>
                  <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                    <div className={`group ${i % 2 === 1 ? "md:order-2" : ""}`}>
                      <Img
                        src={img.url}
                        alt={img.alt}
                        ratio={4 / 3}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        imgClassName="img-settle"
                      />
                    </div>
                    <div>
                      <Lineage number={s.lineage.replace("No. ", "")} label={s.aspect} />
                      <h3 className="mt-5 font-display text-3xl">{s.name}</h3>
                      <p className="mt-4 max-w-md text-base leading-7 text-ink/75">
                        {s.description}
                      </p>
                      <p className="mt-4 text-sm tracking-wide text-maroon">{s.rate}</p>
                      <div className="mt-6">
                        <Cta href={`/suites/${s.slug}`}>View the suite</Cta>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-14">
            <Cta href="/suites" variant="ghost">
              All five suites
            </Cta>
          </div>
        </Container>
      </section>

      {/* Manifesto — a single dark, stately statement */}
      <section className="bg-espresso text-ivory">
        <Container className="py-24 md:py-36">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Diamond className="mx-auto mb-10 max-w-[3rem]" tone="dark" />
            <p className="font-display text-3xl leading-snug tracking-tight md:text-5xl">
              {HOME.manifesto}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* The courtyards, full-bleed */}
      <section>
        <Img
          src={fullBleed.url}
          alt={fullBleed.alt}
          ratio={16 / 9}
          sizes="100vw"
          className="h-[52vh] min-h-[360px] w-full img-bleed"
        />
        <Container className="py-14 md:py-16">
          <Reveal className="max-w-2xl">
            <Label>The courtyards</Label>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Three courts, each with its own light
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/75">
              The open part of the house — the part where the sky comes in, and the peacocks come,
              and the light comes in all day.
            </p>
            <div className="mt-6">
              <Cta href="/courtyards">Enter the courtyards</Cta>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Visit */}
      <section className="border-t border-sandstone bg-mist">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <Label>{HOME.visitLabel}</Label>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">{HOME.visitTitle}</h2>
            </Reveal>
            <Reveal delay={120} className="flex flex-col justify-between gap-8">
              <p className="max-w-md text-base leading-7 text-ink/75">{HOME.visitBody}</p>
              <Cta href={RESERVE_HREF}>Reserve a stay</Cta>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

