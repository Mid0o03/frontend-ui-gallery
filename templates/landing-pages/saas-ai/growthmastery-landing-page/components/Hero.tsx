import React from 'react';
import { content } from '../config';

/**
 * Hero Section Component
 * 
 * Displays the main value proposition, primary call to action, 
 * instructor details, and social proof (student reviews).
 */
const Hero: React.FC = () => {
  const { hero } = content;

  return (
    <section className="relative overflow-hidden py-12 lg:py-24">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[0%] left-[0%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              {hero.badge}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              {hero.title.regular} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">{hero.title.highlight}</span> {hero.title.suffix}
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#pricing" className="w-full sm:w-auto bg-accent hover:bg-orange-600 text-white text-lg font-bold py-4 px-8 rounded-full shadow-glow-accent transition-all transform hover:-translate-y-1">
                {hero.cta}
              </a>

              <div className="flex items-center gap-3 px-4">
                <div className="flex -space-x-3">
                  {hero.reviews.avatars.map((avatar, idx) => (
                    <div key={idx} className="size-10 rounded-full border-2 border-background-light dark:border-background-dark bg-gray-300 bg-cover bg-center" style={{ backgroundImage: `url('${avatar}')` }}></div>
                  ))}
                </div>
                <div className="text-sm font-medium">
                  <span className="block font-bold text-accent">{hero.reviews.rating}</span>
                  <span className="text-slate-500">{hero.reviews.count}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content / Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Instructor Image Container */}
            <div className="relative z-10 w-full max-w-md mx-auto aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-card-dark bg-gradient-to-b from-blue-900/50 to-background-dark">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${hero.instructor.image}')` }}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                <p className="text-white font-bold text-xl">{hero.instructor.name}</p>
                <p className="text-blue-300 text-sm">{hero.instructor.role}</p>
              </div>
            </div>

            {/* Floating Cards */}
            {hero.stats.map((stat, idx) => (
              <div key={idx} className={`absolute ${idx === 0 ? 'top-[10%] right-[5%]' : 'bottom-[20%] -left-[5%]'} z-20 bg-card-dark p-4 rounded-2xl shadow-xl border border-slate-700 animate-[bounce_${idx === 0 ? '3s' : '4s'}_infinite] ${idx === 0 ? 'delay-700' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className={`${stat.color === 'green' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'} p-2 rounded-full`}>
                    <span className="material-symbols-outlined">{stat.icon}</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">{stat.label}</p>
                    <p className="text-white font-bold text-lg">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;