
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#13a4ec] rounded-xl flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-[#0d171b]">
            Sourire <span className="text-[#13a4ec]">& Co</span>
          </h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-sm font-semibold text-[#0d171b] hover:text-[#13a4ec] transition-colors" href="#">Accueil</a>
          <a className="text-sm font-semibold text-[#0d171b] hover:text-[#13a4ec] transition-colors" href="#services">Expertises</a>
          <a className="text-sm font-semibold text-[#0d171b] hover:text-[#13a4ec] transition-colors" href="#cabinet">Le Cabinet</a>
          <a className="text-sm font-semibold text-[#0d171b] hover:text-[#13a4ec] transition-colors" href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden lg:flex items-center gap-2 bg-[#13a4ec] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#13a4ec]/20 hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            Doctolib
          </button>
          
          <button className="md:hidden text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
