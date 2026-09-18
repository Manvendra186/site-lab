import { test, expect } from "@playwright/test";

const NAV_LABELS = [
  "The House",
  "Rooms",
  "Experiences",
  "Dining",
  "Wellness",
  "Journal",
  "Gallery",
];

test.describe("Home", () => {
  test("renders the hero, primary nav, and page title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Sthira/);
    await expect(
      page.getByRole("heading", { level: 1, name: "Stillness, kept." })
    ).toBeVisible();

    const nav = page.getByRole("navigation", { name: "Primary" });
    for (const label of NAV_LABELS) {
      await expect(nav.getByRole("link", { name: label, exact: true })).toBeVisible();
    }
    await expect(nav.getByRole("link", { name: "Reserve", exact: true })).toBeVisible();
  });

  test("exposes a canonical URL and Open Graph tags", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      /https:\/\/sthira\.example\/?/
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      /Sthira/
    );
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /14-room/
    );
  });

  test("emits LodgingBusiness structured data", async ({ page }) => {
    await page.goto("/");
    const ld = page.locator('script[type="application/ld+json"]');
    await expect(ld.first()).toBeAttached();
    const text = (await ld.first().textContent()) ?? "";
    expect(text).toContain("LodgingBusiness");
  });
});
