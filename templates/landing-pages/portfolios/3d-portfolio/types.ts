export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  colorClass: string; // Used for the gradient overlay
  spanRows?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
  isButton?: boolean;
}