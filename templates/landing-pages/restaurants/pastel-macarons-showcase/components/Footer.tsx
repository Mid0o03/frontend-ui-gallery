
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Merci! You have joined the society with ${email}.`);
      setEmail('');
    }
  };

  return (
    <footer className="w-full py-20 px-6 flex flex-col items-center border-t border-primary/10 bg-background">
      <div className="flex flex-col items-center gap-8 max-w-4xl text-center w-full">
        <div className="flex items-center gap-4 text-primary">
          <div className="w-16 h-px bg-primary/30"></div>
          <span className="material-symbols-outlined">mail</span>
          <div className="w-16 h-px bg-primary/30"></div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-dark">
          Join the Society
        </h2>
        
        <p className="text-sm text-[#87646f] font-medium max-w-md">
          Be the first to know about our seasonal collections and theatrical releases.
        </p>
        
        <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2 border-b-2 border-primary py-2 mb-4">
          <input 
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm tracking-widest uppercase placeholder:text-primary/40 font-bold text-dark" 
            placeholder="YOUR EMAIL ADDRESS" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            type="submit"
            className="text-primary hover:text-primary/70 transition-colors uppercase text-xs font-bold tracking-widest"
          >
            Submit
          </button>
        </form>
        
        <div className="flex items-center gap-12 mt-8 text-primary">
          <a className="hover:scale-110 transition-transform p-2" href="#" aria-label="Instagram">
            <span className="material-symbols-outlined">camera</span>
          </a>
          <a className="hover:scale-110 transition-transform p-2" href="#" aria-label="Share">
            <span className="material-symbols-outlined">share</span>
          </a>
          <a className="hover:scale-110 transition-transform p-2" href="#" aria-label="Location">
            <span className="material-symbols-outlined">location_on</span>
          </a>
        </div>
        
        <div className="mt-8 text-[9px] md:text-[10px] font-bold tracking-ultra-wide uppercase text-primary/60">
          © 1982 The Pastel Macaron Patisserie — Menton, France
        </div>
      </div>
    </footer>
  );
};

export default Footer;
