import { test, expect } from '@playwright/test';

test.describe('Archive Page', () => {
  test('should display archive listing page', async ({ page }) => {
    await page.goto('/archive');

    // Check page title
    await expect(page).toHaveTitle(/Archive/);

    // Check main heading
    const heading = page.getByRole('heading', { name: 'Archive', exact: true }).first();
    await expect(heading).toBeVisible();
  });

  test('/blog should redirect to /archive', async ({ page }) => {
    await page.goto('/blog');
    await expect(page).toHaveURL(/\/archive/);
  });

  test('should navigate to blog post', async ({ page }) => {
    await page.goto('/archive');

    // Find first blog post link
    const firstPostLink = page.locator('article a').first();
    if (await firstPostLink.isVisible()) {
      const href = await firstPostLink.getAttribute('href');
      if (href) {
        await firstPostLink.click();
        await expect(page).toHaveURL(new RegExp(href));
      }
    }
  });
});
