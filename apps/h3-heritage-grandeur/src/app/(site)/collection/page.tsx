import type { Metadata } from "next";
import { Container, Img, Reveal } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { COLLECTION } from "@/data/collection";
import { RESERVE_HREF } from "@/data/site.config";

export const metadata: Metadata = pageMeta({
  title: "The Collection — The Alkari",
  description:
    "The collection is a gallery of the haveli's details — the carved walls, the jharokhas, the arches, the light. Kept by the family, and open to the people who come to stay.",
  path: "https://alkari.example/collection",
});

export default function Collection() {
  return (
    <>
      <PageHero
        label="The collection"
        title="The details of the haveli"
        intro="The carved walls, the jharokhas, the arches, the light. A gallery of the haveli's details, kept by the family and open to the people who come to stay."
      />

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {COLLECTION.map((item, i) => {
              const img = image(item.image);
              return (
                <Reveal key={item.image} delay={(i % 3) * 90}>
                  <figure>
                    <Img
                      src={img.url}
                      alt={img.alt}
                      ratio={4 / 5}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      imgClassName="img-settle"
                    />
                    <figcaption className="mt-4">
                      <p className="text-sm text-ink/80">{item.caption}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink/50">
                        {item.place}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-sandstone bg-mist">
        <Container className="py-16 md:py-20">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <p className="max-w-md text-base leading-7 text-ink/75">
              The collection is the haveli, kept. Come and see it, in the light.
            </p>
            <Cta href={RESERVE_HREF}>Reserve a stay</Cta>
          </div>
        </Container>
      </section>
    </>
  );
}
