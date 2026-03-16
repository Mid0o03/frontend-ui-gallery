
export interface BonsaiStyle {
  id: string;
  name: string;
  japanese: string;
  description: string;
  imageUrl: string;
}

export interface CareLog {
  date: string;
  moisture: number;
  health: 'Excellent' | 'Good' | 'Fair' | 'Poor';
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
