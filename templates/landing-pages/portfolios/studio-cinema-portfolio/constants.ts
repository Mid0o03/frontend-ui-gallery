
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070",
  portrait: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964",
  plant: "https://images.unsplash.com/photo-1501004318641-729e843947cc?auto=format&fit=crop&q=80&w=1974",
  architecture: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=2020",
  panorama: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=2070",
  street: "https://images.unsplash.com/photo-1529139574466-a3090c302d47?auto=format&fit=crop&q=80&w=1974",
  water: "https://images.unsplash.com/photo-1518115392215-618773bfe35d?auto=format&fit=crop&q=80&w=1974",
  minimal: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1967"
};

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category?: string;
  image: string;
  aspect: string;
  span: string;
  details?: string[];
  indexLabel?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Elegance in Shadows",
    subtitle: "Vogue Japan, Dec 2023",
    category: "Editorial",
    image: IMAGES.portrait,
    aspect: "aspect-[4/5]",
    span: "col-span-12 md:col-span-7",
    details: ["ISO 400", "f/1.8", "85mm"]
  },
  {
    id: "2",
    title: "Chlorophyll",
    image: IMAGES.plant,
    aspect: "aspect-square",
    span: "col-span-12 md:col-span-5 md:mt-24",
    indexLabel: "01 / 15"
  },
  {
    id: "3",
    title: "L'Avenue",
    image: IMAGES.architecture,
    aspect: "aspect-[3/4]",
    span: "col-span-12 md:col-span-5",
    indexLabel: "04 / 15"
  },
  {
    id: "4",
    title: "The Altiplano",
    subtitle: "Chilean Andes, 2024",
    category: "Location Scouting",
    image: IMAGES.panorama,
    aspect: "aspect-[21/9]",
    span: "col-span-12"
  }
];

export const TRIO_PROJECTS: Project[] = [
  {
    id: "5",
    title: "Project 012",
    image: IMAGES.street,
    aspect: "aspect-[4/5]",
    span: "col-span-12 md:col-span-4 mt-16"
  },
  {
    id: "6",
    title: "Project 013",
    image: IMAGES.water,
    aspect: "aspect-[4/5]",
    span: "col-span-12 md:col-span-4 md:mt-32"
  },
  {
    id: "7",
    title: "Project 014",
    image: IMAGES.minimal,
    aspect: "aspect-[4/5]",
    span: "col-span-12 md:col-span-4 mt-16"
  }
];
