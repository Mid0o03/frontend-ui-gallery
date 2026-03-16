# Guide d'Installation

Guide complet étape par étape pour installer et lancer le template Beauty's Gold.

[English](INSTALLATION.md) • **Français**

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 18 ou supérieure)
  - Télécharger sur [nodejs.org](https://nodejs.org/)
  - Vérifier l'installation : `node --version`
  
- **npm** (inclus avec Node.js) ou **yarn**
  - Vérifier npm : `npm --version`

## Étape 1 : Extraire les fichiers du template

1. Téléchargez le fichier ZIP du template
2. Extrayez-le à l'endroit souhaité
3. Ouvrez un terminal dans le dossier extrait

```bash
cd chemin/vers/beauty's-gold-landing-page
```

## Étape 2 : Installer les dépendances

Lancez la commande suivante pour installer tous les paquets requis :

```bash
npm install
```

Ceci installera :
- React & React DOM
- React Router
- TypeScript
- Vite
- Tailwind CSS
- GSAP (animations)
- Toutes les autres dépendances

**Temps estimé :** 1-2 minutes

## Étape 3 : Lancer le serveur de développement

Démarrez le serveur de développement local :

```bash
npm run dev
```

Vous devriez voir une sortie comme :

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

## Étape 4 : Ouvrir dans le navigateur

Ouvrez votre navigateur et allez sur :

```
http://localhost:3000
```

Vous devriez voir la landing page Beauty's Gold ! 🎉

## Dépannage

### Port 3000 déjà utilisé

Si le port 3000 est déjà utilisé, vous pouvez :

**Option 1 :** Arrêter l'autre processus utilisant le port 3000

**Option 2 :** Utiliser un port différent :

Modifiez `vite.config.ts` :

```typescript
export default defineConfig({
  server: {
    port: 3001, // Changez pour n'importe quel port disponible
  },
});
```

### Erreurs "Module not found"

Si vous voyez des erreurs "Module not found" :

1. Supprimez le dossier `node_modules`
2. Supprimez le fichier `package-lock.json`
3. Relancez `npm install`

```bash
rm -rf node_modules package-lock.json
npm install
```

### Styles Tailwind non chargés

Si les styles ne se chargent pas :

1. Assurez-vous que `src/index.css` existe
2. Vérifiez que `index.html` lie bien `/src/index.css`
3. Redémarrez le serveur de dev (`Ctrl+C` puis `npm run dev`)

### Erreurs TypeScript

Si vous voyez des erreurs TypeScript :

1. Assurez-vous que toutes les dépendances sont installées
2. Essayez de redémarrer votre IDE/éditeur
3. Lancez `npm run build` pour voir s'il s'agit juste d'avertissements de l'éditeur

## Build pour la Production

Pour créer un build de production optimisé :

```bash
npm run build
```

Ceci crée un dossier `dist/` avec les fichiers optimisés prêts pour le déploiement.

Pour prévisualiser le build de production localement :

```bash
npm run preview
```

## Étapes Suivantes

- ✅ Le template fonctionne localement
- 📝 [Personnalisez votre contenu](CUSTOMIZATION.fr.md)
- 🎨 [Changez les couleurs et l'image de marque](CUSTOMIZATION.fr.md#branding)
- 🚀 [Déployez en production](DEPLOYMENT.fr.md)

## Besoin d'aide ?

- 📧 Email : support@yourtemplate.com
- 📖 [Guide de Personnalisation](CUSTOMIZATION.fr.md)
- 🚀 [Guide de Déploiement](DEPLOYMENT.fr.md)
