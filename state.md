# STATE — single source of truth

Last updated: 2026-09-19 (session 6)
Phase: 2 — Rollout (H1 + H2 + H3 + H4 done → H5 in progress)
Current site: H5 — Safar (Experiential Escape) — **brief + assets + scaffold next**
Current step: H4 complete (QA gate 12/12 + overlap check vs H1/H2/H3 + build log docs/build-logs/H4.md + state/PROGRESS/DECISIONS updated). Now H5 (Safar, Experiential Escape): write docs/briefs/H5.md, collect + verify images (docs/assets/H5.md), scaffold apps/h5-experiential-escape (port 3005), build data model + shell + pages.
  [x] H1: built + verified + QA gate passed (12/12) + tests (33 unit / 11 smoke) — user approved as quality bar
  [x] H1 session-4 polish commits (image treatment, luxury elevation) — verified still clean this session
  [x] H2: brief (docs/briefs/H2.md)
  [x] H2: image collection + verification + manifest (docs/assets/H2.md)
  [x] H2: scaffold apps/h2-nature-brand (port 3002)
  [x] H2: data model + shell + pages
  [x] H2: lint/typecheck/build + e2e (lint 0 / typecheck 0 / build 0, 18 routes; 30 e2e + 33 unit pass)
  [x] H2: QA gate 12/12 + overlap check vs H1 + build log (docs/build-logs/H2.md)
  [x] H2: state/PROGRESS/DECISIONS updated + committed
  [x] H3: brief (docs/briefs/H3.md) — The Alkari, heritage haveli, Jaisalmer; ivory/maroon/gold; Marcellus + Karla; "gild" motion; diamond ornament + numbered lineage
  [x] H3: image collection + verification + manifest (docs/assets/H3.md) — 30 CC-licensed images, all curl-verified 200
  [x] H3: scaffold apps/h3-heritage-grandeur (port 3003)
  [x] H3: data model + shell + pages (await params on all dynamic routes from the start)
  [x] H3: lint/typecheck/build + e2e (lint 0 / typecheck 0 / build 0, 15 routes; 26 e2e pass)
  [x] H3: QA gate 12/12 + overlap check vs H1/H2 + build log (docs/build-logs/H3.md)
  [x] H3: state/PROGRESS/DECISIONS updated + committed
  [x] H4: brief (docs/briefs/H4.md) — Nocturne, cinematic boutique, Mumbai (old film district); charcoal/silver/tungsten; Bebas Neue + Space Grotesk; "flicker" + "fade" motion; timecode + sprocket motif
  [x] H4: image collection + verification + manifest (docs/assets/H4.md)
  [x] H4: scaffold apps/h4-cinematic-boutique (port 3004)
  [x] H4: data model + shell + pages (13 content routes; 5 room details: The Lobby/Reel/Cut/Fade/Frame)
  [x] H4: lint/typecheck/build + e2e (lint 0 / typecheck 0 / build 0, 13 routes; 3 e2e pass)
  [x] H4: QA gate 12/12 + overlap check vs H1/H2/H3 + build log (docs/build-logs/H4.md)
  [x] H4: state/PROGRESS/DECISIONS updated + committed
  [ ] H5: brief (docs/briefs/H5.md) — Safar, experiential escape — NEXT
  [ ] H5: image collection + verification + manifest (docs/assets/H5.md)
  [ ] H5: scaffold apps/h5-experiential-escape (port 3005)
  [ ] H5: data model + shell + pages (await params on all dynamic routes from the start, decision #18)
  [ ] H5: lint/typecheck/build + e2e
  [ ] H5: QA gate 12/12 + overlap check vs H1/H2/H3/H4 + build log (docs/build-logs/H5.md)
  [ ] H5: state/PROGRESS/DECISIONS updated + committed
NEXT ACTION: H5 (Safar, Experiential Escape) — write docs/briefs/H5.md (all 22 fields + creative direction + mood board), then collect + verify images (docs/assets/H5.md), then complete the scaffold apps/h5-experiential-escape (port 3005) with data model + shell + pages. Use `await params` on all dynamic routes from the start (decision #18).
Open items:
- state.md was one session behind git (session-4 H1 polish commits unrecorded) — reconciled in session 4.
- Visual/interactive QA verified via code review + SSG HTML inspection + Playwright smoke tests (no screenshot tooling).
- 30-Site Test overlap check runs after each subsequent site (H1 is the baseline; H2 vs H1, H3 vs H1/H2, H4 vs H1/H2/H3 all passed).
Recent log:
- Session 6 (2026-09-19): H4 (Nocturne, Cinematic Boutique, Mumbai) built + validated + QA gate passed.
  Brief (docs/briefs/H4.md) + assets (docs/assets/H4.md) + scaffold (port 3004) + data model +
  all pages (13 content routes: home, house, rooms, 5 room details, bar, projection, archive,
  day, reserve). Dark-first cinematic identity: charcoal/silver/tungsten palette, Bebas Neue +
  Space Grotesk, "flicker" (projector-lamp) + "fade" (fade-up from black) motion, timecode +
  sprocket motif. Fixed RoomCard missing `index` prop, unescaped apostrophe, unused `Label` import.
  lint 0 / typecheck 0 / build 0 (13 routes). Wrote e2e/reserve.spec.ts (3 Playwright tests:
  empty-submit validation, submit→success state, aria-invalid) — all pass.
  QA gate 12/12; overlap check vs H1/H2/H3 passed (clearly distinct — the only dark-first site);
  build log written (docs/build-logs/H4.md); state/PROGRESS/DECISIONS updated + committed.
  **Now starting H5 (Safar, Experiential Escape).**
- Session 5 (2026-09-19): User approved starting H3. Wrote docs/briefs/H3.md — The Alkari, a heritage
  haveli in the Jaisalmer fort kept by the Alkari family for six generations. Ivory/maroon/gold palette;
  Marcellus + Karla; "gild" motion (slow light sweep); diamond ornament + numbered lineage motif.
  Distinct from H1 (cream/bronze, hairlines, Cormorant, "settle") and H2 (forest green, dotted leaders,
  Fraunces, "drift").
  **H3 completed this session:** 30 CC-licensed images collected + verified (docs/assets/H3.md);
  scaffolded apps/h3-heritage-grandeur (port 3003); built data model + shell + all pages (15 routes,
  `await params` on the dynamic suite route from the start); lint 0 / typecheck 0 / build 0; 26 Playwright
  e2e tests pass (smoke/routes/reserve/home); standalone visual QA pass (mobile/tablet/desktop/reduced-motion);
  QA gate 12/12; overlap check vs H1/H2 passed (clearly distinct); build log written (docs/build-logs/H3.md);
  state/PROGRESS/DECISIONS updated + committed.
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
