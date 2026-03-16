
export interface Artist {
  name: string;
  tier: 'headliner' | 'supporting' | 'emerging';
}

export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface TicketTier {
  id: string;
  name: string;
  price: string;
  tagline: string;
  features: string[];
  isPopular?: boolean;
  color: string;
}
