/**
 * Branding Configuration
 * 
 * Customize these values to match your brand identity.
 * All changes here will automatically update throughout the site.
 */

export const BRANDING = {
    // Site Information
    siteName: "Beauty's Gold",
    tagline: "L'Architecture du Soi",
    description: "Un institut d'exception où la géométrie rencontre le bien-être. Une approche structurée de la beauté avant-garde.",

    // Location
    location: {
        city: "Igny",
        country: "Paris",
        displayText: "Igny • Paris"
    },

    // Colors (must match CSS variables in src/index.css)
    colors: {
        primary: "#eec02b",
        backgroundDark: "#111111",
        accentDark: "#221e10"
    },

    // Typography
    fonts: {
        sans: "'Space Grotesk', sans-serif",
        display: "'Space Grotesk', sans-serif"
    },

    // Contact Information
    contact: {
        phone: "+33 1 23 45 67 89",
        email: "contact@beautysgold.fr",
        address: {
            street: "12 Avenue de la Gare",
            postalCode: "91430",
            city: "Igny",
            country: "FRANCE"
        }
    },

    // Business Hours
    hours: {
        weekdays: "10:00 - 19:30",
        saturday: "09:00 - 18:00",
        sunday: "Fermé"
    },

    // Social Media
    social: {
        instagram: "#",
        website: "#"
    },

    // SEO & Meta
    seo: {
        keywords: ["beauty institute", "luxury spa", "architectural beauty", "avant-garde"],
        author: "Beauty's Gold",
        ogImage: "/og-image.png"
    }
} as const;

export type BrandingConfig = typeof BRANDING;
