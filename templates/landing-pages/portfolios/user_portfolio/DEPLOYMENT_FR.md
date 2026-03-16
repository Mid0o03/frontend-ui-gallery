# Guide de Déploiement

Une fois que vous avez personnalisé votre portfolio, il est temps de le partager avec le monde.

## 💠 Vercel (Recommandé)

1. Poussez votre code sur un dépôt GitHub/GitLab/Bitbucket.
2. Connectez-vous à [Vercel](https://vercel.com).
3. Cliquez sur "New Project" et sélectionnez votre dépôt.
4. Vercel détectera automatiquement Vite. Cliquez sur "Deploy".
5. Votre site sera en ligne sur un sous-domaine `.vercel.app`.

## ⚡ Netlify

1. Connectez-vous à [Netlify](https://netlify.com).
2. Cliquez sur "Add new site" > "Import an existing project".
3. Connectez votre fournisseur Git et sélectionnez le dépôt.
4. Définissez la commande Build sur `npm run build` et le répertoire Publish sur `dist`.
5. Cliquez sur "Deploy site".

## 🐙 GitHub Pages

1. Dans votre fichier `vite.config.ts`, définissez la propriété `base` sur le nom de votre dépôt :
   ```ts
   export default defineConfig({
     base: '/votre-nom-de-repo/',
     // ...
   })
   ```
2. Compilez votre projet : `npm run build`.
3. Utilisez un outil comme le package `gh-pages` pour déployer :
   ```bash
   npm install gh-pages --save-dev
   ```
4. Ajoutez des scripts de déploiement à `package.json` :
   ```json
   "scripts" : {
     "predeploy" : "npm run build",
     "deploy" : "gh-pages -d dist"
   }
   ```
5. Lancez `npm run deploy`.

## 🚀 Hébergement Manuel

1. Lancez `npm run build`.
2. Téléchargez le contenu du dossier `dist` vers n'importe quel fournisseur d'hébergement statique ou votre propre serveur via FTP/SCP.

Pour des questions sur l'hébergement, contactez **contact@midodev.fr**.
