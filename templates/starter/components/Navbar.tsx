
import React from 'react';
import { Link } from 'react-router-dom';
import { branding } from '../src/config/branding';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e7eb] bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-2xl">{branding.logo.icon}</span>
          </div>
          <span className="text-xl font-bold tracking-tight">{branding.logo.text}<span className="text-primary">{branding.logo.accent}</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/features" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
          <Link to="/integrations" className="text-sm font-medium hover:text-primary transition-colors">Integrations</Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
          <Link to="/enterprise" className="text-sm font-medium hover:text-primary transition-colors">Enterprise</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/login" className="hidden sm:block text-sm font-semibold px-4 py-2 hover:text-primary transition-colors">Log In</Link>
          <Link to="/signup" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary/20">
            Get Started Free
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden size-10 flex items-center justify-center text-gray-600"
          >
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-6 space-y-4 animate-in fade-in slide-in-from-top-4">
          <Link to="/features" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Features</Link>
          <Link to="/integrations" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Integrations</Link>
          <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Pricing</Link>
          <Link to="/enterprise" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Enterprise</Link>
          <hr />
          <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Log In</Link>
          <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="w-full block py-3 bg-primary text-white text-center rounded-xl font-bold">Get Started Free</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
