# Deployment Guide

## 🔼 Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Connect your repository to [Vercel](https://vercel.com).
3. Vercel will automatically detect Vite and deploy your project.

## 🟦 Netlify

1. Connect your repository to [Netlify](https://netlify.com).
2. Use the following build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

## 🐙 GitHub Pages

1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add the following to your `package.json`:
   ```json
   "homepage": "https://your-username.github.io/your-repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run `npm run deploy`.
