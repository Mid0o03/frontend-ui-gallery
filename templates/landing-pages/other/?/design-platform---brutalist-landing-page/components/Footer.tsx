
import React from 'react';
import { LayoutGrid, Share2, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <LayoutGrid size={32} />
            <span className="text-2xl font-black tracking-tighter uppercase">Design Platform</span>
          </div>
          <p className="font-bold uppercase opacity-70 leading-relaxed max-w-xs">
            The rawest design education platform on the web.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 font-black uppercase">
          <h4 className="text-brutal-primary text-lg underline decoration-4 underline-offset-4">Navigation</h4>
          <a href="#" className="hover:text-brutal-yellow transition-colors">All Courses</a>
          <a href="#" className="hover:text-brutal-yellow transition-colors">Workshops</a>
          <a href="#" className="hover:text-brutal-yellow transition-colors">Community</a>
          <a href="#" className="hover:text-brutal-yellow transition-colors">Manifesto</a>
        </div>

        <div className="flex flex-col gap-4 font-black uppercase">
          <h4 className="text-brutal-primary text-lg underline decoration-4 underline-offset-4">Legal</h4>
          <a href="#" className="hover:text-brutal-yellow transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brutal-yellow transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-brutal-yellow transition-colors">Cookie Settings</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t-2 border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 font-bold uppercase text-xs">
        <span className="opacity-60 text-center">© 2024 DESIGN PLATFORM. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-6">
          <Share2 className="cursor-pointer hover:text-brutal-yellow transition-colors" size={20} />
          <Mail className="cursor-pointer hover:text-brutal-yellow transition-colors" size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
