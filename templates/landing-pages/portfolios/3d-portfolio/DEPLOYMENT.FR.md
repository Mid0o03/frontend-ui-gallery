# Guide de Déploiement

Vous pouvez déployer ce template sur n'importe quel service d'hébergement statique. Voici les guides pour les plus populaires.

## Vercel (Recommandé)

1.  Créez un compte [Vercel](https://vercel.com).
2.  Installez Vercel CLI : `npm i -g vercel`
3.  Lancez `vercel` à la racine du projet.
4.  Suivez les instructions. Vercel détectera automatiquement Vite et configurera le build.
    - **Commande de Build** : `vite build` (ou `npm run build`)
    - **Dossier de Sortie** : `dist`

## Netlify

1.  Créez un compte [Netlify](https://www.netlify.com/).
2.  Glissez-déposez votre dossier de projet sur le tableau de bord Netlify (pour un déploiement manuel).
3.  **Meilleure Méthode (Git)** :
    - Poussez votre code sur GitHub/GitLab.
    - Cliquez sur "New site from Git" sur Netlify.
    - Choisissez votre dépôt.
    - **Commande de build** : `npm run build`
    - **Dossier de publication** : `dist`

## GitHub Pages

1.  Mettez à jour `vite.config.ts` pour définir le chemin de base :
    ```typescript
    export default defineConfig({
      base: '/nom-du-repo/', // Remplacez par le nom de votre dépôt
      plugins: [react()],
    })
    ```
2.  Construisez le projet : `npm run build`
3.  Poussez le contenu du dossier `dist` sur une branche `gh-pages`.
    (Nous recommandons d'utiliser une GitHub Action pour automatiser cela).
