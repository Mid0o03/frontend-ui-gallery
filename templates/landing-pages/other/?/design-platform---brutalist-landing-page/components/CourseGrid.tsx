
import React from 'react';
import { Grid2X2 } from 'lucide-react';
import { BrutalCard } from './ui/BrutalCard';

interface Course {
  title: string;
  level: string;
  duration: string;
  imageUrl: string;
}

const COURSES: Course[] = [
  {
    title: "HTML/CSS RAW",
    level: "Beginner",
    duration: "4 Weeks",
    imageUrl: "https://picsum.photos/seed/design1/400/400"
  },
  {
    title: "Typography",
    level: "Intermediate",
    duration: "2 Weeks",
    imageUrl: "https://picsum.photos/seed/design2/400/400"
  },
  {
    title: "Layout Grids",
    level: "Advanced",
    duration: "3 Weeks",
    imageUrl: "https://picsum.photos/seed/design3/400/400"
  },
  {
    title: "UX Brutalism",
    level: "Pro",
    duration: "5 Weeks",
    imageUrl: "https://picsum.photos/seed/design4/400/400"
  }
];

const CourseGrid: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-black uppercase mb-12 flex items-center gap-4 tracking-tighter">
        <Grid2X2 size={48} strokeWidth={3} />
        Courses_2024
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {COURSES.map((course, idx) => (
          <BrutalCard key={idx} {...course} />
        ))}
      </div>
    </section>
  );
};

export default CourseGrid;
