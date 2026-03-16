# Deployment Guide / Guide de Déploiement

[English](#english) | [Français](#fran%C3%A7ais)

---

<a name="english"></a>
## 🚀 English

You can deploy EduPlay to any static hosting provider. We recommend **Vercel** or **Netlify** for the best experience.

### 1. Vercel (Recommended)
1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Import the project into [Vercel](https://vercel.com).
3. Add your `VITE_GENAI_API_KEY` in the project settings under **Environment Variables**.
4. Click **Deploy**.

### 2. Netlify
1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Import the project into [Netlify](https://netlify.com).
3. Set the build command to `npm run build` and the publish directory to `dist`.
4. Add your `VITE_GENAI_API_KEY` in **Site Settings > Build & Deploy > Environment**.
5. Click **Deploy Site**.

### 3. GitHub Pages
1. Install the `gh-pages` package: `npm install gh-pages --save-dev`.
2. Update `package.json` with a `homepage` field and deployment scripts.
3. Run `npm run deploy`.

---

<a name="français"></a>
## 🚀 Français

Vous pouvez déployer EduPlay sur n'importe quel hébergeur statique. Nous recommandons **Vercel** ou **Netlify** pour la meilleure expérience.

### 1. Vercel (Recommandé)
1. Poussez votre code vers un dépôt GitHub/GitLab/Bitbucket.
2. Importez le projet dans [Vercel](https://vercel.com).
3. Ajoutez votre `VITE_GENAI_API_KEY` dans les paramètres du projet sous **Environment Variables**.
4. Cliquez sur **Deploy**.

### 2. Netlify
1. Poussez votre code vers un dépôt GitHub/GitLab/Bitbucket.
2. Importez le projet dans [Netlify](https://netlify.com).
3. Définissez la commande de build sur `npm run build` et le répertoire de publication sur `dist`.
4. Ajoutez votre `VITE_GENAI_API_KEY` dans **Site Settings > Build & Deploy > Environment**.
5. Cliquez sur **Deploy Site**.

### 3. GitHub Pages
1. Installez le package `gh-pages` : `npm install gh-pages --save-dev`.
2. Mettez à jour `package.json` avec un champ `homepage` et des scripts de déploiement.
3. Exécutez `npm run deploy`.

---
Support: contact@midodev.fr
