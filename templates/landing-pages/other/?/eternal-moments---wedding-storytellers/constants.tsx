
import { Testimonial, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Stories', href: '#stories' },
  { label: 'Contact', href: '#contact' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    names: 'Sarah & James',
    event: 'THE WINERY WEDDING, JUNE 2023',
    quote: 'Capturing our day was like freezing time in the most beautiful way possible. The elegance and emotion in every shot were beyond our dreams.',
    imageUrl: 'https://picsum.photos/seed/couple1/400/400',
    icon: 'favorite'
  },
  {
    id: '2',
    names: 'Emily & Michael',
    event: 'ESTATE CELEBRATION, SEPT 2023',
    quote: 'A truly sentimental experience. Every detail was handled with such grace and professionalism. We couldn\'t have asked for a better storyteller.',
    imageUrl: 'https://picsum.photos/seed/couple2/400/400',
    icon: 'auto_awesome'
  },
  {
    id: '3',
    names: 'Sophia & Liam',
    event: 'COASTAL VOWS, MAY 2024',
    quote: 'The photos are breathtaking. They managed to capture the quiet, intimate moments that we will cherish for a lifetime. Simply divine.',
    imageUrl: 'https://picsum.photos/seed/couple3/400/400',
    icon: 'stars'
  }
];
