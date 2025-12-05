# Mobile Content Creation Workflow

This guide explains how to create and publish blog posts from your mobile phone.

## Option 1: Decap CMS (Recommended)

Decap CMS provides a mobile-friendly web interface for managing your content.

### Setup (One-Time)

1. **Deploy to Netlify** (if not already done):
   - Push your code to GitHub
   - Import repository in Netlify
   - Enable "Identity" and "Git Gateway" in Netlify settings

2. **Configure Identity**:
   - Go to Netlify dashboard → Identity
   - Enable Identity
   - Enable Git Gateway
   - Configure registration (invite-only recommended)

3. **Invite Yourself**:
   - Go to Identity → Invite users
   - Enter your email
   - Accept the invitation

### Creating Posts from Mobile

1. **Open your site** on your mobile browser
2. **Navigate to** `https://yourdomain.com/admin`
3. **Log in** with your email (or GitHub if configured)
4. **Click "New Blog Post"**
5. **Fill in the form**:
   - Title
   - Description
   - Publish Date
   - Tags (optional)
   - Author (defaults to your name)
6. **Write your content** in the markdown editor
7. **Preview** your post using the preview button
8. **Click "Publish"** to save and deploy

### Editing Existing Posts

1. Navigate to `/admin`
2. Click on the post you want to edit
3. Make your changes
4. Click "Save" to update

### Tips for Mobile Writing

- Use the preview feature to check formatting
- Save drafts frequently
- Use markdown shortcuts for faster writing:
  - `#` for headings
  - `**bold**` for bold text
  - `*italic*` for italic text
  - `-` for bullet lists
  - `[link text](url)` for links

## Option 2: GitHub Mobile App

If you prefer direct Git editing, use the GitHub mobile app.

### Setup

1. **Install GitHub App**:
   - iOS: [App Store](https://apps.apple.com/app/github/id1477376905)
   - Android: [Play Store](https://play.google.com/store/apps/details?id=com.github.android)

2. **Log in** to your GitHub account

### Creating Posts

1. **Open GitHub app** and navigate to your repository
2. **Navigate to** `src/content/blog/`
3. **Tap the "+" button** → "Create new file"
4. **Name the file**: Use kebab-case, e.g., `my-new-post.md`
5. **Add frontmatter**:
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

6. **Write your content** below the frontmatter
7. **Commit**:
   - Tap "Commit"
   - Write commit message: "Add new blog post: [title]"
   - Tap "Commit"

### Editing Posts

1. Navigate to the post file
2. Tap "Edit" (pencil icon)
3. Make your changes
4. Commit with a descriptive message

### Tips for GitHub Mobile

- The app has markdown syntax highlighting
- Use the preview feature to check formatting
- Commit messages help track changes
- Your site will auto-deploy on push to main

## Option 3: Mobile Markdown Editors

For a better writing experience, use a mobile markdown editor and copy-paste:

### Recommended Apps

- **iA Writer** (iOS/Android) - Clean, distraction-free writing
- **Markor** (Android) - Free, open-source markdown editor
- **Ulysses** (iOS) - Premium writing app with markdown support

### Workflow

1. **Write your post** in the markdown editor
2. **Copy the content**
3. **Use Decap CMS** or **GitHub app** to create the file
4. **Paste your content**
5. **Add frontmatter** at the top
6. **Publish**

## Best Practices

### Writing on Mobile

- **Keep paragraphs short** for better readability
- **Use headings** to structure your content
- **Add images** through Decap CMS media library
- **Save drafts** frequently
- **Preview before publishing**

### Content Structure

- **Title**: Clear and descriptive
- **Description**: 1-2 sentences summarising the post
- **Tags**: 3-5 relevant tags
- **Body**: Well-structured with headings and paragraphs

### Publishing Workflow

1. Write draft
2. Review and edit
3. Preview formatting
4. Check spelling
5. Publish

## Troubleshooting

### Decap CMS Issues

- **Can't log in**: Check Identity is enabled in Netlify
- **Changes not saving**: Check Git Gateway is enabled
- **Preview not working**: Refresh the page

### GitHub App Issues

- **Can't find files**: Check you're in the correct branch (main)
- **Commit fails**: Check you have write access to the repository
- **Formatting issues**: Ensure proper markdown syntax

### General Issues

- **Site not updating**: Check deployment logs in your hosting provider
- **Images not loading**: Ensure images are in `public/images/`
- **Styling issues**: Clear browser cache

## Quick Reference

### Markdown Cheat Sheet

```markdown
# Heading 1
## Heading 2
### Heading 3

**bold text**
*italic text*

- Bullet point
- Another point

1. Numbered list
2. Second item

[Link text](https://example.com)

![Alt text](image-url)

`inline code`

```code block```
```

### Frontmatter Template

```markdown
---
title: 'Your Post Title'
description: 'A brief description of your post'
pubDate: 2024-01-15
updatedDate: 2024-01-20  # Optional
author: 'Your Name'
image: '/images/your-image.jpg'  # Optional
tags: ['web development', 'astro', 'blogging']
draft: false
---

Your content starts here...
```

## Support

If you encounter issues:

1. Check the main README.md troubleshooting section
2. Review deployment logs
3. Check GitHub issues (if public)
4. Contact support if needed

Happy blogging! 📱✍️

