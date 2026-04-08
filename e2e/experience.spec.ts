import { test, expect } from '@playwright/test';

test.describe('Experience Page', () => {
  test('should display the experience page correctly', async ({ page }) => {
    await page.goto('/experience');

    await expect(page).toHaveTitle(/Experience/);

    const heading = page.getByRole('heading', { name: 'Experience', exact: true });
    await expect(heading).toBeVisible();
  });

  test('should render experience entries', async ({ page }) => {
    await page.goto('/experience');

    // There are multiple experience entries — at least one article should be visible
    const articles = page.getByRole('article');
    await expect(articles.first()).toBeVisible();
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test('each experience entry should have a job title heading', async ({ page }) => {
    await page.goto('/experience');

    // Each article has an h2 with the job title
    const firstArticle = page.getByRole('article').first();
    const jobTitle = firstArticle.getByRole('heading', { level: 2 });
    await expect(jobTitle).toBeVisible();
  });

  test('should be reachable from the portfolio page navigation', async ({ page }) => {
    await page.goto('/about');

    const experienceCard = page.getByRole('link', { name: /Experience/ }).first();
    await experienceCard.click();

    await expect(page).toHaveURL(/\/experience/);
    await expect(page).toHaveTitle(/Experience/);
  });
});
