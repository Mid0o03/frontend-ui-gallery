# Guide de Déploiement

Apprenez à déployer votre template Modern Art Exhibition sur les plateformes d'hébergement populaires.

## Vercel (Recommandé)
1. Poussez votre code sur un dépôt GitHub.
2. Connectez-vous à [Vercel](https://vercel.com).
3. Cliquez sur "New Project" et sélectionnez votre dépôt.
4. Framework Preset : **Vite**.
5. Cliquez sur **Deploy**.

## Netlify
1. Connectez-vous à [Netlify](https://netlify.com).
2. Sélectionnez "Add new site" -> "Import from git".
3. Build command : `npm run build`.
4. Publish directory : `dist`.

## GitHub Pages
1. Installez le package `gh-pages` : `npm install gh-pages --save-dev`.
2. Mettez à jour `vite.config.ts` : ajoutez `base: '/votre-nom-de-depot/'`.
3. Ajoutez un script de déploiement dans `package.json` : `"deploy": "gh-pages -d dist"`.
4. Lancez `npm run build` puis `npm run deploy`.

## Hostinger / Autre FTP
1. Lancez `npm run build` localement.
2. En utilisant un client FTP (comme FileZilla), uploadez le contenu du dossier `dist` dans votre répertoire `public_html`.
