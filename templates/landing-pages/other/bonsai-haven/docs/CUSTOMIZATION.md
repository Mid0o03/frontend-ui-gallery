# Customization Guide / Guide de Personnalisation

## English 🇺🇸

### White-label Configuration

The template uses a centralized configuration system located in `src/config/`.

#### 1. Branding (`src/config/branding.ts`)
Update this file to change your site identity:
- **`siteName`**: Your store name.
- **`colors`**: Primary, secondary, and background colors.
- **`contact`**: Email, address, phone number.
- **`social`**: Links to your social media profiles.

#### 2. Content (`src/config/content.ts`)
Update this file to change text and images across the site:
- **`hero`**: Main landing page banner text and images.
- **`featuredCollections`**: Items on the home page.
- **`shop`**: Product list.
- **`about`**: Company story and stats.
- **`workshops`**: Workshop details and pricing.

### Styling
The project uses **Tailwind CSS**. You can customize the theme in `tailwind.config.js` or `index.html` (script tag).

---

## Français 🇫🇷

### Configuration Marque Blanche

Le modèle utilise un système de configuration centralisé situé dans `src/config/`.

#### 1. Image de Marque (`src/config/branding.ts`)
Mettez à jour ce fichier pour changer l'identité de votre site :
- **`siteName`** : Nom de votre boutique.
- **`colors`** : Couleurs primaires, secondaires et d'arrière-plan.
- **`contact`** : Email, adresse, numéro de téléphone.
- **`social`** : Liens vers vos profils de réseaux sociaux.

#### 2. Contenu (`src/config/content.ts`)
Mettez à jour ce fichier pour changer le texte et les images sur tout le site :
- **`hero`** : Texte et images de la bannière principale.
- **`featuredCollections`** : Articles en vedette sur la page d'accueil.
- **`shop`** : Liste des produits.
- **`about`** : Histoire de l'entreprise et statistiques.
- **`workshops`** : Détails et tarifs des ateliers.

### Style
Le projet utilise **Tailwind CSS**. Vous pouvez personnaliser le thème dans `tailwind.config.js` ou `index.html` (balise script).
