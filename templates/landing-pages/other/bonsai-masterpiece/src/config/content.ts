import { brandingConfig } from './branding';

export const siteContent = {
    hero: {
        title: brandingConfig.siteName,
        subtitle: 'Cultivating Patience',
        description: 'Experience the ancient tradition of harmonizing nature and soul through living art.',
        cta: 'Explore Collection',
        scrollText: 'Scroll to Discover',
    },
    history: {
        title: 'Crafting Patience',
        subtitle: 'A Thousand Year Journey',
        description: 'Rooted in ancient Chinese Penjing, the art was refined by Japanese Zen monks into the meditative practice we know today. It is not just about horticultural skill, but a spiritual expression of the harmony between man, soul, and nature.',
        stats: [
            { value: '700+', label: 'Species' },
            { value: '12th', label: 'Century' },
            { value: '1000y', label: 'Oldest Tree' },
        ],
    },
    styles: {
        title: 'Forms of Nature',
        subtitle: 'Traditional Styles',
        description: 'Each style mimics a specific way trees grow in nature, telling a unique story of survival and beauty.',
    },
    care: {
        title: 'Seasonal Rhythms',
        description: "Bonsai care follows the circularity of seasons. Monitoring moisture levels and light exposure is crucial for maintaining the delicate balance of your tree's micro-ecosystem.",
        tips: [
            { icon: 'water_drop', text: 'Peak watering occurs during the heat of July and August.' },
            { icon: 'light_mode', text: 'Maximum sunlight exposure is vital during late spring and summer.' },
        ],
    },
    gallery: {
        title: 'Masterpiece Gallery',
        items: [
            { id: 1, title: 'Exhibit 1', subtitle: 'Juniperus Chinensis' },
            { id: 2, title: 'Exhibit 2', subtitle: 'Pinus Parviflora' },
            { id: 3, title: 'Exhibit 3', subtitle: 'Acer Palmatum' },
            { id: 4, title: 'Exhibit 4', subtitle: 'Juniperus Rigida' },
            { id: 5, title: 'Exhibit 5', subtitle: 'Azalea Rhododendron' },
            { id: 6, title: 'Exhibit 6', subtitle: 'Ficus Retusa' },
        ]
    },
    aiAdvice: {
        title: 'Master\'s Wisdom',
        subtitle: 'AI Cultivation Guide',
        placeholder: 'Ask about watering, pruning, or soil...',
        button: 'Seek Wisdom',
        defaultResponse: 'The master is contemplating your tree...',
    },
    footer: {
        brand: brandingConfig.siteName,
        links: brandingConfig.socialLinks,
        copyright: brandingConfig.copyrightText,
    }
};
