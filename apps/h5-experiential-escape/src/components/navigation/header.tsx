"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@site-lab/shared";
import { NAV, RESERVE_HREF, site } from "@/data/site.config";
import { cx } from "@/lib/utils";

/**
 * The header — the H5 signature.
 * A thin, light header with the wordmark, nav, and a reserve CTA.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone bg-ice/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-slate"
          aria-label={`${site.name} — home`}
        >
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cx(
                  "text-sm tracking-wide transition-colors duration-200",
                  active
                    ? "text-sky-deep"
                    : "text-slate/70 hover:text-slate"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={RESERVE_HREF}
            className="inline-flex items-center gap-2 bg-sky px-4 py-2 text-sm font-medium tracking-wide text-ice transition-colors duration-200 hover:bg-sky-deep"
          >
            Reserve
          </Link>
          <button
            type="button"
            className="px-2 py-2 text-sm tracking-wide text-slate md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col bg-ice pt-20 md:hidden"
        >
          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col justify-center gap-1 px-6 pb-24"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-stone py-4 font-display text-3xl tracking-tight text-slate"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={RESERVE_HREF}
              onClick={() => setOpen(false)}
              className="mt-10 inline-flex items-center justify-center gap-2 bg-sky px-6 py-4 text-sm font-medium tracking-wide text-ice transition-colors duration-200 hover:bg-sky-deep"
            >
              Reserve a stay
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}