
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
  isNew?: boolean;
}

export interface Roast {
  id: string;
  title: string;
  description: string;
  image: string;
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
}
