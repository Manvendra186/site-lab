"use client";

import { useInView, usePrefersReducedMotion } from "@site-lab/shared";
import { cx } from "@/lib/utils";

/**
 * A dotted leader that draws in as it enters the viewport.
 * The H2 signature rule — the field-guide line, dotted not solid.
 */
export function DottedRule({ className, dark = false }: { className?: string; dark?: boolean }) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const visible = inView || reduced;
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cx("h-px w-full", dark ? "leader-dark" : "leader", className)}
      style={
        reduced
          ? undefined
          : {
              transform: visible ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 1100ms cubic-bezier(0.22, 0.61, 0.36, 1)",
            }
      }
    />
  );
}
