# Installation Guide / Guide d'Installation

## 🇬🇧 English

### System Requirements
- **Node.js**: Version 18.0.0 or higher.
- **npm**: Version 9.0.0 or higher (usually comes with Node.js).
- **Git**: (Optional) For version control.

### Step-by-Step Installation

1.  **Unpack the Project**
    If you downloaded a ZIP file, extract it to your desired folder.
    If you are cloning from git:
    ```bash
    git clone <repository-url>
    cd bonsai-masterpiece
    ```

2.  **Install Dependencies**
    Navigate to the project folder in your terminal and run:
    ```bash
    npm install
    # or if you use yarn
    yarn install
    ```
    This will download all necessary libraries (React, Vite, Tailwind, etc.) into the `node_modules` folder.

3.  **Start Development Server**
    To start the local development server:
    ```bash
    npm run dev
    ```
    The terminal will show a local URL (usually `http://localhost:5173/`). Open this in your browser to see the site.

### Troubleshooting

- **"command not found: npm"**: Ensure Node.js is installed and added to your system PATH.
- **"EADDRINUSE"**: Port 5173 is busy. Vite will automatically try the next available port (e.g., 5174). Check the terminal output.
- **Missing images**: Ensure the `src/assets` folder contains all required images.

---

## 🇫🇷 Français

### Prérequis Système
- **Node.js** : Version 18.0.0 ou supérieure.
- **npm** : Version 9.0.0 ou supérieure.
- **Git** : (Optionnel) Pour le contrôle de version.

### Installation Étape par Étape

1.  **Décompresser le Projet**
    Si vous avez téléchargé un fichier ZIP, extrayez-le dans le dossier de votre choix.
    
2.  **Installer les Dépendances**
    Ouvrez votre terminal dans le dossier du projet et exécutez :
    ```bash
    npm install
    ```

3.  **Lancer le Serveur de Développement**
    ```bash
    npm run dev
    ```
    Ouvrez l'URL affichée (généralement `http://localhost:5173/`) dans votre navigateur.

### Dépannage

- **"command not found: npm"** : Vérifiez que Node.js est bien installé.
- **"EADDRINUSE"** : Le port 5173 est occupé. Vite utilisera automatiquement le port suivant.
