
export const content = {
    navigation: [
        { label: "Shop", path: "/shop" },
        { label: "Care Guides", path: "/care-guides" },
        { label: "Workshops", path: "/workshops" },
        { label: "About", path: "/about" },
    ],
    hero: {
        est: "Est. 1984",
        title: "The Art of",
        subtitle: "Living Sculpture",
        description: "Discover our curated collection of rare Juniper bonsai and master the ancient art of cultivation with our master arborists.",
        ctaPrimary: "Explore Collection",
        ctaSecondary: "Our Story",
        imageAlt: "Ancient Juniper bonsai tree",
    },
    featuredCollections: {
        title: "Featured Collections",
        subtitle: "Hand-selected trees for every stage of your journey.",
        viewAll: "View All Collections",
        items: [
            {
                title: "Indoor Bonsai",
                description: "Perfect for modern spaces",
                image: "/images/bonsai_indoor.png",
            },
            {
                title: "Outdoor Classics",
                description: "Timeless hardy species",
                image: "/images/bonsai_outdoor.png",
            },
            {
                title: "Beginner Kits",
                description: "Everything you need to start",
                image: "https://images.unsplash.com/photo-1467043198406-dc953a3defa0?auto=format&fit=crop&q=80&w=2000",
            }
        ]
    },
    footer: {
        description: "Dedicated to the preservation and teaching of bonsai arts since 1984. Bringing tranquility and nature's quiet majesty to your living space.",
        columns: {
            navigation: {
                title: "Navigation",
                links: [
                    { label: "Shop All", href: "#" },
                    { label: "Care Library", href: "#" },
                    { label: "Workshops", href: "#" },
                    { label: "About Us", href: "#" },
                ]
            },
            support: {
                title: "Support",
                links: [
                    { label: "Shipping Policy", href: "#" },
                    { label: "Plant Guarantee", href: "#" },
                    { label: "Contact Us", href: "#" },
                    { label: "FAQ", href: "#" },
                ]
            },
            newsletter: {
                title: "Newsletter",
                description: "Join our community for seasonal care tips and exclusive early access to rare trees.",
                placeholder: "Email address"
            }
        },
        copyright: "© 2024 Bonsai Haven Specialty Store. All rights reserved.",
        legal: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Cookies", href: "#" },
        ]
    },
    shop: {
        title: "Our Collection",
        subtitle: "Discover our hand-picked selection of premium bonsai trees, tools, and accessories.",
        items: [
            { id: 1, name: "Japanese Maple 1", price: "$120.00", image: "https://images.unsplash.com/photo-1561641250-c06551cf3b02?auto=format&fit=crop&q=80&w=1000" },
            { id: 2, name: "Japanese Maple 2", price: "$120.00", image: "https://images.unsplash.com/photo-1526397751294-331021109fbd?auto=format&fit=crop&q=80&w=1000" },
            { id: 3, name: "Japanese Maple 3", price: "$120.00", image: "https://images.unsplash.com/photo-1627347902083-edbcaa5c4286?auto=format&fit=crop&q=80&w=1000" },
            { id: 4, name: "Japanese Maple 4", price: "$120.00", image: "https://images.unsplash.com/photo-1467043198406-dc953a3defa0?auto=format&fit=crop&q=80&w=1000" },
            { id: 5, name: "Japanese Maple 5", price: "$120.00", image: "https://images.unsplash.com/photo-1470364693235-a4fe27c60914?auto=format&fit=crop&q=80&w=1000" },
            { id: 6, name: "Japanese Maple 6", price: "$120.00", image: "/images/bonsai_maple_vertical.png" },
        ]
    },
    about: {
        title: "Cultivating Peace",
        description1: "Bonsai Haven was founded on a simple principle: that the ancient art of bonsai should be accessible to everyone seeking a connection with nature.",
        description2: "We work directly with growers across Japan and local masters to bring you trees that carry a spirit of tranquility and resilience.",
        image: "https://images.unsplash.com/photo-1470364693235-a4fe27c60914?auto=format&fit=crop&q=80&w=1200",
        stats: [
            { value: "15+", label: "Years of Experience" },
            { value: "5k+", label: "Trees Rehomed" }
        ]
    },
    workshops: {
        title: "Workshops",
        subtitle: "Join our masters for hands-on sessions in the art of bonsai.",
        featured: {
            tag: "Featured",
            title: "Masterclass: Shaping & Wiring",
            description: "Learn advanced techniques from Master Sato.",
            price: "$150",
            buttonText: "Book Seat",
            image: "https://images.unsplash.com/photo-1526397751294-331021109fbd?auto=format&fit=crop&q=80&w=1200"
        },
        list: [
            {
                tag: "Beginner",
                title: "Introduction to Bonsai",
                description: "Perfect for first-time owners.",
                price: "$45",
                buttonText: "Details"
            },
            {
                tag: "Intermediate",
                title: "Repotting Workshop",
                description: "Seasonal workshop for spring care.",
                price: "$85",
                buttonText: "Details"
            }
        ]
    }
};
