# Customization Guide

DevStore is designed to be easily customizable. You can brand it as your own in minutes.

## 1. Branding (Logo, Colors, Name)

Edit the file [config/branding.ts](config/branding.ts) to update:
- `siteName`: Your company name.
- `logo`: Icon (Material Symbols) and text.
- `colors`: Primary color tokens.
- `socials`: Links to your social profiles.
- `owner`: Your personal or company details.

## 2. Text Content

Edit the file [config/content.ts](config/content.ts) to update:
- **Hero Section**: Titles, descriptions, and CTA labels.
- **Gallery**: Section headings.
- **Services**: Feature lists and stats.
- **Contact**: Form labels and messages.
- **Footer**: Copyright text.

## 3. Products/Templates

To add or modify templates in the gallery:
1. Open the component [components/TemplateGallery.tsx](components/TemplateGallery.tsx).
2. Locate the `templates` array.
3. Add or edit objects with `title`, `techStack`, `price`, and `imageUrl`.

## 4. Visual Styles (Tailwind)

Styles are defined in `index.html` via the Tailwind configuration script. You can extend the theme or modify color values there to match your brand's exact hex codes.

## Support:
If you need help customizing this template, contact us at [contact@midodev.fr](mailto:contact@midodev.fr).
