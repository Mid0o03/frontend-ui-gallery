
export interface Dish {
  name: string;
  description: string;
  pairing: string;
}

export interface ChapterData {
  id: string;
  chapterNumber: string;
  title: string;
  intro: string;
  dishes: Dish[];
  imageUrl: string;
  imageCaption: string;
  imageAlt: string;
}
