import React from 'react';
import { Link } from 'react-router-dom';
import { branding } from '../src/config/branding';
import { content } from '../src/config/content';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-xl">{branding.logo.icon}</span>
            </div>
            <span className="text-lg font-bold tracking-tight">{branding.shortName}</span>
          </Link>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
            {content.footer.description}
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link to="/features" className="hover:text-primary transition-colors">Features</Link></li>
            <li><Link to="/integrations" className="hover:text-primary transition-colors">Integrations</Link></li>
            <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link to="/enterprise" className="hover:text-primary transition-colors">Enterprise</Link></li>
            <li><Link to="/login" className="hover:text-primary transition-colors">Login</Link></li>
            <li><Link to="/signup" className="hover:text-primary transition-colors">Sign Up</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Stay Connected</h4>
          <div className="flex gap-4">
            <a href={branding.contact.twitter} target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all shadow-sm">
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a href={branding.contact.github} target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all shadow-sm">
              <span className="material-symbols-outlined text-xl">terminal</span>
            </a>
            <a href={`mailto:${branding.contact.email}`} className="size-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all shadow-sm">
              <span className="material-symbols-outlined text-xl">mail</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400">{content.footer.copyright}</p>
        <div className="flex gap-8 text-xs text-gray-400">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

