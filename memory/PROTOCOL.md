# PROTOCOL — how this repo is worked (read before every session)

## 1. Resume protocol (mandatory, in order)

1. Read `state.md` (repo root) — current phase, current site, current step, **NEXT ACTION**.
2. Read `memory/PROGRESS.md` — the 30-site scoreboard.
3. Read the current site's brief: `docs/briefs/<ID>.md` (ID = H1…C5).
4. Read the current site's build log: `docs/build-logs/<ID>.md`.
5. Scan `memory/DECISIONS.md` — prior decisions are final unless the user reopens them.
6. **Verify** the recorded state before trusting it:
   - `pnpm install` (if lockfile changed)
   - `pnpm --filter <current-app> lint && pnpm --filter <current-app> typecheck && pnpm --filter <current-app> build`
7. Continue **exactly** from the NEXT ACTION in `state.md`.
8. If verification fails, fix the recorded state first; log the discrepancy in the build log.

## 2. Heartbeat rule (state updates)

Update `state.md` + the current site's build log:
- at the start of a session (after verification),
- after every completed workflow step (Bible §13),
- **before stopping**, even mid-step ("stopped inside X, Y done, Z not started"),
- when a site passes the QA gate.

Never batch state updates to the end of a session.

## 3. Per-site workflow (Bible §13, enforced)

1. Fill the brief (`docs/briefs/<ID>.md`) — all 22 fields, **before any code**.
2. One-paragraph creative direction + 5–8 token text mood board (write into the brief).
3. Sitemap + content model (`data/*.ts`) before JSX.
4. Global shell: header, footer, typography, buttons, container, a11y primitives.
5. Hero + primary conversion block.
6. Core sections — at least **two compositional patterns** (no repeated card grids).
7. Responsive behavior at 360/390/768/1440 deliberately.
8. Motion only after static layout is correct.
9. `lint + typecheck + build` clean.
10. Self-QA gate (§4 below) + 30-Site Test overlap check against already-built sites.

## 4. Self-QA gate (Bible §14) — all 12 must pass

Identity · Hierarchy · Originality · Imagery · Typography · Motion · Mobile · Trust ·
Accessibility · Performance · Functionality · Content.

Record the pass/fail table in `docs/build-logs/<ID>.md`. Any automatic-fail = site is not done.

## 5. 30-Site Test (Bible §19)

After each site passes QA: run `pnpm dev:all`, open the index dashboard (port 3000).
Every site must be identifiable by niche **and** direction from a screenshot alone.
If two sites read as "same template, different colors", re-art-direct the weaker one
**before** starting the next site.

## 6. Phases

- **Phase 0** — scaffold: workspace, shared package, index app, memory/state system.
- **Phase 1** — pilot: H1. User reviews as the quality bar.
- **Phase 2** — rollout: H2–H5, A1–A5, I1–I5, B1–B5, S1–S5, C1–C5, one at a time.
- **Phase 3** — convergence: full 30-Site Test, re-art-direct overlaps, performance pass, optional deploy.

## 7. Definition of done (per site)

Distinctive, fast, responsive, accessible, credible, functional, visibly niche-specific.
If the same UI could be relabeled for another niche with only text/color changes — it is not done.
