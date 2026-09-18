// Starts every built app on its assigned port (index 3000, h1 3001 … c5 3030).
// Usage: node scripts/dev-all.mjs
import { spawn } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const appsDir = path.join(root, "apps");

const apps = readdirSync(appsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(path.join(appsDir, d.name, "package.json")))
  .map((d) => d.name)
  .sort();

const PORTS = {
  index: 3000,
  h1: 3001, h2: 3002, h3: 3003, h4: 3004, h5: 3005,
  a1: 3006, a2: 3007, a3: 3008, a4: 3009, a5: 3010,
  i1: 3011, i2: 3012, i3: 3013, i4: 3014, i5: 3015,
  b1: 3016, b2: 3017, b3: 3018, b4: 3019, b5: 3020,
  s1: 3021, s2: 3022, s3: 3023, s4: 3024, s5: 3025,
  c1: 3026, c2: 3027, c3: 3028, c4: 3029, c5: 3030,
};

const procs = [];
for (const app of apps) {
  const id = app.split("-")[0];
  const port = PORTS[id] ?? 3000;
  console.log(`→ ${app} on http://localhost:${port}`);
  const p = spawn("pnpm", ["--filter", app, "dev"], {
    cwd: root,
    stdio: "inherit",
    shell: process.platform === "win32",
    env: { ...process.env, PORT: String(port) },
  });
  procs.push(p);
}

const shutdown = () => {
  procs.forEach((p) => p.kill());
  process.exit(0);
};
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
