
export enum TabType {
  ANALYTICS = 'ANALYTICS',
  SECURITY = 'SECURITY',
  SCALABILITY = 'SCALABILITY'
}

export interface FeatureContent {
  id: TabType;
  title: string;
  description: string;
  items: string[];
  imageUrl: string;
  icon: string;
}

export interface FormData {
  name: string;
  company: string;
  email: string;
  message: string;
}
