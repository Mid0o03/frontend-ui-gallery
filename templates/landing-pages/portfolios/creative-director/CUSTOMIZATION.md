# Customization Guide

This template is designed to be easily personalized through centralized configuration files.

## 🎨 Branding (config/branding.ts)
Open `src/config/branding.ts` to change:
- `siteName`: The name displayed in the title and metadata.
- `initials`: The text used in the logo.
- `email`: Your contact email address.
- `socials`: Your LinkedIn, Twitter, and Instagram links.
- `status`: Your current availability status.

## ✍️ Content (config/content.ts)
Open `src/config/content.ts` to change all UI text:
- **Hero**: Badge, title, description, and side text.
- **About**: Philosophy, capabilities, and recognition list.
- **Work**: Project titles, categories, descriptions, and images (Unsplash URLs recommended).
- **Services**: Items displayed in the scrolling ticker.

## 🌈 Colors & Styling
The primary color is defined in `index.html` within the Tailwind configuration:
```javascript
colors: {
  primary: "#36e27b", // Change this to your brand color
  // ...
}
```

---

# Guide de Personnalisation

Ce template est conçu pour être facilement personnalisé via des fichiers de configuration centralisés.

## 🎨 Branding (config/branding.ts)
Modifiez `src/config/branding.ts` pour changer :
- `siteName` : Le nom affiché dans le titre et les métadonnées.
- `initials` : Le texte utilisé pour le logo.
- `email` : Votre adresse email de contact.
- `socials` : Vos liens réseaux sociaux.

## ✍️ Contenu (config/content.ts)
Modifiez `src/config/content.ts` pour changer tout le texte de l'interface :
- **Hero** : Badge, titre, description.
- **About** : Philosophie, compétences, reconnaissance.
- **Work** : Vos projets (images, titres, descriptions).
- **Services** : Les services défilants.
