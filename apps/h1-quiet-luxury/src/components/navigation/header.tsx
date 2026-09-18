"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@site-lab/shared";
import { NAV, RESERVE_HREF } from "@/data/site.config";
import { cx } from "@/lib/utils";

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
    <header className="sticky top-0 z-50 border-b border-stone bg-paper">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          aria-label="Sthira — home"
          className="font-display text-lg uppercase tracking-[0.35em] text-ink md:text-xl"
        >
          Sthira
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cx(
                "link-underline text-[11px] uppercase tracking-[0.18em] transition-colors",
                pathname === item.href ? "text-bronze-deep" : "text-ink/70 hover:text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={RESERVE_HREF}
            className="border border-ink px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Reserve
          </Link>
        </nav>
        <button
          type="button"
          className="text-[11px] uppercase tracking-[0.18em] text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>
      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col bg-paper pt-24 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-1 px-6 pb-24">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-stone py-4 font-display text-3xl font-light text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={RESERVE_HREF}
              onClick={() => setOpen(false)}
              className="mt-10 border border-ink px-6 py-4 text-center text-[13px] uppercase tracking-[0.18em] text-ink"
            >
              Reserve a stay
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
