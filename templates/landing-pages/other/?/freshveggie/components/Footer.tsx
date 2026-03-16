
import React from 'react';
import { Leaf, Share2, Globe, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Leaf className="w-8 h-8 text-primary" />
            <h2 className="text-lg font-black tracking-tight uppercase italic">FreshVeggie</h2>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-[240px]">
            Redefining home delivery with seasonal, organic vegetables directly from local boutique farmers.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-sm uppercase tracking-widest text-gray-800">Shop</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-500">
            <li><a className="hover:text-primary transition-colors" href="#">Weekly Boxes</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Individual Produce</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Gift Cards</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Bulk Orders</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-sm uppercase tracking-widest text-gray-800">Company</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-500">
            <li><a className="hover:text-primary transition-colors" href="#">Our Farmers</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Sustainability</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Press</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-sm uppercase tracking-widest text-gray-800">Contact</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-500">
            <li><a className="hover:text-primary transition-colors" href="mailto:hello@freshveggie.com">hello@freshveggie.com</a></li>
            <li><a className="hover:text-primary transition-colors" href="tel:+1555000000">+1 (555) 000-0000</a></li>
            <li className="flex gap-4 mt-2">
              <Share2 className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
              <Globe className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
              <Mail className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium border-t border-gray-50 pt-8">
        <p>© 2024 FreshVeggie Delivery Service. All rights reserved.</p>
        <div className="flex gap-8">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
