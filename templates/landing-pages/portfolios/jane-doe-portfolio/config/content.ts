import { Project } from '../types';

export const content = {
    sidebar: {
        bio: "Based in Zurich. Crafting digital narratives and brand identities for the web3 era.",
        navItems: [
            { label: "Index", icon: "ArrowUpRight" },
            { label: "Selected Works", icon: "FolderOpen", active: true },
            { label: "Profile", icon: "User" },
            { label: "Insights", icon: "FileText" }
        ]
    },
    hero: {
        badge: "AVAILABLE FOR WORK",
        title: {
            line1: "Reimagining",
            line2: "Fintech Identity"
        },
        description: "Specializing in brand strategy, visual direction, and user experience for forward-thinking companies. Bridging the gap between Swiss utility and digital emotion."
    },
    projects: [
        {
            id: 'p1',
            number: '01',
            category: 'FEATURED',
            title: 'Stripe\nClimate',
            description: 'A comprehensive brand refresh focusing on eco-conscious consumerism and digital transparency for the new carbon removal platform.',
            tags: ['Web Design', 'Strategy', '2024'],
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfnQD3IIPOh8dLimu6K-M5CVWNH7Ca5QjRsx8dOg3piV1L1NqlG7Lem4iJ8ocvDtzX57fL10ffaSWbz9gTi6rgLOf8kz0h7jhoHnZ2aMWfOAACK13jgHCxQmRjLR5rx3IHi0wmgghc2qlgKImOhb_6WSZ1_t0FwwxYbVK3bS-2ggXPaPrRepKwM0xcAN788UMl5VThex2ur6AMHO-3henkrUIFCYkYrt0IvkaQMYLesH2Yr9d-PDmTdKYV6W_5CWrXPlE8bZC7FyHk',
            imageAlt: 'Abstract 3D rendering of green floating geometric shapes representing carbon capture'
        },
        {
            id: 'p2',
            number: '02',
            category: 'BRANDING',
            title: 'Patagonia\nArchives',
            description: 'Digitizing 50 years of sustainable fashion history into an interactive web experience accessible to the global community.',
            tags: ['Archive', 'UX Research', '2023'],
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWVk5qko3E7aqcGMRyi_0kudt4unK_3XbPZjjSfGmSpMHqozIxXc1YAT0N5WG6zJV0OG_Q-rXqOfS7uVxHdH1NWaxAl9MygRft8KtgUA5LHwd0ewyQB2c0C54i07rt-HWDPdsVKcTK5MlQLRDbSxzxekdLZF5CkNcfmOgP7MpaNPXNiRgVpDrOad28DGfXw0KyErmKJtgLeYSLHUlrp1y1faQMSuyhcRYbYjNaiALd0xWjjPQGyhTRm5zL4oslBzL7Q2L8w4KyzTrg',
            imageAlt: 'Close up texture of recycled fabric in dark tones'
        },
        {
            id: 'p3',
            number: '03',
            category: 'MOBILE',
            title: 'Urban\nVolt',
            description: 'UX research and strategy for a city-wide electric scooter network app focused on safety and availability.',
            tags: ['App Design', 'Prototyping', '2023'],
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeIajD2nj3fQ9A5hUBrjRwFWL-mT7-AGRKN2MpGVSjVp7mKZmFpLM8TFRnun4mIQ34KToyLRMgPgw6D7nF7IfNQYmyyPDXG8owKjLMxz1PsoYQxhHdJSWjUUOqn_6zT6oJFu-bHsK8sHyZggxQVvpn6UKOMmx8eGMrfOiZkXPuP07IjEJoFEai-AzoMWypIei-fqzntTZ4EchMlkBrYlKd-dSfq8RX4y-D2HPrkK0LVhB1Oh0e5039hri5aul6SYMDNf9QIZi9Ods1',
            imageAlt: 'Night cityscape with long exposure lights showing movement'
        }
    ] as Project[],
    marquee: [
        "Strategy", "Design", "Development", "Branding", "Art Direction"
    ],
    footer: {
        heading: "Let's build something meaningful.",
        subheading: "Currently available for freelance projects and consulting. \nHave an idea? Let's discuss the possibilities.",
        cta: "Start a Conversation",
    }
};
