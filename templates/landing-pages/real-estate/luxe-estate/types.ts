
export interface Amenity {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
