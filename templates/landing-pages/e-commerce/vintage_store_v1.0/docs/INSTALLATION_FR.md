# ⚙️ Guide d'Installation

Suivez ces étapes pour configurer et lancer le template Retro Vintage Store sur votre machine locale.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (Version 18 ou supérieure recommandée)
- [npm](https://www.npmjs.com/) (généralement inclus avec Node.js) ou Yarn

## Installation Étape par Étape

### 1. Extraire le Template
Décompressez le pack fourni dans le répertoire de projet de votre choix.

### 2. Ouvrir le Terminal
Ouvrez votre terminal et accédez au dossier du projet :
```bash
cd vintage_store_v1.0
```

### 3. Installer les Dépendances
Lancez la commande suivante pour installer tous les paquets nécessaires :
```bash
npm install
```

### 4. Lancer le Serveur de Développement
Démarrez le serveur de développement pour voir le template dans votre navigateur :
```bash
npm run dev
```
L'application sera accessible à l'adresse `http://localhost:5173`.

### 5. Build de Production
Lorsque vous êtes prêt à déployer, créez un build de production :
```bash
npm run build
```
Ceci générera un dossier `dist` contenant les fichiers optimisés pour le déploiement.

## 🛠️ Dépannage

### Problèmes Courants

**1. Erreurs de Dépendances**
Si vous rencontrez des erreurs lors de `npm install`, essayez de vider le cache et de supprimer `node_modules` :
```bash
rm -rf node_modules package-lock.json
npm install
```

**2. Incompatibilité de Version Node**
Assurez-vous d'utiliser une version moderne de Node.js. Vérifiez votre version avec `node -v`.

---

Besoin d'aide supplémentaire ? Contactez-nous à **contact@midodev.fr**.
