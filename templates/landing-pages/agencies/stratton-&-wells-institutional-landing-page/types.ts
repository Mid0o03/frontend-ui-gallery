
export interface NavItem {
  label: string;
  href: string;
}

export interface GazetteArticle {
  category: string;
  title: string;
  excerpt: string;
  cta?: string;
  quote?: string;
  stats?: Array<{ label: string; value: string }>;
}

export interface ExpertiseItem {
  icon: string;
  title: string;
  description: string;
}

export interface Partner {
  name: string;
  role: string;
  imageUrl: string;
}
