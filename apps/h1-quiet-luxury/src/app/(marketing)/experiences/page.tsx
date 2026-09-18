import type { Metadata } from "next";
import { Container, Img, Reveal } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { Hairline } from "@/components/motion/hairline";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { EXPERIENCES } from "@/data/experiences";
import { RESERVE_HREF } from "@/data/site.config";

export const metadata: Metadata = pageMeta({
  title: "Experiences",
  description:
    "Four quiet experiences at Sthira — a morning on the lake, afternoon tea, the garden walk, and one treatment. One is included with every stay.",
  path: "https://sthira.example/experiences",
});

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        label="Experiences"
        title="Four things, done slowly"
        intro="One experience is included with every stay. The rest are offered, not pushed — take them when the day allows."
      />
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-16 md:gap-20">
            {EXPERIENCES.map((exp, i) => {
              const img = image(exp.image);
              return (
                <Reveal key={exp.slug}>
                  <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                    <div className={i % 2 === 1 ? "md:order-2" : undefined}>
                      <Img
                        src={img.url}
                        alt={img.alt}
                        ratio={4 / 3}
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    <div>
                      <Label>{exp.time}</Label>
                      <h2 className="mt-3 font-display text-3xl font-light">{exp.name}</h2>
                      <p className="mt-4 max-w-md text-base leading-7 text-ink/75">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Hairline className="mt-16" />
          <div className="mt-12">
            <Cta href={RESERVE_HREF}>Reserve a stay</Cta>
          </div>
        </Container>
      </section>
    </>
  );
}
