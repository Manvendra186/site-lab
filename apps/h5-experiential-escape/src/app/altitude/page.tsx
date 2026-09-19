import { Container, Img } from "@site-lab/shared";
import { ALTITUDE } from "@/data/altitude";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Ascent } from "@/components/motion/ascent";
import { ReserveBar } from "@/components/navigation/reserve-bar";

export const metadata = pageMeta({
  title: "The Altitude",
  description: ALTITUDE.intro,
  path: "https://safar.example/altitude",
});

export default function AltitudePage() {
  return (
    <>
      <PageHero
        label={ALTITUDE.label}
        title={ALTITUDE.title}
        intro={ALTITUDE.intro}
        waypoint={ALTITUDE.waypoint}
        image={ALTITUDE.images[0].image}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ALTITUDE.images.map((item, i) => (
              <Ascent key={item.image.url} delay={i * 60}>
                <figure className="border border-stone bg-ice">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Img
                      src={item.image.url}
                      alt={item.image.alt}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full"
                      imgClassName="h-full w-full object-cover object-center"
                    />
                  </div>
                  <figcaption className="p-4 text-sm leading-relaxed text-slate/70">
                    {item.caption}
                  </figcaption>
                </figure>
              </Ascent>
            ))}
          </div>
        </Container>
      </section>

      <ReserveBar />
    </>
  );
}