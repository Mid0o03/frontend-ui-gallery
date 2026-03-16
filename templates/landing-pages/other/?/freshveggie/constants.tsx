
import React from 'react';
import { MapPin, Leaf, Sun } from 'lucide-react';
import { Product, EngagementItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Heirloom Carrots',
    origin: 'Grown in Sunny Valley Farms',
    price: 4.50,
    unit: 'bunch',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Curly Kale',
    origin: 'Organic Hydroponic',
    price: 3.75,
    unit: 'head',
    image: 'https://images.unsplash.com/photo-1524179524541-1bb1ce403bb5?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Red Radishes',
    origin: 'Early Spring Harvest',
    price: 3.00,
    unit: 'bunch',
    image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=600&auto=format&fit=crop',
  }
];

export const ENGAGEMENTS: EngagementItem[] = [
  {
    title: 'Local',
    description: 'Sourced from boutique farms within 50 miles of your home to minimize carbon footprint.',
    icon: 'distance',
  },
  {
    title: 'Organic',
    description: 'Pesticide-free, nutrient-dense soil cultivation methods for better flavor and health.',
    icon: 'nest_eco_leaf',
  },
  {
    title: 'Seasonal',
    description: 'Only what is currently in peak bloom for maximum nutrition and seasonal variety.',
    icon: 'sunny',
  }
];
