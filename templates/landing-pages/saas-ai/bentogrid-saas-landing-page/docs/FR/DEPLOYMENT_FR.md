# Guide de Déploiement

Ce template est optimisé pour les plateformes cloud modernes.

## Vercel (Recommandé)

1. Poussez votre code sur un repository GitHub/GitLab/Bitbucket.
2. Connectez votre repository à [Vercel](https://vercel.com/).
3. Vercel détectera automatiquement Vite.
4. **Important**: Ajoutez vos variables d'environnement (depuis `.env`) dans les paramètres du projet Vercel.
5. Déployez !

## Netlify

1. Connectez votre repository à [Netlify](https://www.netlify.com/).
2. Réglez la commande de build sur `npm run build`.
3. Réglez le dossier de publication sur `dist`.
4. Ajoutez vos variables d'environnement dans Site Settings > Build & deploy > Environment.

## Déploiement Manuel

1. Build du projet :
   ```bash
   npm run build
   ```
2. Téléchargez le contenu du dossier `dist/` sur votre serveur FTP ou tout hébergeur statique.

---
Besoin d'aide ? Contactez [contact@midodev.fr](mailto:contact@midodev.fr)
