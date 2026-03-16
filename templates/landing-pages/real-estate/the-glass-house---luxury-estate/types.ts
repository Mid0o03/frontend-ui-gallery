
export interface NavItem {
  label: string;
  href: string;
}

export interface EstateDetails {
  id: string;
  name: string;
  location: string;
  description: string;
  price?: string;
}

export enum ViewMode {
  HERO = 'hero',
  GALLERY = 'gallery',
  DETAILS = 'details'
}
