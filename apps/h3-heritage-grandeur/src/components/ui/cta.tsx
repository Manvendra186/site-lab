import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

interface CtaProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  /** dark = on light backgrounds (default); light = over photography. */
  tone?: "dark" | "light";
  className?: string;
}

const TONES = {
  dark: {
    primary: "border-maroon text-maroon hover:border-maroon-deep hover:text-maroon-deep",
    ghost: "border-transparent text-maroon hover:border-maroon hover:text-maroon-deep",
  },
  light: {
    primary: "border-ivory text-ivory hover:border-ivory/60 hover:text-ivory/80",
    ghost: "border-transparent text-ivory/80 hover:border-ivory/60 hover:text-ivory",
  },
} as const;

/** Stately text CTA — a solid maroon underline, never a button block. */
export function Cta({ href, children, variant = "primary", tone = "dark", className }: CtaProps) {
  return (
    <Link
      href={href}
      data-cta
      className={cx(
        "inline-block border-b pb-1 text-[13px] uppercase tracking-[0.18em] transition-colors",
        TONES[tone][variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
