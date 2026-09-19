import type { Metadata } from "next";
import { Container, Img, Reveal, jsonLd } from "@site-lab/shared";
import { Hero } from "@/components/motion/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { Specimen } from "@/components/ui/specimen";
import { pageMeta, lodgingSchema } from "@/lib/seo";
import { image, IMAGES } from "@/data/images";
import { HOME } from "@/data/content";
import { ROOMS } from "@/data/rooms";
import { RESERVE_HREF } from "@/data/site.config";

export const metadata: Metadata = pageMeta({
  title: "Understory — a forest lodge in the Coorg understory",
  description:
    "A five-room forest lodge in the Coorg understory, Karnataka. Breakfast and one forest walk are included with every stay.",
  path: "https://understory.example/",
  ogImage: IMAGES.hero.url,
});

export default function Home() {
  const forest = image("canopy");
  const preview = [ROOMS[0], ROOMS[4]];
  const fullBleed = image("waterfall");

  return (
    <>
      {jsonLd(lodgingSchema())}
      <Hero />

      {/* The forest — split text / image */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <Label>{HOME.forestLabel}</Label>
              <h2 className="mt-4 font-display text-4xl font-light tracking-tight md:text-5xl">
                {HOME.forestTitle}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-7 text-ink/75">
                {HOME.forestBody.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <Cta href="/the-forest">Enter the forest</Cta>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Img
                src={forest.url}
                alt={forest.alt}
                ratio={4 / 5}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Facts — a quiet row, not cards */}
      <section className="border-y border-stone bg-mist">
        <Container className="py-14 md:py-16">
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-stone">
            {HOME.facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 90} className="px-2 text-center md:px-8">
                <p className="font-display text-4xl font-light md:text-5xl">{f.value}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-fern-deep">
                  {f.label}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Rooms — alternating rows */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading label="Rooms" title="Five rooms, no more" />
          <div className="mt-14 grid gap-16 md:gap-20">
            {preview.map((room, i) => {
              const img = image(room.image);
              return (
                <Reveal key={room.slug} delay={i * 120}>
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
                      <Specimen number={room.specimen.replace("Specimen ", "")} label={room.family} />
                      <h3 className="mt-5 font-display text-3xl font-light">{room.name}</h3>
                      <p className="mt-4 max-w-md text-base leading-7 text-ink/75">
                        {room.description}
                      </p>
                      <p className="mt-4 text-sm tracking-wide text-fern-deep">{room.rate}</p>
                      <div className="mt-6">
                        <Cta href={`/stays/${room.slug}`}>View the room</Cta>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-14">
            <Cta href="/stays" variant="ghost">
              All five rooms
            </Cta>
          </div>
        </Container>
      </section>

      {/* Manifesto — a single dark, cinematic statement */}
      <section className="bg-ink text-paper">
        <Container className="py-24 md:py-36">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div aria-hidden="true" className="mx-auto mb-10 h-px w-12 border-b border-dotted border-sage" />
            <p className="font-display text-3xl font-light leading-snug tracking-tight md:text-5xl">
              {HOME.manifesto}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* The forest, full-bleed */}
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
            <Label>The forest</Label>
            <h2 className="mt-4 font-display text-3xl font-light md:text-4xl">
              The understory, at first light
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/75">
              The middle layer of the forest, where the light goes soft and green. That is where
              the lodge lives, and it is the reason the rooms are low and the veranda is always in
              the shade.
            </p>
            <div className="mt-6">
              <Cta href="/the-forest">Enter the forest</Cta>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Visit */}
      <section className="border-t border-stone bg-mist">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <Label>{HOME.visitLabel}</Label>
              <h2 className="mt-4 font-display text-3xl font-light md:text-4xl">
                {HOME.visitTitle}
              </h2>
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

