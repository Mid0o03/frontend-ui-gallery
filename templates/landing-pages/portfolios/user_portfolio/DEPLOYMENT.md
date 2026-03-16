# Deployment Guide

Once you've customized your portfolio, it's time to share it with the world.

## 💠 Vercel (Recommended)

1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Sign in to [Vercel](https://vercel.com).
3. Click "New Project" and select your repository.
4. Vercel will automatically detect Vite. Click "Deploy".
5. Your site will be live on a `.vercel.app` subdomain.

## ⚡ Netlify

1. Sign in to [Netlify](https://netlify.com).
2. Click "Add new site" > "Import an existing project".
3. Connect your Git provider and select the repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click "Deploy site".

## 🐙 GitHub Pages

1. In your `vite.config.ts`, set the `base` property to your repository name:
   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
     // ...
   })
   ```
2. Build your project: `npm run build`.
3. Use a tool like the `gh-pages` package to deploy:
   ```bash
   npm install gh-pages --save-dev
   ```
4. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
5. Run `npm run deploy`.

## 🚀 Manual Hosting

1. Run `npm run build`.
2. Upload the contents of the `dist` folder to any static hosting provider or your own server via FTP/SCP.

For hosting questions, reach out to **contact@midodev.fr**.
