# Customization Guide

[Version Française](../fr/CUSTOMIZATION_FR.md)

One of the best features of this template is the **White-Label Configuration**. You don't need to dive deep into the React components to change the site's identity.

## 🛠️ Centralized Config

All content is managed in the `/config` directory.

### 1. Branding (`config/branding.ts`)
Update this file to change the identity and contact details:
- **`name`**: Your brand name (e.g., "L'Éclat d'Or").
- **`phone` / `email`**: Contact information displayed in the header and footer.
- **`location`**: Your address.
- **`socials`**: Links to your Instagram, Facebook, etc.

### 2. Content (`config/content.ts`)
Update this file to change the actual text of the site:
- **Hero**: Title, subtitle, and CTA button text.
- **Philosophy**: Your brand's "About" section and mission statement.
- **Services**: Descriptions and images for each service category.
- **CTA**: The final "call to action" section before the footer.

## 🎨 Styling

The template uses **Tailwind CSS**. You can find the main color definitions and font configurations in:
- `index.html` (under `tailwind.config`)
- For advanced users, you can modify the `index.html` script block to change the primary gold color or the dark background tokens.

## 🖼️ Images

We recommend using high-quality images from Unsplash or your own professional photos. Simply replace the URLs in `config/content.ts`.

---

[Back to README](../../README.md)
