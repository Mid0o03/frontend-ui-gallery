# 🚀 Deployment Guide

This template is optimized for modern web hosting platforms. Follow these guides to take your site live.

## Production Build

Before deploying, always run the build command to generate an optimized version of your site:
```bash
npm run build
```
This will create a `dist` folder containing all the static files.

## 1. Vercel (Recommended)

1. [Push your code to GitHub](https://github.com/new).
2. Go to [Vercel](https://vercel.com/) and log in.
3. Click "New Project" and import your repository.
4. Vercel will auto-detect Vite. Click **Deploy**.

## 2. Netlify

1. Log in to [Netlify](https://www.netlify.com/).
2. Drag and drop your `dist` folder onto the Netlify dashboard OR connect your GitHub repository.
3. Set the build command to `npm run build` and the publish directory to `dist`.
4. Click **Deploy**.

## 3. GitHub Pages

1. In your `vite.config.ts`, add the base path if you are using a subfolder (e.g., `base: '/repo-name/'`).
2. Install the `gh-pages` package: `npm install gh-pages --save-dev`.
3. Add these scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`.

---
For any issues during deployment, contact **contact@midodev.fr**.
