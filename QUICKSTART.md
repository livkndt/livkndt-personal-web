# Quick Start Guide

Get your personal website up and running in 5 minutes.

## 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

## 2. Configure Your Site

Edit `src/config.ts` and update:
- Your name
- Social media links (LinkedIn, GitHub, Medium, Substack)
- Domain URL
- Analytics Measurement ID (if using Google Analytics 4)

## 3. Update Experience

Edit `src/pages/experience.astro` and add your work history to the `experiences` array.

## 4. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321)

## 5. Create Your First Blog Post

### Option A: Using Decap CMS (After Deployment)

1. Deploy to Netlify
2. Enable Identity and Git Gateway
3. Visit `/admin` on your site
4. Create a new post

### Option B: Direct File Creation

Create `src/content/blog/my-first-post.md`:

```markdown
---
title: 'My First Post'
description: 'A brief description'
pubDate: 2024-01-15
author: 'Your Name'
tags: ['blogging']
draft: false
---

Your content here...
```

## 6. Deploy

Choose your platform:

- **Vercel**: Import repo, auto-detects Astro
- **Netlify**: Import repo, set build command to `npm run build`
- **Cloudflare Pages**: Import repo, set build output to `dist`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Next Steps

- Read [README.md](./README.md) for full documentation
- Check [MOBILE_WORKFLOW.md](./MOBILE_WORKFLOW.md) for mobile content creation
- Customise the design in `src/styles/global.css`
- Add your own images to `public/images/`

## Need Help?

- Check the [README.md](./README.md) troubleshooting section
- Review platform-specific docs in [DEPLOYMENT.md](./DEPLOYMENT.md)
- Check GitHub issues (if public)

Happy building! 🚀

