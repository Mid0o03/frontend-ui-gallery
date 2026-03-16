# Installation Guide

Follow these steps to set up PortfolioOS on your local machine.

## Prerequisites

- **Node.js**: Version 16.x or higher.
- **npm**: Version 7.x or higher (comes with Node.js).
- **Git**: For cloning the repository.

## Step-by-Step Setup

1. **Clone the project**:
   ```bash
   git clone <repository-url>
   cd user_portfolio
   ```

2. **Install dependencies**:
   We recommend using `npm` to ensure compatibility.
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Copy the example environment file if provided:
   ```bash
   cp .env.example .env.local
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Troubleshooting

### `npm install` fails
- Ensure you are using a supported Node.js version (`node -v`).
- Try clearing the npm cache: `npm cache clean --force`.
- Delete `node_modules` and `package-lock.json`, then run `npm install` again.

### Styles are missing or broken
- Ensure Tailwind CSS is properly initialized.
- Check if `index.css` is imported in `index.tsx`.

### Vite command not found
- Run `npm install` again to ensure all binaries are in `node_modules/.bin`.

For further assistance, contact support at **contact@midodev.fr**.
