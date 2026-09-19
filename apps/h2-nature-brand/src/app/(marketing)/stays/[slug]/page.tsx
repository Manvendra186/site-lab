import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Img, Reveal } from "@site-lab/shared";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { Specimen, SpecimenRow } from "@/components/ui/specimen";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { ROOMS } from "@/data/rooms";
import { RESERVE_HREF } from "@/data/site.config";

export function generateStaticParams() {
  return ROOMS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = ROOMS.find((x) => x.slug === slug);
  if (!r) return { title: "Room — Understory" };
  return pageMeta({
    title: `${r.name} — Understory`,
    description: r.tagline,
    path: `https://understory.example/stays/${r.slug}`,
  });
}

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = ROOMS.find((x) => x.slug === slug);
  if (!r) notFound();
  const hero = image(r.image);
  const details = r.detailImages.map((k) => image(k));

  return (
    <>
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <Img
          src={hero.url}
          alt={hero.alt}
          ratio={16 / 9}
          eager
          sizes="100vw"
          className="absolute inset-0 h-full w-full img-bleed"
          imgClassName="drift"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-bark/80 via-bark/30 to-bark/10" />
        <Container className="absolute inset-x-0 bottom-0 pb-12 md:pb-16">
          <div className="max-w-2xl text-paper">
            <Specimen number={r.specimen.replace("Specimen ", "")} label={r.family} dark />
            <h1 className="mt-4 font-display text-5xl font-light tracking-tight md:text-6xl">
              {r.name}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-paper/85 md:text-lg">
              {r.tagline}
            </p>
          </div>
        </Container>
      </section>

      {/* The room — text + specimen data */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <Label>About the room</Label>
              <div className="mt-6 space-y-5 text-base leading-7 text-ink/75">
                {r.longDescription.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <Cta href={RESERVE_HREF}>Reserve this room</Cta>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="border border-stone bg-mist p-8">
                <SpecimenRow label="View" value={r.view} />
                <SpecimenRow label="Size" value={r.size} />
                <SpecimenRow label="Sleeps" value={r.sleeps} />
                <SpecimenRow label="Rate" value={r.rate} className="border-b-0" />
              </div>
              <div className="mt-8">
                <Label>In the room</Label>
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-ink/75">
                  {r.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-3">
                      <span aria-hidden="true" className="h-px w-4 border-b border-dotted border-fern" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Detail images */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {details.map((img, i) => (
              <Reveal key={img.url} delay={i * 100}>
                <Img
                  src={img.url}
                  alt={img.alt}
                  ratio={4 / 3}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  imgClassName="img-settle"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
