# 🎨 Guide de Personnalisation

Ce template est conçu pour être facilement personnalisé sans toucher à la logique des composants. La plupart des modifications de marque et de contenu se font dans le répertoire `config/`.

## 1. Configuration de la Marque
Ouvrez `config/branding.ts` pour mettre à jour l'identité visuelle de votre boutique :

```typescript
export const branding = {
  name: 'Nom de votre Boutique',
  contact: {
    email: 'hello@votre_marque.com',
    // ...
  },
  socials: {
    instagram: '...',
    // ...
  }
};
```

## 2. Gestion du Contenu et des Produits
Ouvrez `config/content.ts` pour mettre à jour tout le contenu textuel, y compris les produits et les catégories.

### Mise à jour des Produits
Localisez le tableau `products` et modifiez les articles :
```typescript
{
  id: '1',
  filename: 'nom_article.jpg',
  price: 29.99,
  image: 'https://...',
  alt: 'Description'
}
```

### Mise à jour des Catégories
Modifiez le tableau `widgets.categories.items` pour changer les catégories de la barre latérale.

## 3. Style Visuel (CSS)

### Couleurs et Thèmes
Les couleurs sont gérées via la configuration Tailwind CSS dans `index.html`. Localisez la section `tailwind.config` :
```javascript
colors: {
  "primary": "#30e87a",
  "retro-blue": "#000080",
  // ...
}
```

## 4. SEO et Partage Social
Mettez à jour les balises méta dans la section `<head>` de `index.html` pour améliorer la visibilité de votre site.

---

Besoin d'aide pour une personnalisation avancée ? Contactez-nous à **contact@midodev.fr**.
