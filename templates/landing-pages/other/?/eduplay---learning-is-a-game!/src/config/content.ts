export const contentConfig = {
    hero: {
        badge: "Version 2.0 Now Live!",
        title: "LEARNING",
        titleAccent: "IS A GAME!",
        description: "Unlock your potential with our 3D world of puzzles, quests, and rewards. Adventure starts now!",
        ctaPrimary: "START PLAYING",
        socialProof: "Joined by 10k+ kids"
    },
    navbar: {
        links: [
            { name: "Play", href: "/#play" },
            { name: "Learn", href: "/#learn" },
            { name: "Worlds", href: "/#worlds" },
            { name: "Store", href: "/#store" }
        ],
        ctaLogin: "LOG IN",
        ctaJoin: "JOIN NOW"
    },
    learningPath: {
        title: "Choose Your Path",
        description: "Follow the magic trail and discover new worlds of knowledge at every stop.",
        paths: [
            {
                title: "Space Math",
                desc: "Solve intergalactic equations and save the galaxy from the math-monsters.",
                color: "#3399ff",
                icon: "rocket",
                progress: 65
            },
            {
                title: "Word Wizards",
                desc: "Master the ancient art of spelling and craft legendary stories in the library.",
                color: "#ffcc00",
                icon: "menu_book",
                progress: 40,
                offset: true
            },
            {
                title: "Lab Legends",
                desc: "Mix colorful chemicals and watch the world change in our 3D science sandbox.",
                color: "#ff4d4d",
                icon: "science",
                progress: 88
            }
        ]
    },
    stats: [
        { label: 'Active Players', value: '50k+', color: 'text-primary' },
        { label: '3D Missions', value: '200+', color: 'text-edu-red' },
        { label: 'Points Earned', value: '15M', color: 'text-edu-blue' },
        { label: 'Rating', value: '4.9', color: 'text-edu-yellow' }
    ],
    testimonials: {
        title: "Wall of Joy",
        bubbles: [
            {
                text: "I finally understand fractions! The Space Math mission was so much fun, I didn't want to stop!",
                author: "Leo, 8 years old",
                color: "#7f19e6",
                avatar: "https://picsum.photos/seed/leo/200/200"
            },
            {
                text: "The 3D mascot is like my best friend. He cheers me on every time I complete a difficult puzzle!",
                author: "Sarah, 10 years old",
                color: "#3399ff",
                avatar: "https://picsum.photos/seed/sarah/200/200"
            },
            {
                text: "I love earning the shiny 3D badges. My collection is almost full and I'm proud of my progress!",
                author: "Mike, 9 years old",
                color: "#ff4d4d",
                avatar: "https://picsum.photos/seed/mike/200/200"
            }
        ]
    },
    ctaSection: {
        title: "Ready to Level Up Your Brain?",
        description: "The adventure is waiting for you. Sign up today and start your first mission!",
        primary: "START FOR FREE",
        secondary: "SEE THE WORLDS"
    },
    footer: {
        description: "Making education the most fun part of every day.",
        sections: [
            {
                title: "Explore",
                links: ["Game Map", "Mission Hub", "Avatars", "Hall of Fame"]
            },
            {
                title: "Support",
                links: ["Parent Guide", "Teacher Portal", "Safety Hub", "Contact Owls"]
            }
        ],
        newsletter: {
            title: "The Daily Quest",
            description: "Get fun riddles and new missions in your inbox!",
            placeholder: "Email"
        },
        copyright: "© 2024 EduPlay Magic Learning. All Rights Reserved."
    },
    assistant: {
        name: "Oliver the Owl",
        intro: "Hoot hoot! I'm Oliver the Owl. Want to know a secret about our magic worlds?",
        placeholder: "Ask Oliver...",
        systemInstruction: "You are Oliver the Owl, a friendly and wise 3D mascot for EduPlay, a gamified learning platform for kids. Your tone is hooty, encouraging, and fun. You explain that learning is like a game and help kids discover their potential in Space Math, Word Wizards, and Lab Legends."
    }
};
