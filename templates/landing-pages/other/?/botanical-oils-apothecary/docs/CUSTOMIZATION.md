# Customization Guide

This template is designed for easy white-labeling. All brand-specific data is centralized in the `src/config` directory.

## 🎨 Branding (src/config/branding.ts)

Update this file to change the core identity of the site:
- **Site Name**: `name`
- **Tagline**: `tagline`
- **Contact Info**: Email, Phone, Address.
- **Social Media**: Links to Instagram, Twitter, etc.
- **Colors**: Update the primary, secondary, and accent colors.

## 📝 Content (src/config/content.ts)

Update this file to change the text and data displayed on the site:
- **Hero Section**: Title, description, and CTA text.
- **Products**: Add, remove, or edit products in the `products` array.
- **Trust Signals**: Edit the features shown in the trust section.
- **Footer**: Copyright text and newsletter labels.

## 🖼 Images

Replace images in the `public` folder or update URLs in `content.ts`. We recommend using high-quality optimized images (WebP format).

## 🚀 CSS & Styling

The project uses **Tailwind CSS**. You can customize the theme in `tailwind.config.ts` (if applicable) or edit global styles in `index.css`.
