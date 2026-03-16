export interface NavItem {
    label: string;
    href: string;
}

export interface Service {
    id: string;
    number: string;
    title: string;
    description: string;
    imageUrl?: string;
    isLarge?: boolean;
    isSquare?: boolean;
    isAction?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Philosophie', href: '/#philosophy' },
    { label: 'Contact', href: '/#contact' },
];

export const SERVICES: Service[] = [
    {
        id: '1',
        number: '01',
        title: 'Soin Visage Haute Couture',
        description: 'Traitement architectural pour une régénération cellulaire profonde et une structure redéfinie.',
        imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000',
        isLarge: true
    },
    {
        id: '2',
        number: '02',
        title: 'Regard Sculpté',
        description: 'Lamination & Design',
        isSquare: true
    },
    {
        id: '3',
        number: '',
        title: '',
        description: '',
        imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '4',
        number: '03',
        title: 'Massage Signature',
        description: 'Équilibre des méridiens et détente géométrique.'
    },
    {
        id: '5',
        number: '',
        title: 'Tous nos services',
        description: '',
        isAction: true
    }
];
