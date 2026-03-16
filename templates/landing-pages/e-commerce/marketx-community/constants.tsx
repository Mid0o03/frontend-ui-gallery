
import { Testimonial, FooterSection } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Collector since 2021',
    avatar: 'https://picsum.photos/seed/alex/200/200',
    rating: 5,
    content: '"Best finds ever! This marketplace has everything I need and more. The verification process makes me feel so secure."',
    likes: 24,
    verified: true
  },
  {
    id: '2',
    name: 'Jordan Lee',
    role: 'Top Seller',
    avatar: 'https://picsum.photos/seed/jordan/200/200',
    rating: 5,
    content: '"The community is so welcoming. I love trading here every single day. The user interface is just beautiful."',
    likes: 156,
    verified: true
  },
  {
    id: '3',
    name: 'Casey Smith',
    role: 'Verified Curator',
    avatar: 'https://picsum.photos/seed/casey/200/200',
    rating: 5,
    content: '"Found a rare item within minutes. Highly recommended for any collector looking for high-quality items and fast support."',
    likes: 89,
    verified: true
  }
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Marketplace',
    links: [
      { label: 'Discover Items', href: '#' },
      { label: 'Top Sellers', href: '#' },
      { label: 'New Drops', href: '#' },
      { label: 'Verified Only', href: '#' }
    ]
  },
  {
    title: 'Community',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Guilds & Groups', href: '#' },
      { label: 'Events', href: '#' },
      { label: 'Careers', href: '#' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Trust & Safety', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' }
    ]
  }
];

export const TICKER_ITEMS = [
  "Joined by 10,240+ people",
  "Verified Community",
  "New drops every hour",
  "Trusted by Collectors"
];
