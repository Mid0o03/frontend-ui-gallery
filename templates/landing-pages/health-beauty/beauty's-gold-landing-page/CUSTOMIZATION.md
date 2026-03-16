# Customization Guide

[English](CUSTOMIZATION.md) • [Français](CUSTOMIZATION.fr.md)

This guide will help you customize the Beauty's Gold template to match your brand.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Branding](#branding)
3. [Content](#content)
4. [Colors & Styling](#colors--styling)
5. [Images](#images)
6. [Navigation](#navigation)
7. [Services](#services)
8. [Animations](#animations)
9. [SEO](#seo)

---

## Quick Start

The template uses **centralized configuration files** to make customization easy. Most changes can be made in just two files:

- `config/branding.ts` - Site name, colors, contact info
- `config/content.ts` - All text content

## Branding

### Change Site Name & Tagline

Edit [`config/branding.ts`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/config/branding.ts):

```typescript
export const BRANDING = {
  siteName: "Your Business Name",  // ← Change this
  tagline: "Your Tagline",         // ← Change this
  description: "Your description", // ← Change this
  // ...
}
```

### Update Contact Information

In the same file:

```typescript
contact: {
  phone: "+1 234 567 8900",           // ← Your phone
  email: "hello@yourbusiness.com",    // ← Your email
  address: {
    street: "123 Main Street",        // ← Your address
    postalCode: "12345",
    city: "Your City",
    country: "YOUR COUNTRY"
  }
},
```

### Business Hours

```typescript
hours: {
  weekdays: "9:00 - 18:00",   // ← Your hours
  saturday: "10:00 - 16:00",
  sunday: "Closed"
},
```

### Social Media Links

```typescript
social: {
  instagram: "https://instagram.com/yourbusiness",
  website: "https://yourbusiness.com"
},
```

---

## Content

All text content is in [`config/content.ts`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/config/content.ts).

### Hero Section

```typescript
hero: {
  title: {
    line1: "Your Main",
    line2: "Headline.",
    highlightWord: "Headline." // This word gets gold color
  },
  subtitle: "Your compelling subtitle goes here.",
  cta: "Your Call to Action"
},
```

### Philosophy Section

```typescript
philosophy: {
  label: "Your Label",
  title: {
    line1: "Your philosophy",
    line2: "headline",
    highlight: "highlight word",
    line3: "continues here."
  },
  description: "Your philosophy description...",
  values: [
    {
      title: "Value 1",
      description: "Description of value 1"
    },
    {
      title: "Value 2",
      description: "Description of value 2"
    }
  ]
},
```

---

## Colors & Styling

### Method 1: CSS Variables (Recommended)

Edit [`src/index.css`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/src/index.css):

```css
:root {
  --color-primary: #your-color;           /* Main accent color */
  --color-background-dark: #your-bg;      /* Background color */
  --color-accent-dark: #your-accent;      /* Secondary accent */
}
```

### Method 2: Tailwind Config

Edit [`tailwind.config.js`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/tailwind.config.js):

```javascript
colors: {
  primary: 'var(--color-primary)',
  'background-dark': 'var(--color-background-dark)',
  'accent-dark': 'var(--color-accent-dark)',
},
```

### Change Fonts

1. **Update Google Fonts** in [`index.html`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/index.html):

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

2. **Update CSS variables** in `src/index.css`:

```css
:root {
  --font-sans: 'Your Font', sans-serif;
  --font-display: 'Your Font', sans-serif;
}
```

---

## Images

### Replace Images

Images are currently using Unsplash URLs. To use your own:

1. **Add images** to `public/images/` folder
2. **Update image paths** in [`src/types.ts`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/src/types.ts):

```typescript
export const SERVICES = [
  {
    number: "01",
    title: "Your Service",
    description: "Description",
    imageUrl: "/images/your-image.jpg"  // ← Update this
  },
  // ...
];
```

### Add Favicon

1. Create a `favicon.ico` file (16x16 or 32x32 pixels)
2. Place it in the `public/` folder
3. It's already linked in `index.html`

### Add Open Graph Image

1. Create an image (1200x630 pixels)
2. Save as `public/og-image.png`
3. It's already configured in `index.html`

---

## Navigation

Edit [`src/types.ts`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/src/types.ts):

```typescript
export const NAV_ITEMS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
  // Add more items here
];
```

### Add New Pages

1. **Create page component** in `src/pages/YourPage.tsx`
2. **Add route** in [`App.tsx`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/App.tsx):

```typescript
<Route path="/your-page" element={<YourPage />} />
```

3. **Add to navigation** in `src/types.ts`

---

## Services

Edit the `SERVICES` array in [`src/types.ts`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/src/types.ts):

```typescript
export const SERVICES = [
  {
    number: "01",
    title: "Your Service Name",
    description: "Service description",
    imageUrl: "/images/service-1.jpg"
  },
  {
    number: "02",
    title: "Another Service",
    description: "Another description",
    imageUrl: "/images/service-2.jpg"
  },
  // Add more services...
];
```

---

## Animations

See [ANIMATIONS.md](ANIMATIONS.md) for detailed animation customization.

**Quick tips:**
- Animations are in `src/hooks/useGsapAnimation.ts`
- To disable animations, remove the `ref` props from components
- To adjust timing, modify the hook parameters

---

## SEO

### Update Meta Tags

Edit [`index.html`](file:///Users/maeljerome/Desktop/HUB/1-front/web/new%20template/beauty's-gold-landing-page/index.html):

```html
<title>Your Site Title</title>
<meta name="description" content="Your description">
<meta name="keywords" content="your, keywords, here">
```

### Update Open Graph

```html
<meta property="og:title" content="Your Site Title">
<meta property="og:description" content="Your description">
<meta property="og:url" content="https://yoursite.com/">
```

---

## Need Help?

- 📧 Email: support@yourtemplate.com
- 📖 [Full Documentation](README.md)
- 🎬 [Animations Guide](ANIMATIONS.md)
- 🚀 [Deployment Guide](DEPLOYMENT.md)

---

**Next Steps:**
1. Customize branding and content
2. Replace images
3. Test locally (`npm run dev`)
4. Build for production (`npm run build`)
5. Deploy! (See [DEPLOYMENT.md](DEPLOYMENT.md))
