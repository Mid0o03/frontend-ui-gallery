# 🚀 Guide de Déploiement

Ce template est optimisé pour les plateformes d'hébergement web modernes. Suivez ces guides pour mettre votre site en ligne.

## Build de Production

Avant de déployer, lancez toujours la commande de build pour générer une version optimisée de votre site :
```bash
npm run build
```
Cela créera un dossier `dist` contenant tous les fichiers statiques.

## 1. Vercel (Recommandé)

1. [Poussez votre code sur GitHub](https://github.com/new).
2. Allez sur [Vercel](https://vercel.com/) et connectez-vous.
3. Cliquez sur "New Project" et importez votre dépôt.
4. Vercel détectera automatiquement Vite. Cliquez sur **Deploy**.

## 2. Netlify

1. Connectez-vous à [Netlify](https://www.netlify.com/).
2. Glissez-déposez votre dossier `dist` sur le tableau de bord Netlify OU connectez votre dépôt GitHub.
3. Réglez la commande de build sur `npm run build` et le répertoire de publication sur `dist`.
4. Cliquez sur **Deploy**.

## 3. GitHub Pages

1. Dans votre fichier `vite.config.ts`, ajoutez le chemin de base si vous utilisez un sous-dossier (ex: `base: '/nom-du-repo/'`).
2. Installez le paquet `gh-pages` : `npm install gh-pages --save-dev`.
3. Ajoutez ces scripts à votre `package.json` :
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Lancez `npm run deploy`.

---
Pour tout problème lors du déploiement, contactez **contact@midodev.fr**.
