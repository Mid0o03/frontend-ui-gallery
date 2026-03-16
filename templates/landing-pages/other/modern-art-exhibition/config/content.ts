/**
 * Content configuration
 * Centralize all text content and image URLs here for easy modification.
 */
export const content = {
    header: {
        logo: "M—A—E",
        navLinks: [
            { label: 'Exhibition', href: '#' },
            { label: 'Artists', href: '#' },
            { label: 'Visit', href: '#' },
            { label: 'Shop', href: '#' },
        ],
        ctaButton: "Tickets",
    },
    hero: {
        title: {
            line1: "Modern",
            line2: "Art.",
        },
        subtitle: "Fig. 01 — Spatial Awareness",
        intro: {
            tag: "01 / Introduction",
            text: "A rigorous exploration of form, space, and the void between. Featuring works that define the new era of Swiss Design.",
            cta: "Explore Gallery",
        },
        featuredImage: {
            url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlLMY4AO7wNhxiQyPp427dQ5M88FV37wybn3TduU4NtrcZBByPdWyDJ7Qw25JJULGUNtfh-EtzCaPyEIXPbttig2sMEehllKo3snwJAj1ATGMPQb-WXMaD1B9iYicCP5oFpt6AoZFW5b7ni__mTavgTSuvqOsVueC3KbnZPhJ4BojCn2aaELtgmSZ38sFpZqCoLQzc5jufQzixPNtvtk-rXW-apWBcev6Z2LXTYRVvmAH-lh4aHC5If33xPA3PrZrf5e0y0Ohlais",
            label: "Zurich '24",
        },
        features: [
            {
                icon: "grid_on",
                title: "Typography",
                description: "Helvetica as voice.",
            },
            {
                icon: "category",
                title: "Geometry",
                description: "Precision in line.",
            },
        ],
    },
    gallery: {
        sectionNumber: "02",
        images: [
            {
                url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgVQS6ZxTHsvrNM58zIW3M0gdBff1bTc46QAZ9ejBX9wyHF5GX2QOTjb3uTFU8lw883twKuiLpcwYDpOQleysnofQgJlZajfybX5UzlK7wENUgZ5aEO8kKlUjTDqHzrV8_r-1yS4CU1wquzHe8jHWRyh9PPcZfy9BL7Vy8BikPvWSChQoAHeNHfBscEjXxPHg_tr14l1gv1P-x4S6FM7NaCLCM3RR163u3JgJYxx-PllCBRdsDNPnq_sao2jzikpAD8-J63f0o_c4',
                alt: 'Black and white modern architecture'
            },
            {
                url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMTVs1wZ0Fv-w3c945bFinra88WQ0B2Aan2hjekXWjwLzZ_UqbkKld_y6Ni75xyTCFJKYuoRAKVRKIaHYCVvvQNN4ZFYymUcqTcr26Bdftxkee5fXefVcm2CIWM5JfEZBDo9XWumlh7amJootqMEvquj-RrNHNLB9Seo36Ez2Zf6cuPVbriBETTumyjq5fc2DD-DXIFjM1Jh486Q58xm7zHCGdXzKDP4iA7LnZacQ8PcQDh1v2M2yCixHVI1T-a6_7r8_N6ktLgGM',
                alt: 'Abstract light refraction'
            },
            {
                url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKmZ865PXqT8lj3Tvn7pDElmM1-NiH8qMUy5BABMtl0AYGu234b6CLYXtxnLeYCq5xS_gcgbyfVGrusAT3kz96XdaNNfyEAmg5QNMtFT4etRYv6eKQfnCHZjeKG4RZ_BttfV4O3WAIom2LdcZfI6QvqZxY9qgTDDZH3xPtaKqNL5MLOZB7dKxnwEpP4dHOEoQy3NytVfeX5KFa3NMBzDnEKkYq5PzESC7cM71qTzudnJDkw5Iopx2OGE2tKHRTKCEmmifWCR3U2dk',
                alt: 'Neon light installation'
            }
        ],
    },
    footer: {
        date: {
            start: "OCT 15",
            end: "NOV 30",
        },
        location: {
            name: "KUNSTHALLE",
            city: "Zurich, Switzerland",
            mapImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbnxxJfTDHxWZOKt-vac3Q-AYhjbUQQkTftfcNLmCBPUxART2hu6see7rhQ_bwDDi-igmfXQKpXVWpo7kRSHKtX1ZjS60YXREdjkLt1UjJycB8Y7QPfI0hTvYhsYM8nUeyBvRmvUHlqafU5ujIg3SAA2xU5uZcFT11XTjnkuQMkARjx1HcOP5mhxzU9of0Y5L7djLUKR43ceQDIiYCSV2Fz8Z1ALBduo1iKLYXtbumIdFicvCAhmdUWfQ7AOsjggWoSy9NACaZXqo",
        },
        artist: {
            name: "JOSEF MÜLLER",
            bio: "Pioneer of constructive concrete art and the International Style.",
        },
        newsletter: {
            title: "STAY INFORMED",
            description: "Subscribe for updates on upcoming exhibitions.",
            placeholder: "Email Address",
            button: "Join",
        },
        legal: {
            privacy: "Privacy",
            imprint: "Imprint",
            contact: "Contact",
        },
    },
};
