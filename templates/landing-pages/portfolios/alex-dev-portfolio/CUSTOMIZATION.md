# Customization Guide / Guide de Personnalisation

## English

This template is designed to be easily customizable via configuration files. You don't need to dig into complex React components for basic changes.

### 1. Branding (`config/branding.ts`)
Update this file to change:
- **Site Name**: Appears in the navbar and title.
- **Email & Contact**: Used for contact buttons and forms.
- **Social Links**: URLs for your social media profiles.
- **Meta Info**: SEO title, description, and theme color.

### 2. Content (`config/content.ts`)
Update this file to change:
- **Profile**: Your name, bio, avatar image, location, and status.
- **Hero Section**: Main title and subtitle customization.
- **Tech Stack**: List of technologies/skills you want to display (names and icons).
- **Projects**:
    - **Featured**: The main large project card.
    - **List**: Array of standard project cards.
- **Map**: Background image for the map widget.

### 3. Styling
The project uses **Tailwind CSS**.
- To change the primary color, open `index.css` or `tailwind.config.js` (if configured) and update the `primary` color variable.
- Global styles are located in `index.css`.

---

## Français

Ce modèle est conçu pour être facilement personnalisable via des fichiers de configuration.

### 1. Image de Marque (`config/branding.ts`)
Modifiez ce fichier pour changer :
- **Nom du site** : Apparaît dans la barre de navigation et le titre.
- **Email & Contact** : Utilisé pour les boutons.
- **Réseaux sociaux** : Vos liens de profil.
- **Méta-informations** : Titre SEO, description et couleur du thème.

### 2. Contenu (`config/content.ts`)
Modifiez ce fichier pour changer :
- **Profil** : Votre nom, bio, avatar, localisation, statut.
- **Section Hero** : Titre principal et sous-titre.
- **Tech Stack** : Liste des technologies (noms et icônes).
- **Projets** :
    - **Featured** : Le projet principal mis en avant.
    - **List** : Liste des autres projets.
- **Carte** : Image de fond pour le widget carte.

### 3. Styles
Le projet utilise **Tailwind CSS**.
- Pour changer la couleur principale, ouvrez `index.css` et modifiez la variable de couleur `primary`.
- Les styles globaux se trouvent dans `index.css`.
