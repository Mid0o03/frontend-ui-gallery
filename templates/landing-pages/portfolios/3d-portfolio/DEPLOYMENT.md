# Deployment Guide

You can deploy this template to any static hosting service. Here are the guides for the most popular ones.

## Vercel (Recommended)

1.  Create a [Vercel account](https://vercel.com).
2.  Install Vercel CLI: `npm i -g vercel`
3.  Run `vercel` in the project root.
4.  Follow the prompts. Vercel will automatically detect Vite and set up the build settings.
    - **Build Command**: `vite build` (or `npm run build`)
    - **Output Directory**: `dist`

## Netlify

1.  Create a [Netlify account](https://www.netlify.com/).
2.  Drag and drop your project folder onto the Netlify dashboard (for manual deploy).
3.  **Better Way (Git)**:
    - Push your code to GitHub/GitLab.
    - Click "New site from Git" on Netlify.
    - Choose your repository.
    - **Build command**: `npm run build`
    - **Publish directory**: `dist`

## GitHub Pages

1.  Update `vite.config.ts` to set the base path:
    ```typescript
    export default defineConfig({
      base: '/your-repo-name/', // Replace with your repo name
      plugins: [react()],
    })
    ```
2.  Build the project: `npm run build`
3.  Push the contents of the `dist` folder to a `gh-pages` branch.
    (We recommend using a GitHub Action for this to automate it).
