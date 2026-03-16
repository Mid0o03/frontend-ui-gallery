# Customization Guide

[En français ci-dessous](#français)

Matcha Moments is built to be easily customizable via a centralized configuration system. You don't need to dig through hundreds of lines of code to change the basics.

## 1. Branding (Colors & Contact)
Full branding configuration is located in `src/config/branding.ts`.

- **Site Name**: Change `name` and `logo.text`.
- **Colors**: Modify the `colors` object. We use Tailwind CSS variables mapped to these values.
- **Contact Info**: Update `contact` (email, phone, address).
- **Social Media**: Update links in the `social` array.

## 2. Content (Text & Media)
All text content for every page is centralized in `src/config/content.ts`.

- **Home Page**: Update hero text, features, and call-to-actions.
- **Products**: Manage your product list, prices, and images here.
- **About/Contact**: Change descriptions and section titles easily.

## 3. SEO & Metadata
To update the SEO title and meta tags for the entire site, edit `index.html`.

---

<a name="français"></a>
# Guide de Personnalisation

Matcha Moments est conçu pour être facilement personnalisable via un système de configuration centralisé.

## 1. Branding (Couleurs & Contact)
La configuration complète du branding se trouve dans `src/config/branding.ts`.

- **Nom du Site**: Modifiez `name` et `logo.text`.
- **Couleurs**: Modifiez l'objet `colors`.
- **Infos de Contact**: Mettez à jour `contact` (email, téléphone, adresse).
- **Réseaux Sociaux**: Mettez à jour les liens dans le tableau `social`.

## 2. Contenu (Texte & Médias)
Tout le texte de chaque page est centralisé dans `src/config/content.ts`.

- **Accueil**: Modifiez le texte du hero, les fonctionnalités, etc.
- **Produits**: Gérez votre liste de produits, prix et images ici.
- **À Propos / Contact**: Changez les descriptions et titres de sections.

## 3. SEO & Métadonnées
Pour mettre à jour le titre SEO et les meta tags, éditez le fichier `index.html`.
