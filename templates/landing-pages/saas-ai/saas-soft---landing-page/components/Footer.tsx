
import React from 'react';
import { LayoutGrid, Globe, Mail, Share2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f6f7f8] border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <LayoutGrid className="text-primary w-6 h-6" />
              <span className="text-xl font-extrabold text-text-dark">SaaS Soft</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Rendre le travail plus simple, plus doux et plus efficace pour tout le monde.
            </p>
          </div>
          
          <div className="space-y-6">
            <h5 className="font-bold text-text-dark">Produit</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a className="hover:text-primary transition-colors" href="#">Fonctionnalités</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Intégrations</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Tarifs</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h5 className="font-bold text-text-dark">Compagnie</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a className="hover:text-primary transition-colors" href="#">À propos</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Carrières</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h5 className="font-bold text-text-dark">Support</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a className="hover:text-primary transition-colors" href="#">Centre d'aide</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Sécurité</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">© 2024 SaaS Soft UI. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a className="text-gray-400 hover:text-primary transition-colors" href="#"><Globe className="w-5 h-5" /></a>
            <a className="text-gray-400 hover:text-primary transition-colors" href="#"><Mail className="w-5 h-5" /></a>
            <a className="text-gray-400 hover:text-primary transition-colors" href="#"><Share2 className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
