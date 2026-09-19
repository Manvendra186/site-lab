import { Container, Img } from "@site-lab/shared";
import type { ImageEntry } from "@/data/images";
import { RouteLine } from "@/components/ui/route-line";
import { Waypoint } from "@/components/ui/waypoint";

export interface PageHeroProps {
  label: string;
  title: string;
  intro: string;
  waypoint: string;
  image: ImageEntry;
}

/**
 * A page hero — the H5 signature.
 * A full-width image with a label, title, and intro.
 */
export function PageHero({ label, title, intro, waypoint, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-stone">
      <div className="relative h-[48vh] min-h-[320px] w-full">
        <Img
          src={image.url}
          alt={image.alt}
          sizes="100vw"
          className="h-full w-full"
          imgClassName="h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ice via-ice/40 to-transparent"
        />
      </div>

      <Container className="relative -mt-20 md:-mt-24">
        <div className="max-w-2xl">
          <Waypoint code={waypoint} label={label} className="mb-6" />
          <h1 className="font-display text-3xl leading-[1.05] tracking-tight text-slate md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate/75">
            {intro}
          </p>
          <RouteLine className="mt-7" />
        </div>
      </Container>
    </section>
  );
}