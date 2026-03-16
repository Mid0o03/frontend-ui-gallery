
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden surgical-gradient py-16 lg:py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#13a4ec]/10 text-[#13a4ec] text-xs font-bold uppercase tracking-wider w-fit">
            <span className="w-2 h-2 rounded-full bg-[#13a4ec] animate-pulse"></span>
            Cabinet Conventionné
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-[#0d171b]">
            Retrouvez le plaisir <br /> de <span className="text-[#13a4ec] italic">sourire.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-500 max-w-lg leading-relaxed">
            Une expertise dentaire de pointe dans un environnement serein, moderne et parfaitement aseptisé. Votre confort est notre priorité absolue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 min-w-[240px] bg-[#13a4ec] text-white h-14 rounded-full text-base font-bold shadow-xl shadow-[#13a4ec]/20 hover:bg-[#13a4ec]/90 transition-all">
              Prendre rendez-vous sur Doctolib
            </button>
            <button className="flex items-center justify-center gap-2 px-8 h-14 rounded-full text-base font-bold border-2 border-slate-200 hover:bg-slate-50 transition-all">
              Découvrir le cabinet
            </button>
          </div>
          
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 object-cover" 
                  src={`https://picsum.photos/100/100?random=${i}`} 
                  alt="Patient Avatar" 
                />
              ))}
            </div>
            <p className="text-sm font-medium text-slate-600">
              <span className="font-bold text-slate-900">+2,500</span> patients nous font confiance
            </p>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative">
          <div className="aspect-[4/5] rounded-3xl bg-slate-100 overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 bg-[#13a4ec]/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000" 
              alt="Close up of a bright healthy smile" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl z-20 border border-white/20 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="text-[#13a4ec]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold">Hygiène & Sécurité</p>
                  <p className="text-xs text-slate-500">Protocoles chirurgicaux certifiés ISO</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative blur */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#13a4ec]/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
