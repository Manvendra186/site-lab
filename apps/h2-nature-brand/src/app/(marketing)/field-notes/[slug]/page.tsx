import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Img, Reveal } from "@site-lab/shared";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { FIELD_NOTES } from "@/data/field-notes";

export function generateStaticParams() {
  return FIELD_NOTES.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const n = FIELD_NOTES.find((x) => x.slug === slug);
  if (!n) return { title: "Field Note — Understory" };
  return pageMeta({
    title: `${n.title} — Understory`,
    description: n.excerpt,
    path: `https://understory.example/field-notes/${n.slug}`,
  });
}

export default async function FieldNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const n = FIELD_NOTES.find((x) => x.slug === slug);
  if (!n) notFound();
  const img = image(n.image);
  const index = FIELD_NOTES.findIndex((x) => x.slug === n.slug);

  return (
    <>
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <Img
          src={img.url}
          alt={img.alt}
          ratio={16 / 9}
          eager
          sizes="100vw"
          className="absolute inset-0 h-full w-full img-bleed"
          imgClassName="drift"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-bark/80 via-bark/30 to-bark/10" />
        <Container className="absolute inset-x-0 bottom-0 pb-12 md:pb-16">
          <div className="max-w-2xl text-paper">
            <Label className="text-paper/75">
              Note {String(index + 1).padStart(2, "0")} · {n.date}
            </Label>
            <h1 className="mt-4 font-display text-5xl font-light tracking-tight md:text-6xl">
              {n.title}
            </h1>
          </div>
        </Container>
      </section>

      {/* The note — a single column, like a page in a field guide */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl">
            <div className="space-y-6 text-base leading-8 text-ink/80">
              {n.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
              <Cta href="/field-notes">All field notes</Cta>
              <Cta href="/reserve" variant="ghost">
                Reserve a stay
              </Cta>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
