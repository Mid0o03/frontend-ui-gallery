
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-light pt-20 pb-12 px-6 lg:px-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8 text-primary">
              <svg className="w-6 h-6" viewBox="0 0 48 48" fill="currentColor">
                <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"/>
              </svg>
              <span className="font-bold uppercase tracking-tight text-slate-900">The Heritage Club</span>
            </div>
            <address className="not-italic text-sm text-slate-500 leading-relaxed space-y-1">
              <p>1245 Royal Oaks Drive</p>
              <p>Westchester, NY 10504</p>
              <p className="mt-4 font-semibold text-slate-700">(555) 890-0124</p>
            </address>
          </div>

          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-8">Society</h5>
            <ul className="space-y-4 text-xs font-semibold tracking-wide text-slate-600">
              <li><a href="#" className="hover:text-primary transition-colors">Member Rules</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our History</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Events Calendar</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-8">Facility</h5>
            <ul className="space-y-4 text-xs font-semibold tracking-wide text-slate-600">
              <li><a href="#" className="hover:text-primary transition-colors">The Pro Shop</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dining Room</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Private Coaching</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-8">Connect</h5>
            <div className="flex gap-6">
              {['public', 'share', 'mail'].map((icon) => (
                <button key={icon} className="material-symbols-outlined text-primary text-2xl hover:scale-110 transition-transform cursor-pointer">
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.25em]">
            © 2024 The Heritage Club. All rights reserved.
          </p>
          <div className="flex gap-10">
            {['Privacy', 'Terms'].map((link) => (
              <a key={link} href="#" className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.25em] hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
