# Guide de Déploiement

Apprenez à déployer votre landing page sur le web, gratuitement ou avec un hébergement professionnel.

## 🚀 Vercel (Recommandé)

Vercel est la meilleure plateforme pour les projets Vite/React. C'est rapide, gratuit (pour usage personnel) et très simple à configurer.

1. Créez un compte gratuit sur [Vercel](https://vercel.com/).
2. Installez la CLI Vercel : `npm i -g vercel`.
3. Lancez `vercel` dans le dossier de votre projet et suivez les instructions.
4. Alternativement, connectez votre compte GitHub à Vercel pour des déploiements automatiques à chaque "push".

## ⚡ Netlify

Netlify est une autre excellente alternative avec un plan gratuit généreux.

1. Créez un compte gratuit sur [Netlify](https://www.netlify.com/).
2. Glissez-déposez votre dossier `dist` (après avoir lancé `npm run build`) sur le tableau de bord Netlify.
3. Ou connectez votre repository Git pour des builds automatisés.

## 🐙 GitHub Pages

Si vous souhaitez héberger gratuitement directement sur GitHub :

1. Installez le paquet `gh-pages` : `npm install gh-pages --save-dev`.
2. Ajoutez un champ `homepage` à votre `package.json` : `"homepage": "https://votre-pseudo.github.io/votre-nom-de-repo"`.
3. Ajoutez ces scripts à `package.json` :
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Lancez `npm run deploy`.

---

## 🛠 Build de Production

Lancez toujours la commande de build avant de déployer manuellement :
```bash
npm run build
```
Ceci créera un dossier `dist` contenant la version optimisée et prête à l'emploi de votre site.
