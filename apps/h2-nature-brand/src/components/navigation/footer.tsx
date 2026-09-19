import Link from "next/link";
import { Container } from "@site-lab/shared";
import { NAV, RESERVE_HREF, site } from "@/data/site.config";
import { RESERVE } from "@/data/content";
import { credits } from "@/data/images";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-stone bg-mist">
      <Container className="py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-lg uppercase tracking-[0.35em] text-ink">Understory</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-ink/70">
              A five-room forest lodge in the Coorg understory, Karnataka.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 text-sm">
            <div className="grid gap-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-fern-deep">Explore</p>
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-underline text-ink/70 transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="grid gap-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-fern-deep">Visit</p>
              <Link href={RESERVE_HREF} className="link-underline text-ink/70 transition-colors hover:text-ink">
                Reserve a stay
              </Link>
              <a
                href={`tel:${site.phone?.replace(/\s/g, "")}`}
                className="text-ink/70 transition-colors hover:text-ink"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="break-all text-ink/70 transition-colors hover:text-ink"
              >
                {site.email}
              </a>
            </div>
          </nav>
          <div className="text-sm leading-6 text-ink/70">
            <p className="text-[11px] uppercase tracking-[0.18em] text-fern-deep">Address</p>
            <p className="mt-3">{RESERVE.details.address}</p>
            <p className="mt-4 max-w-xs text-xs leading-5 text-ink/55">{RESERVE.demoNote}</p>
          </div>
        </div>
        {/* Image credits and licenses (brief: required). */}
        <div className="mt-12 border-t border-dotted border-stone pt-8">
          <p className="text-[11px] uppercase tracking-[0.18em] text-fern-deep">Photography</p>
          <ul className="mt-3 grid gap-1.5 text-xs leading-5 text-ink/55">
            {credits().map((c) => (
              <li key={c.credit}>
                {c.credit} <span className="text-ink/40">— {c.license}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
