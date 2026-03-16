
import { Product, Testimonial, Ingredient } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Golden Harvest Serum',
    description: 'Infused with Calendula & Jojoba',
    price: 72.00,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800',
    batchNo: '042',
    category: 'Hand-Poured'
  },
  {
    id: '2',
    name: 'Midnight Meadow Balm',
    description: 'Wild Lavender & Sea Buckthorn',
    price: 64.00,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800',
    batchNo: '039',
    category: 'Hand-Poured'
  },
  {
    id: '3',
    name: 'Ancient Moss Cleanser',
    description: 'Green Tea & Volcanic Earth',
    price: 48.00,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800',
    batchNo: '045',
    category: 'Hand-Poured'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "You can feel the life in these oils. The texture is unlike anything mass-produced—it feels like velvet on the skin.",
    author: "Sarah J.",
    location: "London",
    rating: 5
  },
  {
    id: '2',
    quote: "The scent of the Midnight Balm is so grounding. It's become the most essential part of my evening unwinding ritual.",
    author: "Julian M.",
    location: "NYC",
    rating: 5
  },
  {
    id: '3',
    quote: "Knowing the batch number and who made it makes the experience so much more personal. A rare find in today's world.",
    author: "Elena K.",
    location: "Rome",
    rating: 5
  },
  {
    id: '4',
    quote: "The solar infusion process really works. My sensitive skin has never been more calm and glowing.",
    author: "Marcus T.",
    location: "Toronto",
    rating: 5
  }
];

export const INGREDIENTS: Ingredient[] = [
  {
    id: '1',
    name: 'Wild Rosemary',
    origin: 'Provence, France',
    image: 'https://images.unsplash.com/photo-1594315620301-02ab88645d4c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Sea Buckthorn',
    origin: 'Himalayan Slopes',
    image: 'https://images.unsplash.com/photo-1605652516629-d5c4b18c5f59?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'Night Jasmine',
    origin: 'Tamil Nadu, India',
    image: 'https://images.unsplash.com/photo-1596435349635-422874136691?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    name: 'Blue Tansy',
    origin: 'Atlas Mountains',
    image: 'https://images.unsplash.com/photo-1597843798133-e15097473954?auto=format&fit=crop&q=80&w=400'
  }
];
