
export interface Article {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
  gridSpan: string; // Tailwind grid span classes
  aspectRatio: string;
}

export enum MagazineCategory {
  ARCHITECTURE = 'Architecture',
  FASHION = 'Fashion',
  INTERIOR = 'Interior',
  ESCAPE = 'Escape',
  DESIGN = 'Design'
}
