# CONVENTIONS — invariants every session must keep

## Structure
- One app per site: `apps/<id>-<slug>`. IDs: H1–H5, A1–A5, I1–I5, B1–B5, S1–S5, C1–C5.
- Per-app layout (Bible §12): `src/app/(marketing)/`, `components/{ui,sections,navigation,forms,motion}`, `data/{site.config.ts, content.ts, …}`, `lib/{seo.ts, motion.ts, utils.ts}`, globals.css with `@theme` tokens.
- Content lives in `data/*.ts`. Reusable components must **not** contain hard-coded business copy.

## Shared package (packages/shared)
- Behavior + semantics only. No colors, fonts, radii, shadows, spacing scales, or any visual language.
- Exports: `Img`, `Reveal`/`useInView`/`usePrefersReducedMotion`, `FormKit`/`Field`/`SubmitButton`/`FormSuccess`/`FormError`/`useFormKit`, `buildMetadata`/`jsonLd`/`localBusinessSchema`, `Container`.
- Adding an export? It must be visual-agnostic. Log it in DECISIONS.md.

## Per-site design
- Max 2 font families (display + body).
- One primary CTA per page; visible but not obnoxious.
- At least 2 compositional patterns per page (no repeated card grids).
- Motion: subtle, interruptible, reduced-motion safe; add only after static layout is correct.
- No uniform border-radius/shadow/card structure; no glassmorphism; no gradients (unless the brief says so).
- Mobile: designed, not stacked; no horizontal overflow at 360px.

## Content & trust
- No lorem ipsum. No fake claims, awards, ratings, testimonials, "trusted by" logos.
- Demo contact details must be marked as demo (footer + contact page).
- Fictional brands; "concept website" note in footer + source metadata.
- Images: only curl-verified URLs; manifest at `docs/assets/<ID>.md` with source + license + attribution.

## Accessibility (minimum)
- Skip link; visible `:focus-visible`; alt text (empty for decorative); labeled forms with `aria-invalid`/`aria-describedby`; `prefers-reduced-motion` respected; body text contrast ≥ 4.5:1.
- Required globals.css snippet (no-JS fallback for Reveal):
  `html:not(.js) [data-reveal] { opacity: 1 !important; transform: none !important; }`
- Layout must add the `js` class to `<html>` via an inline script.

## SEO
- Per-page title/meta via `buildMetadata(site, page)`; canonical; local business JSON-LD (`localBusinessSchema`) on home + contact.

## State discipline
- Heartbeat: update `state.md` + build log after every step and before stopping.
- QA gate (12 dimensions) recorded in `docs/build-logs/<ID>.md` before a site is "done".
- 30-Site Test overlap check after each site.
