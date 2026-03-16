
import { Review, AminoAcid, Metric } from './types';

export const PERFORMANCE_METRICS: Metric[] = [
  { label: 'Bioavailability', value: '98%' },
  { label: 'Absorption Rate', value: '4.2x' },
  { label: 'Isolate Protein', value: '28g' },
];

export const AMINO_ACID_PROFILE: AminoAcid[] = [
  { name: 'Leucine', amount: 3500, percentage: 95 },
  { name: 'Isoleucine', amount: 1800, percentage: 78 },
  { name: 'Valine', amount: 1750, percentage: 75 },
  { name: 'Glutamine', amount: 5000, percentage: 88 },
];

export const TESTIMONIALS: Review[] = [
  {
    id: '1',
    name: 'Marcus Thorne',
    role: 'Professional Hybrid Athlete',
    badge: 'Verified Engineer',
    rating: 5,
    content: '"The absorption rate is noticeably different. Zero digestive overhead, and the recovery window feels significantly accelerated compared to standard isolates. It\'s clean fuel."',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa75GuBQjYrR4Ljg1rdRikvzyekefGvVrUHvA33u0BOljHS-2Ho1NCJL6MIuX57PUV5docMlumW0HoXQr7zKEdTLwQjS8Rn_owEZQsi2uz_5ietwUxotFJ3Jj5aRW9lZLa1VnMXIAh9DTU-raA4fl3Rm7ZGbZIwlHYgKFNISsqDFi0Ji_ij-gcQLMvUXyTVbkKT9CYq2MToCi-o6_7nVAWAw-s1vOkQqF3hkrjjMSIDdCw6Ps9spazpfGX3AO2oQVRfzuS_FeoAc8',
  },
  {
    id: '2',
    name: 'Dr. Elena Volkov',
    role: 'Nutrition Systems Analyst',
    badge: 'Biohacker v2',
    rating: 4.5,
    content: '"Finally a supplement that treats nutrition like a technical stack. The purity metrics are real, and I\'ve noticed a distinct improvement in lean mass retention during high-intensity cycles."',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyM7FiwrtjLcBiUjdfrn1DTHon3qW1SEn4VUOyrch91aDOiWdphOdTJHIl7IYbGdunuE5k_FfQ-Ie6fjIfyanjC3QlkN_nbMmEyfHVJc5dCHKyU2IobRfTiFtqgfkWkpThRLqCAUbPq3lCDl14yzb_OorMRKnRsHMopRgBK4ieMFf24FesIecZrmC_Ix5MOKh-7X6BHP8mmFCxXZLLhQhkNmdEPF8hvmnDuVyiLQu7xCYPMR6544NYC_KNpdv3IzdbgTf3l4GQj9E',
  },
  {
    id: '3',
    name: 'Jaxson Grey',
    role: 'Performance Consultant',
    badge: 'Elite Buyer',
    rating: 5,
    content: '"Superior mixability. No clumps, no bloat. It feels like pharma-grade nutrition. The flavor profile is subtle, which I prefer over the typical artificial sweeteners."',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrqvLRe_CIXeFRlE3iRh_sR2tsRH2bHRqiFj0p2bjYQkFpTzHhkUkQUhtJJfku3Igwk2Zc9cSMzQCX16lbJn2nl9DcUjGFF9JZXQGeESUPC0QYIUHplzcuWvz4xX3dThHfq9Ztx403JesgC1JvJtF_2qRh3FUSYsN6zWueR626_Z16nvG_rxCPRcx3nGLfPT8vC5_7sjAUyii-bP3IarE_wxOBS85gV1AAsBEPeI79JubN3SKJVLssBzCDPD0bTN67WtICVCpevIQ',
  },
];
