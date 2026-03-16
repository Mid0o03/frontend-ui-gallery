# Deployment Guide

DevStore can be deployed to any modern web hosting service. Here are the most popular options.

## 1. Vercel (Recommended)

The easiest way to deploy is through Vercel:
1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Import the project into Vercel.
3. Vercel will automatically detect Vite and configure the build settings.
4. Click **Deploy**.

## 2. Netlify

1. Push your code to a Git provider.
2. Create a new site from Git on Netlify.
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy site**.

## 3. GitHub Pages

To deploy on GitHub Pages:
1. Install the `gh-pages` package: `npm install gh-pages --save-dev`.
2. Add a `homepage` field to `package.json`.
3. Add deploy scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`.

## 4. Manual Deployment

If you want to host it on your own server:
1. Run `npm run build`.
2. Upload the contents of the `dist` folder to your server's public directory.

## Support:
For deployment assistance, contact us at [contact@midodev.fr](mailto:contact@midodev.fr).
