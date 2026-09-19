import Link from "next/link";
import { Container } from "@site-lab/shared";
import { NAV, RESERVE_HREF, site } from "@/data/site.config";
import { RESERVE } from "@/data/content";
import { credits } from "@/data/images";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-graphite bg-smoke">
      <Container className="py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-lg tracking-[0.3em] text-screen">Nocturne</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-silver/70">
              A twelve-room house in the old film district of Mumbai. The night is the brand.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 text-sm">
            <div className="grid gap-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-tungsten">Explore</p>
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-silver/70 transition-colors hover:text-screen"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="grid gap-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-tungsten">Visit</p>
              <Link
                href={RESERVE_HREF}
                className="text-silver/70 transition-colors hover:text-screen"
              >
                Reserve a stay
              </Link>
              <a
                href={`tel:${site.phone?.replace(/\s/g, "")}`}
                className="text-silver/70 transition-colors hover:text-screen"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="break-all text-silver/70 transition-colors hover:text-screen"
              >
                {site.email}
              </a>
            </div>
          </nav>
          <div className="text-sm leading-6 text-silver/70">
            <p className="text-[11px] uppercase tracking-[0.18em] text-tungsten">Address</p>
            <p className="mt-3">{RESERVE.details.address}</p>
            <p className="mt-4 max-w-xs text-xs leading-5 text-silver/55">{RESERVE.demoNote}</p>
          </div>
        </div>
        {/* Image credits and licenses (brief: required). */}
        <div className="mt-12 border-t border-graphite pt-8">
          <p className="text-[11px] uppercase tracking-[0.18em] text-tungsten">Photography</p>
          <ul className="mt-3 grid gap-1.5 text-xs leading-5 text-silver/55">
            {credits().map((c) => (
              <li key={c.credit}>
                {c.credit} <span className="text-silver/40">— {c.license}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
