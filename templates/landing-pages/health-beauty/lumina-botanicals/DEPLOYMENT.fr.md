# 🚀 Guide de Déploiement - Lumina Botanicals

Mettez votre site en ligne en quelques clics seulement.

## 1. Préparer le Déploiement

Avant de déployer, lancez toujours la commande de build pour optimiser votre site :
```bash
npm run build
```
Cela génère un dossier `dist`.

## 2. Déployer sur Vercel (Recommandé)

1. Poussez votre code sur un dépôt GitHub, GitLab ou Bitbucket.
2. Allez sur [Vercel](https://vercel.com/) et cliquez sur "Add New Project".
3. Importez votre dépôt.
4. Vercel détectera automatiquement Vite. Cliquez sur "Deploy".
5. Votre site est en ligne !

## 3. Déployer sur Netlify

1. Faites glisser le dossier `dist` sur la page [Netlify Drop](https://app.netlify.com/drop).
2. **OU** connectez votre dépôt GitHub pour des déploiements automatiques.
3. Assurez-vous que la commande de build est `npm run build` et le dossier de sortie est `dist`.

## 4. Déployer sur GitHub Pages

1. Dans votre fichier `vite.config.ts`, assurez-vous que `base` est correct si vous n'utilisez pas de domaine personnalisé :
   ```typescript
   export default defineConfig({
     base: '/nom-du-depot/',
     // ...
   })
   ```
2. Utilisez une action comme `peaceiris/actions-gh-pages` pour déployer le dossier `dist`.

## 5. Hébergement par FTP / Mutualisé

1. Connectez-vous à votre serveur via FTP.
2. Téléversez le **contenu** du dossier `dist` dans votre répertoire public (ex: `public_html`).

Des questions sur le déploiement ? Nous sommes là pour vous aider : **contact@midodev.fr**.
