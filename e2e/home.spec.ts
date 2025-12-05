import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display the home page correctly', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle(/Olivia Knoedt/);

    // Check main heading
    const heading = page.getByRole('heading', { name: /Hello, I'm/ });
    await expect(heading).toBeVisible();

    // Check social links are present
    const linkedinLink = page.getByRole('link', { name: 'LinkedIn' });
    await expect(linkedinLink).toBeVisible();

    const githubLink = page.getByRole('link', { name: 'GitHub' });
    await expect(githubLink).toBeVisible();
  });

  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/');

    // Check navigation links
    const nav = page.getByRole('navigation', { name: 'Main navigation' });
    await expect(nav).toBeVisible();

    const homeLink = page.getByRole('link', { name: 'Home' });
    await expect(homeLink).toBeVisible();

    const experienceLink = page.getByRole('link', { name: 'Experience' });
    await expect(experienceLink).toBeVisible();

    const blogLink = page.getByRole('link', { name: 'Blog' });
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

