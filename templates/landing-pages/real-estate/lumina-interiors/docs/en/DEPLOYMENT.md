# Deployment Guide

## Production Build

To create an optimized production build:

```bash
npm run build
```

This generates a `dist` folder containing your static website.

## Deploying to Vercel (Recommended)

1.  Connect your GitHub repository to Vercel.
2.  Vercel will automatically detect the Vite setup.
3.  Deploy.

## Deploying to Netlify

1.  Connect your repository to Netlify.
2.  Set build command to `npm run build` and publish directory to `dist`.
3.  Deploy.

## Deploying to GitHub Pages

1.  Use the `vite-plugin-gh-pages` or a custom GitHub Action to deploy the `dist` folder to the `gh-pages` branch.
