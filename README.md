# livkndt-personal-web

Personal website and blog built with Astro, Tailwind, and Decap CMS, deployed on Netlify.

## Quick Start

### Prerequisites

- Node.js 20+
- npm

### Local setup

```bash
git clone <your-repo-url>
cd livkndt-personal-web
npm install
npm run dev
```

Open `http://localhost:4321`.

## Configuration

Update these files for your own details:

- `src/config.ts` (name, social links, analytics, feature flags)
- `astro.config.mjs` (canonical site URL)
- `public/robots.txt` (sitemap URL)
- `public/.well-known/security.txt` (security contact details)

## Content Publishing

### Option A: Decap CMS on Netlify (recommended)

1. Deploy to Netlify.
2. In Netlify, enable Identity and Git Gateway.
3. Visit `/admin` on your site.
4. Create, edit, and publish posts from the CMS UI (desktop or mobile).

### Option B: Commit markdown directly

Create files in `src/content/blog/` with frontmatter like:

```markdown
---
title: 'Your Post Title'
description: 'A brief description'
pubDate: 2024-01-15
author: 'Your Name'
tags: ['tag1', 'tag2']
draft: false
---
```

## Netlify Deployment

1. Push your branch to GitHub.
2. Import the repository in Netlify.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Enable Identity + Git Gateway if using Decap CMS.

Deployment config and headers live in `netlify.toml`.

## Scripts

- `npm run dev` - local dev server
- `npm run build` - type check and production build
- `npm run preview` - preview production build
- `npm run lint` - ESLint
- `npm run format` - Prettier write
- `npm run format:check` - Prettier check
- `npm run test` - Vitest
- `npm run test:e2e` - Playwright tests

## Testing

### Unit tests

```bash
npm run test -- --run
```

### E2E tests

Install browsers once:

```bash
npx playwright install --with-deps
```

Run tests:

```bash
npm run test:e2e
```

## Maintenance

Recurring checks are automated in GitHub Actions:

- Security scan workflow: `.github/workflows/security.yml`
- Scheduled maintenance workflow: `.github/workflows/maintenance.yml`

Recommended manual cadence:

- Weekly: triage Dependabot, gitleaks, and CodeQL alerts.
- Monthly: review `npm audit --omit=dev --audit-level=high` and outdated deps.
- Quarterly: review CSP/security headers and validate `security.txt` contact info.

## Troubleshooting

- Build errors: run `npm run build` locally and fix type/content issues.
- Decap login issues: verify Netlify Identity + Git Gateway are enabled.
- E2E failures in CI for `/projects`: ensure `PUBLIC_ENABLE_PROJECTS=true` is set for the E2E build step (already configured in CI workflow).

## License

All rights reserved.
