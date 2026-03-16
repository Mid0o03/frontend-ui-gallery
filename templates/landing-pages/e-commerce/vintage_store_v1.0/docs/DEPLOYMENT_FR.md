# 🚀 Guide de Déploiement

Ce template est prêt à être déployé sur n'importe quelle plateforme d'hébergement moderne.

## Vercel (Recommandé)
1. Poussez votre code vers un dépôt GitHub, GitLab ou Bitbucket.
2. Connectez votre dépôt à [Vercel](https://vercel.com/).
3. Vercel détectera automatiquement la configuration Vite et déploiera.
4. Réglez la commande de build sur `npm run build` et le répertoire de sortie sur `dist`.

## Netlify
1. Connectez-vous à [Netlify](https://www.netlify.com/).
2. Sélectionnez "Import from git" et choisissez votre dépôt.
3. Paramètres de build :
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Cliquez sur "Deploy site".

## GitHub Pages
1. Installez le paquet `gh-pages` : `npm install gh-pages --save-dev`.
2. Mettez à jour `vite.config.ts` pour inclure la propriété `base` (généralement le nom de votre dépôt).
3. Ajoutez un script de déploiement dans `package.json` : `"deploy": "gh-pages -d dist"`.
4. Lancez `npm run build` puis `npm run deploy`.

---

[README en Français](./README_FR.md)
