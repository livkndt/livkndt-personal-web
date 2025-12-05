# Deployment Guide

This guide covers deploying your personal website to various hosting platforms.

## Prerequisites

- Git repository with your code
- Account on your chosen hosting platform
- Domain name (optional but recommended)

## Vercel Deployment

### Initial Setup

1. **Sign up/Login** to [Vercel](https://vercel.com)
2. **Import Project**:
   - Click "Add New Project"
   - Import your GitHub/GitLab/Bitbucket repository
3. **Configure Project**:
   - Framework Preset: Astro
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Install Command: `npm install` (auto-detected)
4. **Deploy**: Click "Deploy"

### Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `astro.config.mjs` with your domain
5. Update `src/config.ts` with your domain
6. Redeploy

### Environment Variables

If needed, add environment variables in Project Settings → Environment Variables.

## Netlify Deployment

### Initial Setup

1. **Sign up/Login** to [Netlify](https://netlify.com)
2. **Import Project**:
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider
   - Select your repository
3. **Configure Build**:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy**: Click "Deploy site"

### Enable Decap CMS

1. Go to Site Settings → Identity
2. Enable Identity
3. Enable Git Gateway
4. Configure registration (invite-only recommended)
5. Invite yourself via email
6. Access CMS at `https://yourdomain.com/admin`

### Custom Domain

1. Go to Domain Settings
2. Add custom domain
3. Configure DNS according to Netlify's instructions
4. Update `astro.config.mjs` with your domain
5. Update `src/config.ts` with your domain
6. Redeploy

## Cloudflare Pages Deployment

### Initial Setup

1. **Sign up/Login** to [Cloudflare](https://dash.cloudflare.com)
2. **Create Pages Project**:
   - Go to Pages → Create a project
   - Connect your Git repository
3. **Configure Build**:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
4. **Deploy**: Click "Save and Deploy"

### Custom Domain

1. Go to Custom domains
2. Add your domain
3. Follow DNS setup instructions
4. Update `astro.config.mjs` with your domain
5. Update `src/config.ts` with your domain
6. Redeploy

## GitHub Pages Deployment

### Using GitHub Actions

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

2. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: GitHub Actions
3. **Update `astro.config.mjs`**:
```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  // ...
});
```

## Post-Deployment Checklist

- [ ] Update `astro.config.mjs` with your domain
- [ ] Update `src/config.ts` with your domain
- [ ] Update `public/robots.txt` with your domain
- [ ] Update `public/.well-known/security.txt` with your contact info
- [ ] Configure analytics (Google Analytics 4)
- [ ] Test all pages
- [ ] Test mobile responsiveness
- [ ] Verify dark mode works
- [ ] Check accessibility
- [ ] Run Lighthouse audit
- [ ] Set up custom domain (if applicable)
- [ ] Configure Decap CMS (if using Netlify)

## Continuous Deployment

All platforms support automatic deployments:

- **Vercel**: Automatic on push to main branch
- **Netlify**: Automatic on push to main branch
- **Cloudflare Pages**: Automatic on push to main branch
- **GitHub Pages**: Automatic via GitHub Actions

Preview deployments are created for pull requests automatically.

## Troubleshooting

### Build Failures

1. Check build logs in your hosting platform
2. Verify Node.js version (requires 20+)
3. Check for TypeScript errors: `npm run build`
4. Ensure all dependencies are in `package.json`

### CMS Not Working (Netlify)

1. Verify Identity is enabled
2. Check Git Gateway is enabled
3. Ensure you're logged in
4. Check `public/admin/config.yml` exists

### Domain Issues

1. Verify DNS configuration
2. Check SSL certificate status
3. Wait for DNS propagation (up to 48 hours)
4. Clear browser cache

### Performance Issues

1. Run Lighthouse audit
2. Check image optimisation
3. Verify caching headers
4. Review bundle size

## Monitoring

### Analytics

- Google Analytics 4 is automatically included
- View stats at your Google Analytics dashboard

### Error Tracking

Consider adding error tracking:
- Sentry
- LogRocket
- Rollbar

## Security

### SSL/TLS

All platforms provide free SSL certificates:
- Vercel: Automatic
- Netlify: Automatic
- Cloudflare: Automatic
- GitHub Pages: Automatic

### Security Headers

Security headers are configured in:
- `netlify.toml` (Netlify)
- `vercel.json` (Vercel)
- Cloudflare dashboard (Cloudflare Pages)

## Backup

Your content is backed up in Git. For additional backups:

1. Regular Git pushes
2. Export Decap CMS content (if using)
3. Database backups (if applicable)

## Support

For platform-specific issues:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)
- [GitHub Pages Docs](https://docs.github.com/pages)

