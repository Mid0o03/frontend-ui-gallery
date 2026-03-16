
export interface Service {
  id: string;
  level: string;
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
