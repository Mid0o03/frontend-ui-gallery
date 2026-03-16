# Deployment Guide / Guide de Déploiement

## English

This portfolio template can be deployed easily to any static hosting service.

### Vercel (Recommended)
1.  Push your code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com) and sign in.
3.  Click "Add New Project" and import your repository.
4.  Vercel will detect `Vite` automatically.
5.  Click **Deploy**.

### Netlify
1.  Push your code to GitHub.
2.  Go to [Netlify](https://netlify.com) and sign in.
3.  Click "Add new site" -> "Import from Git".
4.  Connect your GitHub repository.
5.  Build settings will be auto-detected (`npm run build`, dist folder: `dist`).
6.  Click **Deploy Site**.

### GitHub Pages
To deploy to GitHub Pages, you may need to adjust `vite.config.ts` base path if not deploying to root domain.
1.  Update `vite.config.ts`: add `base: '/repo-name/'`.
2.  Run `npm run build`.
3.  Deploy the `dist` folder content.

---

## Français

Ce modèle de portfolio peut être déployé facilement sur n'importe quel service d'hébergement statique.

### Vercel (Recommandé)
1.  Poussez votre code sur un dépôt GitHub.
2.  Allez sur [Vercel](https://vercel.com) et connectez-vous.
3.  Cliquez sur "Add New Project" et importez votre dépôt.
4.  Vercel détectera `Vite` automatiquement.
5.  Cliquez sur **Deploy**.

### Netlify
1.  Poussez votre code sur GitHub.
2.  Allez sur [Netlify](https://netlify.com) et connectez-vous.
3.  Cliquez sur "Add new site" -> "Import from Git".
4.  Connectez votre dépôt GitHub.
5.  Les paramètres de build seront détectés (`npm run build`, dossier dist : `dist`).
6.  Cliquez sur **Deploy Site**.

### GitHub Pages
Pour déployer sur GitHub Pages, vous devrez peut-être ajuster le chemin de base dans `vite.config.ts`.
1.  Mettez à jour `vite.config.ts` : ajoutez `base: '/nom-du-repo/'`.
2.  Lancez `npm run build`.
3.  Déployez le contenu du dossier `dist`.
