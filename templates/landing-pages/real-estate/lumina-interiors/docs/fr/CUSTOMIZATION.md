# Guide de Personnalisation

Lumina Interiors est construit avec une architecture White-Label, facilitant l'adaptation à votre marque.

## Fichiers de Configuration

Toute la configuration se trouve dans le dossier `config`.

### 1. Branding (`config/branding.ts`)

Personnalisez l'identité visuelle :
*   **Nom du Projet** : Mettez à jour `projectName`.
*   **Couleurs** : Modifiez `colors.primary`, `colors.background`, et `colors.text`.
*   **Typographie** : Changez les polices dans l'objet `fonts`. *Note : Mettez à jour Google Fonts dans `index.html` si vous changez de police.*
*   **Meta SEO** : Mettez à jour l'objet `meta` pour les balises SEO par défaut.

### 2. Contenu (`config/content.ts`)

Mettez à jour les textes et images :
*   **Navigation** : Modifiez le tableau `navigation`.
*   **Réseaux Sociaux** : Centralisez vos profils dans le tableau `social`.
*   **Section Hero** : Mettez à jour les titres, la description et l'image de fond.
*   **Philosophie** : Modifiez le contenu "À propos" et les images associées.
*   **Portfolio** : Ajoutez ou modifiez des projets dans le tableau `projects`. Utilisez des images de haute qualité.
*   **Contact** : Mettez à jour `contactInfo` avec l'adresse, l'email et le téléphone de votre studio.

## Personnalisation Avancée

### Tailwind CSS
Le projet utilise Tailwind CSS. Vous pouvez personnaliser le thème dans la section `tailwind.config` de `index.html`.

### Changement d'Images
Placez les images locales dans le dossier `public` et référencez-les en commençant par `/` (ex: `/mon-image.jpg`).

## Icônes
Utilise Material Symbols Outlined. Plus d'icônes sur [fonts.google.com/icons](https://fonts.google.com/icons).
