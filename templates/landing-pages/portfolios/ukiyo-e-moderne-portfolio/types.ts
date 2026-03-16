
export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  size: 'large' | 'small' | 'tall';
}

export interface NavLink {
  label: string;
  href: string;
  icon: string;
}
