import { Container, Img } from "@site-lab/shared";
import { HOME } from "@/data/content";
import { STAYS } from "@/data/stays";
import { pageMeta } from "@/lib/seo";
import { Hero } from "@/components/motion/hero";
import { Ascent } from "@/components/motion/ascent";
import { SectionHeading } from "@/components/ui/section-heading";
import { Cta } from "@/components/ui/cta";
import { StayCard } from "@/components/stays/stay-card";
import { ReserveBar } from "@/components/navigation/reserve-bar";
import { RESERVE_HREF } from "@/data/site.config";

export const metadata = pageMeta({
  title: "A five-stay house on the Leh road",
  description: HOME.heroIntro,
  path: "https://safar.example/",
});

export default function HomePage() {
  return (
    <>
      <Hero
        label={HOME.heroLabel}
        title={HOME.heroTitle}
        intro={HOME.heroIntro}
        waypoint={HOME.waypoint}
        image={HOME.heroImage}
      />

      {/* The house */}
      <section className="py-20 md:py-28">
        <Container>
          <Ascent>
            <SectionHeading
              label={HOME.houseLabel}
              title={HOME.houseTitle}
            />
          </Ascent>

          <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-center">
            <Ascent delay={80}>
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-stone">
                <Img
                  src={HOME.houseImage.url}
                  alt={HOME.houseImage.alt}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-full w-full"
                  imgClassName="h-full w-full object-cover object-center"
                />
              </div>
            </Ascent>
            <Ascent delay={160}>
              <div className="flex flex-col gap-5">
                {HOME.houseBody.map((para, i) => (
                  <p key={i} className="text-base leading-relaxed text-slate/80">
                    {para}
                  </p>
                ))}
              </div>
            </Ascent>
          </div>

          {/* Facts */}
          <Ascent delay={120}>
            <dl className="mt-16 grid grid-cols-2 gap-px border border-stone bg-stone md:grid-cols-4">
              {HOME.facts.map((fact) => (
                <div key={fact.label} className="bg-ice p-6">
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-slate/60">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 font-display text-3xl tracking-tight text-slate">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Ascent>
        </Container>
      </section>

      {/* Stays */}
      <section className="border-t border-stone bg-mist py-20 md:py-28">
        <Container>
          <Ascent>
            <SectionHeading
              label="Stays"
              title="Five stays, one road"
              intro="Each stay is named for a stage of the journey — the approach, the pass, the valley, the lake, and the return."
            />
          </Ascent>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STAYS.map((stay, i) => (
              <Ascent key={stay.slug} delay={i * 60}>
                <StayCard stay={stay} />
              </Ascent>
            ))}
          </div>

          <Ascent delay={120}>
            <div className="mt-12">
              <Cta href="/stays">See all stays</Cta>
            </div>
          </Ascent>
        </Container>
      </section>

      {/* Manifesto */}
      <section className="py-20 md:py-28">
        <Container>
          <Ascent>
            <blockquote className="max-w-3xl">
              <p className="font-display text-2xl leading-[1.2] tracking-tight text-slate md:text-4xl">
                {HOME.manifesto}
              </p>
            </blockquote>
          </Ascent>
        </Container>
      </section>

      {/* Visit */}
      <section className="border-t border-stone py-20 md:py-28">
        <Container>
          <Ascent>
            <SectionHeading
              label={HOME.visitLabel}
              title={HOME.visitTitle}
              intro={HOME.visitBody}
            />
          </Ascent>
          <Ascent delay={120}>
            <div className="mt-10">
              <Cta href={RESERVE_HREF}>Reserve a stay</Cta>
            </div>
          </Ascent>
        </Container>
      </section>

      <ReserveBar />
    </>
  );
}