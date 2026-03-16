/**
 * Content Configuration
 * 
 * Customize all text content here.
 * This makes it easy to translate or rebrand the site.
 */

export const CONTENT = {
    // Hero Section
    hero: {
        title: {
            line1: "L'Architecture",
            line2: "du Soi.",
            highlightWord: "du Soi." // Which part gets the gold color
        },
        subtitle: "Un institut d'exception où la géométrie rencontre le bien-être. Une approche structurée de la beauté avant-garde.",
        cta: "Explorer l'institut"
    },

    // Philosophy Section
    philosophy: {
        label: "La Vision",
        title: {
            line1: "Un cadre architectural",
            line2: "pour une",
            highlight: "expérience",
            line3: "d'avant-garde."
        },
        description: "Beauty's Gold n'est pas simplement un institut. C'est un laboratoire de design humain où chaque geste est calculé, chaque produit sélectionné pour son excellence moléculaire, et chaque espace conçu pour l'harmonie visuelle.",
        values: [
            {
                title: "Précision",
                description: "Maîtrise technique absolue pour des résultats structuraux visibles."
            },
            {
                title: "Pureté",
                description: "Produits de luxe sélectionnés pour leur efficacité radicale."
            }
        ],
        badge: "L'innovation est le cœur de notre précision technique."
    },

    // Services Section
    services: {
        sectionTitle: "Services",
        sectionNumber: "01",
        sectionSubtitle: "Expertise Structurée",
        quote: "La beauté est une géométrie sacrée que nous sculptons avec précision.",
        ctaText: "Tous nos services"
    },

    // Contact Section
    contact: {
        locationTitle: "Localisation",
        contactTitle: "Contact",
        hoursTitle: "Horaires",
        phoneLabel: "Téléphone",
        emailLabel: "Email",
        mapCta: "Voir sur Maps",
        appointmentCta: "Prendre rendez-vous",
        weekdaysLabel: "Lun - Ven",
        saturdayLabel: "Samedi",
        sundayLabel: "Dimanche"
    },

    // Footer
    footer: {
        copyright: "© 2024 Beauty's Gold. Tous droits réservés.",
        links: [
            { label: "Mentions Légales", href: "/mentions-legales" },
            { label: "Confidentialité", href: "/mentions-legales" },
            { label: "Cookies", href: "/mentions-legales" }
        ]
    },

    // Navigation
    navigation: {
        ctaButton: "Prendre RDV"
    }
} as const;

export type ContentConfig = typeof CONTENT;
