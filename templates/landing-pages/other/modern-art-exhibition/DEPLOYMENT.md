# Deployment Guide

Learn how to deploy your Modern Art Exhibition template to popular hosting platforms.

## Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com).
3. Click "New Project" and select your repository.
4. Framework Preset: **Vite**.
5. Click **Deploy**.

## Netlify
1. Log in to [Netlify](https://netlify.com).
2. Select "Add new site" -> "Import from git".
3. Build command: `npm run build`.
4. Publish directory: `dist`.

## GitHub Pages
1. Install the `gh-pages` package: `npm install gh-pages --save-dev`.
2. Update `vite.config.ts`: add `base: '/your-repo-name/'`.
3. Add a deployment script in `package.json`: `"deploy": "gh-pages -d dist"`.
4. Run `npm run build` then `npm run deploy`.

## Hostinger / Other FTP
1. Run `npm run build` locally.
2. Using an FTP client (like FileZilla), upload the contents of the `dist` folder to your `public_html` directory.
