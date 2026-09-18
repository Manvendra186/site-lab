"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

export function useInView<T extends Element>(
  options?: IntersectionObserverInit & { once?: boolean }
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const once = options?.once ?? true;
  const threshold = options?.threshold ?? 0.15;
  const rootMargin = options?.rootMargin ?? "0px 0px -10% 0px";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once, threshold, rootMargin]);

  return { ref, inView };
}

export interface RevealProps {
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
 * Slow, calm fade-up reveal. Interruptible (CSS transitions), reduced-motion safe,
 * and no-JS safe via the `html:not(.js) [data-reveal]` fallback (see CONVENTIONS.md).
 */
export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  y = 18,
  duration = 900,
}: RevealProps) {
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
