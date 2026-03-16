# Customization Guide

This guide explains how to personalize the Elena Vance Portfolio template to match your brand and content.

## 1. White-Label System

The template uses a centralized configuration system. You don't need to dive into complex code to change basic information.

### Branding (`config/branding.ts`)
Modify this file to update:
- **Site Name**: Changes the logo text.
- **Contact Info**: Updates email and location.
- **Social Links**: Update your Instagram, Twitter, etc.
- **Colors**: Basic color palette configuration.

### Content (`config/content.ts`)
This is where all the text and image URLs are stored. You can update:
- **Intro Section**: Title, description, and CTA text.
- **Portfolio Sections**: Each section's images, captions, and titles.
- **Contact Section**: Headings and availability message.

## 2. SEO & Favorites

### Meta Tags
Update the `<head>` section in `index.html` to change:
- Page title
- Meta description
- Open Graph tags (for Facebook/LinkedIn)
- Twitter Cards

### Favicon
Replace the favicon files in the `public` directory (or update the links in `index.html`).

## 3. Styling (Tailwind CSS)

The template uses Tailwind CSS via CDN for simplicity. You can modify the theme extension in the `<script>` tag within `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                "primary": "#YOUR_COLOR",
                // ...
            }
        }
    }
}
```

## 4. Images

For the best experience, use high-quality images with the following recommended aspect ratios:
- **Full Bleed**: 2:3 (Portrait)
- **Padded Image**: 4:5
- **Cinematic**: 16:9 or 21:9
- **Lookbook**: Mixed portrait/landscape.
