import { test, expect } from "@playwright/test";

test.describe("Smoke", () => {
  test("home renders with the site title and a heading", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/Understory/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("footer renders the photography credits", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Photography", { exact: true })).toBeVisible();
    // At least one credit line carries a license (Flickr CC).
    await expect(page.getByText(/CC BY/i).first()).toBeVisible();
  });

  test("unknown route returns 404 with the on-brand message", async ({ page }) => {
    const response = await page.goto("/this-page-is-not-in-the-forest");
    expect(response?.status()).toBe(404);
    await expect(
      page.getByRole("heading", { level: 1, name: /not in the forest/i })
    ).toBeVisible();
  });
});
