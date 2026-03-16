
import React from 'react';
import { Logo } from '../constants';

interface FooterProps {
  onToggleDark: () => void;
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onToggleDark, isDark }) => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="text-primary">
                <Logo className="size-7" />
              </div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">TrustCorp</h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs font-medium mb-10 text-base leading-relaxed">
              La plateforme B2B leader pour les entreprises qui exigent la meilleure sécurité et performance du marché mondial.
            </p>
            <div className="flex gap-4">
              <a className="size-11 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
                <span className="material-symbols-outlined text-xl">public</span>
              </a>
              <a className="size-11 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a className="size-11 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
                <span className="material-symbols-outlined text-xl">diversity_3</span>
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-8 text-sm uppercase tracking-widest">Produit</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">Fonctionnalités</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Intégrations</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Tarification</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-8 text-sm uppercase tracking-widest">Société</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">À propos</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Carrières</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Presse</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-8 text-sm uppercase tracking-widest">Légal</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">Confidentialité</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">CGU</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Cookies</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Sécurité</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-8 text-sm uppercase tracking-widest">Support</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">Centre d'aide</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Statut</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Développeurs</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-slate-400 font-medium">© 2024 TrustCorp. Tous droits réservés.</p>
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-lg">language</span>
              Français (France)
            </button>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>
            <button 
              className="flex items-center gap-3 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-primary transition-colors"
              onClick={onToggleDark}
            >
              <span className="material-symbols-outlined text-lg">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
              <span className="text-xs font-black uppercase tracking-widest">
                {isDark ? 'Mode Clair' : 'Mode Sombre'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
