import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Img, Reveal } from "@site-lab/shared";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { ROOMS } from "@/data/rooms";
import { RESERVE_HREF } from "@/data/site.config";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ROOMS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const r = ROOMS.find((x) => x.slug === slug);
  if (!r) return {};
  return pageMeta({
    title: r.name,
    description: r.description,
    path: `https://sthira.example/rooms/${slug}`,
    ogImage: image(r.image).url,
  });
}

export default async function RoomPage({ params }: Props) {
  const { slug } = await params;
  const r = ROOMS.find((x) => x.slug === slug);
  if (!r) notFound();
  const main = image(r.image);
  const details = r.detailImages.map(image);
  const facts = [
    { label: "Size", value: r.size },
    { label: "Sleeps", value: r.sleeps },
    { label: "View", value: r.view },
    { label: "Rate", value: r.rate },
  ];

  return (
    <>
      <Img
        src={main.url}
        alt={main.alt}
        ratio={16 / 9}
        eager
        sizes="100vw"
        className="h-[55vh] min-h-[380px] w-full img-bleed"
      />
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-[2fr_1fr] md:gap-16">
            <Reveal>
              <Label>{r.view}</Label>
              <h1 className="mt-4 font-display text-4xl font-light tracking-tight md:text-5xl">
                {r.name}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-ink/80">{r.tagline}</p>
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
              <div className="grid gap-6">
                {facts.map((f) => (
                  <div key={f.label} className="border-t border-stone pt-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-bronze-deep">
                      {f.label}
                    </p>
                    <p className="mt-1 text-base">{f.value}</p>
                  </div>
                ))}
                <div className="border-t border-stone pt-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-bronze-deep">
                    In the room
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-ink/75">
                    {r.amenities.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      <section className="border-t border-stone">
        <Container className="py-14 md:py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {details.map((d, i) => (
              <Reveal key={d.key} delay={i * 100} className="group">
                <Img
                  src={d.url}
                  alt={d.alt}
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
