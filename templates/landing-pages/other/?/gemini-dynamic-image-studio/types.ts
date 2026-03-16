
export interface GeneratedImage {
  url: string;
  prompt: string;
  timestamp: number;
}

export enum AppSection {
  HERO = 'hero',
  STUDIO = 'studio',
  FEATURES = 'features',
  PRICING = 'pricing'
}
