import { Container, Img } from "@site-lab/shared";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";
import { image } from "@/data/images";
import { HOME } from "@/data/content";
import { RESERVE_HREF } from "@/data/site.config";

/**
 * Full-bleed hero (brief): lake at first light, small-caps location label,
 * one serif line, hairline, two text CTAs. The image settles 1.04 -> 1.00.
 */
export function Hero() {
  const img = image("hero");
  return (
    <section className="relative h-[72vh] min-h-[520px] w-full overflow-hidden md:h-[88vh]">
      <Img
        src={img.url}
        alt={img.alt}
        ratio={16 / 9}
        eager
        sizes="100vw"
        className="absolute inset-0 h-full w-full"
        imgClassName="hero-settle"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/45" />
      <Container className="absolute inset-x-0 bottom-0 pb-14 md:pb-20">
        <div className="max-w-2xl text-paper">
          <Label className="text-paper/75">{HOME.heroLabel}</Label>
          <h1 className="mt-4 font-display text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
            {HOME.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-paper/85 md:text-lg">
            {HOME.heroIntro}
          </p>
          <div aria-hidden="true" className="mt-8 h-px w-full max-w-xs bg-paper/40" />
          <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
            <Cta href={RESERVE_HREF} tone="light">
              Reserve a stay
            </Cta>
            <Cta href="/about" variant="ghost" tone="light">
              Explore the house
            </Cta>
          </div>
        </div>
      </Container>
    </section>
  );
}
