
export interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  badge: string;
  imageUrl: string;
}

export interface AminoAcid {
  name: string;
  amount: number;
  percentage: number;
}

export interface Metric {
  label: string;
  value: string;
}
