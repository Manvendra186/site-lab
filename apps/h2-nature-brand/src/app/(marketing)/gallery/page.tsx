import type { Metadata } from "next";
import { Container, Img, Reveal } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { GALLERY } from "@/data/gallery";

export const metadata: Metadata = pageMeta({
  title: "Gallery — Understory",
  description:
    "The understory, the canopy, the ferns, the moss, the figs, the bamboo, the falls, the coffee, the birds, the table.",
  path: "https://understory.example/gallery",
});

export default function Gallery() {
  return (
    <>
      <PageHero
        label="Gallery"
        title="The forest, in sequence"
        intro="A sequence, not a grid. Captions are quiet, like the labels on a herbarium sheet."
      />

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-x-14 md:gap-y-24">
            {GALLERY.map((entry, i) => {
              const img = image(entry.image);
              return (
                <Reveal key={entry.image} delay={(i % 2) * 100}>
                  <figure>
                    <Img
                      src={img.url}
                      alt={img.alt}
                      ratio={4 / 3}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      imgClassName="img-settle"
                    />
                    <figcaption className="mt-4 flex items-baseline gap-3">
                      <span className="text-[11px] uppercase tracking-[0.18em] text-fern-deep">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span aria-hidden="true" className="h-px flex-1 border-b border-dotted border-stone" />
                      <span className="text-sm text-ink/70">{entry.caption}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
