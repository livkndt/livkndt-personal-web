import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display the landing page correctly', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle(/Olivia Knoedt/);

    // Check main heading
    const heading = page.getByRole('heading', { name: 'Olivia Knoedt' });
    await expect(heading).toBeVisible();

    // Check tagline
    await expect(page.getByText(/Maker of things/)).toBeVisible();

    // Check landing page links are present
    const main = page.getByRole('main');
    await expect(main.getByRole('link', { name: 'Tech Portfolio' })).toBeVisible();
    await expect(main.getByRole('link', { name: 'Balancing the Stack' })).toBeVisible();
    await expect(main.getByRole('link', { name: "Olive's Makes" })).toBeVisible();
    await expect(main.getByRole('link', { name: 'Archive' })).toBeVisible();
  });

  test('should have no navigation header on home page', async ({ page }) => {
    await page.goto('/');

    // The home page uses showHeader={false}, so no main nav
    const mainNav = page.getByRole('navigation', { name: 'Main navigation' });
    await expect(mainNav).not.toBeVisible();
  });
});

test.describe('Portfolio Page', () => {
  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/about');

    // On mobile, we need to open the hamburger menu first
    const projectName = test.info().project.name;
    const isMobile = projectName?.includes('Mobile') ?? false;

    if (isMobile) {
      // Open mobile menu
      const menuButton = page.getByRole('button', { name: 'Toggle menu' });
      await expect(menuButton).toBeVisible();
      await menuButton.click();
    }

    // Check navigation links - get the inner nav (Navigation component, not header wrapper)
    const nav = page.getByRole('navigation', { name: 'Main navigation' }).nth(1);
    await expect(nav).toBeVisible();

    const homeLink = nav.getByRole('link', { name: 'Home' });
    await expect(homeLink).toBeVisible();

    const experienceLink = nav.getByRole('link', { name: 'Experience' });
    await expect(experienceLink).toBeVisible();

    const archiveLink = nav.getByRole('link', { name: 'Archive' });
    await expect(archiveLink).toBeVisible();
  });

  test('should toggle dark mode', async ({ page }) => {
    await page.goto('/about');

    const themeToggle = page.getByRole('button', { name: 'Toggle dark mode' });
    await expect(themeToggle).toBeVisible();

    // Check initial state (light mode)
    const html = page.locator('html');
    const initialClass = await html.getAttribute('class');
    expect(initialClass).not.toContain('dark');

    // Toggle dark mode
    // Use force click on mobile browsers where elements may overlap
    const projectName = test.info().project.name;
    const isMobile = projectName?.includes('Mobile') ?? false;
    if (isMobile) {
      await themeToggle.click({ force: true });
    } else {
      await themeToggle.click();
    }

    // Check dark mode is applied
    const darkClass = await html.getAttribute('class');
    expect(darkClass).toContain('dark');
  });
});
