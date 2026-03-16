
export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  imageUrl: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark'
}
