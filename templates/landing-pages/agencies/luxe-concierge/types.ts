
export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  link: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
