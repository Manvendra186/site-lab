import Link from "next/link";
import { Container } from "@site-lab/shared";
import { Waypoint } from "@/components/ui/waypoint";
import { RouteLine } from "@/components/ui/route-line";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container>
        <div className="max-w-xl">
          <Waypoint code="Stage —" label="Not found" className="mb-6" />
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-slate md:text-6xl">
            The road ends here.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate/75">
            The page you are looking for is not on the road. Let us take you back to the house.
          </p>
          <RouteLine className="mt-8" />
          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-sky px-6 py-3 text-sm font-medium tracking-wide text-ice transition-colors duration-200 hover:bg-sky-deep"
            >
              Back to the house
              <span aria-hidden="true" className="text-xs">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}