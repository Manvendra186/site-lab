# Site Lab — 30-Site Design Laboratory

A portfolio of 30 local-business websites across 6 niches (hotels, architects, interiors,
barbers, schools, hospitals), built to the **Local AI Website Design Bible**.

> **Before working in this repo, read [`state.md`](./state.md) and
> [`memory/PROTOCOL.md`](./memory/PROTOCOL.md).**
> This is a multi-session build. State is the contract: it says exactly where the work
> stopped and what to do next.

## Quickstart

```bash
pnpm install
pnpm dev          # index dashboard on http://localhost:3000
pnpm dev:all      # every built site on its assigned port (3001–3030)
pnpm build        # build all apps
pnpm lint         # lint all apps
pnpm typecheck    # typecheck all apps
```

## Layout

```
state.md                  ← single source of truth (phase, site, step, next action)
AGENTS.md                 ← entry point for any AI agent session
memory/                   ← PROTOCOL, PROGRESS (scoreboard), DECISIONS, CONVENTIONS
docs/briefs/<ID>.md       ← per-site brief (22 fields, filled before build)
docs/build-logs/<ID>.md   ← per-site step-level build log
docs/assets/<ID>.md       ← per-site asset manifest (source + license)
apps/index                ← 30-Site Test dashboard (port 3000)
apps/<id>-<slug>          ← one app per site (h1…c5), ports 3001–3030
packages/shared           ← thin primitives only (image, reveal, form kit, seo)
```

## Rules of the lab

- One site at a time. Brief before code. Content in data files, never hard-coded in components.
- `packages/shared` holds behavior and semantics — **no visual language** (no colors, fonts, radii).
- Every site must pass the 12-dimension QA gate and the 30-Site Test before the next begins.
- No lorem ipsum, no fake claims/awards/ratings, no dead buttons. Demo content is marked as demo.
