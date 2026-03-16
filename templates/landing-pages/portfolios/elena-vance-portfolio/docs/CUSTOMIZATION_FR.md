# Guide de Personnalisation

Ce guide explique comment personnaliser le template Elena Vance Portfolio pour l'adapter à votre marque et à votre contenu.

## 1. Système White-Label

Le template utilise un système de configuration centralisé. Vous n'avez pas besoin de modifier du code complexe pour changer les informations de base.

### Branding (`config/branding.ts`)
Modifiez ce fichier pour mettre à jour :
- **Nom du Site** : Change le texte du logo.
- **Infos de Contact** : Met à jour l'email et la localisation.
- **Réseaux Sociaux** : Liens Instagram, Twitter, etc.
- **Couleurs** : Configuration de la palette de couleurs de base.

### Contenu (`config/content.ts`)
C'est ici que sont stockés tous les textes et les URLs des images. Vous pouvez modifier :
- **Section Intro** : Titre, description et texte du bouton.
- **Sections Portfolio** : Images, légendes et titres de chaque section.
- **Section Contact** : Titres et message de disponibilité.

## 2. SEO & Favicon

### Balises Méta
Mettez à jour la section `<head>` dans `index.html` pour changer :
- Le titre de la page
- La description méta
- Les balises Open Graph (pour Facebook/LinkedIn)
- Les Twitter Cards

### Favicon
Remplacez les fichiers de favicon dans le dossier `public` (ou mettez à jour les liens dans `index.html`).

## 3. Style (Tailwind CSS)

Le template utilise Tailwind CSS via CDN pour plus de simplicité. Vous pouvez modifier l'extension du thème dans la balise `<script>` de `index.html` :

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                "primary": "#VOTRE_COULEUR",
                // ...
            }
        }
    }
}
```

## 4. Images

Pour un rendu optimal, utilisez des images de haute qualité avec les ratios recommandés :
- **Plein Écran** : 2:3 (Portrait)
- **Image Margée** : 4:5
- **Cinématographique** : 16:9 ou 21:9
- **Lookbook** : Mélange portrait/paysage.
