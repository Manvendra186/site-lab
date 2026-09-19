import Link from "next/link";
import { Img } from "@site-lab/shared";
import type { Room } from "@/data/rooms";
import { Timecode } from "@/components/ui/timecode";

export function RoomCard({ room, index }: { room: Room; index: number }) {
  return (
    <Link
      href={`/rooms/${room.slug}`}
      className="group block border border-graphite bg-smoke transition-colors hover:border-tungsten/40"
    >
      <div className="relative overflow-hidden">
        <Img
          src={room.image.url}
          alt={room.image.alt}
          ratio={4 / 3}
          className="h-full w-full"
          imgClassName="h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-90"
        />
        <span className="absolute left-4 top-4 bg-charcoal/80 px-2 py-1 text-[10px] tracking-[0.18em] tabular-nums text-tungsten">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="p-6 md:p-8">
        <Timecode code={room.timecode} label={room.size} />
        <h3 className="mt-4 font-display text-3xl leading-none text-screen">{room.name}</h3>
        <p className="mt-3 text-sm leading-6 text-silver/70">{room.tagline}</p>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-silver/80">
            <span className="text-screen">{room.rate}</span>
          </span>
          <span className="text-[13px] uppercase tracking-[0.18em] text-tungsten transition-colors group-hover:text-tungsten-deep">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
