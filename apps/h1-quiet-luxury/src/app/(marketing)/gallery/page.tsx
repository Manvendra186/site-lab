import type { Metadata } from "next";
import { Container, Img, Reveal } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { GALLERY } from "@/data/gallery";
import { RESERVE_HREF } from "@/data/site.config";

export const metadata: Metadata = pageMeta({
  title: "Gallery",
  description:
    "A quiet record of the house — water, stone, linen, and light at Sthira, Udaipur.",
  path: "https://sthira.example/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="Gallery"
        title="A quiet record"
        intro="No staging, no captions that ask to be liked. Just the house, the water, and the light as we keep them."
      />
      <section className="pb-20 md:pb-28">
        <Container size="wide">
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 md:gap-y-16">
            {GALLERY.map((g, i) => {
              const img = image(g.image);
              return (
                <Reveal key={g.image} delay={i * 60} className={`group ${i % 4 === 1 ? "md:mt-16" : ""}`}>
                  <Img
                    src={img.url}
                    alt={img.alt}
                    ratio={4 / 3}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    imgClassName="img-settle"
                  />
                  <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-bronze-deep">
                    {g.caption}
                  </p>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-16">
            <Cta href={RESERVE_HREF}>Reserve a stay</Cta>
          </div>
        </Container>
      </section>
    </>
  );
}
