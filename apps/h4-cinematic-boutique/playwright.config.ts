import { defineConfig, devices } from "@playwright/test";

/**
 * E2E tests for the H4 "Nocturne" site.
 *
 * A dev server is started on a dedicated port (4176) so the suite is
 * self-contained and does not collide with the app's normal dev port (3004).
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL: "http://localhost:4176",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "pnpm exec next dev -p 4176",
    url: "http://localhost:4176",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
