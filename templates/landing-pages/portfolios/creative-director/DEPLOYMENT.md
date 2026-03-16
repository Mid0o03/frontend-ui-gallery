# Deployment Guide

Follow these steps to deploy your portfolio to the web for free.

## 🚀 Vercel (Recommended)
1. Push your code to a **GitHub** repository.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"Add New"** > **"Project"**.
4. Import your repository.
5. Vercel will automatically detect **Vite**.
6. Click **"Deploy"**.

## ☁️ Netlify
1. Sign in to [Netlify](https://netlify.com).
2. Click **"Add new site"** > **"Import an existing project"**.
3. Connect your GitHub.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **"Deploy site"**.

## 🐙 GitHub Pages
1. Install the `gh-pages` package: `npm install gh-pages --save-dev`.
2. Add a `base` property to your `vite.config.ts` matching your repo name.
3. Add deploy scripts to `package.json`.
4. Run `npm run deploy`.

---

# Guide de Déploiement

Suivez ces étapes pour mettre votre portfolio en ligne gratuitement.

## 🚀 Vercel (Recommandé)
1. Poussez votre code sur un dépôt **GitHub**.
2. Connectez-vous à [Vercel](https://vercel.com).
3. Cliquez sur **"Add New"** > **"Project"**.
4. Importez votre dépôt.
5. Vercel détectera automatiquement **Vite**.
6. Cliquez sur **"Deploy"**.

## ☁️ Netlify
1. Connectez-vous à [Netlify](https://netlify.com).
2. Cliquez sur **"Add new site"** > **"Import an existing project"**.
3. Connectez votre GitHub.
4. Configurez la commande de build sur `npm run build` et le dossier de publication sur `dist`.
5. Cliquez sur **"Deploy site"**.
