# Guide de Déploiement

Ce guide explique comment déployer le template Elena Vance Portfolio sur les plateformes d'hébergement les plus populaires.

## Préparation au Déploiement

Avant de déployer, exécutez toujours la commande de build pour générer les fichiers optimisés :
```bash
npm run build
```
Les fichiers du dossier `dist` sont ceux que vous allez déployer.

## 1. Vercel (Recommandé)

1. **Intégration GitHub** : Poussez votre code sur un dépôt GitHub.
2. **Importer le Projet** : Allez sur [Vercel](https://vercel.com/), cliquez sur "New Project" et importez votre dépôt.
3. **Configurer** : Vercel détectera automatiquement Vite. Assurez-vous que la commande de build est `npm run build` et le dossier de sortie `dist`.
4. **Déployer** : Cliquez sur "Deploy". Votre site sera en ligne en quelques secondes.

## 2. Netlify

1. **Intégration GitHub** : Connectez votre compte GitHub à Netlify.
2. **Nouveau Site** : Cliquez sur "Add new site" > "Import an existing project".
3. **Paramètres** :
   - Commande de build : `npm run build`
   - Dossier de publication : `dist`
4. **Déployer** : Cliquez sur "Deploy site".

## 3. GitHub Pages

1. **Installation** : Ajoutez le package `gh-pages` :
   ```bash
   npm install gh-pages --save-dev
   ```
2. **Mettre à jour package.json** : Ajoutez un champ `homepage` et des scripts de déploiement.
   ```json
   "homepage": "https://<username>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. **Déployer** :
   ```bash
   npm run deploy
   ```

## 4. Hébergement Manuel (FTP/Hébergement Mutualisé)

1. Exécutez `npm run build`.
2. Téléchargez le contenu du dossier `dist` sur votre serveur (généralement dans le dossier `public_html` ou `www`).
3. Assurez-vous que votre serveur est configuré pour servir `index.html` pour toutes les routes si vous ajoutez un routage client plus tard.
