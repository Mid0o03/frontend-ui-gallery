# Installation Guide / Guide d'Installation

## English 🇺🇸

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/bonsai-haven.git
    cd bonsai-haven
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start development server**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

4.  **Build for production**
    ```bash
    npm run build
    ```
    The build artifacts will be stored in the `dist/` directory.

### Troubleshooting
- **Port already in use**: If port 5173 is busy, Vite will automatically try the next available port. Check the terminal output.
- **Dependency errors**: Delete `node_modules` and `package-lock.json` then run `npm install` again.

---

## Français 🇫🇷

### Prérequis
- Node.js (v18 ou supérieur)
- npm ou yarn

### Étapes

1.  **Cloner le dépôt**
    ```bash
    git clone https://github.com/votre-nom-utilisateur/bonsai-haven.git
    cd bonsai-haven
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```
    L'application sera accessible sur `http://localhost:5173`.

4.  **Construire pour la production**
    ```bash
    npm run build
    ```
    Les fichiers de production seront dans le dossier `dist/`.

### Dépannage
- **Port déjà utilisé** : Si le port 5173 est occupé, Vite essaiera automatiquement le port suivant. Vérifiez la sortie du terminal.
- **Erreurs de dépendances** : Supprimez le dossier `node_modules` et le fichier `package-lock.json`, puis relancez `npm install`.
