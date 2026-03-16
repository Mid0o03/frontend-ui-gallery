# 🎨 Customization Guide - Lumina Botanicals

Lumina Botanicals is designed to be easily personalized through a centralized configuration system.

## 1. White-Label Branding

The site identity is managed in `config/branding.ts`. 

- **Site Name**: Change `name` to your brand name.
- **Contact Info**: Update `email`, `phone`, and `address`.
- **Social Links**: Update the URLs for your social media profiles.

## 2. Managing Content

All text, benefits, and product data are located in `config/content.ts`.

- **Hero Section**: Change the title, subtitle, and call-to-action buttons.
- **Benefits**: Update the icons (using Material Symbols) and descriptions for your core values.
- **Products**: Manage your product list, including names, subtitles, prices, and image URLs.
- **Newsletter**: Customize the subscription form text.

## 3. Visual Identity (Colors & Fonts)

The visual theme is controlled via Tailwind CSS in `index.html`.

- **Open**: `index.html`
- **Location**: The `tailwind.config` script in the `<head>` section.
- **Primary Color**: Update `primary` to your main brand color (e.g., `#f9f506`).
- **Surface Colors**: Adjust `background-light` and `background-dark` for theme consistency.
- **Fonts**: We use "Spline Sans" from Google Fonts. You can swap this by updating the font link in `index.html` and the `fontFamily` section in the config.

## 4. Images & Media

- **External Images**: Use absolute URLs in `config/content.ts`.
- **Local Images**: Place your images in the `public/` folder and reference them with a leading slash (e.g., `"/my-logo.svg"`).

Need assistance with specific customization? Reach out to **contact@midodev.fr**.
