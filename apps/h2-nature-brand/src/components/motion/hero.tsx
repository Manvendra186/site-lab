import { Container, Img } from "@site-lab/shared";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { image } from "@/data/images";
import { HOME } from "@/data/content";
import { RESERVE_HREF } from "@/data/site.config";

/**
 * Full-bleed hero (brief): the understory at first light, small-caps location
 * label, one serif line, dotted leader, two text CTAs.
 * Signature motion: "the drift" — the image pans slowly into place.
 */
export function Hero() {
  const img = image("hero");
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden md:h-screen">
      <Img
        src={img.url}
        alt={img.alt}
        ratio={16 / 9}
        eager
        sizes="100vw"
        className="absolute inset-0 h-full w-full img-bleed"
        imgClassName="drift"
      />
      {/* Soft bottom-up scrim — functional legibility for the text, not a decorative gradient. */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-bark/80 via-bark/35 to-bark/10" />
      <Container className="absolute inset-x-0 bottom-0 pb-14 md:pb-20">
        <div className="max-w-2xl text-paper">
          <Label className="text-paper/75">{HOME.heroLabel}</Label>
          <h1 className="mt-4 font-display text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
            {HOME.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-paper/85 md:text-lg">
            {HOME.heroIntro}
          </p>
          <div aria-hidden="true" className="mt-8 h-px w-full max-w-xs border-b border-dotted border-paper/50" />
          <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
            <Cta href={RESERVE_HREF} tone="light">
              Reserve a stay
            </Cta>
            <Cta href="/the-forest" variant="ghost" tone="light">
              Enter the forest
            </Cta>
          </div>
        </div>
      </Container>
      {/* Quiet scroll cue — a dotted leader, on-brand. Desktop only (mobile has the reserve bar). */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 right-8 hidden flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.22em] text-paper/60">Scroll</span>
        <span className="h-10 w-px border-l border-dotted border-paper/50" />
      </div>
    </section>
  );
}
