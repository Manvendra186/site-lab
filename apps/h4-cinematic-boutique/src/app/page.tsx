import { Container, Img } from "@site-lab/shared";
import { Fade } from "@/components/motion/fade";
import { Hero } from "@/components/motion/hero";
import { Sprocket } from "@/components/motion/sprocket";
import { RoomCard } from "@/components/rooms/room-card";
import { Cta } from "@/components/ui/cta";
import { SectionHeading } from "@/components/ui/section-heading";
import { IMAGES } from "@/data/images";
import { HOME } from "@/data/content";
import { ROOMS } from "@/data/rooms";
import { RESERVE_HREF, site } from "@/data/site.config";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Nocturne — a boutique house in the old film district of Mumbai",
  description: site.description,
});

export default function HomePage() {
  return (
    <>
      <Hero
        image={IMAGES.hero}
        timecode={HOME.timecode}
        label={HOME.heroLabel}
        title={HOME.heroTitle}
        intro={HOME.heroIntro}
        primaryCta={{ href: RESERVE_HREF, label: "Reserve a stay" }}
        secondaryCta={{ href: "/house", label: "The house" }}
      />

      {/* The house */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <SectionHeading label={HOME.houseLabel} title={HOME.houseTitle} />
              <div className="mt-8 space-y-4 text-silver/80">
                {HOME.houseBody.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <Cta href="/house">The house</Cta>
              </div>
            </div>
            <Img
              src={HOME.houseImage.url}
              alt={HOME.houseImage.alt}
              ratio={4 / 3}
              eager
              className="w-full"
            />
          </div>
        </Container>
      </section>

      {/* Facts */}
      <section className="border-y border-graphite bg-smoke py-12">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {HOME.facts.map((f) => (
              <div key={f.label} className="text-center">
                <div className="font-display text-4xl text-screen md:text-5xl">{f.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-silver-dim">
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Rooms preview */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading label="Rooms" title="Five rooms, kept" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ROOMS.slice(0, 3).map((room, i) => (
              <RoomCard key={room.slug} room={room} index={i} />
            ))}
          </div>
          <div className="mt-10">
            <Cta href="/rooms">All rooms</Cta>
          </div>
        </Container>
      </section>

      {/* Manifesto */}
      <section className="border-t border-graphite bg-smoke py-24 md:py-32">
        <Container size="narrow">
          <Fade>
            <Sprocket className="mb-10" />
            <p className="font-display text-3xl leading-tight text-screen md:text-5xl">
              {HOME.manifesto}
            </p>
          </Fade>
        </Container>
      </section>

      {/* Visit */}
      <section className="py-20 md:py-28">
        <Container size="narrow">
          <SectionHeading label={HOME.visitLabel} title={HOME.visitTitle} />
          <p className="mt-8 text-silver/80">{HOME.visitBody}</p>
          <div className="mt-8">
            <Cta href={RESERVE_HREF}>Reserve a stay</Cta>
          </div>
        </Container>
      </section>
    </>
  );
}