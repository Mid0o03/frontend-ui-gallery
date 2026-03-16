# Installation Guide

Follow these steps to get your landing page up and running.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Steps to Install

### 1. Extract the Project
If you received the template as a ZIP file, extract it to your desired folder. If you are using Git, clone the repository.

### 2. Open Terminal
Open your terminal (Command Prompt, PowerShell, or Terminal on macOS/Linux) and navigate to the project directory:
```bash
cd growthmastery-landing-page
```

### 3. Install Dependencies
Run the following command to install all necessary packages:
```bash
npm install
```

### 4. Run Development Server
To see the site in action locally, run:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## Troubleshooting

### `npm install` fails
- Ensure you have a stable internet connection.
- Try clearing the npm cache: `npm cache clean --force`.
- Delete `node_modules` and `package-lock.json` and try again.

### Port 5173 is already in use
Vite will automatically try to use the next available port (e.g., 5174). Look at the terminal output to find the correct URL.

### Styling is not loading
- This template uses Tailwind CSS via a CDN for simplicity. Ensure you have an active internet connection while developing.
- If you need offline support, you will need to install Tailwind via npm (refer to [Tailwind docs](https://tailwindcss.com/docs/installation)).
