import type { Metadata } from "next";
import Link from "next/link";
import { Container, Img, Reveal } from "@site-lab/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { Hairline } from "@/components/motion/hairline";
import { pageMeta } from "@/lib/seo";
import { image } from "@/data/images";
import { ROOMS } from "@/data/rooms";
import { RESERVE_HREF } from "@/data/site.config";

export const metadata: Metadata = pageMeta({
  title: "Rooms",
  description:
    "Six ways to stay at Sthira — from the Lake Room to the Old House Suite. Breakfast is included with every stay.",
  path: "https://sthira.example/rooms",
});

export default function RoomsPage() {
  return (
    <>
      <PageHero
        label="Rooms"
        title="Six ways to stay"
        intro="Fourteen rooms in the house; six are offered here. Each is kept differently, and each has a view worth the wait."
      />
      <section className="pb-20 md:pb-28">
        <Container>
          <div>
            {ROOMS.map((room, i) => {
              const img = image(room.image);
              return (
                <Reveal key={room.slug} delay={i * 80}>
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="group grid gap-6 border-t border-stone py-10 md:grid-cols-2 md:items-center md:gap-12"
                  >
                    <div className={i % 2 === 1 ? "md:order-2" : undefined}>
                      <Img
                        src={img.url}
                        alt={img.alt}
                        ratio={4 / 3}
                        sizes="(min-width: 768px) 45vw, 100vw"
                        imgClassName="img-settle"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                        <h2 className="font-display text-3xl font-light">{room.name}</h2>
                        <span className="text-sm tracking-wide text-bronze-deep">{room.rate}</span>
                      </div>
                      <p className="mt-3 max-w-xl text-base leading-7 text-ink/75">{room.tagline}</p>
                      <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-bronze-deep">
                        {room.size} · {room.sleeps} · {room.view}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <Hairline className="mt-2" />
          <div className="mt-12">
            <Cta href={RESERVE_HREF}>Reserve a stay</Cta>
          </div>
        </Container>
      </section>
    </>
  );
}
