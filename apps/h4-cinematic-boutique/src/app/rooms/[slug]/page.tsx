import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Img } from "@site-lab/shared";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { PageHero } from "@/components/ui/page-hero";
import { getRoom, ROOMS } from "@/data/rooms";
import { RESERVE_HREF } from "@/data/site.config";
import { pageMeta } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ROOMS.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) return { title: "Room not found" };
  return pageMeta({ title: room.name, description: room.description });
}

export default async function RoomPage({ params }: Props) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();

  return (
    <>
      <PageHero
        label={room.aspect}
        title={room.name}
        intro={room.tagline}
        code={room.timecode}
      />

      <section className="py-16 md:py-24">
        <Container>
          <Img src={room.image.url} alt={room.image.alt} ratio={16 / 9} eager className="w-full" />

          <div className="mt-12 grid gap-10 md:grid-cols-[1fr_320px] md:gap-16">
            {/* Main */}
            <div>
              <div className="space-y-4 text-silver/80">
                {room.longDescription.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {room.detailImages.map((img) => (
                  <Img key={img.url} src={img.url} alt={img.alt} ratio={4 / 3} className="w-full" />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="border border-graphite bg-smoke p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm text-silver-dim">Rate</span>
                  <span className="font-display text-xl text-screen">{room.rate}</span>
                </div>
                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-silver-dim">Aspect</dt>
                    <dd className="text-right text-silver">{room.aspect}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-silver-dim">View</dt>
                    <dd className="text-right text-silver">{room.view}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-silver-dim">Size</dt>
                    <dd className="text-right text-silver">{room.size}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-silver-dim">Sleeps</dt>
                    <dd className="text-right text-silver">{room.sleeps}</dd>
                  </div>
                </dl>
                <div className="mt-6">
                  <Cta href={RESERVE_HREF}>Reserve this room</Cta>
                </div>
              </div>

              <div>
                <Label>In the room</Label>
                <ul className="mt-4 space-y-2 text-sm text-silver/80">
                  {room.amenities.map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className="text-tungsten">·</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}