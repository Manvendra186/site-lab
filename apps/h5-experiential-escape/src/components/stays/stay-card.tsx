import Link from "next/link";
import { Img } from "@site-lab/shared";
import type { Stay } from "@/data/stays";
import { Waypoint } from "@/components/ui/waypoint";

/**
 * A stay card — the H5 signature.
 * An image, a waypoint, a name, a description, and a rate.
 */
export function StayCard({ stay }: { stay: Stay }) {
  return (
    <Link
      href={`/stays/${stay.slug}`}
      className="group block border border-stone bg-ice transition-colors duration-200 hover:border-slate/40"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Img
          src={stay.image.url}
          alt={stay.image.alt}
          ratio={4 / 3}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="w-full"
          imgClassName="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-6">
        <Waypoint code={stay.waypoint} label={stay.elevation} className="mb-4" />
        <h3 className="font-display text-xl tracking-tight text-slate">{stay.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate/70">{stay.description}</p>
        <div className="mt-5 flex items-center justify-between border-t border-stone pt-4">
          <span className="text-sm text-slate/70">{stay.rate}</span>
          <span className="inline-flex items-center gap-1 text-sm text-sky-deep transition-colors duration-200 group-hover:text-slate">
            View
            <span aria-hidden="true" className="text-xs">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}