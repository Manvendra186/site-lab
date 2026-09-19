"use client";

import {
  useInView,
  usePrefersReducedMotion,
} from "@site-lab/shared";
import type { CSSProperties, ElementType, ReactNode } from "react";

export interface AscentProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** ms */
  delay?: number;
  /** px */
  y?: number;
  /** ms */
  duration?: number;
}

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * "The ascent" — the H5 signature section reveal. A slow, deliberate rise
 * (translateY 24px → 0 + opacity), like climbing out of a valley.
 * Reduced-motion and no-JS safe (see globals.css `html:not(.js) [data-reveal]`).
 */
export function Ascent({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  y = 24,
  duration = 1100,
}: AscentProps) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLElement>();
  const visible = inView || reduced;

  const style: CSSProperties = reduced
    ? {}
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : `translateY(${y}px)`,
        transition: `opacity ${duration}ms ${EASE} ${delay}ms, transform ${duration}ms ${EASE} ${delay}ms`,
        willChange: visible ? undefined : "opacity, transform",
      };

  return (
    <Tag ref={ref as never} className={className} data-reveal style={style}>
      {children}
    </Tag>
  );
}