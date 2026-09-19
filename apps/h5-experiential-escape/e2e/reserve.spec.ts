import { expect, test } from "@playwright/test";

test.describe("Reserve flow", () => {
  test("shows validation errors when submitted empty", async ({ page }) => {
    await page.goto("/reserve");

    // Submit with the required fields left empty.
    await page.getByRole("button", { name: /send request/i }).click();

    // The form kit surfaces per-field errors via [data-field-error] (role="alert").
    await expect(page.locator("#name-error")).toBeVisible();
    await expect(page.locator("#email-error")).toBeVisible();
    await expect(page.locator("#arrival-error")).toBeVisible();
    await expect(page.locator("#departure-error")).toBeVisible();

    // The submit button reflects the idle (not submitting) status.
    await expect(page.getByRole("button", { name: /send request/i })).toBeEnabled();
  });

  test("submits successfully and shows the success state", async ({ page }) => {
    await page.goto("/reserve");

    // Fill the required fields.
    await page.fill("#name", "Test Guest");
    await page.fill("#email", "test@example.com");
    await page.fill("#arrival", "2026-10-01");
    await page.fill("#departure", "2026-10-03");
    await page.fill("#guests", "2");

    // Submit — the demo onSubmit resolves after ~700ms.
    await page.getByRole("button", { name: /send request/i }).click();

    // Success state: [data-form-success] with role="status".
    const success = page.locator("[data-form-success]");
    await expect(success).toBeVisible();
    await expect(success).toContainText("Thank you");

    // The submit button reflects the success status.
    await expect(page.locator('button[data-status="success"]')).toBeVisible();
  });

  test("marks invalid fields with aria-invalid", async ({ page }) => {
    await page.goto("/reserve");

    // Blur an empty required field (onBlur validation mode).
    await page.locator("#name").click();
    await page.locator("#email").click();

    await expect(page.locator("#name")).toHaveAttribute("aria-invalid", "true");
  });
});