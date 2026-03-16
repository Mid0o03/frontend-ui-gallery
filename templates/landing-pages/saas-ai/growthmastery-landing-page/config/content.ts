/**
 * Site Content Configuration
 * 
 * Centralized text, links, and media URLs for all sections of the landing page.
 * Modify these values to change the copy without touching the component logic.
 */
export const content = {
    notification: {
        text: "Special Launch Offer: Save 50% on all plans this week! 🚀",
    },
    header: {
        menuItems: [
            { label: "Curriculum", href: "#curriculum" },
            { label: "Reviews", href: "#reviews" },
            { label: "Pricing", href: "#pricing" },
        ],
        cta: "Enroll Now",
    },
    hero: {
        badge: "Live Cohort Starting Soon",
        title: {
            regular: "Master Digital",
            highlight: "Marketing",
            suffix: "in 30 Days"
        },
        description: "Join 5,000+ students in the ultimate growth hacking course. Learn from industry experts and build a 6-figure career from scratch.",
        cta: "Secure My Spot",
        reviews: {
            rating: "4.9/5",
            count: "from 2k+ reviews",
            avatars: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCXZQMwWmFd1BOjRSBcVC8ZOq9E7VbnFUBKNDY9pRacx968empJhPSEWkj6h78rGtO67PWXGhx9IdQVK4T7uC34z-GoHH25gvIO2m8m4Fd1KKsEK-X96YAkBlSoARr50olaXrSKs5ztpwl4WNOnB7qL0FXWUX7VMRSqsy5j3mICNpATbXn78fSRQexR13iBUg_b0SRpEv3zwGb3PzYqI8Sg_ix7qQ3f_XzWVnn9PpgpGraY-MaCvzcGP-3pRTqVOz6U6UMRcLNw7Dk",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCCj95qJ7v4hdt9spnupDc9zj6ly8VND3UyAIKdZcPPm8RV5uc6ORT3e26TZVGCtdch2x6BPlewLGv29knMZfvYIVXUw8EAzN7B8VRJqLUGVwLD-o6lsiBOyxp84oV3QUqe4kymHgV-JrqbgZVhH1OHfUoibJUP-aokogKKCj2lFSlIwmYSq09Us7qzAsdtd4599nf-3QuVwEHSxmKRUDKPgOwkWOSIAYQ8qbLqvaF5GdCaW2rZkgqTY22YCRc910n62eAiplcag9E",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBx9KehH-hsm6_cONbIK2WUPZlfcvBXVjfweVO-pZCilJcspP_ZoKGIqGfL0TlWi16j7j0tjITjn-Qa3YOE2aSOLNzIhR9vv7lS0FOj3LGWTlNgbQPmxgXq8AgOgdXfj9B8aoMIndTF73yiJ7nYS1zONplYJfXbM2vGJ24Snp6zQpwLByfKFKGMb6-Dt-tYK0eXzDT21JVBKD1HtMpA0q5MPUSpMfwiTtcqYDoIXMgmvIwYfTXVcF-SD4zdTwosstqERd6dNoOC0M4"
            ]
        },
        instructor: {
            name: "David Chen",
            role: "Ex-CMO at TechGiant",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfvDgGE7XPHxUmJ7veAUHwh0ooZsy6HU59oXfRZhYEm-ISZx1d6IT-hBqaK2wROsHjg7jNm-VftUqGkApnbXeo3Hx9MWt6FLk3y2r182WgSlftBb0NUCAW-utEL7vYKUHFexzgvmV2cMDmGk3-gpTfVe2XHPIXFXEKIsP2PhIxGtUsKEuwnQfvvi9lEkunpxpiYi3DGmJBN9DeZw2Xjw-wJrqKzhgYQviauQ8JKCR531q48_NXG4RaX61O_13ibLwsHSuqDNOjZ2s"
        },
        stats: [
            { label: "Student Revenue", value: "+$12,400", icon: "trending_up", color: "green" },
            { label: "New Students", value: "542 This Week", icon: "group", color: "blue" }
        ]
    },
    features: {
        title: "Why Choose GrowthMastery?",
        subtitle: "Everything you need to master the digital landscape",
        items: [
            { title: "Expert Led", description: "Learn from people who have actually built and scaled businesses.", icon: "star" },
            { title: "Project Based", description: "Build a real portfolio while you learn.", icon: "work" },
            { title: "Community", description: "Access to our private Discord with 5k+ members.", icon: "forum" },
        ]
    },
    curriculum: {
        title: "Course Curriculum",
        subtitle: "A step-by-step roadmap to mastery",
        modules: [
            { title: "Module 1: Fundamentals", description: "Basics of digital marketing and growth hacking." },
            { title: "Module 2: Content Strategy", description: "How to create viral content that converts." },
            { title: "Module 3: Paid Ads", description: "Mastering Facebook, Google, and TikTok ads." },
        ]
    },
    pricing: {
        title: "Ready to Start Your Journey?",
        subtitle: "Choose the plan that's right for you",
        plans: [
            {
                name: "Basic",
                price: "$49",
                period: "/month",
                features: ["Access to all videos", "Community access", "Basic templates"],
                cta: "Get Started",
                popular: false
            },
            {
                name: "Pro",
                price: "$99",
                period: "/month",
                features: ["Access to all videos", "1-on-1 coaching", "VIP Discord", "Advanced templates"],
                cta: "Go Pro",
                popular: true
            }
        ]
    },
    footer: {
        description: "Empowering the next generation of digital marketers.",
        links: [
            { title: "Product", items: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }] },
            { title: "Company", items: [{ label: "About", href: "#" }, { label: "Contact", href: "#" }] },
        ],
        copyright: "© 2025 GrowthMastery. All rights reserved."
    }
};
