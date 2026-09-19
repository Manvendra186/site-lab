"use client";

import { usePrefersReducedMotion } from "@site-lab/shared";
import { Container, Img } from "@site-lab/shared";
import type { ImageEntry } from "@/data/images";
import { cx } from "@/lib/utils";
import { RouteLine } from "@/components/ui/route-line";
import { Waypoint } from "@/components/ui/waypoint";

export interface HeroProps {
  label: string;
  title: string;
  intro: string;
  waypoint: string;
  image: ImageEntry;
}

/**
 * Home hero — the H5 "ascent" signature.
 * The image rises slowly (a quiet rise, ~2.4s), like climbing out of the valley.
 * Reduced-motion safe (the rise is disabled).
 */
export function Hero({ label, title, intro, waypoint, image }: HeroProps) {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-stone">
      <div className="relative h-[62vh] min-h-[420px] w-full">
        <Img
          src={image.url}
          alt={image.alt}
          eager
          sizes="100vw"
          className="h-full w-full"
          imgClassName={cx("h-full w-full object-cover object-center", !reduced && "hero-ascent")}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ice via-ice/40 to-transparent"
        />
      </div>

      <Container className="relative -mt-24 md:-mt-32">
        <div className="max-w-2xl">
          <Waypoint code={waypoint} label={label} className="mb-6" />
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-slate md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate/75 md:text-lg">
            {intro}
          </p>
          <RouteLine className="mt-8" />
        </div>
      </Container>
    </section>
  );
}