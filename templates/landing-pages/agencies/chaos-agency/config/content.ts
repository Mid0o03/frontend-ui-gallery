import { Project, Service, NavLink } from '../types';

export const CONTENT = {
    navigation: [
        { label: 'Work', href: '#work' },
        { label: 'Services', href: '#services' },
        { label: 'About', href: '#about' },
    ] as NavLink[],

    hero: {
        badge: 'Est. 2024 • No Rules',
        title: {
            line1: 'We Break',
            line2: 'Things'
        },
        description: "A raw creative agency for the bold and the brave. We don't follow rules, we rewrite the code.",
        cta: {
            primary: 'VIEW WORK',
            secondary: 'GET IN TOUCH'
        }
    },

    marquee: "/// WE BREAK THINGS /// WE BREAK THINGS /// WE BREAK THINGS",

    services: {

        title: 'Our Chaos',
        description: 'Disruptive strategies and bold visuals tailored for brands that want to scream.',
        items: [
            {
                id: 'brand',
                title: 'Brand Identity',
                description: 'Forging identities that scream louder than the noise. We build cults, not just brands.',
                icon: 'star',
                theme: 'yellow',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRn1pYhF2ChWHlWPUtIR2RmKq5MbDQhAtkxyKVA22o7yLTxS1Ia9N6_J0w36QbIpIgTRdS1MFGQkE42Og8lcjbAuJsL2vpbidD6q03RFiEHJYjHkHknmqZa_U-_wZVnXt2ZocpYP_YspxO7_shX1gJ7ap-nt5ZWuswdnbOE6pnqREbXESS602-FBn1UBa6-sZsBD6c2xrRd61vaZ2_H1JLRwNp0lNDm3BaJfyfI2EKtq4rja3_W00OAVHi2Y3a-tM5hKO_smIZvLL9',
                colSpan: 'md:col-span-2',
                rowSpan: 'md:row-span-2'
            },
            {
                id: 'digital',
                title: 'Digital Design',
                description: "Websites that don't just sit there; they punch you in the face. High-impact UI/UX.",
                icon: 'terminal',
                theme: 'black',
                items: ['Web Development', 'App Design', 'WebGL Chaos'],
                colSpan: 'md:col-span-1',
                rowSpan: 'md:row-span-2'
            },
            {
                id: 'strategy',
                title: 'Wild Strategy',
                description: 'Marketing plans that burn the rulebook.',
                icon: 'campaign',
                theme: 'white',
                colSpan: 'lg:col-span-1'
            },
            {
                id: 'content',
                title: 'Content',
                description: 'Social media content that stops the doomscroll.',
                icon: 'photo_camera',
                theme: 'green',
                colSpan: 'lg:col-span-1'
            }
        ] as Service[]
    },

    projects: {
        title: 'Selected Works',
        viewAllLabel: 'View All Projects',
        items: [
            {
                id: '1',
                title: 'Neon Future Tech',
                category: 'Branding / Web',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRVUsdauM9UNCXhFIanes5z9CpbnR5dPGInlJeZN0GWez7_72k08I1xB9w0xhGkPV0TVcFW16fzmq0RboycYIEe5NJRe584yVMzrmGxJA8zmKgXf0j-pdiiCqBeC58NKnE4P_GZmkVvW1saqpCDZ8LwKGJOiSpxKiMBRiW-SOlRYipIb3rR5BpcPwcYot1zzvRYa0gq51AB5c8qL_gFixwiYqRbFMM-vBBpHA4hq38dYri33FQD7q_zeJdKEZlCQnBOy-pKD7aF7Mm',
                alt: 'Neon pink and blue abstract cyberpunk cityscape'
            },
            {
                id: '2',
                title: 'Geometric Pop',
                category: 'Print / Packaging',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDwKOXG6HaLPIrJsXDg8qCR9XpumIbN6g3Usm730wgmQ0hnrbgLG1lwyPp4n-fmDjcfzz2undoBn5m5cIA4UvQX4K-AKPRUUzGRpkMZbiqgxgi1695eYtNvuSeNKbDTS8q9h1LOrkp3FyvaxfW_LRp-4UdgA8lErmo5LGYPNaIw5y-IrkKMQYS8Vypr_d7XB5wMzauhHSUbv5v2EsWZkrNwawjg98loOo1zIQ3atgXZauq_uaQJpDHcG5xRA145ccpPsnpl7jPNeVC',
                alt: 'Bold geometric shapes in primary colors'
            },
            {
                id: '3',
                title: 'Terminal V2',
                category: 'UI Design',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiUOOTJSmV6mhuykqSflvCimVQ5x_9gqgPBDBWp6p-uOlJkrzUjmWT2DAZ5a2lPXJuAm7OCJIupRQcOVliNAtpWR8U-pQmhkCSRie4grzN6bxbhl-HKQKXax7N2IoglDVLQ6kveeZQP4gi9XbgWIxNentLWJZ_R2LrJwjeNB0TyrkaEwaWn-1pHteI24IGEGccQp9TK4K7QcTDX9hAXEyaT_g0p38V3AuazCGq0C1v0k5aWM531zUNQro4HNcxVEz_DVkypBPIvP1Z',
                alt: 'Retro computer terminal aesthetic green screen'
            },
            {
                id: '4',
                title: 'Street Smart',
                category: 'Campaign',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKJqUhKz2yaaBEEs9uT3nSmgR9FkgsZ85xvcHXyaD5V8Y_2bvO0sCZK4wT0Mfp4ZyhjyqSX3YGQotw435aXrchPu5HYp5nAibCe75dZQy90Lt5qRCo7gVOIAuhVTih6jiYqYfCgpmSo_u1BmYJhlJC8XlMSitl74ZtnRdhebgsOTucmUh1Pk0vCtVjPh9Oi7LpwXKYFJd_-rBqKi7hK4JhVlJI2potzbMnhWCcqbYNlRnB_lxW7JD7PcszqxUSuHS4xeDlECOyCuNE',
                alt: 'Bright colorful graffiti wall texture'
            }
        ] as Project[]
    },

    footer: {
        cta: {
            title1: 'Ready to',
            title2: 'Break Rules?',
            buttonLabel: "Let's Talk"
        },
        copyright: "© 2024 Chaos Agency. All Rights Reserved. Designed without permission."
    }
};
