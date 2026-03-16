
export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  aspectRatio: 'aspect-[3/4]' | 'aspect-[3/5]' | 'aspect-[1/1]' | 'aspect-[4/5]';
  offset?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
