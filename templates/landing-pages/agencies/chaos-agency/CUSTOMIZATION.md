# 🎨 Customization Guide

Chaos Agency is designed to be easily white-labeled. Follow this guide to personalize the template with your own branding and content.

## 1. Branding & Identity

All branding information is centralized in `config/branding.ts`.

```typescript
export const BRANDING = {
  siteName: 'Your Agency Name',
  tagline: 'Your Catchy Tagline',
  email: 'your@email.com',
  // ...
};
```

**What to change here:**
- **Site Name**: Replaces "Chaos Agency" across the site.
- **Contact Info**: Updates email, phone, and address in the footer.
- **Social Links**: Update the URLs for your social media profiles.
- **SEO Defaults**: Customize the default page title and description.

## 2. Text Content

All section content is centralized in `config/content.ts`.

```typescript
export const CONTENT = {
  hero: {
    title: { line1: 'We Build', line2: 'Future' },
    description: '...',
    // ...
  },
  // ...
};
```

**Sections available for editing:**
- **Navigation**: Menu links and anchors.
- **Hero**: Main headline, subheading, and call-to-action buttons.
- **Services**: Service cards (icons, titles, descriptions, themes).
- **Projects**: Portfolio gallery items.
- **Footer**: Bottom CTA and copyright text.

## 3. Styling & Colors

### Tailwind Config
The visual style is primarily controlled via the Tailwind configuration injected in `index.html`. 

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        "neo-yellow": "#FFD700", // Change your primary color here
        "neo-green": "#36e27b",
        // ...
      },
      // ...
    },
  },
}
```

### Neo-Brutalist Aesthetic
- **Borders**: Controlled by `border-3` and `border-black` classes.
- **Shadows**: Custom `shadow-neo` and `shadow-neo-lg` are defined in the tailwind config.

## 4. Replacing Images

### Portfolio Projects
Update the `image` URLs in `config/content.ts` under the `projects` section.

### Icons
Icons use [Material Symbols Outlined](https://fonts.google.com/icons). To change an icon, find the icon name on the Google Fonts site and replace the text inside the `span` or the `icon` property in `config/content.ts`.

---
Need help with a specific customization? Contact **contact@midodev.fr**.
