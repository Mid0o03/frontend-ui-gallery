
import { GalleryItem, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '#home', icon: 'home' },
  { label: 'Galerie', href: '#galerie', icon: 'palette' },
  { label: 'L\'Esprit', href: '#bio', icon: 'history_edu' },
  { label: 'Contact', href: '#contact', icon: 'mail' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Fujisan Neon',
    category: 'Série Urban Edo',
    description: 'Une réinterprétation cyber-punk du Mont Fuji.',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
    size: 'large'
  },
  {
    id: '2',
    title: 'Samurai Minimal',
    category: 'Portrait',
    description: 'L\'essence du guerrier réduite au trait pur.',
    imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop',
    size: 'tall'
  },
  {
    id: '3',
    title: 'L\'Esprit de Ma',
    category: 'Abstrait',
    description: 'Exploration du vide et de l\'espace négatif.',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2070&auto=format&fit=crop',
    size: 'small'
  },
  {
    id: '4',
    title: 'Sakura Printemps',
    category: 'Nature',
    description: 'La floraison éphémère capturée numériquement.',
    imageUrl: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=2076&auto=format&fit=crop',
    size: 'large'
  }
];
