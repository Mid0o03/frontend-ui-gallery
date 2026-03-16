# ⚙️ Guide d'Installation - Lumina Botanicals

Suivez ces étapes pour configurer le template sur votre machine locale.

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (Version 18 ou supérieure recommandée)
- [npm](https://www.npmjs.com/) (généralement inclus avec Node.js)
- Un éditeur de code comme [VS Code](https://code.visualstudio.com/)

## 🚀 Installation Étape par Étape

1. **Téléchargement et Extraction** :
   Décompressez les fichiers du template dans le dossier de votre choix.

2. **Installation des Dépendances** :
   Ouvrez votre terminal dans le dossier du projet et exécutez :
   ```bash
   npm install
   ```

3. **Lancement du Développement** :
   Lancez le serveur de développement pour voir les changements en temps réel :
   ```bash
   npm run dev
   ```
   Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

4. **Build de Production** :
   Une fois prêt pour la mise en ligne, générez les fichiers optimisés :
   ```bash
   npm run build
   ```
   Les fichiers se trouveront dans le dossier `dist`.

## 🔍 Dépannage

- **Erreur de Version Node** : Si vous voyez des erreurs liées à Node.js, vérifiez votre version (`node -v`).
- **Échec de npm install** : Essayez de supprimer le dossier `node_modules` et le fichier `package-lock.json`, puis relancez `npm install`.
- **Port déjà utilisé** : Si le port 5173 est occupé, Vite essaiera automatiquement un autre port. Vérifiez l'URL dans votre terminal.

Besoin d'aide supplémentaire ? Contactez-nous à **contact@midodev.fr**.
