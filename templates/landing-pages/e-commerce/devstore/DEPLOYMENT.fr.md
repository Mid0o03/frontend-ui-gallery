# Guide de Déploiement

DevStore peut être déployé sur n'importe quel service d'hébergement web moderne. Voici les options les plus populaires.

## 1. Vercel (Recommandé)

La façon la plus simple de déployer est via Vercel :
1. Poussez votre code sur un dépôt GitHub/GitLab/Bitbucket.
2. Importez le projet dans Vercel.
3. Vercel détectera automatiquement Vite et configurera les paramètres de build.
4. Cliquez sur **Deploy**.

## 2. Netlify

1. Poussez votre code sur un fournisseur Git.
2. Créez un nouveau site à partir de Git sur Netlify.
3. Configurez les paramètres de build :
   - **Commande de build** : `npm run build`
   - **Répertoire de publication** : `dist`
4. Cliquez sur **Deploy site**.

## 3. GitHub Pages

Pour déployer sur GitHub Pages :
1. Installez le package `gh-pages` : `npm install gh-pages --save-dev`.
2. Ajoutez un champ `homepage` dans `package.json`.
3. Ajoutez les scripts de déploiement dans `package.json` :
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Lancez `npm run deploy`.

## 4. Déploiement Manuel

Si vous souhaitez l'héberger sur votre propre serveur :
1. Lancez `npm run build`.
2. Téléchargez le contenu du dossier `dist` vers le répertoire public de votre serveur.

## Support :
Pour toute assistance au déploiement, contactez-nous à [contact@midodev.fr](mailto:contact@midodev.fr).
