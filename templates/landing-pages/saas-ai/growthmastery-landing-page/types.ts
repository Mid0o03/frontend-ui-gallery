export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface CurriculumLesson {
  title: string;
  isLocked?: boolean;
}

export interface CurriculumModule {
  id: string;
  number: string;
  title: string;
  meta: string;
  lessons: CurriculumLesson[];
}