
import { Product, Roast } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Industrial Strength',
    description: 'Ethiopian Heirloom - Single Origin',
    price: '$24.00',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800',
    alt: 'Vintage style coffee bag packaging design',
    isNew: true
  },
  {
    id: 'p2',
    name: "Worker's Blend",
    description: 'Brazil & Sumatra House Blend',
    price: '$18.50',
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=800',
    alt: 'Burlap style coffee bag with bold print'
  },
  {
    id: 'p3',
    name: 'Midnight Shift',
    description: 'Extra Dark French Roast',
    price: '$22.00',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=800',
    alt: 'Dark aesthetic coffee packaging with copper foil'
  },
  {
    id: 'p4',
    name: 'Steam Engine',
    description: 'Limited Edition Reserve',
    price: '$32.00',
    image: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=800',
    alt: 'Artisanal vintage coffee bag illustration'
  }
];

export const ROASTS: Roast[] = [
  {
    id: 'r1',
    title: 'Light Roast',
    description: 'Bright, Floral & Morning-Ready',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800'
  },
  {
    id: 'r2',
    title: 'Medium Roast',
    description: 'Balanced, Nutty & Chocolatey',
    image: 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?q=80&w=800'
  },
  {
    id: 'r3',
    title: 'Dark Roast',
    description: 'Bold, Smoky & Heavy Bodied',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=800'
  }
];
