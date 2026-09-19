import type { Metadata } from "next";
import { Container, Img, Reveal } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { FIELD_NOTES } from "@/data/field-notes";

export const metadata: Metadata = pageMeta({
  title: "Field Notes — Understory",
  description:
    "Short, slow notes from the lodge, written like a field guide. Numbered, dated, and published rarely.",
  path: "https://understory.example/field-notes",
});

export default function FieldNotes() {
  return (
    <>
      <PageHero
        label="Field notes"
        title="Notes from the understory"
        intro="Short, slow notes from the lodge, written like a field guide. Numbered, dated, and published rarely."
      />

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-16 md:gap-20">
            {FIELD_NOTES.map((note, i) => {
              const img = image(note.image);
              return (
                <Reveal key={note.slug} delay={i * 80}>
                  <article className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
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
                      <p className="text-[11px] uppercase tracking-[0.18em] text-fern-deep">
                        Note {String(i + 1).padStart(2, "0")} · {note.date}
                      </p>
                      <h2 className="mt-3 font-display text-3xl font-light">{note.title}</h2>
                      <p className="mt-4 max-w-md text-base leading-7 text-ink/75">
                        {note.excerpt}
                      </p>
                      <div className="mt-6">
                        <Cta href={`/field-notes/${note.slug}`}>Read the note</Cta>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
