
import { Article, MagazineCategory } from './types';

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    category: MagazineCategory.ARCHITECTURE,
    title: 'Geometric Brutalism',
    imageUrl: 'https://picsum.photos/id/10/1200/1500?grayscale',
    gridSpan: 'md:col-span-7',
    aspectRatio: 'aspect-[4/5]'
  },
  {
    id: '2',
    category: MagazineCategory.FASHION,
    title: 'The Silk Vanguard',
    imageUrl: 'https://picsum.photos/id/1025/1000/1000?grayscale',
    gridSpan: 'md:col-span-5',
    aspectRatio: 'aspect-square'
  },
  {
    id: '3',
    category: MagazineCategory.INTERIOR,
    title: 'Quiet Spaces',
    imageUrl: 'https://picsum.photos/id/111/1200/800?grayscale',
    gridSpan: 'md:col-span-5',
    aspectRatio: 'aspect-[16/10]'
  },
  {
    id: '4',
    category: MagazineCategory.ESCAPE,
    title: 'The Void of Nature',
    imageUrl: 'https://picsum.photos/id/1015/1200/1200?grayscale',
    gridSpan: 'md:col-span-7',
    aspectRatio: 'aspect-square'
  }
];
