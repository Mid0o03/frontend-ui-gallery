# Customization Guide

PortfolioOS makes it easy to personalize your portfolio through centralized configuration files.

## 🎨 Branding Configuration

Edit `config/branding.ts` to change the core identity of your site:

- **name**: Your full name.
- **role**: Your professional title.
- **email**: Your contact email address.
- **colors**: Adjust primary, terminal black, and background colors.
- **socials**: Link your GitHub, Twitter, and LinkedIn profiles.
- **siteMetadata**: SEO information (title, description, keywords).

## 📝 Content Configuration

Edit `config/content.ts` to change the text content:

- **terminal**: All text inside the terminal window including:
  - Welcome messages.
  - "Whoami" data (stack, status, location).
  - Project list (name, tech stack, descriptions).
  - Contact form labels and placeholders.
- **sidebar**: Explorer labels and menu items.
- **statusBar**: Language, encoding, and status messages.

## 🖼️ Images & Favicons

- **Favicon**: Replace `public/favicon.ico` with your own icon.
- **OG Image**: Replace `public/og-image.png` with your social sharing preview image.
- **Project Icons**: Icons are provided by Lucide React. You can change them in the project list in `config/content.ts`.

## 🛠️ Advanced Stying

For deep layout or animation changes, modify:
- `App.tsx`: Main structure and CRT overlay.
- `index.css`: Global styles and CRT effect animations.
- Individual component files in `components/`.

Need help with a deep customization? Contact us at **contact@midodev.fr**.
