# Guide de Déploiement

## Build de Production

Pour créer un build de production optimisé :

```bash
npm run build
```

Cela génère un dossier `dist` contenant votre site statique.

## Déploiement sur Vercel (Recommandé)

1.  Connectez votre dépôt GitHub à Vercel.
2.  Vercel détectera automatiquement la configuration Vite.
3.  Déployez.

## Déploiement sur Netlify

1.  Connectez votre dépôt à Netlify.
2.  Définissez la commande de build sur `npm run build` et le dossier de publication sur `dist`.
3.  Déployez.

## Déploiement sur GitHub Pages

1.  Utilisez `vite-plugin-gh-pages` ou une GitHub Action personnalisée pour déployer le dossier `dist` sur la branche `gh-pages`.
