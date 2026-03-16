
export interface QuizOption {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Question {
  id: number;
  title: string;
  description: string;
  options: QuizOption[];
}

export interface QuizResults {
  answers: Record<number, string>;
  email: string;
}

export interface Recommendation {
  title: string;
  summary: string;
  actionPoints: string[];
}
