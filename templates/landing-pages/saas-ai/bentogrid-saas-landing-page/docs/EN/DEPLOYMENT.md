# Deployment Guide

This template is optimized for modern cloud platforms.

## Vercel (Recommended)

1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Connect your repository to [Vercel](https://vercel.com/).
3. Vercel will automatically detect Vite.
4. **Important**: Add your environment variables (from `.env`) in the Vercel project settings.
5. Deploy!

## Netlify

1. Connect your repository to [Netlify](https://www.netlify.com/).
2. Set the build command to `npm run build`.
3. Set the publish directory to `dist`.
4. Add your environment variables in Site Settings > Build & deploy > Environment.

## Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```
2. Upload the contents of the `dist/` folder to your FTP server or any static hosting provider.

---
Need help? Contact [contact@midodev.fr](mailto:contact@midodev.fr)
