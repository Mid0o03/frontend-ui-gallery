
export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  isPopular?: boolean;
  buttonText: string;
  bgImage: string;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}
