import { Container, Reveal } from "@site-lab/shared";
import { DottedRule } from "@/components/motion/dotted-rule";
import { Label } from "./label";

/** Interior page header: label, serif title, optional intro, dotted leader. */
export function PageHero({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="pb-16 pt-20 md:pb-20 md:pt-28">
      <Container>
        <Reveal>
          <Label>{label}</Label>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-light tracking-tight md:text-6xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 max-w-2xl text-base leading-7 text-ink/75 md:text-lg">{intro}</p>
          ) : null}
          <DottedRule className="mt-12" />
        </Reveal>
      </Container>
    </section>
  );
}
