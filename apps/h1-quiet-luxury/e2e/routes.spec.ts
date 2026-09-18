import { test, expect } from "@playwright/test";

test.describe("Routes", () => {
  test("renders a valid room detail page", async ({ page }) => {
    const response = await page.goto("/rooms/lake-room");
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("renders a valid journal detail page", async ({ page }) => {
    const response = await page.goto("/journal/on-keeping-a-house-quiet");
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("returns 404 for an unknown room slug", async ({ page }) => {
    const response = await page.goto("/rooms/does-not-exist");
    expect(response?.status()).toBe(404);
  });

  test("returns 404 for an unknown journal slug", async ({ page }) => {
    const response = await page.goto("/journal/does-not-exist");
    expect(response?.status()).toBe(404);
  });

  test("navigates from the home page to the rooms index", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("navigation", { name: "Primary" })
      .getByRole("link", { name: "Rooms", exact: true })
      .click();
    await expect(page).toHaveURL(/\/rooms$/);
  });
});
