# Installation Guide

Follow these steps to set up the Elena Vance Portfolio template on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/) (optional, for cloning the repository)

## Step-by-Step Setup

1. **Get the Code**
   Clone the repository or download the ZIP file and extract it.
   ```bash
   git clone <your-repo-url>
   cd elena-vance-portfolio
   ```

2. **Install Dependencies**
   Run the following command in the root directory:
   ```bash
   npm install
   ```

3. **Development Environment**
   Start the local development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

4. **Build for Production**
   Generate the optimized production build:
   ```bash
   npm run build
   ```
   The output will be in the `dist` folder.

## Troubleshooting

### `npm install` fails
- Ensure you are using a supported Node.js version (`node -v`).
- Try clearing the npm cache: `npm cache clean --force`.
- Delete `node_modules` and `package-lock.json`, then run `npm install` again.

### Styles are not loading
- Make sure you haven't modified the Tailwind configuration in `index.html` unless you know what you're doing.
- Check if `index.css` is correctly imported in `index.html`.

### Port already in use
- If `5173` is taken, Vite will automatically try another port (e.g., `5174`). Follow the terminal output.
