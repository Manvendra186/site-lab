"use client";

import {
  useInView,
  usePrefersReducedMotion,
} from "@site-lab/shared";
import type { CSSProperties, ElementType, ReactNode } from "react";

export interface FadeProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** ms */
  delay?: number;
  /** ms */
  duration?: number;
}

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * "The fade" — the H4 signature section reveal. Opacity 0 → 1, no
 * translate, like a scene fading up from black. Reduced-motion and
 * no-JS safe (see globals.css `html:not(.js) [data-reveal]`).
 */
export function Fade({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  duration = 1100,
}: FadeProps) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLElement>();
  const visible = inView || reduced;

  const style: CSSProperties = reduced
    ? {}
    : {
        opacity: visible ? 1 : 0,
        transition: `opacity ${duration}ms ${EASE} ${delay}ms`,
        willChange: visible ? undefined : "opacity",
      };

  return (
    <Tag ref={ref as never} className={className} data-reveal style={style}>
      {children}
    </Tag>
  );
}
