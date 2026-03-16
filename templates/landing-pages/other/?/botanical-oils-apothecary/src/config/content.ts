import { Product, NavItem, TrustSignal } from '../types';

export const CONTENT = {
    hero: {
        badge: 'NEW COLLECTION',
        title: 'The Art of Clinical Herbalism',
        description: 'Experience the therapeutic power of nature with our small-batch, GC/MS tested essential oils. Sourced ethically, formulated scientifically.',
        cta: 'Shop the Collection',
        secondaryCta: 'Learn our Process',
    },
    navItems: [
        { label: 'Shop All', href: '#' },
        { label: 'Botanical Profiles', href: '#' },
        { label: 'Sustainability', href: '#' },
        { label: 'About', href: '#' },
    ] as NavItem[],
    products: [
        {
            id: '1',
            name: 'Organic Bulgarian Lavender',
            scientificName: 'Lavender Angustifolia',
            price: 32.0,
            description: 'Steam-distilled at peak bloom. Contains high levels of linalool and linalyl acetate for profound restorative benefits.',
            image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=80&w=800',
            badge: 'High Potency',
            category: 'Essential Oils'
        },
        {
            id: '2',
            name: 'Wild-Harvested Eucalyptus',
            scientificName: 'Eucalyptus Globulus',
            price: 28.0,
            description: 'Sharp, cooling, and high in 1,8-cineole. Sourced from sustainable Tasmanian forests for maximum purity.',
            image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800',
            badge: 'Bestseller',
            category: 'Essential Oils'
        },
        {
            id: '3',
            name: 'Sacred Omani Frankincense',
            scientificName: 'Boswellia Sacra',
            price: 85.0,
            description: 'Rare hydro-distillation of Royal Hojari resin. A complex chemical profile featuring alpha-pinene and limonene.',
            image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=800',
            badge: 'Limited Reserve',
            category: 'Essential Oils'
        }
    ] as Product[],
    trustSignals: [
        {
            icon: 'biotech',
            title: 'GC/MS Tested',
            description: 'Verified chemical purity per batch'
        },
        {
            icon: 'public',
            title: 'Ethically Sourced',
            description: 'Direct partnerships with small farms'
        },
        {
            icon: 'water_drop',
            title: '100% Pure',
            description: 'Zero synthetics or fillers added'
        },
        {
            icon: 'school',
            title: 'Science-Led',
            description: 'Formulated by clinical herbalists'
        }
    ] as TrustSignal[],
    footer: {
        copyright: '© 2024 Lumina Botanica. All rights reserved.',
        newsletterTitle: 'Join our Botanical Circle',
        newsletterPlaceholder: 'Email address',
        newsletterButton: 'Subscribe',
    }
};
