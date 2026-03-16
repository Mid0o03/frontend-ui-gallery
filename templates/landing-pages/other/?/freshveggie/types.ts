
export interface Product {
  id: string;
  name: string;
  origin: string;
  price: number;
  unit: string;
  image: string;
  tag?: string;
}

export interface EngagementItem {
  title: string;
  description: string;
  icon: string;
}
