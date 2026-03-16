import { Benefit, NavLink, Product, SocialLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Ingredients', href: '#ingredients' },
  { label: 'Journal', href: '#journal' },
];

export const BENEFITS: Benefit[] = [
  {
    id: 'organic',
    icon: 'eco',
    title: '100% Organic',
    description: 'Sourced responsibly from certified organic farms without harmful chemicals or pesticides.',
  },
  {
    id: 'cruelty-free',
    icon: 'pets',
    title: 'Cruelty-Free',
    description: 'Never tested on animals. We love our furry friends and are Leaping Bunny certified.',
  },
  {
    id: 'vegan',
    icon: 'spa',
    title: 'Vegan Formulas',
    description: '100% plant-based ingredients that are kind to your skin and the planet.',
  },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'cloud-cream',
    name: 'Hydrating Cloud Cream',
    subtitle: 'Day & Night Moisturizer',
    price: 42,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4ICWjI2k4-vyIajyo1l6WxUaTy48gSexgGcO1on_6dYHt1a7pSpz2wHrLf7Hvnlr2ajyG1uwjPM9lHAlLH33NhxR-oIWtEaCj5wnh9xPFXb5qTPqWHrsUC7yIFw0QPcX94rb4NzOfLnOLRJK4ktzMvfcLLNJsxFCIj54SHI0I1F0riVhSlFaOwuCnk4aQzd4VxiILBeK5dYVP_v2V53kuZ_1zNiE11CnSqj4cr7rYdkcHYgwJiCey_3lbAfuWZHjpxER4E8sz0Cg',
  },
  {
    id: 'facial-oil',
    name: 'Botanical Facial Oil',
    subtitle: 'Restorative Night Blend',
    price: 56,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApy46tdzqYdA6-qte-QDq16B7gkCSQz7NM_-osEp3cYjMmrVjQva8c1XFX9f6N4iXrh6Fbdds5ABnDYCIdI0cXMRgSzOscRT8MLj5jBFZJkyque86zmoppXEebQYBgAFDmAjuC_SGD4rBFmOhSScife5csEDXV2-ij7Y81V8FD_NMZglWZ0VkBOXzkZlxpd-chs8MfoCiqNR2uVmJbf-xb9TAMslLI0Utkh-8u_zHfFqvU2MFqen2qktBcrT45-mtTs6LwAxK8rv8',
    isNew: true,
  },
  {
    id: 'foam-cleanser',
    name: 'Gentle Foam Cleanser',
    subtitle: 'Daily Purifying Wash',
    price: 28,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1YG-TFdSkNrZiaw-RhEne9HUou_q_kU8Wp3wChrjx6tcLB31G-Y9xKT-1F1Y7DedAn3f33v_HlowtfxDTwr5G2KTBEEcpARXnIdMQDoOUBWAVjs23B-meGb3UliRbEIB4g4108loP_T_Me3nV06diBjGzy_BuR3sqUZfIUKS7_xBEQfHuS0aegcsxywiIGn-DLAbLHtqMRAjkWxJEf0_R12ylzeKRiTVHxLAwgOoz4r9GQ0Op-uQOgSVbDHW7r2NVMcN3A3vidaU',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'IG', href: '#' },
  { label: 'TT', href: '#' },
  { label: 'PI', href: '#' },
];
