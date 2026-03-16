# Deployment Guide | Guide de Déploiement

[Français](#version-française) | [English](#english-version)

---

## English Version

### 1. Vercel (Recommended)
1. **Push your code** to a GitHub/GitLab/Bitbucket repository.
2. **Import the project** in the [Vercel Dashboard](https://vercel.com/new).
3. **Configure Settings**: Vercel will automatically detect Vite.
4. **Deploy**: Click "Deploy" and your site will be live in seconds.

### 2. Netlify
1. **Connect to Git**: Log in to Netlify and select "Add new site" > "Import an existing project".
2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy**: Your site will be live at a custom subdirectory of `netlify.app`.

### 3. GitHub Pages
1. **Prepare for deployment**:
   - Edit `vite.config.ts` and set `base: './'`.
2. **Deploy via Action**:
   - Go to "Settings" > "Pages" in your GitHub repo.
   - Select "GitHub Actions" as the source.
3. **Use the "Static HTML" workflow** (or a specialized Vite workflow).

---

## Version Française

### 1. Vercel (Recommandé)
1. **Poussez votre code** sur un dépôt GitHub/GitLab/Bitbucket.
2. **Importez le projet** dans le [Dashboard Vercel](https://vercel.com/new).
3. **Configuration** : Vercel détectera automatiquement Vite.
4. **Déployez** : Cliquez sur "Deploy" et votre site sera en ligne en quelques secondes.

### 2. Netlify
1. **Connecter à Git** : Connectez-vous à Netlify et sélectionnez "Add new site" > "Import an existing project".
2. **Paramètres de Build** :
   - Commande de build : `npm run build`
   - Dossier de publication : `dist`
3. **Déployez** : Votre site sera en ligne sous un sous-domaine de `netlify.app`.

### 3. GitHub Pages
1. **Préparer le déploiement** :
   - Modifiez `vite.config.ts` et définissez `base: './'`.
2. **Déployer via Action** :
   - Allez dans "Settings" > "Pages" dans votre dépôt GitHub.
   - Sélectionnez "GitHub Actions" comme source.
3. **Utilisez le workflow "Static HTML"** (ou un workflow spécialisé Vite).
