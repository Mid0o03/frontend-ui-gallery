# Installation Guide

[En français ci-dessous](#français)

Follow these steps to set up Matcha Moments on your local machine.

## Prerequisites
- **Node.js**: Version 18.x or higher
- **npm**: Included with Node.js

## Step-by-Step Installation

1. **Unzip the files**: Extract the download package to your desired project folder.
2. **Open Terminal**: Navigate to the project directory.
   ```bash
   cd matcha-moments
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Run Development Server**:
   ```bash
   npm run dev
   ```
5. **Open Browser**: Go to `http://localhost:5173`.

## Troubleshooting
- **`sh: vite: command not found`**: Ensure you ran `npm install` successfully.
- **Port already in use**: Vite will automatically try the next available port (e.g., 5174).
- **Node Version Error**: Check your node version with `node -v`. Use NVM to switch if necessary.

---

<a name="français"></a>
# Guide d'Installation

Suivez ces étapes pour installer Matcha Moments sur votre machine locale.

## Prérequis
- **Node.js**: Version 18.x ou supérieure
- **npm**: Inclus avec Node.js

## Installation Pas à Pas

1. **Décompresser les fichiers**: Extrayez le pack de téléchargement dans le dossier de votre choix.
2. **Ouvrir le Terminal**: Naviguez vers le dossier du projet.
   ```bash
   cd matcha-moments
   ```
3. **Installer les Dépendances**:
   ```bash
   npm install
   ```
4. **Lancer le serveur de développement**:
   ```bash
   npm run dev
   ```
5. **Ouvrir le Navigateur**: Allez sur `http://localhost:5173`.

## Dépannage
- **`sh: vite: command not found`**: Assurez-vous que `npm install` s'est terminé sans erreur.
- **Port déjà utilisé**: Vite essaiera automatiquement le port suivant (ex: 5174).
- **Erreur de version Node**: Vérifiez avec `node -v`. Utilisez NVM pour changer de version si besoin.
