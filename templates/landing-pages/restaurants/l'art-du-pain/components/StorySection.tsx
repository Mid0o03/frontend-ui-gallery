
import React from 'react';

const StorySection: React.FC = () => {
  return (
    <section id="atelier" className="py-24 grid grid-cols-1 lg:grid-cols-2 bg-background-light">
      <div 
        className="h-[500px] lg:h-auto bg-cover bg-center" 
        style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHNkLfGNZM6komnISzvofju1aAQrUOot5o59N9ditgmqvQDfa7ZE2WuklJlJ3KpTZ6j7TGCcqYXsSnCwtRjsh5gM0TmzWtPGieqqy9gBOsICo8mUXwAJ9zGcwzeO2qe23jw6_7IkmENSkxpneyYXpGXr_kWORSg-b7t0i1SIiWxbSsK-fVOsEbkP--UiRRqMNPxCkMiAc7bVFplLkDfIoAjfBq6qvHQ2c2DCD4xC1X8-KiNGIjj4b7b4BP2Qjj7MbMHYJz5q5TCzeS')` }}
      ></div>
      
      <div className="flex items-center justify-center p-12 md:p-24 bg-kraft-paper">
        <div className="max-w-md">
          <h3 className="text-4xl font-bold mb-6 italic leading-tight">The secret is in the stillness.</h3>
          <p className="text-ink-dark/80 text-lg leading-relaxed mb-8">
            We don't rush. Our dough rests for 48 hours, allowing the natural enzymes to unlock deeper flavors and nutritional benefits that modern bread has forgotten.
          </p>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 group">
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">eco</span>
              <span className="font-medium italic">100% Certified Organic Grains</span>
            </div>
            <div className="flex items-center gap-3 group">
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">water_drop</span>
              <span className="font-medium italic">Natural Spring Water</span>
            </div>
            <div className="flex items-center gap-3 group">
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">history_edu</span>
              <span className="font-medium italic">Traditional Stone Milling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
