# Installation Guide

Follow these steps to set up DevStore on your local machine.

## Prerequisites

- **Node.js**: Version 18.x or higher.
- **npm** or **yarn**.

## 1. Setup

Clone the repository or download the files:

```bash
cd devstore
```

## 2. Install Dependencies

Install the required packages:

```bash
npm install
```

## 3. Environment Configuration

If you have environment variables (like contact form endpoints), create a `.env` file in the root directory:

```bash
cp .env.local .env
```

## 4. Launch Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Troubleshooting

### Build Failures
- Ensure you are using a compatible Node.js version (`node -v`).
- Try deleting `node_modules` and running `npm install` again.

### Styling Issues
- If you are using the CDN version of Tailwind (default in `index.html`), ensure you have an active internet connection.
- Check `vite.config.ts` for any configuration errors.

### Contact:
For more help, contact [contact@midodev.fr](mailto:contact@midodev.fr).
