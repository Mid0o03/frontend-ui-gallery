# Customization Guide

This template is designed to be easily customized through centralized configuration files.

## 1. Branding & Identity

Edit `src/config/branding.ts` to update:
- **Site Name**: Change the title and logo text.
- **Colors**: Update the primary accent colors.
- **Contact Info**: Set your email, Twitter, and GitHub links.
- **SEO**: Update default meta tags for the entire site.

## 2. Page Content

Edit `src/config/content.ts` to modify text for:
- Hero section (Badge, Title, Description, Buttons)
- Features (Titles, Descriptions)
- Stats (Values and Labels)
- Pricing (Titles, Plan descriptions)
- FAQ (Questions and Answers)
- Footer (Copyright and description)

## 3. Advanced Customization

### Tailwind CSS
Global styles and specific theme extensions are located in `index.html` (within the `<script>` tag for the CDN version) or can be moved to a `tailwind.config.js` if you switch to a full PostCSS setup.

### Images
Replace current placeholder images by adding your assets to the `public/` folder and updating the `src` paths in the components.

### Authentication Flow
The logic for Supabase Auth is located in `src/pages/Login.tsx` and `src/pages/Signup.tsx`.

### Payment Logic
Stripe redirect logic is handled in `src/pages/Pricing.tsx`.

Need help? Contact [contact@midodev.fr](mailto:contact@midodev.fr)
