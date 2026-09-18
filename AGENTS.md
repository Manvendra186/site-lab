# AGENTS.md — entry point for any AI agent session

This is a **multi-session, multi-site build**. Do not guess state. Do not relitigate decisions.

## On every session start (mandatory, in order)

1. Read `state.md` (repo root) — current phase, current site, current step, **NEXT ACTION**.
2. Read `memory/PROTOCOL.md` — resume protocol + update discipline.
3. Read `memory/PROGRESS.md` — the 30-site scoreboard.
4. Read the current site's brief: `docs/briefs/<ID>.md` (ID = H1…C5).
5. Read the current site's build log: `docs/build-logs/<ID>.md`.
6. Scan `memory/DECISIONS.md` — prior decisions are final unless the user reopens them.
7. **Verify** the recorded state before trusting it:
   `pnpm install` (if lockfile changed), then for the current app:
   `pnpm --filter <app> lint && pnpm --filter <app> typecheck && pnpm --filter <app> build`
8. Continue **exactly** from the NEXT ACTION recorded in `state.md`.
9. If verification fails, fix the recorded state first and log the discrepancy in the build log.

## While working

- **Heartbeat rule:** update `state.md` + the current site's build log after every completed
  workflow step and **before stopping** (even mid-step: "stopped inside X, Y done, Z not started").
- Follow the per-site workflow in `memory/PROTOCOL.md` §3 (Bible §13).
- Design contract: the Local AI Website Design Bible (source of truth) + `memory/CONVENTIONS.md`.

## Before calling a site done

- 12-dimension QA gate (Bible §14) recorded in `docs/build-logs/<ID>.md`.
- 30-Site Test overlap check against all already-built sites (Bible §19).
- `state.md` + `memory/PROGRESS.md` updated; git commit made.
