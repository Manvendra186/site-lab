import { test, expect } from "@playwright/test";

test.describe("Reserve form", () => {
  test("shows validation errors when submitted empty", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "Request to reserve" }).click();
    await expect(page.getByText("Please tell us your name.")).toBeVisible();
    await expect(page.getByText("Please enter a valid email address.")).toBeVisible();
    await expect(page.getByText("Please choose an arrival date.")).toBeVisible();
  });

  test("reaches the success state on a valid submission", async ({ page }) => {
    await page.goto("/contact");
    await page.locator("#name").fill("Asha Verma");
    await page.locator("#email").fill("asha@example.com");
    await page.locator("#arrival").fill("2026-10-01");
    await page.locator("#departure").fill("2026-10-04");
    // Guests defaults to "2", which satisfies the schema.

    await page.getByRole("button", { name: "Request to reserve" }).click();
    await expect(page.getByRole("status")).toContainText(
      "Thank you — we have your request."
    );
  });

  test("shows the demo note that nothing is sent or stored", async ({ page }) => {
    await page.goto("/contact");
    await expect(
      page.getByText(/does not send or store anything/i).first()
    ).toBeVisible();
  });
});
