/**
 * Motion helpers.
 *
 * `prefersReducedMotion` is read on the client only — it is never called
 * during SSR/SSG, so there is no hydration mismatch.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
