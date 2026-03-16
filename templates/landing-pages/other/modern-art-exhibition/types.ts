export interface NavLink {
  label: string;
  href: string;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  alt: string;
  gridSpan?: string;
}

export interface StatItem {
  title: string;
  subtitle: string;
  details?: string;
  icon?: string;
  hasMap?: boolean;
}