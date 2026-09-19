import Link from "next/link";
import { Container } from "@site-lab/shared";
import { NAV, RESERVE_HREF, site } from "@/data/site.config";
import { credits } from "@/data/images";

/**
 * The footer — the H5 signature.
 * A quiet, light footer with the wordmark, nav, contact, and credits.
 */
export function Footer() {
  const year = new Date().getFullYear();
  const photoCredits = credits();

  return (
    <footer className="border-t border-stone bg-ice">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg tracking-tight text-slate">{site.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate/70">
              {site.description}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate/70 transition-colors duration-200 hover:text-slate"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={RESERVE_HREF}
              className="text-sm text-sky-deep transition-colors duration-200 hover:text-slate"
            >
              Reserve
            </Link>
          </nav>

          <div className="flex flex-col gap-2 text-sm text-slate/70">
            <p>{site.address?.street}</p>
            <p>
              {site.city} {site.region} {site.address?.postalCode}
            </p>
            <p>
              <a href={`tel:${site.phone?.replace(/\s/g, "")}`} className="hover:text-slate">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-slate">
                {site.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-stone pt-6 text-xs text-slate/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}. A concept website — all details are illustrative.
          </p>
          <p className="flex flex-wrap gap-x-3 gap-y-1">
            {photoCredits.map((c) => (
              <span key={c.credit}>
                Photography {c.credit} · {c.license}
              </span>
            ))}
          </p>
        </div>
      </Container>
    </footer>
  );
}