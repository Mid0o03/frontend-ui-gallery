# Customization Guide

This template is designed with a "White-Label" configuration system, meaning you can change almost all text and branding without touching the complex React components.

## Configuration Files

All configuration files are located in the `src/config/` folder.

### 1. Branding (`src/config/branding.ts`)
Use this file to update:
- **Site Name**: The name displayed in the browser tab.
- **Email**: Your contact email.
- **Social Links**: URLs to your social media profiles.
- **Meta Tags**: SEO title, description, and keywords.

### 2. Content (`src/config/content.ts`)
Use this file to update all text content on the Website:
- **Navbar**: Links and CTA button.
- **Hero Section**: Headline, description, and buttons.
- **Projects**: The list of projects in the Work section.
- **About Section**: Your bio, stats, and image URL.
- **Footer**: Bottom text and copyright.

## Changing Images

### Project Images
In `src/config/content.ts`, inside the `projects` array, simply replace the `image` URL with your own. You can use:
- External URLs (e.g., from Unsplash, Cloudinary).
- Local images: Import them at the top of the file if needed, or put them in the `public/` folder and reference them like `/my-image.jpg`.

### Avatar / Profile Image
Updated in `src/config/content.ts` under `about.imageUrl`.

## Styling (Colors & Fonts)

This template uses [Tailwind CSS](https://tailwindcss.com/).

To change the **Primary Color**, open `tailwind.config.js` and modify the `theme.extend.colors.primary` value.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#YOUR_COLOR_HEX', // Change this!
        // ...
      }
    }
  }
}
```
