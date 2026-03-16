# 🎨 Customization Guide

This template is designed to be easily customized without touching the core component logic. Most branding and content changes can be done in the `config/` directory.

## 1. Branding Configuration
Open `config/branding.ts` to update the core identity of your store:

```typescript
export const branding = {
  name: 'Your Store Name',
  contact: {
    email: 'hello@yourbrand.com',
    // ...
  },
  socials: {
    instagram: '...',
    // ...
  }
};
```

## 2. Content & Product Management
Open `config/content.ts` to update all text content, including products and categories.

### Updating Products
Locate the `products` array and modify the items:
```typescript
{
  id: '1',
  filename: 'item_name.jpg',
  price: 29.99,
  image: 'https://...',
  alt: 'Description'
}
```

### Updating Categories
Modify the `widgets.categories.items` array to change the sidebar categories.

## 3. Visual Styling (CSS)

### Colors & Themes
The colors are managed via Tailwind CSS configuration in `index.html`. Locate the `tailwind.config` section:
```javascript
colors: {
  "primary": "#30e87a",
  "retro-blue": "#000080",
  // ...
}
```

### Fonts
Google Fonts are imported in the `<head>` of `index.html`. You can change them there and update the `fontFamily` in the tailwind config.

## 4. SEO & Social Sharing
Update the meta tags in the `<head>` section of `index.html` to improve your site's discoverability.

---

Need assistance with advanced customization? Contact us at **contact@midodev.fr**.
[Version Française](./docs/CUSTOMIZATION_FR.md)
