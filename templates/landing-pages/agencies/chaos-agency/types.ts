export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  theme: 'yellow' | 'black' | 'white' | 'green';
  items?: string[];
  image?: string;
  colSpan?: string;
  rowSpan?: string;
}