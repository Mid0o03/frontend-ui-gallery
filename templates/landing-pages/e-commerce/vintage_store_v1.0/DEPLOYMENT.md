# 🚀 Deployment Guide

This template is ready to be deployed on any modern hosting platform.

## Vercel (Recommended)
1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Connect your repository to [Vercel](https://vercel.com/).
3. Vercel will automatically detect the Vite setup and deploy.
4. Set the Build Command to `npm run build` and Output Directory to `dist`.

## Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Select "Import from git" and choose your repository.
3. Build Settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click "Deploy site".

## GitHub Pages
1. Install the `gh-pages` package: `npm install gh-pages --save-dev`.
2. Update `vite.config.ts` to include the `base` property (usually your repo name).
3. Add a deploy script to `package.json`: `"deploy": "gh-pages -d dist"`.
4. Run `npm run build` followed by `npm run deploy`.

---

[Version Française](./docs/DEPLOYMENT_FR.md)
