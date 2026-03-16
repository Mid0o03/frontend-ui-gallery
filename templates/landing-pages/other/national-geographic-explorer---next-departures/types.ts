
export type Region = 'All Regions' | 'Arctic' | 'Safari' | 'Rainforest' | 'Andes' | 'Marine';

export interface Expedition {
  id: string;
  title: string;
  duration: number;
  description: string;
  location: string;
  country: string;
  departureDate: string;
  imageUrl: string;
  imageAlt: string;
  isLimited: boolean;
  region: Region;
}
