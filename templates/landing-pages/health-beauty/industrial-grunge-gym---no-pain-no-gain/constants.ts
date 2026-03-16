
import { PricingPlan, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Training', href: '#' },
  { label: 'The Forge', href: '#' },
  { label: 'Pricing', href: '#', active: true },
  { label: 'Team', href: '#' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'grind',
    name: 'THE GRIND',
    price: '$49',
    subtitle: '/ MONTH',
    description: 'Entry-level iron access',
    features: [
      '24/7 Iron Access',
      'Industrial Lockers',
      'Chalk Provided'
    ],
    icon: 'bolt',
    buttonText: 'START GRINDING',
    bgImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'forge',
    name: 'THE FORGE',
    price: '$89',
    subtitle: '/ MONTH',
    description: 'Master the craft',
    isPopular: true,
    features: [
      'All Grind Features',
      'Industrial Sessions',
      'Recovery Zone',
      'Priority Squat Racks'
    ],
    icon: 'workspace_premium',
    buttonText: 'ENTER THE FORGE',
    bgImage: 'https://images.unsplash.com/photo-1534367507873-d2b7e2495992?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'elite',
    name: 'IRON ELITE',
    price: '$149',
    subtitle: '/ MONTH',
    description: 'Elite tier dominance',
    features: [
      'Personal Coaching',
      'Custom Nutrition',
      'Private Sauna'
    ],
    icon: 'shield',
    buttonText: 'BECOME ELITE',
    bgImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800'
  }
];
