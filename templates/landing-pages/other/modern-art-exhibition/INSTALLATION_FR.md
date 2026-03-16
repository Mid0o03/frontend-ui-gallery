# Guide d'Installation

Suivez ces étapes pour installer le template Modern Art Exhibition sur votre machine locale.

## Prérequis
- **Node.js** : Version 18.0.0 ou supérieure.
- **npm** : Version 9.0.0 ou supérieure.

## Étape 1 : Configuration Initiale
Extrayez le fichier zip téléchargé dans votre répertoire de projet.

## Étape 2 : Installer les Dépendances
Ouvrez votre terminal et lancez :
```bash
npm install
```

## Étape 3 : Lancer le Serveur de Développement
Lancez la commande suivante pour démarrer le serveur de dev :
```bash
npm run dev
```
L'application sera disponible sur `http://localhost:5173`.

## Étape 4 : Build pour la Production
Lorsque vous êtes prêt à déployer, lancez :
```bash
npm run build
```
Les fichiers de sortie se trouveront dans le dossier `dist`.

## Dépannage
- **Erreur Node Modules** : Si vous rencontrez des problèmes lors de l' `npm install`, essayez de supprimer le dossier `node_modules` et le fichier `package-lock.json`, puis relancez `npm install`.
- **Commande Vite introuvable** : Assurez-vous d'avoir bien lancé `npm install`.
- **Port déjà utilisé** : Vite essaiera automatiquement d'utiliser le prochain port disponible (ex: 5174).
