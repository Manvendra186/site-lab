import { Container, Img } from "@site-lab/shared";
import { ROUTE } from "@/data/route";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Ascent } from "@/components/motion/ascent";
import { Waypoint } from "@/components/ui/waypoint";
import { ReserveBar } from "@/components/navigation/reserve-bar";

export const metadata = pageMeta({
  title: "A Route",
  description: ROUTE.intro,
  path: "https://safar.example/route",
});

export default function RoutePage() {
  return (
    <>
      <PageHero
        label={ROUTE.label}
        title={ROUTE.title}
        intro={ROUTE.intro}
        waypoint={ROUTE.waypoint}
        image={ROUTE.moments[0].image}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col gap-16">
            {ROUTE.moments.map((moment, i) => (
              <Ascent key={moment.time} delay={i * 60}>
                <div
                  className={`grid gap-10 md:grid-cols-2 md:items-center ${
                    i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-stone">
                    <Img
                      src={moment.image.url}
                      alt={moment.image.alt}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="h-full w-full"
                      imgClassName="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <Waypoint code={moment.time} label={moment.title} className="mb-4" />
                    <p className="text-base leading-relaxed text-slate/80">{moment.body}</p>
                  </div>
                </div>
              </Ascent>
            ))}
          </div>
        </Container>
      </section>

      <ReserveBar />
    </>
  );
}