# 🚀 Deployment Guide - Lumina Botanicals

Deploy your site to the web in just a few clicks.

## 1. Prepare for Deployment

Before deploying, always run the build command to ensure your site is optimized:
```bash
npm run build
```
This generates a `dist` folder.

## 2. Deploy to Vercel (Recommended)

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Go to [Vercel](https://vercel.com/) and click "Add New Project".
3. Import your repository.
4. Vercel will automatically detect Vite. Click "Deploy".
5. Your site is live!

## 3. Deploy to Netlify

1. Drag and drop the `dist` folder onto the [Netlify Drop](https://app.netlify.com/drop) page.
2. **OR** connect your GitHub repository for automatic deployments.
3. Ensure the build command is `npm run build` and the publish directory is `dist`.

## 4. Deploy to GitHub Pages

1. In your `vite.config.ts`, ensure `base` is set correctly if you are not using a custom domain:
   ```typescript
   export default defineConfig({
     base: '/repository-name/',
     // ...
   })
   ```
2. Use an action like `peaceiris/actions-gh-pages` to deploy the `dist` folder.

## 5. Manual FTP/Shared Hosting

1. Connect to your server via FTP.
2. Upload the **contents** of the `dist` folder to your public directory (e.g., `public_html`).

Questions about deployment? We're here to help: **contact@midodev.fr**.
