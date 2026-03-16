
export interface Discipline {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tier: string;
  price: number;
  features: string[];
  unavailable: string[];
  isFeatured?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
