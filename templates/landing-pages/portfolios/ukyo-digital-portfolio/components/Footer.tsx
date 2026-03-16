
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-32 px-6 md:px-12 relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none writing-vertical text-[20rem] font-black select-none">
        終わり
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-8xl font-black mb-12 leading-tight">
            Let's create something <br />
            <span className="text-vermilion italic">timeless</span>.
          </h2>
          <div className="group inline-block">
            <a 
              href="mailto:hello@ukyodigital.art" 
              className="text-2xl md:text-4xl font-light border-b border-white/20 pb-2 transition-all duration-500 group-hover:border-vermilion group-hover:text-vermilion"
            >
              hello@ukyodigital.art
            </a>
            <div className="h-0.5 w-0 bg-vermilion transition-all duration-500 group-hover:w-full mt-1" />
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-10">
          <div className="flex gap-4">
            {['Instagram', 'Behance', 'Dribbble', 'LinkedIn'].map((platform) => (
              <a 
                key={platform} 
                href="#" 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-vermilion hover:border-vermilion transition-all duration-300 group"
              >
                <span className="text-[10px] font-bold group-hover:scale-110 transition-transform">
                  {platform.charAt(0)}
                </span>
              </a>
            ))}
          </div>
          <div className="text-right">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-2">
              Based in Kyoto & Tokyo
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-white/20">
              © 2024 UKYO DIGITAL. Handcrafted with spirit.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-32 pt-12 border-t border-white/5 flex flex-wrap gap-x-12 gap-y-6">
        {['Instagram', 'Behance', 'Dribbble', 'LinkedIn', 'Twitter'].map(social => (
          <a 
            key={social} 
            href="#" 
            className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-vermilion transition-colors"
          >
            {social}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
