# Customization Guide | Guide de Personnalisation

[Français](#version-française) | [English](#english-version)

---

## English Version

All customization is centralized in the `config/` folder. No need to touch the core components.

### 1. Branding & Colors (`config/branding.ts`)
Update this file to change:
- **Site Name & Title**: Used for SEO and headers.
- **Colors**: Update primary, background, and surface colors.
- **Contact Info**: Set your email and social media links.
- **Version**: Track your site's version.

### 2. Text Content (`config/content.ts`)
Update this file to change all text visible on the site:
- **Hero Section**: Change title, badge, and description.
- **Sidebar**: Update your bio and navigation links.
- **Projects**: Add, remove, or edit your works (title, category, tags, images).
- **Marquee**: Change the scrolling words.
- **Footer**: Customize the heading and call to action.

### 3. Images
- **Profile Image**: Update the URL in `components/Sidebar.tsx` or move it to `branding.ts` for easier access.
- **Project Images**: Update the `imageUrl` and `imageAlt` in `config/content.ts`.

---

## Version Française

Toute la personnalisation est centralisée dans le dossier `config/`. Pas besoin de toucher aux composants principaux.

### 1. Branding & Couleurs (`config/branding.ts`)
Modifiez ce fichier pour changer :
- **Nom du Site & Titre** : Utilisé pour le SEO et les en-têtes.
- **Couleurs** : Mettez à jour la couleur primaire, l'arrière-plan et les couleurs de surface.
- **Infos de Contact** : Définissez votre email et vos liens vers les réseaux sociaux.
- **Version** : Suivez la version de votre site.

### 2. Contenu Texte (`config/content.ts`)
Modifiez ce fichier pour changer tout le texte visible sur le site :
- **Section Hero** : Changez le titre, le badge et la description.
- **Sidebar** : Mettez à jour votre bio et les liens de navigation.
- **Projets** : Ajoutez, supprimez ou modifiez vos travaux (titre, catégorie, tags, images).
- **Marquee** : Changez les mots qui défilent.
- **Footer** : Personnalisez le titre et l'appel à l'action.

### 3. Images
- **Image de Profil** : Mettez à jour l'URL dans `components/Sidebar.tsx` ou déplacez-la dans `branding.ts` pour un accès plus facile.
- **Images de Projet** : Mettez à jour `imageUrl` et `imageAlt` dans `config/content.ts`.
