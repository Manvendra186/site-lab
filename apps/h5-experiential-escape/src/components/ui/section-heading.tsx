import type { ReactNode } from "react";
import { cx } from "@/lib/utils";
import { RouteLine } from "@/components/ui/route-line";

export interface SectionHeadingProps {
  label?: string;
  title: string;
  intro?: string;
  className?: string;
  children?: ReactNode;
}

/**
 * A section heading — the H5 signature.
 * A label, title, and optional intro, with a route line.
 */
export function SectionHeading({
  label,
  title,
  intro,
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div className={cx("max-w-2xl", className)}>
      {label ? (
        <span className="mb-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-sky-deep">
          <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-sky" />
          {label}
        </span>
      ) : null}
      <h2 className="font-display text-2xl leading-[1.1] tracking-tight text-slate md:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base leading-relaxed text-slate/75">{intro}</p>
      ) : null}
      <RouteLine className="mt-6" />
      {children}
    </div>
  );
}