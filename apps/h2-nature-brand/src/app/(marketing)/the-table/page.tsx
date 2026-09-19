import type { Metadata } from "next";
import { Container, Img, Reveal } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { Specimen } from "@/components/ui/specimen";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { TABLE } from "@/data/content";
import { RESERVE_HREF } from "@/data/site.config";

export const metadata: Metadata = pageMeta({
  title: "The Table — Understory",
  description:
    "One table, one seating, to the people in the house. The menu is short and it changes with the market. The valley gives the coffee and the honey.",
  path: "https://understory.example/the-table",
});

export default function TheTable() {
  const table = image("table");
  const coffee = image("coffee");

  return (
    <>
      <PageHero label={TABLE.label} title={TABLE.title} intro={TABLE.intro} />

      {/* The table — split text / image */}
      <section className="py-4 md:py-8">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <Specimen number="01" label="The table" />
              <div className="mt-5 space-y-5 text-base leading-7 text-ink/75">
                {TABLE.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Img src={table.url} alt={table.alt} ratio={4 / 5} sizes="(min-width: 768px) 50vw, 100vw" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* The coffee — image / text (reversed) */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal className="md:order-2">
              <Specimen number="02" label="The coffee" />
              <h2 className="mt-5 font-display text-3xl font-light md:text-4xl">
                The valley gives the coffee
              </h2>
              <p className="mt-5 text-base leading-7 text-ink/75">
                The coffee is from the valley — the same coffee that grows on the slopes around the
                lodge. It is roasted small, ground when you order it, and made the way it is made in
                Coorg: with milk, a little sugar, and no hurry.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Img src={coffee.url} alt={coffee.alt} ratio={4 / 5} sizes="(min-width: 768px) 50vw, 100vw" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* The menu — a quiet list */}
      <section className="border-t border-stone bg-mist">
        <Container className="py-16 md:py-20">
          <Reveal>
            <Label>The menu</Label>
            <h2 className="mt-4 font-display text-3xl font-light md:text-4xl">
              Short, and it changes with the market
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {TABLE.menu.map((g, i) => (
              <Reveal key={g.course} delay={i * 90}>
                <h3 className="font-display text-xl font-light">{g.course}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{g.items}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <Cta href={RESERVE_HREF}>Reserve a stay</Cta>
          </div>
        </Container>
      </section>
    </>
  );
}

