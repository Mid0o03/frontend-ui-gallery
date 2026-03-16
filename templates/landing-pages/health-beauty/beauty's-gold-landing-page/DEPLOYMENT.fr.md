# Guide de Déploiement

Déployez votre template Beauty's Gold en production.

[English](DEPLOYMENT.md) • **Français**

## Options de Déploiement Rapide

### 🚀 Vercel (Recommandé)

**L'option de déploiement la plus rapide et la plus simple.**

#### Déployer via GitHub

1. **Poussez vers GitHub :**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/votreutilisateur/votre-repo.git
   git push -u origin main
   ```

2. **Connectez à Vercel :**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "New Project"
   - Importez votre dépôt GitHub
   - Vercel détecte automatiquement les paramètres Vite
   - Cliquez sur "Deploy"

3. **Terminé !** Votre site est en ligne en environ 2 minutes.

#### Déployer via CLI

```bash
# Installez l'interface en ligne de commande Vercel
npm i -g vercel

# Déployez
vercel

# Suivez les instructions, puis votre site est en ligne !
```

**Domaine Personnalisé :** Ajoutez-le dans le tableau de bord Vercel → Settings → Domains

---

### 🎯 Netlify

1. **Construisez votre site :**
   ```bash
   npm run build
   ```

2. **Déployez :**
   - Allez sur [netlify.com](https://netlify.com)
   - Glissez-déposez le dossier `dist/`
   - Ou connectez votre dépôt GitHub

3. **Configurez :**
   - Commande de build : `npm run build`
   - Dossier de publication : `dist`

**Domaine Personnalisé :** Ajoutez-le dans le tableau de bord Netlify → Domain settings

---

### 📦 GitHub Pages

1. **Installez gh-pages :**
   ```bash
   npm install -D gh-pages
   ```

2. **Mettez à jour `package.json` :**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://votreutilisateur.github.io/votre-repo"
   }
   ```

3. **Mettez à jour `vite.config.ts` :**
   ```typescript
   export default defineConfig({
     base: '/votre-repo/',  // Le nom de votre dépôt
     // ...
   });
   ```

4. **Déployez :**
   ```bash
   npm run deploy
   ```

5. **Activez GitHub Pages :**
   - Allez dans les paramètres du dépôt (Settings) → Pages
   - Source : branche `gh-pages`
   - Enregistrez

---

## Déploiement Manuel (Tout Hébergeur)

### Étape 1 : Build

```bash
npm run build
```

Ceci crée un dossier `dist/` avec les fichiers optimisés.

### Étape 2 : Téléchargement

Téléchargez le contenu de `dist/` vers votre hébergeur web via :
- FTP/SFTP
- Gestionnaire de fichiers cPanel
- SSH

### Étape 3 : Configurer le Serveur

**Pour que le routage SPA fonctionne**, configurez votre serveur :

#### Apache (.htaccess)

Créez un fichier `.htaccess` à la racine de votre site :

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

Ajoutez à votre configuration nginx :

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## Variables d'Environnement

Si vous avez besoin de variables d'environnement :

1. **Créez `.env.production` :**
   ```
   VITE_API_URL=https://api.votresite.com
   VITE_CONTACT_EMAIL=contact@votresite.com
   ```

2. **Utilisez dans le code :**
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. **Configurez dans la plateforme d'hébergement :**
   - **Vercel :** Dashboard → Settings → Environment Variables
   - **Netlify :** Dashboard → Site settings → Environment variables

---

## Optimisation des Performances

### Avant de Déployer

✅ **Optimisez les images :**
- Utilisez le format WebP
- Compressez les images (TinyPNG, Squoosh)
- Utilisez des tailles appropriées

✅ **Testez le build :**
```bash
npm run build
npm run preview
```

✅ **Effectuez un audit Lighthouse :**
- Ouvrez les outils de développement → Lighthouse
- Lancez l'audit
- Corrigez les problèmes éventuels

### Après le Déploiement

✅ **Activez HTTPS** (généralement automatique sur Vercel/Netlify)

✅ **Ajoutez un CDN** (généralement automatique sur Vercel/Netlify)

✅ **Surveillez les performances :**
- Google Analytics
- Vercel Analytics
- Netlify Analytics

---

## Configuration d'un Domaine Personnalisé

### Vercel

1. Allez dans le projet → Settings → Domains
2. Ajoutez votre domaine
3. Mettez à jour les enregistrements DNS comme indiqué
4. Attendez la propagation (5-60 minutes)

### Netlify

1. Allez dans Site settings → Domain management
2. Ajoutez un domaine personnalisé
3. Mettez à jour les enregistrements DNS
4. Activez HTTPS

---

## Dépannage

### 404 lors du Rafraîchissement de la Page

**Problème :** Les routes fonctionnent au premier chargement mais affichent une erreur 404 au rafraîchissement.

**Solution :** Configurez le serveur pour une SPA (voir la section Déploiement Manuel).

### Actifs non Chargés

**Problème :** Les fichiers CSS/JS renvoient une erreur 404.

**Solution :** Vérifiez que `base` dans `vite.config.ts` correspond à votre chemin de déploiement.

### Échec du Build

**Problème :** `npm run build` échoue.

**Solution :**
1. Vérifiez les erreurs TypeScript
2. Assurez-vous que toutes les dépendances sont installées
3. Vérifiez la version de Node.js (18+)

---

## Liste de Contrôle pour le Déploiement

Avant de mettre en ligne :

- [ ] Mettez à jour `config/branding.ts` avec les vraies infos de contact
- [ ] Remplacez les images temporaires
- [ ] Mettez à jour les balises meta dans `index.html`
- [ ] Ajoutez un favicon et une image OG
- [ ] Testez sur des appareils mobiles
- [ ] Effectuez un audit Lighthouse (visez des scores de 90+)
- [ ] Testez tous les liens et la navigation
- [ ] Configurez les analyses (optionnel)
- [ ] Configurez le domaine personnalisé
- [ ] Activez HTTPS

---

## Besoin d'aide ?

- 📧 Email : support@yourtemplate.com
- 📖 [Docs Vercel](https://vercel.com/docs)
- 📖 [Docs Netlify](https://docs.netlify.com)

---

**Félicitations ! Votre site est en ligne ! 🎉**
