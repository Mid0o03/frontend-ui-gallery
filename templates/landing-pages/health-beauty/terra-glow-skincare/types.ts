
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  descriptionShort: string;
}

export interface Recommendation {
  productName: string;
  reason: string;
}

export interface AdvisorResponse {
  analysis: string;
  recommendations: Recommendation[];
}
