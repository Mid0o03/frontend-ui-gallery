
import React from 'react';

const SurgicalClean: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#f0f9ff]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-video relative group">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
              alt="Modern dental surgery room" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-all duration-500"></div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <h3 className="text-4xl font-black leading-tight tracking-tight text-[#0d171b]">
            Le standard "Surgical Clean" pour votre sécurité.
          </h3>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-[#13a4ec]/20 flex items-center justify-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#13a4ec]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.607a2 2 0 0 1-.578 1.415l-1.908 1.908a2 2 0 0 1-1.414.586H4.25M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-lg mb-1">Stérilisation de Pointe</h5>
                <p className="text-slate-500 text-sm">Traçabilité complète de chaque instrument via un cycle d'autoclave de classe B rigoureux.</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-[#13a4ec]/20 flex items-center justify-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#13a4ec]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-lg mb-1">Technologie Numérique</h5>
                <p className="text-slate-500 text-sm">Scanner intra-oral 3D pour éviter les empreintes en pâte traditionnelles et inconfortables.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurgicalClean;
