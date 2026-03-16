
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  batchNo: string;
  category: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export interface Ingredient {
  id: string;
  name: string;
  origin: string;
  image: string;
}
