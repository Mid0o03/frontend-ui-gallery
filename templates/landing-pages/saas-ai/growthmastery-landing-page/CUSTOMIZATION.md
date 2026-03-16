# Customization Guide

Personalizing the GrowthMastery template is easy thanks to our centralized configuration system.

## 🎨 Branding Configuration

Open `config/branding.ts` to update the following:

- **Site Name**: Change `siteName` and `logo.text`.
- **Colors**: Update the `colors` object to match your brand palette. 
- **Contact Info**: Set your email and address.
- **Social Links**: Link your Twitter, Facebook, LinkedIn, etc.
- **Support**: Define your support terms (e.g., "6 months").

## ✍️ Content Configuration

Open `config/content.ts` to update all the text visible on the page:

- **Notification Bar**: Change the top announcement text.
- **Hero Section**: Update the title, description, badge, and CTA button.
- **Features**: Add or remove items from the "Why Choose Us" section.
- **Curriculum**: Describe your course modules.
- **Pricing**: Set your price points and plan features.
- **Footer**: Update descriptions and closing links.

## 🖼 Images

- **Hero Image**: Update the `hero.instructor.image` URL in `content.ts`.
- **Review Avatars**: Update the `hero.reviews.avatars` array with your own student images.
- **Favicon**: Replace `public/favicon.ico` with your brand logo.

## 🔍 SEO & Metadata

To update metadata for search engines and social sharing, open `index.html` and modify the `<meta>` tags in the `<head>` section.
Update your project information in `package.json` as well.
