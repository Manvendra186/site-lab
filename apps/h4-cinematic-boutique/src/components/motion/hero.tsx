import { Container, Img } from "@site-lab/shared";
import type { ImageEntry } from "@/data/images";
import { Sprocket } from "./sprocket";
import { Timecode } from "@/components/ui/timecode";
import { Cta } from "@/components/ui/cta";

export interface HeroProps {
  image: ImageEntry;
  timecode: string;
  label: string;
  title: string;
  intro: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
}

/**
 * The H4 hero — full-bleed Mumbai at night, text top-left.
 * The image carries "the flicker" (a one-shot opacity flicker, like a
 * projector lamp finding the screen); the text sits above it, always
 * readable on the charcoal ground.
 */
export function Hero({
  image,
  timecode,
  label,
  title,
  intro,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative isolate min-h-[88svh] w-full overflow-hidden">
      <div className="flicker absolute inset-0 -z-10">
        <Img
          src={image.url}
          alt={image.alt}
          ratio={16 / 9}
          eager
          sizes="100vw"
          className="h-full w-full"
          imgClassName="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/10" />
      <Container className="flex min-h-[88svh] flex-col justify-end pb-24 pt-32 md:pb-28">
        <div className="max-w-2xl">
          <Timecode code={timecode} label={label} />
          <h1 className="mt-6 font-display text-6xl leading-[0.95] tracking-tight text-screen md:text-8xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-silver/85 md:text-lg">
            {intro}
          </p>
          <Sprocket className="mt-10 max-w-[180px]" />
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <Cta href={primaryCta.href} tone="light">
              {primaryCta.label}
            </Cta>
            <Cta href={secondaryCta.href} tone="light" variant="ghost">
              {secondaryCta.label}
            </Cta>
          </div>
        </div>
      </Container>
    </section>
  );
}
