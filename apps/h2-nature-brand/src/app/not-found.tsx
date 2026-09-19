import { Container } from "@site-lab/shared";
import { Cta } from "@/components/ui/cta";
import { Label } from "@/components/ui/label";

export default function NotFound() {
  return (
    <section className="py-24 md:py-36">
      <Container>
        <div className="max-w-xl">
          <Label>Lost in the understory</Label>
          <h1 className="mt-4 font-display text-5xl font-light tracking-tight md:text-6xl">
            This page is not in the forest.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-ink/75">
            The trail you followed does not lead anywhere. Let us walk you back to the lodge.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <Cta href="/">Return to the lodge</Cta>
            <Cta href="/reserve" variant="ghost">
              Reserve a stay
            </Cta>
          </div>
        </div>
      </Container>
    </section>
  );
}
