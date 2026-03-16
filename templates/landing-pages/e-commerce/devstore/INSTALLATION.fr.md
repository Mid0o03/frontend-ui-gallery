# Guide d'Installation

Suivez ces étapes pour installer DevStore sur votre machine locale.

## Prérequis

- **Node.js** : Version 18.x ou supérieure.
- **npm** ou **yarn**.

## 1. Configuration

Clonez le dépôt ou téléchargez les fichiers :

```bash
cd devstore
```

## 2. Installer les Dépendances

Installez les packages requis :

```bash
npm install
```

## 3. Configuration de l'Environnement

Si vous avez des variables d'environnement, créez un fichier `.env` à la racine :

```bash
cp .env.local .env
```

## 4. Lancer le Serveur de Développement

Démarrez le serveur local :

```bash
npm run dev
```

Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

## Dépannage

### Échecs de compilation
- Vérifiez la version de Node.js avec `node -v`.
- Supprimez le dossier `node_modules` et relancez `npm install`.

### Problèmes de Style
- Si vous utilisez la version CDN de Tailwind (par défaut dans `index.html`), assurez-vous d'être connecté à internet.
- Vérifiez `vite.config.ts` pour d'éventuelles erreurs.

### Contact :
Pour toute aide supplémentaire, contactez [contact@midodev.fr](mailto:contact@midodev.fr).
