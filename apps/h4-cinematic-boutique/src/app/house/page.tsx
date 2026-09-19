import { Container, Img } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { HOUSE } from "@/data/house";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "The House",
  description: HOUSE.intro,
});

export default function HousePage() {
  return (
    <>
      <PageHero
        label={HOUSE.label}
        title={HOUSE.title}
        intro={HOUSE.intro}
        code={HOUSE.timecode}
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="space-y-20 md:space-y-28">
            {HOUSE.sections.map((s, i) => (
              <div key={s.heading} className="grid gap-10 md:grid-cols-2 md:gap-16">
                <div>
                  <SectionHeading
                    label={String(i + 1).padStart(2, "0")}
                    title={s.heading}
                  />
                  <p className="mt-8 text-silver/80">{s.body}</p>
                </div>
                <Img src={s.image.url} alt={s.image.alt} ratio={4 / 3} className="w-full" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}