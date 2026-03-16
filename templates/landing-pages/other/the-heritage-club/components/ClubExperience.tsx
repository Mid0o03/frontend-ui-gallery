
import React from 'react';

const experiences = [
  {
    title: 'The Courts',
    subtitle: 'Grass-court excellence',
    description: 'Twelve pristine natural grass courts, manicured daily to professional standards.',
    image: 'https://images.unsplash.com/photo-1595435066311-66df900f6825?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'The Fairways',
    subtitle: 'Pristine 18-hole course',
    description: 'A challenging yet rewarding course designed by legendary architects in 1932.',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'The Clubhouse',
    subtitle: 'Refined social leisure',
    description: 'The heart of our community, featuring fine dining and our historic members\' lounge.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800'
  }
];

const ClubExperience: React.FC = () => {
  return (
    <section id="amenities" className="py-24 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h3 className="text-4xl font-display italic text-slate-900 mb-3">The Club Experience</h3>
            <div className="h-1 w-20 bg-secondary"></div>
          </div>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
            Our facilities are maintained with rigorous attention to detail, preserving the standards of excellence set a century ago.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {experiences.map((exp) => (
            <div key={exp.title} className="group cursor-pointer">
              <div className="relative mb-8 overflow-hidden rounded-sm">
                {/* Thin overlay border inside the image */}
                <div className="absolute inset-0 border-[0.5px] border-white/40 z-10 m-3 pointer-events-none"></div>
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              
              <h4 className="text-2xl font-display font-bold text-slate-900 mb-1">{exp.title}</h4>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary/80 mb-5">
                {exp.subtitle}
              </p>
              <p className="text-slate-600 font-display italic leading-relaxed text-lg">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubExperience;
