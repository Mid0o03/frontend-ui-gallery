# Deployment Guide

[En français ci-dessous](#français)

Once you've customized your template, follow these guides to launch it live.

## 🚀 Recommended: Vercel or Netlify
Vercel is the easiest way to deploy a Vite + React application.

1. **Create a GitHub/GitLab/Bitbucket repository** and push your code.
2. **Login to Vercel** (vercel.com).
3. **Import New Project** and select your repository.
4. **Deploy**: Vercel will automatically detect Vite and run `npm run build`.

## 🐙 Deployment to GitHub Pages
1. Install the `gh-pages` package: `npm install gh-pages --save-dev`.
2. Update `vite.config.ts` to include `base: '/your-repo-name/'`.
3. Add deployment scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`.

---

<a name="français"></a>
# Guide de Déploiement

Une fois votre template personnalisé, suivez ces guides pour le mettre en ligne.

## 🚀 Recommandé: Vercel ou Netlify
Vercel est la méthode la plus simple pour déployer une application Vite + React.

1. **Créez un dépôt GitHub/GitLab/Bitbucket** et poussez votre code.
2. **Connectez-vous à Vercel** (vercel.com).
3. **Importez le Nouveau Projet** et sélectionnez votre dépôt.
4. **Déployer**: Vercel détectera automatiquement Vite et lancera le build.

## 🐙 Déploiement sur GitHub Pages
1. Installez `gh-pages`: `npm install gh-pages --save-dev`.
2. Mettez à jour `vite.config.ts` avec `base: '/votre-nom-de-repo/'`.
3. Lancez `npm run build` puis poussez le dossier `dist`.
