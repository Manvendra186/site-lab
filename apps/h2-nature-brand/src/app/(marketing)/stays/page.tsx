import type { Metadata } from "next";
import { Container, Img, Reveal } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { Specimen } from "@/components/ui/specimen";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { ROOMS } from "@/data/rooms";

export const metadata: Metadata = pageMeta({
  title: "Stays — Understory",
  description:
    "Five rooms, each named for the plant it faces. The Fern, the Moss, the Fig, the Bamboo, and the Canopy.",
  path: "https://understory.example/stays",
});

export default function Stays() {
  return (
    <>
      <PageHero
        label="Stays"
        title="Five rooms, named for the plants"
        intro="Each room faces a different part of the understory, and is named for the plant it looks at. Five rooms, one house, no two alike."
      />

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-16 md:gap-20">
            {ROOMS.map((room, i) => {
              const img = image(room.image);
              return (
                <Reveal key={room.slug} delay={i * 80}>
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
                      <h2 className="mt-5 font-display text-3xl font-light">{room.name}</h2>
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
        </Container>
      </section>
    </>
  );
}
