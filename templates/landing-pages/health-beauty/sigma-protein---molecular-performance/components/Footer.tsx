
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="protocol" className="py-20 px-6 border-t border-white/10 bg-black relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary text-4xl">deployed_code</span>
            <span className="text-2xl font-bold tracking-tighter italic">SIGMA<span className="text-primary">PROTEIN</span></span>
          </div>
          <p className="text-slate-500 max-w-sm text-sm mb-8">
            Advancing human potential through high-purity molecular nutrition. Sigma Protein is engineered for those who demand the absolute peak of bioavailability.
          </p>
          <div className="flex gap-4">
            {['twitter', 'instagram', 'linkedin'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center hover:text-primary transition-all hover:scale-110"
              >
                <span className="material-symbols-outlined text-lg">
                  {social === 'twitter' ? 'public' : social === 'instagram' ? 'photo_camera' : 'work'}
                </span>
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-white">Molecular Stack</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            {['Ion-Exchange Isolate', 'Micro-Enzymatic Blend', 'Recovery Matrix', 'Technical Specs'].map(link => (
              <li key={link}><a className="hover:text-primary transition-colors" href="#">{link}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-white">Support Protocol</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            {['Lab Reports', 'Shipping Logistics', 'Return System', 'Operator Support'].map(link => (
              <li key={link}><a className="hover:text-primary transition-colors" href="#">{link}</a></li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-slate-600">
        <p>© 2024 SIGMA NUTRITION SYSTEMS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a className="hover:text-white transition-colors" href="#">Privacy Protocol</a>
          <a className="hover:text-white transition-colors" href="#">Service Terms</a>
          <a className="hover:text-white transition-colors" href="#">Cookie Data</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
