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
    primary: "border-ink text-ink hover:border-bronze-deep hover:text-bronze-deep",
    ghost: "border-transparent text-bronze-deep hover:border-bronze-deep hover:text-ink",
  },
  light: {
    primary: "border-paper text-paper hover:border-paper/60 hover:text-paper/80",
    ghost: "border-transparent text-paper/80 hover:border-paper/60 hover:text-paper",
  },
} as const;

/** Quiet text CTA — a hairline underline, never a button block. */
export function Cta({ href, children, variant = "primary", tone = "dark", className }: CtaProps) {
  return (
    <Link
      href={href}
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
