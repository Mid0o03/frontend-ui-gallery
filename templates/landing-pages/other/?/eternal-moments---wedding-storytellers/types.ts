
export interface Testimonial {
  id: string;
  names: string;
  event: string;
  quote: string;
  imageUrl: string;
  icon: 'favorite' | 'auto_awesome' | 'stars';
}

export interface NavItem {
  label: string;
  href: string;
}
