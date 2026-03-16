# Guide de Personnalisation

Ce guide vous aidera à personnaliser le template Beauty's Gold pour correspondre à votre marque.

[English](CUSTOMIZATION.md) • **Français**

## Table des Matières

1. [Démarrage Rapide](#démarrage-rapide)
2. [Identité Visuelle (Branding)](#identité-visuelle-branding)
3. [Contenu](#contenu)
4. [Couleurs & Style](#couleurs--style)
5. [Images](#images)
6. [Navigation](#navigation)
7. [Services](#services)
8. [Animations](#animations)
9. [SEO](#seo)

---

## Démarrage Rapide

Le template utilise des **fichiers de configuration centralisés** pour faciliter la personnalisation. La plupart des modifications peuvent être effectuées dans seulement deux fichiers :

- `config/branding.ts` - Nom du site, couleurs, informations de contact
- `config/content.ts` - Tout le contenu textuel

## Identité Visuelle (Branding)

### Changer le Nom du Site & le Slogan

Modifiez [`config/branding.ts`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/config/branding.ts) :

```typescript
export const BRANDING = {
  siteName: "Votre Nom d'Entreprise",  // ← Changez ceci
  tagline: "Votre Slogan",             // ← Changez ceci
  description: "Votre description",    // ← Changez ceci
  // ...
}
```

### Mettre à jour les Informations de Contact

Dans le même fichier :

```typescript
contact: {
  phone: "+33 1 23 45 67 89",          // ← Votre téléphone
  email: "bonjour@votreentreprise.fr", // ← Votre email
  address: {
    street: "123 Rue Principale",      // ← Votre adresse
    postalCode: "75001",
    city: "Paris",
    country: "FRANCE"
  }
},
```

### Horaires d'Ouverture

```typescript
hours: {
  weekdays: "9:00 - 18:00",   // ← Vos horaires
  saturday: "10:00 - 16:00",
  sunday: "Fermé"
},
```

### Liens Réseaux Sociaux

```typescript
social: {
  instagram: "https://instagram.com/votreentreprise",
  website: "https://votreentreprise.fr"
},
```

---

## Contenu

Tout le contenu textuel se trouve dans [`config/content.ts`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/config/content.ts).

### Section Hero

```typescript
hero: {
  title: {
    line1: "Votre Titre",
    line2: "Principal.",
    highlightWord: "Principal." // Ce mot prend la couleur dorée
  },
  subtitle: "Votre sous-titre accrocheur ici.",
  cta: "Votre Appel à l'Action"
},
```

### Section Philosophie

```typescript
philosophy: {
  label: "Votre Label",
  title: {
    line1: "Votre titre de",
    line2: "philosophie",
    highlight: "mot mis en avant",
    line3: "continue ici."
  },
  description: "Votre description de philosophie...",
  values: [
    {
      title: "Valeur 1",
      description: "Description de la valeur 1"
    },
    {
      title: "Valeur 2",
      description: "Description de la valeur 2"
    }
  ]
},
```

---

## Couleurs & Style

### Méthode 1 : Variables CSS (Recommandé)

Modifiez [`src/index.css`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/src/index.css) :

```css
:root {
  --color-primary: #votre-couleur;         /* Couleur d'accent principale */
  --color-background-dark: #votre-bg;     /* Couleur de fond */
  --color-accent-dark: #votre-accent;     /* Accent secondaire */
}
```

### Méthode 2 : Config Tailwind

Modifiez [`tailwind.config.js`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/tailwind.config.js) :

```javascript
colors: {
  primary: 'var(--color-primary)',
  'background-dark': 'var(--color-background-dark)',
  'accent-dark': 'var(--color-accent-dark)',
},
```

### Changer les Polices

1. **Mise à jour de Google Fonts** dans [`index.html`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/index.html) :

```html
<link href="https://fonts.googleapis.com/css2?family=Votre+Police:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

2. **Mise à jour des variables CSS** dans `src/index.css` :

```css
:root {
  --font-sans: 'Votre Police', sans-serif;
  --font-display: 'Votre Police', sans-serif;
}
```

---

## Images

### Remplacer les Images

Les images utilisent actuellement des URLs Unsplash. Pour utiliser les vôtres :

1. **Ajoutez vos images** dans le dossier `public/images/`
2. **Mettez à jour les chemins** dans [`src/types.ts`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/src/types.ts) :

```typescript
export const SERVICES = [
  {
    number: "01",
    title: "Votre Service",
    description: "Description",
    imageUrl: "/images/votre-image.jpg"  // ← Mettez à jour ceci
  },
  // ...
];
```

### Ajouter un Favicon

1. Créez un fichier `favicon.ico` (16x16 ou 32x32 pixels)
2. Placez-le dans le dossier `public/`
3. Il est déjà lié dans `index.html`

### Ajouter une Image Open Graph

1. Créez une image (1200x630 pixels)
2. Enregistrez-la sous `public/og-image.png`
3. Elle est déjà configurée dans `index.html`

---

## Navigation

Modifiez [`src/types.ts`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/src/types.ts) :

```typescript
export const NAV_ITEMS = [
  { label: "Accueil", href: "/#home" },
  { label: "À propos", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
  // Ajoutez d'autres éléments ici
];
```

### Ajouter de Nouvelles Pages

1. **Créez le composant de page** dans `src/pages/VotrePage.tsx`
2. **Ajoutez la route** dans [`App.tsx`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/App.tsx) :

```typescript
<Route path="/votre-page" element={<VotrePage />} />
```

3. **Ajoutez à la navigation** dans `src/types.ts`

---

## Services

Modifiez le tableau `SERVICES` dans [`src/types.ts`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/src/types.ts) :

```typescript
export const SERVICES = [
  {
    number: "01",
    title: "Nom de Votre Service",
    description: "Description du service",
    imageUrl: "/images/service-1.jpg"
  },
  {
    number: "02",
    title: "Autre Service",
    description: "Autre description",
    imageUrl: "/images/service-2.jpg"
  },
  // Ajoutez plus de services...
];
```

---

## Animations

Voir [ANIMATIONS.fr.md](ANIMATIONS.fr.md) pour la personnalisation détaillée des animations.

**Astuces rapides :**
- Les animations sont dans `src/hooks/useGsapAnimation.ts`
- Pour désactiver les animations, retirez les props `ref` des composants
- Pour ajuster le timing, modifiez les paramètres du hook

---

## SEO

### Mettre à jour les Balises Meta

Modifiez [`index.html`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/index.html) :

```html
<title>Titre de Votre Site</title>
<meta name="description" content="Votre description">
<meta name="keywords" content="vos, mots, clés, ici">
```

### Mettre à jour Open Graph

```html
<meta property="og:title" content="Titre de Votre Site">
<meta property="og:description" content="Votre description">
<meta property="og:url" content="https://votresite.com/">
```

---

## Besoin d'aide ?

- 📧 Email : support@yourtemplate.com
- 📖 [Documentation Complète](README.fr.md)
- 🎬 [Guide des Animations](ANIMATIONS.fr.md)
- 🚀 [Guide de Déploiement](DEPLOYMENT.fr.md)

---

**Étapes Suivantes :**
1. Personnalisez l'identité visuelle et le contenu
2. Remplacez les images
3. Testez localement (`npm run dev`)
4. Build pour la production (`npm run build`)
5. Déployez ! (Voir [DEPLOYMENT.fr.md](DEPLOYMENT.fr.md))
