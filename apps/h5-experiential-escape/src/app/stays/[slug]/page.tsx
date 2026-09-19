import { notFound } from "next/navigation";
import { Container, Img } from "@site-lab/shared";
import { STAYS, getStay } from "@/data/stays";
import { pageMeta } from "@/lib/seo";
import { Ascent } from "@/components/motion/ascent";
import { Cta } from "@/components/ui/cta";
import { Waypoint, WaypointRow } from "@/components/ui/waypoint";
import { RouteLine } from "@/components/ui/route-line";
import { ReserveBar } from "@/components/navigation/reserve-bar";
import { RESERVE_HREF } from "@/data/site.config";

interface StayPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return STAYS.map((stay) => ({ slug: stay.slug }));
}

export async function generateMetadata({ params }: StayPageProps) {
  const { slug } = await params;
  const stay = getStay(slug);
  if (!stay) return { title: "Stay not found" };
  return pageMeta({
    title: stay.name,
    description: stay.description,
    path: `https://safar.example/stays/${stay.slug}`,
    ogImage: stay.image.url,
  });
}

export default async function StayPage({ params }: StayPageProps) {
  const { slug } = await params;
  const stay = getStay(slug);
  if (!stay) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-stone">
        <div className="relative h-[56vh] min-h-[380px] w-full">
          <Img
            src={stay.image.url}
            alt={stay.image.alt}
            sizes="100vw"
            className="h-full w-full"
            imgClassName="h-full w-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ice via-ice/40 to-transparent"
          />
        </div>

        <Container className="relative -mt-24 md:-mt-32">
          <div className="max-w-2xl">
            <Waypoint code={stay.waypoint} label={stay.elevation} className="mb-6" />
            <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-slate md:text-6xl">
              {stay.name}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate/75 md:text-lg">
              {stay.tagline}
            </p>
            <RouteLine className="mt-8" />
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            {/* Main */}
            <div className="flex flex-col gap-12">
              <Ascent>
                <div className="flex flex-col gap-5">
                  {stay.longDescription.map((para, i) => (
                    <p key={i} className="text-base leading-relaxed text-slate/80">
                      {para}
                    </p>
                  ))}
                </div>
              </Ascent>

              <Ascent delay={80}>
                <div className="relative aspect-[16/9] w-full overflow-hidden border border-stone">
                  <Img
                    src={stay.detailImages[0].url}
                    alt={stay.detailImages[0].alt}
                    sizes="(min-width: 1024px) 66vw, 100vw"
                    className="h-full w-full"
                    imgClassName="h-full w-full object-cover object-center"
                  />
                </div>
              </Ascent>

              <Ascent delay={120}>
                <div className="grid gap-6 sm:grid-cols-2">
                  {stay.detailImages.map((img) => (
                    <div
                      key={img.url}
                      className="relative aspect-[4/3] w-full overflow-hidden border border-stone"
                    >
                      <Img
                        src={img.url}
                        alt={img.alt}
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="h-full w-full"
                        imgClassName="h-full w-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              </Ascent>
            </div>

            {/* Data panel */}
            <Ascent delay={160}>
              <aside className="border border-stone bg-mist p-6 lg:sticky lg:top-24">
                <Waypoint code={stay.waypoint} label={stay.aspect} className="mb-6" />
                <div className="flex flex-col">
                  <WaypointRow label="View" value={stay.view} />
                  <WaypointRow label="Size" value={stay.size} />
                  <WaypointRow label="Sleeps" value={stay.sleeps} />
                  <WaypointRow label="Elevation" value={stay.elevation} />
                  <WaypointRow label="Rate" value={stay.rate} className="border-b-0" />
                </div>

                <h3 className="mt-8 text-[11px] uppercase tracking-[0.18em] text-slate/60">
                  Included
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {stay.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-start gap-2 text-sm text-slate/80">
                      <span aria-hidden="true" className="mt-1.5 block h-1 w-1 rounded-full bg-sky" />
                      {amenity}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Cta href={RESERVE_HREF} className="w-full">
                    Reserve {stay.name}
                  </Cta>
                </div>
              </aside>
            </Ascent>
          </div>
        </Container>
      </section>

      <ReserveBar />
    </>
  );
}