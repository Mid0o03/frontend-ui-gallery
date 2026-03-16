
export interface Product {
  id: string;
  name: string;
  scientificName: string;
  price: number;
  description: string;
  image: string;
  badge?: string;
  category: 'Essential Oils' | 'Carrier Oils' | 'Blends';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TrustSignal {
  icon: string;
  title: string;
  description: string;
}
