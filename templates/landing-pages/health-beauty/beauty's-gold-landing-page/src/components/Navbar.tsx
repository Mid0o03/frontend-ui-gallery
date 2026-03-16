import React, { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { NAV_ITEMS } from '../types';
import { Link } from 'react-router-dom';
import { useGsapFadeIn, useGsapStagger } from '../hooks/useGsapAnimation';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navRef = useGsapFadeIn(0.8, 0.2, -20);
    const navItemsRef = useGsapStagger(0.1, 0.5);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav ref={navRef} className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-background-dark/95 backdrop-blur-md border-primary/20 py-4' : 'bg-transparent border-transparent py-6'}`}>
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <Compass className="text-primary w-8 h-8" strokeWidth={1.5} />
                    <span className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase">Beauty's Gold</span>
                </Link>

                <div ref={navItemsRef} className="hidden md:flex items-center gap-10 lg:gap-14 uppercase text-[10px] tracking-widest-xl font-medium">
                    {NAV_ITEMS.map((item) => (
                        item.href.startsWith('#') || item.href.startsWith('/#') ? (
                            <a key={item.label} href={item.href} className="hover:text-primary transition-colors duration-300">
                                {item.label}
                            </a>
                        ) : (
                            <Link key={item.label} to={item.href} className="hover:text-primary transition-colors duration-300">
                                {item.label}
                            </Link>
                        )
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <Button className="hidden sm:block">Prendre RDV</Button>
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background-dark border-b border-primary/20 p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
                    {NAV_ITEMS.map((item) => (
                        item.href.startsWith('#') || item.href.startsWith('/#') ? (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-lg uppercase tracking-widest hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ) : (
                            <Link
                                key={item.label}
                                to={item.href}
                                className="text-lg uppercase tracking-widest hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        )
                    ))}
                    <Button className="w-full">Prendre RDV</Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
