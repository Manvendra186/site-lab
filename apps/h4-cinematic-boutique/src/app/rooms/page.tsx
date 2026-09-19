import { Container } from "@site-lab/shared";
import { Fade } from "@/components/motion/fade";
import { RoomCard } from "@/components/rooms/room-card";
import { Cta } from "@/components/ui/cta";
import { PageHero } from "@/components/ui/page-hero";
import { ROOMS, ROOMS_INDEX } from "@/data/rooms";
import { RESERVE_HREF } from "@/data/site.config";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Rooms",
  description: ROOMS_INDEX.intro,
});

export default function RoomsPage() {
  return (
    <>
      <PageHero
        label={ROOMS_INDEX.label}
        title={ROOMS_INDEX.title}
        intro={ROOMS_INDEX.intro}
        code={ROOMS_INDEX.timecode}
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ROOMS.map((room, i) => (
              <Fade key={room.slug} delay={i * 80}>
                <RoomCard room={room} index={i} />
              </Fade>
            ))}
          </div>

          <div className="mt-16 border-t border-graphite pt-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <p className="max-w-xl text-silver/80">
                Rates include breakfast and one private screening in the house&rsquo;s cinema.
              </p>
              <Cta href={RESERVE_HREF}>Reserve a stay</Cta>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}