# ⚙️ Installation Guide - Lumina Botanicals

Follow these steps to set up the template on your local machine.

## 📋 Prerequisites

Before starting, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- A code editor like [VS Code](https://code.visualstudio.com/)

## 🚀 Step-by-Step Setup

1. **Download and Extract**:
   unzip the template files into your desired project directory.

2. **Install Dependencies**:
   Open your terminal in the project folder and run:
   ```bash
   npm install
   ```

3. **Run for Development**:
   Launch the development server to see changes in real-time:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Production Build**:
   When ready to deploy, generate the optimized production files:
   ```bash
   npm run build
   ```
   The files will be located in the `dist` folder.

## 🔍 Troubleshooting

- **Node Version Error**: If you see errors related to Node.js, ensure you are using a compatible version (`node -v`).
- **npm install fails**: Try deleting the `node_modules` folder and `package-lock.json`, then run `npm install` again.
- **Port already in use**: If port 5173 is occupied, Vite will automatically try another port. Check the terminal output for the correct URL.

Need more help? Contact us at **contact@midodev.fr**.
