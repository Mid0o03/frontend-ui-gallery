# Installation Guide | Guide d'Installation

[Français](#version-française) | [English](#english-version)

---

## English Version

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn**

### Step-by-Step Installation
1. **Extract the files**:
   Unzip the template folder to your desired location.
2. **Open Terminal**:
   Navigate to the project folder.
   ```bash
   cd jane-doe-portfolio
   ```
3. **Install Dependencies**:
   Run the following command to install all necessary packages.
   ```bash
   npm install
   ```
4. **Run Locally**:
   Start the development server to see the template in action.
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Troubleshooting
- **Error: `sh: vite: command not found`**: Ensure you ran `npm install` successfully.
- **Port already in use**: Vite will automatically try the next available port, or you can specify one in `vite.config.ts`.
- **White screen**: Check the browser console for errors. Usually caused by missing environment variables or failed dependency installation.

---

## Version Française

### Prérequis
Avant de commencer, assurez-vous d'avoir installé :
- **Node.js** (v18.0.0 ou supérieur)
- **npm** ou **yarn**

### Installation Étape par Étape
1. **Extraire les fichiers** :
   Dézippez le dossier du template à l'emplacement de votre choix.
2. **Ouvrir le Terminal** :
   Naviguez vers le dossier du projet.
   ```bash
   cd jane-doe-portfolio
   ```
3. **Installer les Dépendances** :
   Lancez la commande suivante pour installer tous les paquets nécessaires.
   ```bash
   npm install
   ```
4. **Lancer Localement** :
   Démarrez le serveur de développement pour voir le template en action.
   ```bash
   npm run dev
   ```
   Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

### Dépannage
- **Erreur : `sh: vite: command not found`** : Assurez-vous d'avoir lancé `npm install` avec succès.
- **Port déjà utilisé** : Vite essaiera automatiquement le prochain port disponible, ou vous pouvez en spécifier un dans `vite.config.ts`.
- **Écran blanc** : Vérifiez la console du navigateur pour les erreurs. Généralement causé par des variables d'environnement manquantes ou une installation de dépendances échouée.
