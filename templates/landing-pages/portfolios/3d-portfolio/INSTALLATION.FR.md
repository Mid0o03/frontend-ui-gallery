# Guide d'Installation

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (v16 ou supérieur)
- [npm](https://www.npmjs.com/) (vient généralement avec Node.js) ou [yarn](https://yarnpkg.com/)

## Installation Pas-à-Pas

1.  **Dézipper le fichier du projet**
    Extrayez le fichier `3d-portfolio-template.zip` téléchargé dans le dossier de votre choix.

2.  **Ouvrir le Terminal**
    Naviguez vers le répertoire du projet :
    ```bash
    cd chemin/vers/3d-portfolio-template
    ```

3.  **Installer les Dépendances**
    Lancez la commande suivante pour installer tous les paquets nécessaires :
    ```bash
    npm install
    # ou
    yarn install
    ```

4.  **Lancer le Serveur de Développement**
    Lancez le serveur local :
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

    Ouvrez votre navigateur et allez sur `http://localhost:5173` (ou le port affiché dans votre terminal).

## Dépannage

- **Erreur : "command not found: npm"**
  - Assurez-vous que Node.js est correctement installé.

- **Conflits de Dépendances**
  - Supprimez le dossier `node_modules` et le fichier `package-lock.json`, puis relancez `npm install`.
