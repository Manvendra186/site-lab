import type { Metadata } from "next";
import { Container, Img, Reveal } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { Lineage } from "@/components/ui/lineage";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { SUITES } from "@/data/suites";
import { RESERVE_HREF } from "@/data/site.config";

export const metadata: Metadata = pageMeta({
  title: "Suites — The Alkari",
  description:
    "Five suites, no more. Each is named for the part of the haveli it keeps — the audience hall, the carved window, the courtyard birds, the open court, the carved wall.",
  path: "https://alkari.example/suites",
});

export default function Suites() {
  return (
    <>
      <PageHero
        label="Suites"
        title="Five suites, no more"
        intro="Each suite is named for the part of the haveli it keeps. The bed is low, the linen is heavy, and the light comes in all day."
      />

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-16 md:gap-20">
            {SUITES.map((s, i) => {
              const img = image(s.image);
              return (
                <Reveal key={s.slug} delay={i * 80}>
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
                      <Lineage number={s.lineage.replace("No. ", "")} label={s.aspect} />
                      <h2 className="mt-5 font-display text-3xl">{s.name}</h2>
                      <p className="mt-4 max-w-md text-base leading-7 text-ink/75">
                        {s.description}
                      </p>
                      <p className="mt-4 text-sm tracking-wide text-maroon">{s.rate}</p>
                      <div className="mt-6">
                        <Cta href={`/suites/${s.slug}`}>View the suite</Cta>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-16 border-t border-sandstone pt-12">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <p className="max-w-md text-base leading-7 text-ink/75">
                Rates include breakfast and one heritage hour. Come and stay.
              </p>
              <Cta href={RESERVE_HREF}>Reserve a stay</Cta>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
