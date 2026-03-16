# Guide de Personnalisation

Ce template est conçu avec un système de configuration "White-Label", ce qui signifie que vous pouvez changer presque tout le texte et l'image de marque sans toucher aux composants React complexes.

## Fichiers de Configuration

Tous les fichiers de configuration se trouvent dans le dossier `src/config/`.

### 1. Branding (`src/config/branding.ts`)
Utilisez ce fichier pour mettre à jour :
- **Nom du Site** : Le nom affiché dans l'onglet du navigateur.
- **Email** : Votre email de contact.
- **Liens Sociaux** : URL vers vos profils réseaux sociaux.
- **Meta Tags** : Titre SEO, description et mots-clés.

### 2. Contenu (`src/config/content.ts`)
Utilisez ce fichier pour mettre à jour tout le texte du site web :
- **Navbar** : Liens et bouton CTA.
- **Section Hero** : Titre, description et boutons.
- **Projets** : La liste des projets dans la section Work.
- **Section À Propos** : Votre bio, statistiques et URL de l'image.
- **Footer** : Texte du bas de page et copyright.

## Changer les Images

### Images des Projets
Dans `src/config/content.ts`, à l'intérieur du tableau `projects`, remplacez simplement l'URL `image` par la vôtre. Vous pouvez utiliser :
- Des URLs externes (ex: Unsplash, Cloudinary).
- Des images locales : Mettez-les dans le dossier `public/` et référencez-les comme `/mon-image.jpg`.

### Avatar / Image de Profil
Mise à jour dans `src/config/content.ts` sous `about.imageUrl`.

## Styles (Couleurs & Polices)

Ce template utilise [Tailwind CSS](https://tailwindcss.com/).

Pour changer la **Couleur Primaire**, ouvrez `tailwind.config.js` et modifiez la valeur `theme.extend.colors.primary`.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#VOTRE_CODE_HEX', // Changez ceci !
        // ...
      }
    }
  }
}
```
