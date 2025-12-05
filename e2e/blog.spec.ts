import { test, expect } from '@playwright/test';

test.describe('Blog Pages', () => {
  test('should display blog listing page', async ({ page }) => {
    await page.goto('/blog');

    // Check page title
    await expect(page).toHaveTitle(/Blog/);

    // Check main heading (h1, not h2 that might contain "Blog" in title)
    const heading = page.getByRole('heading', { name: 'Blog', exact: true }).first();
    await expect(heading).toBeVisible();
  });

  test('should navigate to blog post', async ({ page }) => {
    await page.goto('/blog');

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
