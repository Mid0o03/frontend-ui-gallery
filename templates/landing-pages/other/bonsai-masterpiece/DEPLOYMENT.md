# Deployment Guide / Guide de Déploiement

## 🇬🇧 English

This template is built with Vite, making it extremely easy to deploy to any static hosting provider.

### Vercel (Recommended)
1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Go to [Vercel](https://vercel.com) and click "Add New Project".
3.  Import your repository.
4.  Vercel will detect Vite. The default settings are correct:
    - **Build Command**: `npm run build`
    - **Output Directory**: `dist`
5.  Click **Deploy**.

### Netlify
1.  Push your code to Git.
2.  Go to [Netlify](https://netlify.com) and click "New site from Git".
3.  Choose your repository.
4.  Settings:
    - **Build command**: `npm run build`
    - **Publish directory**: `dist`
5.  Click **Deploy site**.

### GitHub Pages
1.  Go to your repository settings on GitHub.
2.  Navigate to **Pages**.
3.  Source: **GitHub Actions**.
4.  Use the "Static HTML" workflow or configure a custom workflow to build `npm run build` and deploy the `dist` folder.

---

## 🇫🇷 Français

Ce modèle est construit avec Vite, ce qui le rend extrêmement facile à déployyer sur n'importe quel hébergement statique.

### Vercel (Recommandé)
1.  Poussez votre code sur un dépôt Git.
2.  Allez sur [Vercel](https://vercel.com) et importez votre projet.
3.  Vercel détectera Vite. Paramètres par défaut :
    - **Commande de build** : `npm run build`
    - **Dossier de sortie** : `dist`
4.  Cliquez sur **Deploy**.

### Netlify
1.  Poussez votre code sur Git.
2.  Sur [Netlify](https://netlify.com), choisissez "New site from Git".
3.  Paramètres :
    - **Build command** : `npm run build`
    - **Publish directory** : `dist`
4.  Cliquez sur **Deploy site**.
