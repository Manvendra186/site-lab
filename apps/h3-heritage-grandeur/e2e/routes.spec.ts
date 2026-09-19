import { test, expect } from "@playwright/test";

const ROUTES = [
  "/",
  "/the-haveli",
  "/suites",
  "/suites/durbar",
  "/suites/jharokha",
  "/suites/peacock",
  "/suites/courtyard",
  "/suites/sandstone",
  "/courtyards",
  "/banquet",
  "/ledger",
  "/collection",
  "/reserve",
];

test.describe("Routes", () => {
  for (const route of ROUTES) {
    test(`${route} renders with a heading`, async ({ page }) => {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    });
  }

  test("returns 404 for an unknown suite slug", async ({ page }) => {
    const response = await page.goto("/suites/does-not-exist");
    expect(response?.status()).toBe(404);
  });

  test("navigates from the home page to the suites index", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("navigation", { name: "Primary" })
      .getByRole("link", { name: "Suites", exact: true })
      .click();
    await expect(page).toHaveURL(/\/suites$/);
  });
});
