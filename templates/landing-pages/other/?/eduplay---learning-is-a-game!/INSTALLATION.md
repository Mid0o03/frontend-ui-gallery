# Installation Guide / Guide d'Installation

[English](#english) | [Français](#fran%C3%A7ais)

---

<a name="english"></a>
## 🚀 English

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.x or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- A Google Cloud API Key (for the AI Mascot Assistant)

### 1. Extraction
Unzip the template folder to your desired location.

### 2. Dependency Installation
Open your terminal in the project directory and run:
```bash
npm install
# or
yarn install
```

### 3. Environment Configuration
Create a `.env` file in the root directory and add your Google GenAI API key:
```env
VITE_GENAI_API_KEY=your_api_key_here
```

### 4. Running the Development Server
```bash
npm run dev
# or
yarn dev
```
The application will be available at `http://localhost:5173`.

### 5. Production Build
```bash
npm run build
# or
yarn build
```

---

<a name="français"></a>
## 🚀 Français

### Prérequis
- [Node.js](https://nodejs.org/) (v16.x ou supérieur)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- Une clé API Google Cloud (pour l'assistant mascotte IA)

### 1. Extraction
Décompressez le dossier du template à l'emplacement souhaité.

### 2. Installation des dépendances
Ouvrez votre terminal dans le répertoire du projet et exécutez :
```bash
npm install
# ou
yarn install
```

### 3. Configuration de l'environnement
Créez un fichier `.env` dans le répertoire racine et ajoutez votre clé API Google GenAI :
```env
VITE_GENAI_API_KEY=votre_cle_api_ici
```

### 4. Lancement du serveur de développement
```bash
npm run dev
# ou
yarn dev
```
L'application sera disponible sur `http://localhost:5173`.

### 5. Build de production
```bash
npm run build
# ou
yarn build
```
---
Support: contact@midodev.fr
