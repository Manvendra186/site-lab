# STATE — single source of truth

Last updated: 2026-09-18 (session 2)
Phase: 1 — Pilot (H1)
Current site: H1 — Sthira (quiet luxury retreat, Udaipur)
Current step: H1 built + verified + QA gate passed (12/12); committed
  [x] Root workspace files (package.json, pnpm-workspace, tsconfig.base, prettier, editorconfig, gitignore)
  [x] AGENTS.md + memory/ system (PROTOCOL, PROGRESS, DECISIONS, CONVENTIONS)
  [x] docs/briefs/TEMPLATE.md + H1 brief (briefed)
  [x] scripts/dev-all.mjs
  [x] packages/shared (thin primitives: Img, Reveal, form kit, seo, Container)
  [x] apps/index (30-Site Test dashboard)
  [x] apps/h1-quiet-luxury scaffold + full build
  [x] pnpm install + build + lint + typecheck verified (H1 + index)
  [x] git init + first commit (Phase 0)
  [x] H1: lint/typecheck/build clean, 22 SSG routes, 404 verified, QA gate 12/12
  [x] H1: build log (docs/build-logs/H1.md) + state + PROGRESS updated + committed
NEXT ACTION: user reviews H1 as the Phase 1 quality bar; on approval, start H2 (Understory, nature-as-brand).
Open items:
- Visual/interactive QA (exact 360px render, form interaction, motion timing) verified via code review +
  SSG HTML inspection, not screenshots (no screenshot tooling in this environment).
- 30-Site Test overlap check runs after each subsequent site (H1 is the baseline).
Recent log:
- Session 2: H1 pilot completed. Fixed shared form-kit RHF type error (z.infer<T> & FieldValues +
  Resolver/DefaultValues casts), layout children typing, header mobile-menu effect (lint), gallery ratio,
  contact/footer centralized data. Re-verified lint/typecheck/build (all exit 0, 22 routes). Verified 404
  for invalid room/journal slugs, all 6 room + 4 journal detail pages, data/image-key consistency. QA gate
  12/12. Wrote docs/build-logs/H1.md, updated state + PROGRESS + DECISIONS, committed.
- Session 1: environment verified (Next 16.3.5, React 19.3, Tailwind 4.3.3, RHF 7.88, zod 4.6.5,
  resolvers 5.9.1); 12 Unsplash URLs verified 200; 33 bedroom candidates 404; root files + memory
  system + H1 brief written.
