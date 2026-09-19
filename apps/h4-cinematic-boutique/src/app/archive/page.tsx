import { Container, Img } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { ARCHIVE } from "@/data/archive";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "The Archive",
  description: ARCHIVE.intro,
});

export default function ArchivePage() {
  return (
    <>
      <PageHero
        label={ARCHIVE.label}
        title={ARCHIVE.title}
        intro={ARCHIVE.intro}
        code={ARCHIVE.timecode}
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ARCHIVE.items.map((item) => (
              <figure key={item.image.url}>
                <Img src={item.image.url} alt={item.image.alt} ratio={4 / 3} className="w-full" />
                <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                  <span className="text-sm text-silver">{item.caption}</span>
                  <span className="text-xs uppercase tracking-[0.16em] text-silver-dim">
                    {item.place}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}