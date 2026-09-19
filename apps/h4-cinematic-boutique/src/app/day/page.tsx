import { Container, Img } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Timecode } from "@/components/ui/timecode";
import { DAY } from "@/data/day";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "A Day",
  description: DAY.intro,
});

export default function DayPage() {
  return (
    <>
      <PageHero
        label={DAY.label}
        title={DAY.title}
        intro={DAY.intro}
        code={DAY.timecode}
      />

      <section className="py-16 md:py-24">
        <Container size="narrow">
          <div className="space-y-12">
            {DAY.moments.map((m) => (
              <div key={m.time} className="grid gap-6 sm:grid-cols-[120px_1fr] sm:gap-8">
                <Timecode code={m.time} />
                <div>
                  <h3 className="font-display text-2xl text-screen">{m.title}</h3>
                  <p className="mt-2 text-silver/80">{m.body}</p>
                  <Img src={m.image.url} alt={m.image.alt} ratio={16 / 9} className="mt-4 w-full" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}