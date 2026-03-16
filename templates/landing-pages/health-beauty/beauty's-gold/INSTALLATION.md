# Installation Guide

[English](INSTALLATION.md) • [Français](INSTALLATION.fr.md)

Complete step-by-step guide to install and run the Beauty's Gold template.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
  
- **npm** (comes with Node.js) or **yarn**
  - Verify npm: `npm --version`

## Step 1: Extract Template Files

1. Download the template ZIP file
2. Extract to your desired location
3. Open terminal/command prompt in the extracted folder

```bash
cd path/to/beauty's-gold-landing-page
```

## Step 2: Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

This will install:
- React & React DOM
- React Router
- TypeScript
- Vite
- Tailwind CSS
- GSAP (animations)
- All other dependencies

**Expected time:** 1-2 minutes

## Step 3: Start Development Server

Start the local development server:

```bash
npm run dev
```

You should see output like:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

## Step 4: Open in Browser

Open your browser and navigate to:

```
http://localhost:3000
```

You should see the Beauty's Gold landing page! 🎉

## Troubleshooting

### Port 3000 Already in Use

If port 3000 is already in use, you can:

**Option 1:** Stop the other process using port 3000

**Option 2:** Use a different port:

Edit `vite.config.ts`:

```typescript
export default defineConfig({
  server: {
    port: 3001, // Change to any available port
  },
});
```

### Module Not Found Errors

If you see "Module not found" errors:

1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again

```bash
rm -rf node_modules package-lock.json
npm install
```

### Tailwind Styles Not Loading

If styles aren't loading:

1. Ensure `src/index.css` exists
2. Check that `index.html` links to `/src/index.css`
3. Restart the dev server (`Ctrl+C` then `npm run dev`)

### TypeScript Errors

If you see TypeScript errors:

1. Ensure all dependencies are installed
2. Try restarting your IDE/editor
3. Run `npm run build` to see if it's just editor warnings

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

To preview the production build locally:

```bash
npm run preview
```

## Next Steps

- ✅ Template is running locally
- 📝 [Customize your content](CUSTOMIZATION.md)
- 🎨 [Change colors and branding](CUSTOMIZATION.md#branding)
- 🚀 [Deploy to production](DEPLOYMENT.md)

## Need Help?

- 📧 Email: support@yourtemplate.com
- 📖 [Customization Guide](CUSTOMIZATION.md)
- 🚀 [Deployment Guide](DEPLOYMENT.md)
