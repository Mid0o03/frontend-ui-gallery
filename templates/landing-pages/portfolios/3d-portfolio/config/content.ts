export const content = {
    navbar: {
        links: [
            { label: "Work", href: "#work" },
            { label: "About", href: "#about" },
        ],
        cta: {
            label: "Let's Talk",
            href: "#contact"
        }
    },

    hero: {
        title: {
            line1: "Hi, I make",
            highlight: "3D magic."
        },
        description: "I'm a digital illustrator & visual storyteller creating playful, tactile worlds that pop off the screen.",
        primaryButton: {
            label: "View Projects",
            href: "#work"
        },
        secondaryButton: {
            label: "Download CV",
            href: "#" // Path to CV file
        }
    },

    work: {
        title: "Selected Works",
        viewAllCta: {
            label: "View all projects",
            href: "#"
        },
        // Projects are defined in a separate data structure or here if static
        projects: [
            {
                id: '1',
                title: 'Squishy Friends',
                category: '3D Character',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB263h9FQfnxWlP4T6Td35HOZHA3qyQGEulvF1wwcAEKqA240fhx6MYPZsiJIfL6mIlW9WvZ0lSlbnWegC3J0_wMx5dvlk-Mceow68zsUtN6l5ESm7kibkGyPYFFnQt52j3nWjIPRwsezO_eS3ID0de6i3W-T5sEggjZojlEgt6FpaAKriwlUHH2vzk9aadxdvptnADeS6dJDoL4PjCphtbndHZL11lKKaQWkaRv_W_hipsIdVFi9f_1s6CM82Sb31ovW42p3KxXHI',
                colorClass: 'from-orange-100 to-pink-100 dark:from-slate-700 dark:to-slate-600',
                spanRows: false,
            },
            {
                id: '2',
                title: 'Neon Dreams',
                category: 'Editorial',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmK3mbwl1Vgp5Ex0KAmK2deLC4icK2NqqeR7DGwsaGW1BA8PWzmamA6EdChXuQy8MiXSfUVHy6IOoiPOIO9_MxDNl0LtD-LUhAtNzFOqSI9JOu2lKf0rt28gGjMRf6GDaDetA5qPlaJXQNKeknSxafaRL16PI-j-5y5JWiY8p3bG3yvS9HkOo0fx8jC3ZumzwVp7AMEw9BdjHXG_EfA1UGGg7Lj1_Ssfe9GD46PsHcJqc0bjJuWv6Pir78-qUQ-gdCyI6Talp0zks',
                colorClass: 'from-blue-100 to-cyan-100 dark:from-slate-700 dark:to-slate-600',
                spanRows: false,
            },
            {
                id: '3',
                title: 'Glass Refraction',
                category: 'Visual Identity',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm3y6a6ey994JaQYS3nwtf9UVynYPBF-wp0zqp0sPUHcqAY0RPkmH5sWVgZaL2mT_Emvfyo6Mf0_IBIZchc78OehGR-PIsCQViKrqCV4aP0aR7dlEohJGD0fmHbff8xDp7zgHSPVttHwWtWLXJdcEzlHLkxAd5YrHOOlp6Fg-fIxWN_ddrgKF6QPzzcY7SzWxG2Pvl2K53Exaq5WRueL9_aKviWZ7frEvsNwB_lB2GHd-CCZhn0Z_sFRXraFMT5H9Cj5J5Y1kQ8Cg',
                colorClass: 'from-purple-100 to-indigo-100 dark:from-slate-700 dark:to-slate-600',
                spanRows: true, // This one is tall
            },
            {
                id: '4',
                title: 'Eco Huts',
                category: 'Set Design',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnOTRkXh_N-XmR4gItVajH4W0VtrdR8FqxQIgq-ut9sxMVMsJY_M5HfpWxIM_xF3e92ANQzazfDzSYOJGnPtwzEFWxVRvXHAV9g8-oVoscQxNIhZmRgrtN_4JiqIfs1w-9hVEMntNngp_3ovubEQ5al03Fx8N-x7yWkB8KUtPNPubHrLgE7iHQcO2ENEtUC9axTG4DzPwIqQj5PHmrjpmBW6Q17hGt7RKhpWmrIWU9Lu-S_zVyojDre7soaSQz8Lkqt9DULSi88iI',
                colorClass: 'from-green-100 to-emerald-100 dark:from-slate-700 dark:to-slate-600',
                spanRows: false,
            },
        ],
        aboutSnippet: {
            icon: "face_6",
            title: "That's me!",
            description: "I love turning flat ideas into squishy, tangible realities. Based in sunny California.",
            buttonLabel: "More About Me"
        }
    },

    about: {
        sectionTitle: "My Process",
        headline: {
            line1: "Soft shapes,",
            line2: "pastel colors,",
            line3: "& a touch of whimsy."
        },
        description: "My work embraces the \"Claymorphism\" aesthetic—creating digital objects that feel like you could reach out and squash them. I start with simple geometry and layer on soft lighting and imperfections to bring warmth to the digital space.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLG9-LPONNN2b9AVm-tVqzKTF9AUjA3CJuHV_XNSN2-K8gHqItFaAmzVa9hGtEdLQzZu_vIE3X3TOaYZICfxF9qFlebr9_LVqKyL1u2Kz2h2dUqUTOqUSR4I7OV3llBq9klNWKlj1WbvSZsU-Hbk7gIFhvxFp-ewvCEo9O_rXeVEvgGJ7zk7E4iNiLj5llJFDCTHOlX0OXhuwUfV7PsAm_AzFGZfiTfkC4QJeL41FbbYmNuI6a7bM_e5PRNgjPXIZILKFFezhIX0U",
        stats: [
            { icon: "palette", label: "Color" },
            { icon: "view_in_ar", label: "Shape" },
            { icon: "light_mode", label: "Light" },
        ]
    },

    footer: {
        title: "Let's build something cute.",
        subtitle: "Have a project in mind? I'm currently available for freelance work and collaborations.",
        links: [
            { label: "Be", href: "#", iconText: "Be" }, // Behance
            { label: "Dr", href: "#", iconText: "Dr" }, // Dribbble
            { label: "Ig", href: "#", iconText: "Ig" }, // Instagram
        ],
        copyright: "© 2024 Jane Doe. All rights reserved."
    }
};
