
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto bg-[#13a4ec] rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center text-white shadow-2xl shadow-[#13a4ec]/30">
        {/* Abstract decorative circles */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight max-w-3xl mx-auto leading-tight">
            Prêt à transformer votre sourire ?
          </h2>
          
          <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
            Prenez rendez-vous en ligne 24h/24 et 7j/7. Choisissez le créneau qui vous convient le mieux parmi nos disponibilités.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <button className="flex items-center justify-center gap-3 bg-white text-[#13a4ec] px-10 py-5 rounded-full text-lg font-black shadow-2xl hover:scale-105 transition-all">
              Prendre rendez-vous sur Doctolib
            </button>
            <button className="flex items-center justify-center gap-3 bg-transparent border-2 border-white/40 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all">
              Appeler le cabinet
            </button>
          </div>
          
          <p className="text-sm text-white/60">Tiers-payant accepté • Honoraires conventionnés</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
