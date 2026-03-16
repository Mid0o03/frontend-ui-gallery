import React from 'react';
import { content } from './config/content';
import { Navbar } from './components/Navbar';
import { ProfileCard } from './components/ProfileCard';
import { MapWidget } from './components/MapWidget';
import { SocialWidget } from './components/SocialWidget';
import { TechStackWidget } from './components/TechStackWidget';
import { FeaturedProject } from './components/FeaturedProject';
import { StandardProject } from './components/StandardProject';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-black">
      <Navbar />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

          {/* 1. Profile Card (2x2) */}
          <div className="col-span-1 md:col-span-2 row-span-2">
            <ProfileCard />
          </div>

          {/* 2. Map Widget (1x1) */}
          <div className="col-span-1 row-span-1">
            <MapWidget />
          </div>

          {/* 3. Social Links (1x1) */}
          <div className="col-span-1 row-span-1">
            <SocialWidget />
          </div>

          {/* 4. Tech Stack (2x1 - spans 2 cols on tablet/desktop) */}
          <div className="col-span-1 md:col-span-2 row-span-1">
            <TechStackWidget />
          </div>

          {/* 5. Featured Project Card (2x2) */}
          <div className="col-span-1 md:col-span-2 row-span-2">
            <FeaturedProject
              title={content.projects.featured.title}
              description={content.projects.featured.description}
              category={content.projects.featured.category}
              year={content.projects.featured.year}
              image={content.projects.featured.image}
            />
          </div>

          {/* 6. Project Card Small 1 (2x1) */}
          <div className="col-span-1 md:col-span-2 row-span-1">
            <StandardProject
              title={content.projects.list[0].title}
              description={content.projects.list[0].description}
              category={content.projects.list[0].category}
              image={content.projects.list[0].image}
            />
          </div>

          {/* 7. Project Card Small 2 (2x1) */}
          <div className="col-span-1 md:col-span-2 row-span-1">
            <StandardProject
              title={content.projects.list[1].title}
              description={content.projects.list[1].description}
              category={content.projects.list[1].category}
              image={content.projects.list[1].image}
            />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;