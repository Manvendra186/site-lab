import Link from "next/link";
import { cx } from "@/lib/utils";

export interface CtaProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}

/**
 * A call-to-action link — the H5 signature.
 * Solid (sky) or ghost (slate outline).
 */
export function Cta({ href, children, variant = "solid", className }: CtaProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200";
  const styles =
    variant === "solid"
      ? "bg-sky text-ice hover:bg-sky-deep"
      : "border border-slate/30 text-slate hover:border-slate hover:bg-slate hover:text-ice";

  return (
    <Link href={href} className={cx(base, styles, className)}>
      {children}
      <span aria-hidden="true" className="text-xs">→</span>
    </Link>
  );
}