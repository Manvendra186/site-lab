import { Container } from "@site-lab/shared";
import { Cta } from "@/components/ui/cta";
import { Timecode } from "@/components/ui/timecode";

export default function NotFound() {
  return (
    <section className="py-24 md:py-36">
      <Container>
        <div className="max-w-xl">
          <Timecode code="TC 00:00:00:00" label="Cut — no scene" />
          <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight text-screen md:text-6xl">
            This frame is not in the reel.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-silver/75">
            The scene you followed does not exist in this cut. Let us take you back to the house.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <Cta href="/">Return to the house</Cta>
            <Cta href="/reserve" variant="ghost">
              Reserve a stay
            </Cta>
          </div>
        </div>
      </Container>
    </section>
  );
}
