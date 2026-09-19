# STATE — single source of truth

Last updated: 2026-09-19 (session 4)
Phase: 2 — Rollout (H2 done → H3 next)
Current site: H2 — Understory (nature-as-brand forest lodge, Coorg/Kodagu) — **done**
Current step: H2 complete — all gates green, QA gate 12/12, overlap check vs H1 passed, build log written
  [x] H1: built + verified + QA gate passed (12/12) + tests (33 unit / 11 smoke) — user approved as quality bar
  [x] H1 session-4 polish commits (image treatment, luxury elevation) — verified still clean this session
  [x] H2: brief (docs/briefs/H2.md)
  [x] H2: image collection + verification + manifest (docs/assets/H2.md)
  [x] H2: scaffold apps/h2-nature-brand (port 3002)
  [x] H2: data model + shell + pages
  [x] H2: lint/typecheck/build + e2e (lint 0 / typecheck 0 / build 0, 18 routes; 30 e2e + 33 unit pass)
  [x] H2: QA gate 12/12 + overlap check vs H1 + build log (docs/build-logs/H2.md)
  [x] H2: state/PROGRESS/DECISIONS updated + committed
NEXT ACTION: H2 done. Next site is H3 — The Alkari (Heritage Grandeur, port 3003): write docs/briefs/H3.md,
  then collect + verify images, then build. (Await user go-ahead to start H3.)
Open items:
- state.md was one session behind git (session-4 H1 polish commits unrecorded) — reconciled now.
- Visual/interactive QA verified via code review + SSG HTML inspection + Playwright smoke tests (no screenshot tooling).
- 30-Site Test overlap check runs after each subsequent site (H1 is the baseline).
Recent log:
- Session 4 (2026-09-19): User approved H1 as the Phase 1 quality bar → started H2 (Understory,
  nature-as-brand). Re-verified H1 from clean state: lint/typecheck/build all exit 0, 22 routes.
  H2 direction: forest lodge in Coorg (Kodagu, Karnataka); field-guide/herbarium identity —
  specimen numbers, dotted leaders, deep forest greens, Fraunces + Archivo, "drift" motion.
  Distinct from H1 (cream/bronze, hairlines, Cormorant, "settle").
  **H2 completed this session:** all marketing pages built + data reconciled; fixed Next 16 `params`
  Promise on the two dynamic routes (dev SSR 404'd under Playwright); added 30 Playwright e2e tests
  (smoke/routes/reserve/home) — all pass; lint 0 / typecheck 0 / build 0 (18 routes); 33 shared unit
  tests pass; QA gate 12/12; overlap check vs H1 passed (clearly distinct); build log written
  (docs/build-logs/H2.md); state/PROGRESS/DECISIONS updated + committed.
- Session 2: H1 pilot completed. Fixed shared form-kit RHF type error (z.infer<T> & FieldValues +
  Resolver/DefaultValues casts), layout children typing, header mobile-menu effect (lint), gallery ratio,
  contact/footer centralized data. Re-verified lint/typecheck/build (all exit 0, 22 routes). Verified 404
  for invalid room/journal slugs, all 6 room + 4 journal detail pages, data/image-key consistency. QA gate
  12/12. Wrote docs/build-logs/H1.md, updated state + PROGRESS + DECISIONS, committed.
- Session 1: environment verified (Next 16.3.5, React 19.3, Tailwind 4.3.3, RHF 7.88, zod 4.6.5,
  resolvers 5.9.1); 12 Unsplash URLs verified 200; 33 bedroom candidates 404; root files + memory
  system + H1 brief written.
