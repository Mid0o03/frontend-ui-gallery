# Customization Guide

This template is designed to be easily personalizable via two configuration files.

## 1. Branding & Identity
Open `config/branding.ts` to update:
- **Site Name**: Changes the title in the footer and meta tags.
- **Colors**: Update primary, secondary, and background colors.
- **Contact Info**: Set your official email.
- **Social Links**: Link your professional profiles.
- **SEO**: Update title, description, and keywords for search engines.

## 2. Text Content & Images
Open `config/content.ts` to update:
- **Navigation**: Modify menu labels and links.
- **Hero Section**: Change main titles, subtitles, and the featured image.
- **Gallery**: Update section numbers, images, and alts.
- **Footer**: Update exhibition dates, location details, and newsletter text.

## 3. Advanced Customization
### Styles
The template uses Tailwind CSS via CDN. You can find the main configuration inside `index.html`. For local CSS modifications, use `index.css`.

### Components
All UI components are located in the `components/` folder. They are built with React and are highly modular.
