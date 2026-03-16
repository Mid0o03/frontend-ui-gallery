export const content = {
    hero: {
        title: "> Hello_World.exe",
        lastLogin: "TODAY",
        systemStatus: [
            { type: "SYSTEM", text: "Initializing creative protocols..." },
            { type: "SUCCESS", text: "Full-stack environment loaded." },
        ],
        welcomeMessage: "Welcome to my digital workspace. I build modern interfaces with a retro soul.",
    },
    stats: [
        { icon: "memory", label: "Memory", value: "64GB / 128GB" },
        { icon: "wifi", label: "Network", value: "ONLINE_SECURE" },
        { icon: "deployed_code", label: "Projects", value: "12 ACTIVE" },
    ],
    projects: {
        title: "// DIRECTORY_LISTING: /PROJECTS",
        items: [
            {
                id: '1',
                path: '/src/cli_portfolio_v2',
                description: 'React • Tailwind • TypeScript',
                permissions: 'r--r--r--',
                icon: 'terminal'
            },
            {
                id: '2',
                path: '/src/backend/data_viz_engine',
                description: 'Python • Django • D3.js',
                permissions: 'rw-rw-r--',
                icon: 'dataset'
            },
            {
                id: '3',
                path: '/src/ai/chat_bot_interface',
                description: 'OpenAI API • Next.js • Vercel',
                permissions: 'r-xr-xr-x',
                icon: 'smart_toy'
            }
        ]
    },
    skills: {
        title: "// LOAD_MODULES: /SKILLS",
        items: [
            "React", "TypeScript", "Node.js", "Python", "TailwindCSS", "PostgreSQL",
            "Docker", "AWS", "Git", "REST APIs", "GraphQL", "UI/UX Design"
        ]
    },
    contact: {
        title: "> SEND_MESSAGE --target=ADMIN",
        description: "Initialize transmission protocol to contact the administrator.",
        fields: {
            name: "User ID",
            email: "Response Channel (Email)",
            message: "Data Payload",
        },
        buttonText: "EXECUTE_SEND",
    },
    footer: {
        copyright: "© 2024 DEVPORFOLIO_SYSTEMS v1.0.0",
        status: "SYSTEM_STABLE",
    }
};
