# Deployment Guide

[English](DEPLOYMENT.md) • [Français](DEPLOYMENT.fr.md)

Deploy your Beauty's Gold template to production.

## Quick Deploy Options

### 🚀 Vercel (Recommended)

**Fastest and easiest deployment option.**

#### Deploy via GitHub

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Done!** Your site is live in ~2 minutes.

#### Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, then your site is live!
```

**Custom Domain:** Add in Vercel dashboard → Settings → Domains

---

### 🎯 Netlify

1. **Build your site:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Drag & drop the `dist/` folder
   - Or connect your GitHub repo

3. **Configure:**
   - Build command: `npm run build`
   - Publish directory: `dist`

**Custom Domain:** Add in Netlify dashboard → Domain settings

---

### 📦 GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install -D gh-pages
   ```

2. **Update `package.json`:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/your-repo"
   }
   ```

3. **Update `vite.config.ts`:**
   ```typescript
   export default defineConfig({
     base: '/your-repo/',  // Your repo name
     // ...
   });
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: `gh-pages` branch
   - Save

---

## Manual Deployment (Any Host)

### Step 1: Build

```bash
npm run build
```

This creates a `dist/` folder with optimized files.

### Step 2: Upload

Upload the contents of `dist/` to your web host via:
- FTP/SFTP
- cPanel File Manager
- SSH

### Step 3: Configure Server

**For SPA routing to work**, configure your server:

#### Apache (.htaccess)

Create `.htaccess` in your web root:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx

Add to your nginx config:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## Environment Variables

If you need environment variables:

1. **Create `.env.production`:**
   ```
   VITE_API_URL=https://api.yoursite.com
   VITE_CONTACT_EMAIL=contact@yoursite.com
   ```

2. **Use in code:**
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. **Configure in hosting platform:**
   - **Vercel:** Dashboard → Settings → Environment Variables
   - **Netlify:** Dashboard → Site settings → Environment variables

---

## Performance Optimization

### Before Deploying

✅ **Optimize images:**
- Use WebP format
- Compress images (TinyPNG, Squoosh)
- Use appropriate sizes

✅ **Test build:**
```bash
npm run build
npm run preview
```

✅ **Run Lighthouse audit:**
- Open DevTools → Lighthouse
- Run audit
- Fix any issues

### After Deploying

✅ **Enable HTTPS** (usually automatic on Vercel/Netlify)

✅ **Add CDN** (usually automatic on Vercel/Netlify)

✅ **Monitor performance:**
- Google Analytics
- Vercel Analytics
- Netlify Analytics

---

## Custom Domain Setup

### Vercel

1. Go to project → Settings → Domains
2. Add your domain
3. Update DNS records as shown
4. Wait for propagation (5-60 minutes)

### Netlify

1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records
4. Enable HTTPS

### DNS Records Example

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     your-site.netlify.app
```

---

## Troubleshooting

### 404 on Page Refresh

**Problem:** Routes work on first load but 404 on refresh.

**Solution:** Configure server for SPA (see Manual Deployment section)

### Assets Not Loading

**Problem:** CSS/JS files return 404.

**Solution:** Check `base` in `vite.config.ts` matches your deployment path.

### Build Fails

**Problem:** `npm run build` fails.

**Solution:**
1. Check for TypeScript errors
2. Ensure all dependencies are installed
3. Check Node.js version (18+)

---

## Deployment Checklist

Before going live:

- [ ] Update `config/branding.ts` with real contact info
- [ ] Replace placeholder images
- [ ] Update meta tags in `index.html`
- [ ] Add favicon and OG image
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (target: 90+ scores)
- [ ] Test all links and navigation
- [ ] Set up analytics (optional)
- [ ] Configure custom domain
- [ ] Enable HTTPS

---

## Need Help?

- 📧 Email: support@yourtemplate.com
- 📖 [Vercel Docs](https://vercel.com/docs)
- 📖 [Netlify Docs](https://docs.netlify.com)

---

**Congratulations! Your site is live! 🎉**
