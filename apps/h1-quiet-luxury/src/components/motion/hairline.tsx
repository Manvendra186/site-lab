"use client";

import { useInView, usePrefersReducedMotion } from "@site-lab/shared";
import { EASE } from "@/lib/motion";
import { cx } from "@/lib/utils";

/** A 1px rule that draws in as it enters the viewport (brief: hairline rules). */
export function Hairline({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const visible = inView || reduced;
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cx("h-px w-full bg-stone", className)}
      style={
        reduced
          ? undefined
          : {
              transform: visible ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transition: `transform 1200ms ${EASE}`,
            }
      }
    />
  );
}
