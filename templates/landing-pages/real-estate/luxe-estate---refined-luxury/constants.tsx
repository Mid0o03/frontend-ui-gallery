
import { Stat, Amenity, Feature } from './types';

export const STATS: Stat[] = [
  { id: '1', icon: 'bed', value: '06', label: 'Bedrooms' },
  { id: '2', icon: 'bathtub', value: '08', label: 'Bathrooms' },
  { id: '3', icon: 'square_foot', value: '12,000', label: 'Sq Ft Living Area' },
];

export const AMENITIES: Amenity[] = [
  {
    id: '1',
    icon: 'pool',
    title: 'Infinity Pool',
    description: 'Heated saltwater edge with seamless ocean integration and underwater sound system.',
  },
  {
    id: '2',
    icon: 'beach_access',
    title: 'Private Beach',
    description: 'Direct access to a secluded shoreline with personal concierge amenities.',
  },
  {
    id: '3',
    icon: 'wine_bar',
    title: 'Wine Cellar',
    description: 'Temperature-controlled 2,000 bottle capacity vault with tasting lounge.',
  },
];

export const FEATURES: Feature[] = [
  {
    id: '1',
    icon: 'home_iot_device',
    title: 'Smart Integration',
    description: 'Complete voice and mobile automation for lighting, climate, and security systems.',
  },
  {
    id: '2',
    icon: 'restaurant',
    title: 'Chef’s Kitchen',
    description: 'Professional-grade Wolf and Sub-Zero appliances with secondary preparation scullery.',
  },
  {
    id: '3',
    icon: 'shield',
    title: 'Gated Entry',
    description: 'Double-gated security system with biometric access and 24/7 remote monitoring.',
  },
  {
    id: '4',
    icon: 'fitness_center',
    title: 'Private Wellness',
    description: 'A state-of-the-art gym, steam room, and cold plunge therapy pool.',
  },
];
