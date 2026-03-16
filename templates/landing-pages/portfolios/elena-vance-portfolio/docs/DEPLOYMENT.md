# Deployment Guide

This guide covers how to deploy the Elena Vance Portfolio template to popular hosting platforms.

## Preparing for Deployment

Before deploying, always run the build command to generate the optimized files:
```bash
npm run build
```
The files in the `dist` folder are what you will deploy.

## 1. Vercel (Recommended)

1. **GitHub Integration**: Push your code to a GitHub repository.
2. **Import Project**: Go to [Vercel](https://vercel.com/), click "New Project", and import your repository.
3. **Configure**: Vercel will automatically detect Vite. Ensure the build command is `npm run build` and the output directory is `dist`.
4. **Deploy**: Click "Deploy". Your site will be live in seconds.

## 2. Netlify

1. **GitHub Integration**: Connect your GitHub account to Netlify.
2. **New Site**: Click "Add new site" > "Import an existing project".
3. **Settings**:
   - Build Command: `npm run build`
   - Publish directory: `dist`
4. **Deploy**: Click "Deploy site".

## 3. GitHub Pages

1. **Installation**: Add the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. **Update package.json**: Add a `homepage` field and deploy scripts.
   ```json
   "homepage": "https://<username>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. **Deploy**:
   ```bash
   npm run deploy
   ```

## 4. Manual Hosting (FTP/Shared Hosting)

1. Run `npm run build`.
2. Upload the contents of the `dist` folder to your server's root directory (usually `public_html` or `www`).
3. Ensure your server is configured to serve `index.html` for all routes if you add client-side routing later.
