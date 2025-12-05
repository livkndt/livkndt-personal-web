# Personal Website & Blog

A modern, minimal personal website and portfolio with an integrated blog, built with Astro and optimised for mobile-first content management.

## Features

- 🎨 **Modern Design**: Clean, minimal, and professional aesthetic
- 📱 **Mobile-First**: Fully responsive design that works flawlessly on all devices
- 🌙 **Dark Mode**: Automatic dark mode support with manual toggle
- ♿ **Accessible**: WCAG 2.1 AA compliant with semantic HTML and proper ARIA labels
- 🚀 **Performant**: Optimised for Lighthouse scores of 95+ across all metrics
- 📝 **Blog**: Integrated blog with markdown support
- 📊 **Analytics**: Free analytics with Google Analytics 4
- 🔒 **Secure**: CSP headers, secure dependencies, and security best practices
- 🧪 **Tested**: Unit tests and E2E tests for critical paths
- 🔄 **CI/CD**: Automated testing and deployment pipeline

## Tech Stack

- **Framework**: [Astro](https://astro.build/) - Modern static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **CMS**: [Decap CMS](https://decapcms.org/) (formerly Netlify CMS) - Git-based CMS
- **Language**: TypeScript
- **Testing**: Vitest (unit tests), Playwright (E2E tests)
- **Hosting**: Vercel/Netlify/Cloudflare Pages (static hosting)

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, pnpm, or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd livkndt-personal-web
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Update configuration:
   - Edit `src/config.ts` with your personal information
   - Update `astro.config.mjs` with your domain
   - Update `public/robots.txt` with your domain

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:4321](http://localhost:4321) in your browser

## Project Structure

```
├── public/
│   ├── admin/          # Decap CMS configuration
│   └── images/         # Static images
├── src/
│   ├── components/     # Reusable components
│   ├── content/        # Blog posts (markdown)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Astro pages
│   ├── styles/         # Global styles
│   └── config.ts       # Site configuration
├── e2e/                # E2E tests
└── .github/workflows/  # CI/CD configuration
```

## Content Management

### Creating Blog Posts

#### Option 1: Using Decap CMS (Recommended for Mobile)

1. Deploy your site to Netlify (or configure Git Gateway for other hosts)
2. Navigate to `https://yourdomain.com/admin`
3. Log in with your Git provider
4. Click "New Blog Post"
5. Fill in the form and write your content in markdown
6. Click "Publish" to create a commit and deploy

**Mobile Workflow:**

- Open your site on mobile
- Navigate to `/admin`
- Log in with your Git provider
- Create and edit posts with the mobile-friendly interface
- Preview your markdown before publishing

#### Option 2: Direct Git Editing

1. Create a new markdown file in `src/content/blog/`
2. Add frontmatter:

```markdown
---
title: 'Your Post Title'
description: 'A brief description'
pubDate: 2024-01-15
author: 'Your Name'
tags: ['tag1', 'tag2']
draft: false
---

Your content here...
```

3. Commit and push to your repository

**Mobile Git Workflow:**

- Use the GitHub mobile app
- Navigate to your repository
- Edit files directly in the app
- Commit and push changes
- Your site will automatically rebuild

### Updating Experience/Resume

Edit `src/pages/experience.astro` and update the `experiences` array with your work history.

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import your repository in [Netlify](https://netlify.com)
3. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Enable Identity and Git Gateway for Decap CMS
5. Deploy

### Cloudflare Pages

1. Push your code to GitHub
2. Import your repository in [Cloudflare Pages](https://pages.cloudflare.com)
3. Configure build settings:
   - Build Command: `npm run build`
   - Build Output Directory: `dist`
4. Deploy

## Configuration

### Analytics (Google Analytics 4)

1. Sign up at [Google Analytics](https://analytics.google.com)
2. Create a new property and get your Measurement ID (format: G-XXXXXXXXXX)
3. Update `src/config.ts` with your Measurement ID
4. The script is automatically included in the base layout

### Custom Domain

1. Update `astro.config.mjs` with your domain
2. Update `src/config.ts` with your domain
3. Update `public/robots.txt` with your domain
4. Configure DNS according to your hosting provider's instructions

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run unit tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage

## Testing

### Unit Tests

Unit tests are located alongside source files with `.test.ts` extension. Run with:

```bash
npm run test
```

### E2E Tests

E2E tests are in the `e2e/` directory using Playwright.

**First-time setup:**

Install Playwright browsers (required before running tests):

```bash
npx playwright install --with-deps
```

Or install only Chromium (faster, used in pre-commit hook):

```bash
npx playwright install chromium
```

**Running tests:**

```bash
# Run all E2E tests (all browsers)
npm run test:e2e

# Run tests for a specific browser
npx playwright test --project=chromium
```

**Note:** The pre-commit hook will run E2E tests automatically if browsers are installed. If browsers aren't installed, the hook will skip E2E tests with a warning (commit will still proceed).

## Accessibility

This site follows WCAG 2.1 AA guidelines:

- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Sufficient colour contrast
- Responsive design

## Performance

Optimisations include:

- Static site generation
- Image optimisation
- Lazy loading
- Minimal JavaScript
- CSS minification
- Efficient bundling

## Security

Security features:

- Content Security Policy headers
- X-Frame-Options
- X-Content-Type-Options
- Secure dependencies
- Regular dependency updates

## Troubleshooting

### Decap CMS not loading

- Ensure Identity and Git Gateway are enabled (Netlify)
- Check that `public/admin/config.yml` exists
- Verify your Git provider is connected

### Build failures

- Check Node.js version (requires 20+)
- Clear `node_modules` and reinstall
- Check for TypeScript errors: `npm run build`

### Dark mode not working

- Clear browser cache
- Check localStorage for theme preference
- Verify JavaScript is enabled

## Contributing

This is a personal website, but suggestions and improvements are welcome!

## License

All rights reserved. This is a personal website.

## Support

For issues or questions, please open an issue on GitHub.
