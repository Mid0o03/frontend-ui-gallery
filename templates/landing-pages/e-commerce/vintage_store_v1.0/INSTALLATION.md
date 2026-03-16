# ⚙️ Installation Guide

Follow these steps to set up and run the Retro Vintage Store template on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js) or Yarn

## Step-by-Step Installation

### 1. Extract the Template
Unzip the provided package into your desired project directory.

### 2. Open Terminal
Open your terminal or command prompt and navigate to the project folder:
```bash
cd vintage_store_v1.0
```

### 3. Install Dependencies
Run the following command to install all necessary packages:
```bash
npm install
```

### 4. Run Development Server
Start the development server to view the template in your browser:
```bash
npm run dev
```
The application will be accessible at `http://localhost:5173` (or the port specified in your terminal).

### 5. Production Build
When you are ready to deploy, create a production build:
```bash
npm run build
```
This will generate a `dist` folder containing the optimized assets for deployment.

## 🛠️ Troubleshooting

### Common Issues

**1. Dependency Errors**
If you encounter errors during `npm install`, try clearing the cache and deleting `node_modules`:
```bash
rm -rf node_modules package-lock.json
npm install
```

**2. Node Version Incompatibility**
Ensure you are using a modern version of Node.js. Check your version with `node -v`.

**3. Port Already in Use**
If port 5173 is occupied, Vite will automatically select another port. Check the terminal output for the correct URL.

---

Need more help? Contact us at **contact@midodev.fr**.
[Version Française](./docs/INSTALLATION_FR.md)
