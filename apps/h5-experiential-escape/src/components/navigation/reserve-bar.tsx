import Link from "next/link";
import { Container } from "@site-lab/shared";
import { RESERVE_HREF, site } from "@/data/site.config";

/**
 * The reserve bar — a quiet, full-width call to reserve.
 * The H5 signature.
 */
export function ReserveBar() {
  return (
    <section className="border-t border-stone bg-mist">
      <Container className="flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-2xl tracking-tight text-slate md:text-3xl">
            Come and stay
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate/70">
            {site.description}
          </p>
        </div>
        <Link
          href={RESERVE_HREF}
          className="inline-flex items-center gap-2 bg-sky px-6 py-3 text-sm font-medium tracking-wide text-ice transition-colors duration-200 hover:bg-sky-deep"
        >
          Reserve a stay
          <span aria-hidden="true" className="text-xs">→</span>
        </Link>
      </Container>
    </section>
  );
}