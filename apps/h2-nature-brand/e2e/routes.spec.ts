import { test, expect } from "@playwright/test";

const ROUTES = [
  "/",
  "/the-forest",
  "/stays",
  "/stays/fern-room",
  "/stays/moss-room",
  "/stays/fig-room",
  "/stays/bamboo-room",
  "/stays/canopy-room",
  "/days",
  "/the-table",
  "/field-notes",
  "/field-notes/on-the-middle-layer",
  "/field-notes/what-the-mist-does-at-five-thirty",
  "/field-notes/a-note-on-ferns",
  "/field-notes/staying-in-the-shade",
  "/gallery",
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

  test("returns 404 for an unknown room slug", async ({ page }) => {
    const response = await page.goto("/stays/does-not-exist");
    expect(response?.status()).toBe(404);
  });

  test("returns 404 for an unknown field note slug", async ({ page }) => {
    const response = await page.goto("/field-notes/does-not-exist");
    expect(response?.status()).toBe(404);
  });

  test("navigates from the home page to the stays index", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("navigation", { name: "Primary" })
      .getByRole("link", { name: "Stays", exact: true })
      .click();
    await expect(page).toHaveURL(/\/stays$/);
  });
});
