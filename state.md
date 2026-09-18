# STATE — single source of truth

Last updated: 2026-09-18 (session 1)
Phase: 0 — Scaffold
Current site: — (none yet; H1 pilot is next)
Current step: Phase 0 in progress
  [x] Root workspace files (package.json, pnpm-workspace, tsconfig.base, prettier, editorconfig, gitignore)
  [x] AGENTS.md + memory/ system (PROTOCOL, PROGRESS, DECISIONS, CONVENTIONS)
  [x] docs/briefs/TEMPLATE.md + H1 brief (briefed)
  [x] scripts/dev-all.mjs
  [ ] packages/shared (thin primitives)
  [ ] apps/index (30-Site Test dashboard)
  [ ] apps/h1-quiet-luxury scaffold
  [ ] pnpm install + build + lint + typecheck verified
  [ ] git init + first commit
NEXT ACTION: build packages/shared (image, reveal, form kit, seo, container), then scaffold
apps/index + apps/h1-quiet-luxury with create-next-app (--ts --tailwind --eslint --app --src-dir
--use-pnpm --yes --disable-git), then wire shared into H1 and build the pilot.
Open items:
- Imagery: 12 Unsplash URLs verified 200; more needed for H1 rooms/gallery — fetching candidate
  IDs from Unsplash search pages, must curl-verify before use (DECISIONS #7)
Recent log:
- Session 1: environment verified (Next 16.3.5, React 19.3, Tailwind 4.3.3, RHF 7.88, zod 4.6.5,
  resolvers 5.9.1); 12 Unsplash URLs verified 200; 33 bedroom candidates 404; root files + memory
  system + H1 brief written.
