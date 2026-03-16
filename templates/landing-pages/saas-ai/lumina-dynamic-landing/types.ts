
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  avatar: string;
}
