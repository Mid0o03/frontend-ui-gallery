
import React from 'react';
import { Logo } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer class="bg-background-dark text-white pt-24 pb-12 px-6 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div class="md:col-span-4 space-y-8">
            <div class="flex items-center gap-3 text-primary">
              <Logo />
              <h2 class="text-white text-xl font-black tracking-tighter uppercase">Stratton & Wells</h2>
            </div>
            <p class="text-sm text-gray-400 leading-relaxed font-medium">
              Serving global institutions since 1924. Committed to excellence, integrity, and the preservation of capital through multi-generational cycles.
            </p>
            <div class="flex gap-5">
              <a href="#" class="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <span class="material-symbols-outlined text-sm text-gray-400 group-hover:text-white">language</span>
              </a>
              <a href="#" class="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <span class="material-symbols-outlined text-sm text-gray-400 group-hover:text-white">rss_feed</span>
              </a>
            </div>
          </div>
          
          <div class="md:col-span-2 space-y-8">
            <h6 class="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Offices</h6>
            <ul class="space-y-6 text-sm text-gray-400">
              <li>
                <span class="text-white block font-bold text-xs uppercase mb-2 tracking-wider">London</span>
                12 Mayfair Sq, London W1J
              </li>
              <li>
                <span class="text-white block font-bold text-xs uppercase mb-2 tracking-wider">New York</span>
                450 Park Ave, NY 10022
              </li>
              <li>
                <span class="text-white block font-bold text-xs uppercase mb-2 tracking-wider">Singapore</span>
                1 Marina Blvd, SG 018989
              </li>
            </ul>
          </div>
          
          <div class="md:col-span-2 space-y-8">
            <h6 class="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Explore</h6>
            <ul class="space-y-4 text-sm text-gray-400 font-medium">
              <li><a class="hover:text-white transition-colors" href="#">Client Portal</a></li>
              <li><a class="hover:text-white transition-colors" href="#">Annual Reviews</a></li>
              <li><a class="hover:text-white transition-colors" href="#">Insights & Journals</a></li>
              <li><a class="hover:text-white transition-colors" href="#">Career Opportunities</a></li>
            </ul>
          </div>
          
          <div class="md:col-span-4 space-y-8">
            <h6 class="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Subscribe</h6>
            <p class="text-sm text-gray-400 font-medium leading-relaxed">Receive our quarterly economic outlook and exclusive firm insights delivered to your desk.</p>
            <div class="flex">
              <input 
                class="bg-gray-900/50 border-gray-800 rounded-l-lg px-5 py-3 w-full text-sm focus:ring-1 focus:ring-primary focus:border-primary text-white" 
                placeholder="Email Address" 
                type="email"
              />
              <button class="bg-primary px-8 py-3 rounded-r-lg font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-blue-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800/50 pt-12 flex flex-col md:row justify-between items-center gap-8 text-[9px] uppercase font-bold tracking-[0.3em] text-gray-600">
          <p>© 2024 Stratton & Wells LLP. All Rights Reserved.</p>
          <div class="flex flex-wrap justify-center gap-10">
            <a class="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a class="hover:text-white transition-colors" href="#">Regulatory Notice</a>
            <a class="hover:text-white transition-colors" href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
