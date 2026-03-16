# Guide d'Installation

Suivez ces étapes pour installer la landing page **L'Éclat d'Or** sur votre machine locale.

[English Version](../en/INSTALLATION.md)

## Prérequis

- **Node.js** : Version 18.0 ou supérieure.
- **npm** ou **yarn** : Inclus avec Node.js.

## Étape 1 : Cloner ou Dézipper
Si vous avez reçu ce projet sous forme de fichier zip, extrayez-le dans le dossier de votre choix.

## Étape 2 : Installer les Dépendances
Ouvrez votre terminal dans le dossier du projet et exécutez :

```bash
npm install
```

## Étape 3 : Lancer le Serveur de Développement
Lancez le projet en mode développement avec rechargement à chaud (hot-reload) :

```bash
npm run dev
```
Le site devrait maintenant être accessible à l'adresse `http://localhost:5173`.

## Étape 4 : Compilation pour la Production
Pour créer une version optimisée pour la production :

```bash
npm run build
```
Cela générera un dossier `dist/` contenant tous les fichiers statiques nécessaires à votre serveur web.

---

[Retour au README](../../README_FR.md)
