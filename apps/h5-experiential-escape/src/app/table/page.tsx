import { Container, Img } from "@site-lab/shared";
import { TABLE } from "@/data/table";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Ascent } from "@/components/motion/ascent";
import { ReserveBar } from "@/components/navigation/reserve-bar";

export const metadata = pageMeta({
  title: "The Table",
  description: TABLE.intro,
  path: "https://safar.example/table",
});

export default function TablePage() {
  return (
    <>
      <PageHero
        label={TABLE.label}
        title={TABLE.title}
        intro={TABLE.intro}
        waypoint={TABLE.waypoint}
        image={TABLE.heroImage}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col gap-20">
            {TABLE.sections.map((section, i) => (
              <Ascent key={section.heading} delay={i * 60}>
                <div
                  className={`grid gap-10 md:grid-cols-2 md:items-center ${
                    i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-stone">
                    <Img
                      src={section.image.url}
                      alt={section.image.alt}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="h-full w-full"
                      imgClassName="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl tracking-tight text-slate md:text-3xl">
                      {section.heading}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate/80">
                      {section.body}
                    </p>
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