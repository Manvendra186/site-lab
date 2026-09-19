import { Container, Img } from "@site-lab/shared";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { Diamond } from "@/components/motion/diamond";
import { image } from "@/data/images";
import { HOME } from "@/data/content";
import { RESERVE_HREF } from "@/data/site.config";

/**
 * Full-bleed hero (brief): the haveli at first light, small-caps location
 * label, one serif line, diamond rule, two text CTAs.
 * Signature motion: "the gild" — a slow light sweep across the gold.
 */
export function Hero() {
  const img = image("hero");
  return (
    <section className="relative h-[82vh] min-h-[560px] w-full overflow-hidden md:h-screen">
      <div className="gild absolute inset-0">
        <Img
          src={img.url}
          alt={img.alt}
          ratio={16 / 9}
          eager
          sizes="100vw"
          className="absolute inset-0 h-full w-full img-bleed"
        />
      </div>
      {/* Soft bottom-up scrim — functional legibility for the text, not a decorative gradient. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/35 to-espresso/10"
      />
      <Container className="absolute inset-x-0 bottom-0 pb-14 md:pb-20">
        <div className="max-w-2xl text-ivory">
          <Label className="text-ivory/75">{HOME.heroLabel}</Label>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
            {HOME.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ivory/85 md:text-lg">
            {HOME.heroIntro}
          </p>
          <Diamond className="mt-8 max-w-xs" tone="dark" />
          <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
            <Cta href={RESERVE_HREF} tone="light">
              Reserve a stay
            </Cta>
            <Cta href="/the-haveli" variant="ghost" tone="light">
              Enter the haveli
            </Cta>
          </div>
        </div>
      </Container>
      {/* Family line — a small diamond and the estate, bottom-right (brief). */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 right-8 hidden flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.22em] text-ivory/60">
          The Alkari — est. 1874
        </span>
        <span className="block h-2 w-2 bg-gold" />
      </div>
    </section>
  );
}
