# DECISIONS — append-only log

Format: `#N — date — decision — rationale`. Decisions are final unless the user reopens them.

#1 — 2026-09-18 — Monorepo at `c:\Users\manve\Workspace\site-lab` (pnpm workspace) — matches existing repo conventions (ai-qa-copilot); one lockfile, shared primitives, easy 30-Site Test orchestration.
#2 — 2026-09-18 — Next.js 16.3.5 + React 19.3 + TypeScript (strict) — latest stable; App Router per Bible §4.
#3 — 2026-09-18 — Tailwind CSS 4.3.3 with per-site `@theme` tokens — Bible §4/§5; tokens live in each app's globals.css.
#4 — 2026-09-18 — `packages/shared` is thin: Img, Reveal, form kit (RHF+zod), seo helpers, Container. **No visual language** (no colors/fonts/radii/shadows) — protects the 30-Site Test (Bible §19).
#5 — 2026-09-18 — Motion: native CSS transitions + IntersectionObserver (Reveal primitive), not Framer Motion — Bible §4 allows "Framer Motion or native CSS"; zero extra deps, inherently interruptible, reduced-motion safe.
#6 — 2026-09-18 — Forms: React Hook Form 7.88 + zod 4.6.5 + @hookform/resolvers 5.9.1; client-side validation; demo success state; no fake backend claims — Bible §4/§10.
#7 — 2026-09-18 — Imagery: Unsplash (Unsplash License, free use, attribution in manifest). **Only URLs verified 200 via curl are allowed in data files.** Manifest per site at `docs/assets/<ID>.md`.
#8 — 2026-09-18 — State system: `state.md` (root) + `memory/{PROTOCOL,PROGRESS,DECISIONS,CONVENTIONS}.md` + per-site briefs/build-logs; heartbeat rule — user requirement for resumability.
#9 — 2026-09-18 — Ports: index 3000; h1 3001 … c5 3030 (fixed order) — stable URLs for the 30-Site Test dashboard.
#10 — 2026-09-18 — One site at a time; H1 is the pilot quality bar; user reviews before rollout — agreed plan.
#11 — 2026-09-18 — H1 brand: **Sthira**, Udaipur (Rajasthan) — Sanskrit for steadiness/stillness; fits the Quiet Luxury Retreat direction; demo contact details marked as demo.
#12 — 2026-09-18 — H1 palette: paper `#F4F0E8` / ink `#1C1B18` / mist `#E9E4D8` / stone `#D8D2C4` / bronze `#8A6F4D` (large text only) / bronze-deep `#6B5233` (text-safe accent) — Aman DNA stillness; bronze-deep used where small text needs 4.5:1.
#13 — 2026-09-18 — H1 type: Cormorant Garamond (display) + Instrument Sans (body) via next/font — one display + one UI family max (Bible §5.1).
#14 — 2026-09-18 — H1 "14 rooms" is neutral brand copy (brief §Trust); the 6 room detail pages are the featured room *types*, not a data mismatch — intentional, do not "fix" to 14 pages.
#15 — 2026-09-18 — Shared form-kit typing: `useFormKit` uses `z.infer<T> & FieldValues` and casts the zod resolver + default values (importing `Resolver`/`DefaultValues` from react-hook-form) to satisfy RHF — latent type bug surfaced only because H1 consumes the kit; index app unaffected (does not import @site-lab/shared).
#16 — 2026-09-18 — Test stack: Vitest 4 + Testing Library (jsdom) for `packages/shared` unit tests; Playwright (Chromium) for `apps/h1-quiet-luxury` smoke tests. Root `pnpm test` runs both; `pnpm test:unit` / `pnpm test:e2e` run each. Tests join lint/typecheck/build as the completion gate.
#17 — 2026-09-18 — Added `useFormKitState` (wraps RHF `useFormState`) to the shared form kit and fixed H1's reserve form to use it + a real `<form onSubmit={form.handleSubmit(...)}>`. Root cause of the earlier "errors never appear" bug: `form.formState` was a stale snapshot and the form had no submit handler.
