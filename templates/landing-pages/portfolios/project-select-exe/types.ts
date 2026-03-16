
export type Category = 'ALL' | 'SAAS' | 'TOOLS' | 'TRAINING';

export interface ProjectStats {
  str: number;
  agi: number;
  int: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  category: Category;
  level: string;
  image: string;
  stats: ProjectStats;
}
