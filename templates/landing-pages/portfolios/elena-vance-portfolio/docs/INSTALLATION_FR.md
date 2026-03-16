# Guide d'Installation

Suivez ces étapes pour configurer le template Elena Vance Portfolio sur votre machine locale.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- [npm](https://www.npmjs.com/) (généralement inclus avec Node.js)
- [Git](https://git-scm.com/) (optionnel, pour cloner le dépôt)

## Configuration Étape par Étape

1. **Obtenir le Code**
   Clonez le dépôt ou téléchargez le fichier ZIP et extrayez-le.
   ```bash
   git clone <votre-url-repo>
   cd elena-vance-portfolio
   ```

2. **Installer les Dépendances**
   Exécutez la commande suivante dans le répertoire racine :
   ```bash
   npm install
   ```

3. **Environnement de Développement**
   Lancez le serveur de développement local :
   ```bash
   npm run dev
   ```
   Le site sera accessible à l'adresse `http://localhost:5173`.

4. **Build de Production**
   Générez le build de production optimisé :
   ```bash
   npm run build
   ```
   Le résultat sera situé dans le dossier `dist`.

## Dépannage

### L'installation (`npm install`) échoue
- Vérifiez votre version de Node.js (`node -v`).
- Essayez de vider le cache npm : `npm cache clean --force`.
- Supprimez `node_modules` et `package-lock.json`, puis relancez `npm install`.

### Les styles ne se chargent pas
- Assurez-vous de ne pas avoir modifié la configuration Tailwind dans `index.html` sans raison.
- Vérifiez que `index.css` est correctement importé dans `index.html`.

### Port déjà utilisé
- Si le port `5173` est occupé, Vite essaiera automatiquement un autre port (ex: `5174`). Suivez les instructions dans votre terminal.
