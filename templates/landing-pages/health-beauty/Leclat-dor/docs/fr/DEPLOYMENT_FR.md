# Guide de Déploiement

Ce template est une application React statique, ce qui le rend extrêmement facile et peu coûteux à héberger.

[English Version](../en/DEPLOYMENT.md)

## Recommandé : Vercel ou Netlify (Offre Gratuite)

1. **Connectez votre dépôt Git** (GitHub/GitLab/Bitbucket) à votre compte Vercel ou Netlify.
2. **Configuration** :
   - **Framework Preset** : `Vite`
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
3. **Cliquez sur Déployer**. Votre site sera en ligne en moins d'une minute.

## Hébergement Manuel (Hébergement Mutualisé / FTP)

1. Lancez la commande de build localement :
   ```bash
   npm run build
   ```
2. Ouvrez le dossier `dist/`.
3. Téléchargez tous les fichiers du dossier `dist/` à la racine de votre serveur (souvent `public_html` ou `www`).

---

[Retour au README](../../README_FR.md)
