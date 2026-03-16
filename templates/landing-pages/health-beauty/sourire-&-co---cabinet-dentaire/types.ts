
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  highlighted?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  avatar: string;
}
