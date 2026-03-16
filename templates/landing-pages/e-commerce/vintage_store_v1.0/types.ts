export interface Product {
  id: string;
  filename: string;
  size: string;
  type: string;
  price: number;
  image: string;
  alt: string;
}

export interface NavItem {
  label: string;
  active?: boolean;
}