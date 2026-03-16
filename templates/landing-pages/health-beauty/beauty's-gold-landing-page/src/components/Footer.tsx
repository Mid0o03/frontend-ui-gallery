import React from 'react';
import { Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGsapScrollTrigger } from '../hooks/useGsapAnimation';

const Footer: React.FC = () => {
    const footerRef = useGsapScrollTrigger();
    return (
        <footer ref={footerRef} className="py-16 border-t border-primary/10 bg-background-dark">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex items-center gap-2 text-[10px] tracking-widest-xl text-zinc-600 uppercase font-medium">
                    <Compass className="w-4 h-4" />
                    <span>© 2024 Beauty’s Gold. Tous droits réservés.</span>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] tracking-widest-xl text-zinc-600 uppercase font-bold">
                    <Link to="/mentions-legales" className="hover:text-primary transition-colors">Mentions Légales</Link>
                    <Link to="/mentions-legales" className="hover:text-primary transition-colors">Confidentialité</Link>
                    <Link to="/mentions-legales" className="hover:text-primary transition-colors">Cookies</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
