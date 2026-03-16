export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  isNew?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
}