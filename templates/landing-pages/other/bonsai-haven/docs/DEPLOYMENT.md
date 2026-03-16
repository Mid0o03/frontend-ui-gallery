# Deployment Guide / Guide de Déploiement

## English 🇺🇸

### Vercel (Recommended)

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Import your project into Vercel.
3.  Vercel will detect `Vite` and automatically configure the build settings (`npm run build`, output directory `dist`).
4.  Click **Deploy**.

### Netlify

1.  Push your code to a Git repository.
2.  New site from Git > Select your repository.
3.  Build command: `npm run build`
4.  Publish directory: `dist`
5.  Click **Deploy site**.

### GitHub Pages

1.  Update `vite.config.ts` base URL if deploying to a subdirectory:
    ```ts
    base: '/repo-name/',
    ```
2.  Build the project: `npm run build`
3.  Deploy the `dist` folder using `gh-pages` or GitHub Actions.

---

## Français 🇫🇷

### Vercel (Recommandé)

1.  Poussez votre code sur un dépôt Git (GitHub, GitLab, Bitbucket).
2.  Importez votre projet dans Vercel.
3.  Vercel détectera `Vite` et configurera automatiquement les paramètres de build (`npm run build`, répertoire de sortie `dist`).
4.  Cliquez sur **Deploy**.

### Netlify

1.  Poussez votre code sur un dépôt Git.
2.  Nouveau site depuis Git > Sélectionnez votre dépôt.
3.  Commande de build : `npm run build`
4.  Répertoire de publication : `dist`
5.  Cliquez sur **Deploy site**.

### GitHub Pages

1.  Mettez à jour l'URL de base dans `vite.config.ts` si vous déployez dans un sous-répertoire :
    ```ts
    base: '/nom-du-repo/',
    ```
2.  Construisez le projet : `npm run build`
3.  Déployez le dossier `dist` en utilisant `gh-pages` ou GitHub Actions.
