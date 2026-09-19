import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Img, Reveal } from "@site-lab/shared";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { Lineage, LineageRow } from "@/components/ui/lineage";
import { Diamond } from "@/components/motion/diamond";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { SUITES } from "@/data/suites";
import { RESERVE_HREF } from "@/data/site.config";

export function generateStaticParams() {
  return SUITES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = SUITES.find((x) => x.slug === slug);
  if (!s) return { title: "Suite — The Alkari" };
  return pageMeta({
    title: `${s.name} — The Alkari`,
    description: s.tagline,
    path: `https://alkari.example/suites/${s.slug}`,
  });
}

export default async function SuitePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = SUITES.find((x) => x.slug === slug);
  if (!s) notFound();
  const hero = image(s.image);
  const details = s.detailImages.map((k) => image(k));

  return (
    <>
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <div className="gild absolute inset-0">
          <Img
            src={hero.url}
            alt={hero.alt}
            ratio={16 / 9}
            eager
            sizes="100vw"
            className="absolute inset-0 h-full w-full img-bleed"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/30 to-espresso/10"
        />
        <Container className="absolute inset-x-0 bottom-0 pb-12 md:pb-16">
          <div className="max-w-2xl text-ivory">
            <Lineage number={s.lineage.replace("No. ", "")} label={s.aspect} dark />
            <h1 className="mt-4 font-display text-5xl tracking-tight md:text-6xl">{s.name}</h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-ivory/85 md:text-lg">
              {s.tagline}
            </p>
          </div>
        </Container>
      </section>

      {/* The suite — text + lineage data */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <Label>About the suite</Label>
              <div className="mt-6 space-y-5 text-base leading-7 text-ink/75">
                {s.longDescription.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <Cta href={RESERVE_HREF}>Reserve this suite</Cta>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="border border-sandstone bg-mist p-8">
                <LineageRow label="View" value={s.view} />
                <LineageRow label="Size" value={s.size} />
                <LineageRow label="Sleeps" value={s.sleeps} />
                <LineageRow label="Rate" value={s.rate} className="border-b-0" />
              </div>
              <div className="mt-8">
                <Label>In the suite</Label>
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-ink/75">
                  {s.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="block h-1.5 w-1.5 rotate-45 bg-gold"
                      />
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
          <Diamond className="mb-12 max-w-xs" />
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
