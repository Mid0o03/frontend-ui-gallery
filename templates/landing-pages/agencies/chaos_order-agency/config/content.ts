export const content = {
    navbar: {
        links: [
            { label: "WORK", href: "#work" },
            { label: "STUDIO", href: "#studio" },
            { label: "CONTACT", href: "#contact" }
        ],
        cta: "LET'S TALK"
    },
    hero: {
        badge: "EST. 2024",
        title: {
            line1: "DIGITAL CHAOS",
            line2: "DESIGN ORDER"
        },
        subtitle: "We build brands that refuse to be ignored. Raw strategy for a complex world.",
        cta_primary: "START A PROJECT",
        cta_secondary: "VIEW PORTFOLIO"
    },
    services: {
        title: "OUR SERVICES",
        subtitle: "Whatever you need, we probably do it better.",
        items: [
            {
                id: "web-design",
                title: "Web Design",
                description: "High impact interfaces that convert.",
                image: "https://picsum.photos/id/48/800/600",
                icon: "grid_view",
                colSpan: 2,
                rowSpan: 2
            },
            {
                id: "branding",
                title: "Branding",
                description: "Visual identities that scream. Logos, typography, and guidelines that set you apart from the noise.",
                icon: "brush",
                number: "02",
                cta: "View Cases",
                colSpan: 1,
                rowSpan: 2
            },
            {
                id: "strategy",
                title: "Strategy",
                description: "Market disruption tactics.",
                icon: "ads_click",
                colSpan: 1
            },
            {
                id: "development",
                title: "Development",
                description: "Clean code, dirty aesthetics. React, Vue, WebGL.",
                icon: "terminal",
                colSpan: 2
            }
        ]
    },
    works: {
        title: "SELECTED WORKS",
        items: [
            {
                title: "Street Wear Co.",
                category: "Branding / eCommerce",
                image: "https://picsum.photos/id/338/800/600"
            },
            {
                title: "Retro Tech",
                category: "Web Design / 3D",
                image: "https://picsum.photos/id/3/800/600"
            },
            {
                title: "Neon Gallery",
                category: "Identity / Print",
                image: "https://picsum.photos/id/119/800/600"
            },
            {
                title: "Urban Architecture",
                category: "Photography / Web",
                image: "https://picsum.photos/id/235/800/600"
            }
        ]
    },
    contact: {
        title: "Let's Create Chaos Together.",
        form: {
            name: { label: "Your Name", placeholder: "JOHN DOE" },
            email: { label: "Your Email", placeholder: "JOHN@DOE.COM" },
            projectType: { label: "Project Type" },
            cta: "SEND MESSAGE"
        },
        map_image: "https://picsum.photos/id/1015/1000/1000"
    },
    footer: {
        copyright: "© 2024 CHAOS/ORDER. ALL RIGHTS RESERVED."
    }
};
