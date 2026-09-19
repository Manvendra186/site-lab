import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

interface CtaProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  /** dark = on the charcoal ground (default); light = over photography. */
  tone?: "dark" | "light";
  className?: string;
}

const TONES = {
  dark: {
    primary: "border-tungsten text-tungsten hover:border-tungsten-deep hover:text-tungsten-deep",
    ghost: "border-transparent text-tungsten hover:border-tungsten hover:text-tungsten-deep",
  },
  light: {
    primary: "border-screen text-screen hover:border-screen/60 hover:text-screen/80",
    ghost: "border-transparent text-screen/80 hover:border-screen/60 hover:text-screen",
  },
} as const;

/** Quiet text CTA — a solid tungsten underline, never a button block. */
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
