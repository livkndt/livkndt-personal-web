import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display the home page correctly', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle(/Olivia Knoedt/);

    // Check main heading
    const heading = page.getByRole('heading', { name: /Hello, I'm/ });
    await expect(heading).toBeVisible();

    // Check social links are present (in main content, not footer)
    const main = page.getByRole('main');
    const linkedinLink = main.getByRole('link', { name: 'LinkedIn' });
    await expect(linkedinLink).toBeVisible();

    const githubLink = main.getByRole('link', { name: 'GitHub' });
    await expect(githubLink).toBeVisible();
  });

  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/');

    // Check navigation links - get the inner nav (Navigation component, not header wrapper)
    // The header has two nav elements with "Main navigation", we want the inner one
    const nav = page.getByRole('navigation', { name: 'Main navigation' }).nth(1);
    await expect(nav).toBeVisible();

    // Scope links to the navigation element to avoid conflicts with header logo
    const homeLink = nav.getByRole('link', { name: 'Home' });
    await expect(homeLink).toBeVisible();

    const experienceLink = nav.getByRole('link', { name: 'Experience' });
    await expect(experienceLink).toBeVisible();

    const blogLink = nav.getByRole('link', { name: 'Blog' });
    await expect(blogLink).toBeVisible();
  });

  test('should toggle dark mode', async ({ page }) => {
    await page.goto('/');

    const themeToggle = page.getByRole('button', { name: 'Toggle dark mode' });
    await expect(themeToggle).toBeVisible();

    // Check initial state (light mode)
    const html = page.locator('html');
    const initialClass = await html.getAttribute('class');
    expect(initialClass).not.toContain('dark');

    // Toggle dark mode
    await themeToggle.click();

    // Check dark mode is applied
    const darkClass = await html.getAttribute('class');
    expect(darkClass).toContain('dark');
  });
});
