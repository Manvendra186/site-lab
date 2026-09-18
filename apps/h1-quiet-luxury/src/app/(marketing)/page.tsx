import type { Metadata } from "next";
import { Container, Img, Reveal, jsonLd } from "@site-lab/shared";
import { Hero } from "@/components/motion/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { pageMeta, lodgingSchema } from "@/lib/seo";
import { image, IMAGES } from "@/data/images";
import { HOME } from "@/data/content";
import { ROOMS } from "@/data/rooms";
import { EXPERIENCES } from "@/data/experiences";

export const metadata: Metadata = pageMeta({
  title: "Sthira — a quiet lakeside house in Udaipur",
  description:
    "A 14-room private house on the edge of Lake Pichola, Udaipur. Breakfast and one experience are included with every stay.",
  path: "https://sthira.example/",
  ogImage: IMAGES.hero.url,
});

export default function Home() {
  const house = image("udaipur-wide");
  const preview = [ROOMS[0], ROOMS[5]];
  const exp = EXPERIENCES[0];
  const expImg = image(exp.image);

  return (
    <>
      {jsonLd(lodgingSchema())}
      <Hero />

      {/* The house — split text / image */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <Label>{HOME.houseLabel}</Label>
              <h2 className="mt-4 font-display text-4xl font-light tracking-tight md:text-5xl">
                {HOME.houseTitle}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-7 text-ink/75">
                {HOME.houseBody.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <Cta href="/about">Explore the house</Cta>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Img
                src={house.url}
                alt={house.alt}
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
            {HOME.facts.map((f) => (
              <div key={f.label} className="px-2 text-center md:px-8">
                <p className="font-display text-4xl font-light md:text-5xl">{f.value}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-bronze-deep">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Rooms — alternating rows */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading label="Rooms" title="Fourteen rooms, no more" />
          <div className="mt-14 grid gap-16 md:gap-20">
            {preview.map((room, i) => {
              const img = image(room.image);
              return (
                <Reveal key={room.slug}>
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
                      <Label>{room.view}</Label>
                      <h3 className="mt-3 font-display text-3xl font-light">{room.name}</h3>
                      <p className="mt-4 max-w-md text-base leading-7 text-ink/75">
                        {room.description}
                      </p>
                      <p className="mt-4 text-sm tracking-wide text-bronze-deep">{room.rate}</p>
                      <div className="mt-6">
                        <Cta href={`/rooms/${room.slug}`}>View the room</Cta>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-14">
            <Cta href="/rooms" variant="ghost">
              All six rooms
            </Cta>
          </div>
        </Container>
      </section>

      {/* Manifesto — a single dark, cinematic statement (the day/night rhythm) */}
      <section className="bg-ink text-paper">
        <Container className="py-24 md:py-36">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div aria-hidden="true" className="mx-auto mb-10 h-px w-12 bg-bronze" />
            <p className="font-display text-3xl font-light leading-snug tracking-tight md:text-5xl">
              {HOME.manifesto}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Experiences — full-bleed image, quiet caption */}
      <section>
        <Img
          src={expImg.url}
          alt={expImg.alt}
          ratio={16 / 9}
          sizes="100vw"
          className="h-[52vh] min-h-[360px] w-full"
        />
        <Container className="py-14 md:py-16">
          <div className="max-w-2xl">
            <Label>Experiences</Label>
            <h2 className="mt-4 font-display text-3xl font-light md:text-4xl">{exp.name}</h2>
            <p className="mt-4 text-base leading-7 text-ink/75">{exp.description}</p>
            <div className="mt-6">
              <Cta href="/experiences">The four experiences</Cta>
            </div>
          </div>
        </Container>
      </section>

      {/* Visit */}
      <section className="border-t border-stone bg-mist">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <Label>{HOME.visitLabel}</Label>
              <h2 className="mt-4 font-display text-3xl font-light md:text-4xl">
                {HOME.visitTitle}
              </h2>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <p className="max-w-md text-base leading-7 text-ink/75">{HOME.visitBody}</p>
              <Cta href="/contact">Reserve a stay</Cta>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
