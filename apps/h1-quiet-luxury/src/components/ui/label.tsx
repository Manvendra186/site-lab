import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

/** Small-caps label — 11px, 0.18em tracking (brief typography spec). */
export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cx("block text-[11px] uppercase tracking-[0.18em] text-bronze-deep", className)}>
      {children}
    </span>
  );
}
