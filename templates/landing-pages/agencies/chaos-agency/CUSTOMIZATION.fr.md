# 🎨 Guide de Personnalisation

Chaos Agency est conçu pour être facilement personnalisé (white-label). Suivez ce guide pour adapter le template à votre branding et à votre contenu.

## 1. Branding & Identité

Toutes les informations sur la marque sont centralisées dans `config/branding.ts`.

```typescript
export const BRANDING = {
  siteName: 'Nom de votre agence',
  tagline: 'Votre slogan accrocheur',
  email: 'votre@email.com',
  // ...
};
```

**Ce qu'il faut changer ici :**
- **Nom du site** : Remplace "Chaos Agency" partout sur le site.
- **Infos de contact** : Met à jour l'email, le téléphone et l'adresse dans le pied de page.
- **Réseaux sociaux** : Mettez à jour les URLs de vos profils.
- **Défauts SEO** : Personnalisez le titre et la description de page.

## 2. Contenu Textuel

Tout le contenu des sections est centralisé dans `config/content.ts`.

```typescript
export const CONTENT = {
  hero: {
    title: { line1: 'Nous Créons', line2: 'Le Futur' },
    description: '...',
    // ...
  },
  // ...
};
```

**Sections modifiables :**
- **Navigation** : Liens du menu et ancres.
- **Hero** : Titre principal, sous-titre et boutons d'appel à l'action.
- **Services** : Cartes des services (icônes, titres, descriptions, thèmes).
- **Projets** : Articles de la galerie portfolio.
- **Footer** : Texte de l'appel à l'action final et copyright.

## 3. Style & Couleurs

### Configuration Tailwind
Le style visuel est principalement contrôlé via la configuration Tailwind injectée dans `index.html`.

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        "neo-yellow": "#FFD700", // Changez votre couleur principale ici
        "neo-green": "#36e27b",
        // ...
      },
      // ...
    },
  },
}
```

### Esthétique Néo-Brutaliste
- **Bordures** : Contrôlées par les classes `border-3` et `border-black`.
- **Ombres** : Les ombres personnalisées `shadow-neo` et `shadow-neo-lg` sont définies dans la config tailwind.

## 4. Remplacement des Images

### Projets du Portfolio
Mettez à jour les URLs `image` dans `config/content.ts` sous la section `projects`.

### Icônes
Les icônes utilisent [Material Symbols Outlined](https://fonts.google.com/icons). Pour changer une icône, trouvez le nom de l'icône sur le site Google Fonts et remplacez le texte dans le `span` ou la propriété `icon` dans `config/content.ts`.

---
Besoin d'aide pour une personnalisation spécifique ? Contactez **contact@midodev.fr**.
