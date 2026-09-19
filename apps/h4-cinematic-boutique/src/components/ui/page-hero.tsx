import { Container } from "@site-lab/shared";
import { Fade } from "@/components/motion/fade";
import { Sprocket } from "@/components/motion/sprocket";
import { Timecode } from "./timecode";

/** Interior page header: timecode + label, display title, optional intro, sprocket rule. */
export function PageHero({
  label,
  title,
  intro,
  code,
}: {
  label: string;
  title: string;
  intro?: string;
  code?: string;
}) {
  return (
    <section className="pb-16 pt-20 md:pb-20 md:pt-28">
      <Container>
        <Fade>
          <Timecode code={code ?? "TC 00:00:00:00"} label={label} />
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight text-screen md:text-7xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 max-w-2xl text-base leading-7 text-silver/80 md:text-lg">{intro}</p>
          ) : null}
          <Sprocket className="mt-12 max-w-[180px]" />
        </Fade>
      </Container>
    </section>
  );
}
