
import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS, TRIO_PROJECTS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24 max-w-[1800px] mx-auto">
      {/* Main Grid Setup */}
      <div className="grid grid-cols-12 gap-8 md:gap-16 lg:gap-24">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {/* The trio at the bottom */}
        <div className="col-span-12 grid grid-cols-12 gap-8 md:gap-12 mt-12">
           {TRIO_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
