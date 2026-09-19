import { test, expect } from "@playwright/test";

const NAV_LABELS = [
  "The Haveli",
  "Suites",
  "Courtyards",
  "The Banquet",
  "The Ledger",
  "The Collection",
];

test.describe("Home", () => {
  test("renders the hero, primary nav, and page title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/The Alkari/);
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "A haveli, kept for six generations.",
      })
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
      /https:\/\/alkari\.example\/?/
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      /The Alkari/
    );
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /five-suite/
    );
  });

  test("emits LodgingBusiness structured data", async ({ page }) => {
    await page.goto("/");
    const ld = page.locator('script[type="application/ld+json"]');
    await expect(ld.first()).toBeAttached();
    const text = (await ld.first().textContent()) ?? "";
    expect(text).toContain("LodgingBusiness");
  });

  test("shows the mobile reserve bar on small screens", async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
    });
    const page2 = await context.newPage();
    await page2.goto("/");
    await expect(
      page2.getByRole("link", { name: "Reserve a stay" }).last()
    ).toBeVisible();
    await context.close();
  });

  test("opens the mobile menu and navigates", async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
    });
    const page2 = await context.newPage();
    await page2.goto("/");
    await page2.getByRole("button", { name: "Menu" }).click();
    const mobileNav = page2.getByRole("navigation", { name: "Mobile" });
    await expect(
      mobileNav.getByRole("link", { name: "The Haveli", exact: true })
    ).toBeVisible();
    await mobileNav.getByRole("link", { name: "The Haveli", exact: true }).click();
    await expect(page2).toHaveURL(/\/the-haveli$/);
    await context.close();
  });
});
