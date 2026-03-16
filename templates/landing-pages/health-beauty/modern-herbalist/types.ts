
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  tag: string;
  imageUrl: string;
}

export interface BotanicalInfo {
  name: string;
  benefits: string[];
  history: string;
  safety: string;
}
