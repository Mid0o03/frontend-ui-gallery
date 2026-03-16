# Customization Guide

Lumina Interiors is built with a White-Label Architecture, making it easy to adapt to your brand.

## Configuration Files

All configuration is located in the `config` folder.

### 1. Branding (`config/branding.ts`)

Customize the visual identity:
*   **Project Name**: Update `projectName`.
*   **Colors**: Modify `colors.primary`, `colors.background`, and `colors.text`.
*   **Typography**: Change fonts in the `fonts` object. *Note: Update Google Fonts in `index.html` if you change font families.*
*   **SEO Meta**: Update the `meta` object for default SEO tags.

### 2. Content (`config/content.ts`)

Update text and images:
*   **Navigation**: Edit the `navigation` array.
*   **Social Links**: Centralize your social profiles in the `social` array.
*   **Hero Section**: Update titles, description, and background image.
*   **Philosophy**: Modify the "About" content and associated images.
*   **Portfolio**: Add or edit projects in the `projects` array. Ensure high-quality images.
*   **Contact**: Update `contactInfo` with your studio address, email, and phone.

## Advanced Customization

### Tailwind CSS
The project uses Tailwind CSS. You can customize the theme in the `tailwind.config` section within `index.html`.

### Changing Images
Place local images in the `public` folder and reference them starting with `/` (e.g., `/my-image.jpg`).

## Icons
Uses Material Symbols Outlined. Find more at [fonts.google.com/icons](https://fonts.google.com/icons).
