import { Container } from "@site-lab/shared";
import { STAYS } from "@/data/stays";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Ascent } from "@/components/motion/ascent";
import { StayCard } from "@/components/stays/stay-card";
import { ReserveBar } from "@/components/navigation/reserve-bar";
import { IMAGES } from "@/data/images";

export const metadata = pageMeta({
  title: "Stays",
  description:
    "Five stays, one road. Each stay is named for a stage of the journey — the approach, the pass, the valley, the lake, and the return.",
  path: "https://safar.example/stays",
});

export default function StaysPage() {
  return (
    <>
      <PageHero
        label="Stays"
        title="Five stays, one road"
        intro="Each stay is named for a stage of the journey — the approach, the pass, the valley, the lake, and the return. Rates include breakfast and one passage."
        waypoint="Stage 00"
        image={IMAGES.house2}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STAYS.map((stay, i) => (
              <Ascent key={stay.slug} delay={i * 60}>
                <StayCard stay={stay} />
              </Ascent>
            ))}
          </div>
        </Container>
      </section>

      <ReserveBar />
    </>
  );
}