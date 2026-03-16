# Guide d'Installation

Suivez ces étapes pour mettre en service votre landing page.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (v18 ou supérieur recommandé)
- [npm](https://www.npmjs.com/) (généralement inclus avec Node.js)

## Étapes d'Installation

### 1. Extraire le Projet
Si vous avez reçu le template sous forme de fichier ZIP, extrayez-le dans le dossier de votre choix. Si vous utilisez Git, clonez le repository.

### 2. Ouvrir le Terminal
Ouvrez votre terminal et accédez au répertoire du projet :
```bash
cd growthmastery-landing-page
```

### 3. Installer les Dépendances
Lancez la commande suivante pour installer tous les paquets nécessaires :
```bash
npm install
```

### 4. Lancer le Serveur de Développement
Pour voir le site en action localement, lancez :
```bash
npm run dev
```
Ouvrez votre navigateur et allez à `http://localhost:5173`.

---

## Dépannage (Troubleshooting)

### L'installation `npm install` échoue
- Vérifiez votre connexion internet.
- Essayez de vider le cache npm : `npm cache clean --force`.
- Supprimez `node_modules` et `package-lock.json` puis réessayez.

### Le port 5173 est déjà utilisé
Vite essaiera automatiquement d'utiliser le prochain port disponible (ex: 5174). Regardez la sortie du terminal pour trouver l'URL correcte.

### Les styles ne s'affichent pas
- Ce template utilise Tailwind CSS via un CDN pour plus de simplicité. Assurez-vous d'avoir une connexion internet active pendant le développement.
- Si vous avez besoin d'un support hors-ligne, vous devrez installer Tailwind via npm.
