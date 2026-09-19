import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

/**
 * A small uppercase label — the H5 signature.
 * Manrope, uppercase, tracked, with a small waypoint dot.
 */
export function Label({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-sky-deep",
        className
      )}
    >
      <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-sky" />
      {children}
    </span>
  );
}