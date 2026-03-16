
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 px-6 lg:px-12" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Logo & Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#13a4ec] rounded-lg flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h2 className="text-lg font-bold tracking-tight text-[#0d171b]">Sourire <span className="text-[#13a4ec]">& Co</span></h2>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Cabinet dentaire spécialisé en implantologie, esthétique et soins préventifs de haute précision.
            </p>
            <div className="flex gap-4">
              {[1, 2].map((i) => (
                <a key={i} className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-[#13a4ec] hover:text-white transition-all cursor-pointer">
                  {i === 1 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0-10.628a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0 12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-bold mb-6 text-[#0d171b]">Liens Utiles</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-500">
              <li><a className="hover:text-[#13a4ec] transition-colors cursor-pointer">Notre équipe médicale</a></li>
              <li><a className="hover:text-[#13a4ec] transition-colors cursor-pointer">Équipements & Plateau technique</a></li>
              <li><a className="hover:text-[#13a4ec] transition-colors cursor-pointer">Honoraires et remboursements</a></li>
              <li><a className="hover:text-[#13a4ec] transition-colors cursor-pointer">Mentions légales</a></li>
            </ul>
          </div>

          {/* Find Us */}
          <div>
            <h4 className="font-bold mb-6 text-[#0d171b]">Nous Trouver</h4>
            <div className="flex flex-col gap-4 text-sm text-slate-500">
              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#13a4ec]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>12 Avenue de la Paix<br />75008 Paris, France</span>
              </div>
              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#13a4ec]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.155-.441.012-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H3.75c-.621 0-1.125.504-1.125 1.125v2.25Z" />
                </svg>
                <span>01 23 45 67 89</span>
              </div>
              <div className="h-32 w-full rounded-2xl bg-slate-200 mt-2 overflow-hidden shadow-inner grayscale opacity-80">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400" 
                  alt="Minimalist Map Placeholder" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-6 text-[#0d171b]">Horaires d'ouverture</h4>
            <div className="space-y-3 text-sm text-slate-500">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span>Lundi - Vendredi</span>
                <span className="font-bold text-slate-900">09:00 - 19:00</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span>Samedi</span>
                <span className="font-bold text-slate-900">09:00 - 13:00</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche</span>
                <span className="text-red-500 font-medium">Fermé</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400">© 2024 Sourire & Co. Tous droits réservés. Établissement conventionné.</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-lg border border-slate-200 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Certifié Qualité Santé</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
