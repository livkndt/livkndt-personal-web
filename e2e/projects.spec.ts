import { test, expect } from '@playwright/test';

test.describe('Projects Page', () => {
  test('should display the projects page correctly', async ({ page }) => {
    await page.goto('/projects');

    await expect(page).toHaveTitle(/Projects/);

    const heading = page.getByRole('heading', { name: 'Projects', exact: true });
    await expect(heading).toBeVisible();
  });

  test('should render project cards', async ({ page }) => {
    await page.goto('/projects');

    // At least one project article should be visible
    const articles = page.getByRole('article');
    await expect(articles.first()).toBeVisible();
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test('project cards should have a GitHub link when available', async ({ page }) => {
    await page.goto('/projects');

    // The Fleabag Quotes API project has a GitHub link
    const githubLinks = page.getByRole('link', { name: 'GitHub' });
    await expect(githubLinks.first()).toBeVisible();
    const href = await githubLinks.first().getAttribute('href');
    expect(href).toMatch(/github\.com/);
  });

  test('project cards should display tags', async ({ page }) => {
    await page.goto('/projects');

    // Projects have tags — at least one should be visible
    const firstArticle = page.getByRole('article').first();
    const tagList = firstArticle.getByRole('list').last();
    await expect(tagList).toBeVisible();
  });

  test('should be reachable from the portfolio page navigation', async ({ page }) => {
    await page.goto('/about');

    const projectsCard = page.getByRole('link', { name: /Projects/ }).first();
    await projectsCard.click();

    await expect(page).toHaveURL(/\/projects/);
    await expect(page).toHaveTitle(/Projects/);
  });
});
