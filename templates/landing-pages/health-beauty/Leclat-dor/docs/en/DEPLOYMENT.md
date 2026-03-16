# Deployment Guide

[Version Française](../fr/DEPLOYMENT_FR.md)

This template is a static React application, which makes it extremely easy and cheap to host.

## Preferred: Vercel or Netlify (Free Tier)

1. **Connect your Git repository** (GitHub/GitLab/Bitbucket) to your Vercel or Netlify account.
2. **Setup**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. **Click Deploy**. Your site will be live in less than a minute.

## Manual Hosting (Shared Hosting / FTP)

1. Run the build command locally:
   ```bash
   npm run build
   ```
2. Open the `dist/` folder.
3. Upload all files from `dist/` to your server's root (often `public_html` or `www`).

---

[Back to README](../../README.md)
