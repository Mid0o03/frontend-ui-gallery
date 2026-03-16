# Deployment Guide

Learn how to deploy your landing page to the web for free or using professional hosting.

## 🚀 Vercel (Recommended)

Vercel is the best platform for Vite/React projects. It's fast, free (for personal use), and very easy to set up.

1. Create a free account on [Vercel](https://vercel.com/).
2. Install the Vercel CLI: `npm i -g vercel`.
3. Run `vercel` in your project folder and follow the prompts.
4. Alternatively, connect your GitHub repository to Vercel for automatic deployments on every "push".

## ⚡ Netlify

Netlify is another great alternative with a generous free tier.

1. Create a free account on [Netlify](https://www.netlify.com/).
2. Drag and drop your `dist` folder (after running `npm run build`) to the Netlify dashboard.
3. Or connect your Git repository for automated builds.

## 🐙 GitHub Pages

If you want to host for free directly on GitHub:

1. Install the `gh-pages` package: `npm install gh-pages --save-dev`.
2. Add a `homepage` field to your `package.json`: `"homepage": "https://your-username.github.io/your-repo-name"`.
3. Add these scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`.

---

## 🛠 Production Build

Always run the build command before deploying manually:
```bash
npm run build
```
This will create a `dist` folder containing the optimized and ready-to-use version of your site.
