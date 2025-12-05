import { test, expect } from '@playwright/test';

test.describe('Blog Pages', () => {
  test('should display blog listing page', async ({ page }) => {
    await page.goto('/blog');

    // Check page title
    await expect(page).toHaveTitle(/Blog/);

    // Check main heading
    const heading = page.getByRole('heading', { name: 'Blog' });
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
