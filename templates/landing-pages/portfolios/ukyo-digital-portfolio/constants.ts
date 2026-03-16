
import { Project, NavLink } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Project Enso',
    category: 'Digital Branding / Identity',
    imageUrl: 'https://picsum.photos/seed/enso/600/800',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: '2',
    title: 'The Great Neon',
    category: 'Modern Illustration',
    imageUrl: 'https://picsum.photos/seed/neon/600/1000',
    aspectRatio: 'aspect-[3/5]',
    offset: 'md:mt-12',
  },
  {
    id: '3',
    title: 'Zen Interface',
    category: 'UI/UX Design',
    imageUrl: 'https://picsum.photos/seed/zen/600/600',
    aspectRatio: 'aspect-[1/1]',
  },
  {
    id: '4',
    title: 'Ronin Identity',
    category: 'Character Design',
    imageUrl: 'https://picsum.photos/seed/ronin/800/1000',
    aspectRatio: 'aspect-[4/5]',
    offset: 'md:-mt-12',
  },
  {
    id: '5',
    title: 'Crimson Bloom',
    category: 'Package Design',
    imageUrl: 'https://picsum.photos/seed/bloom/600/800',
    aspectRatio: 'aspect-[3/4]',
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
