import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRANDING } from '../config/branding';
import { CONTENT } from '../config/content';

const Navbar: React.FC<{ cartCount: number }> = ({ cartCount }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-forest-green/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <Link to="/" className="flex items-center gap-3 cursor-pointer">
                        <div className="text-primary">
                            <Leaf size={32} fill="currentColor" />
                        </div>
                        <h1 className="text-forest-green dark:text-white text-xl font-extrabold tracking-tight">{BRANDING.name}</h1>
                    </Link>
                    <nav className="hidden lg:flex items-center gap-8">
                        {CONTENT.navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.href}
                                className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-6">
                    <div className="relative hidden md:block">
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                        <input
                            className="pl-10 pr-4 py-2 bg-primary/5 border-none rounded-lg focus:ring-2 focus:ring-primary w-64 text-sm placeholder:text-primary/60"
                            placeholder="Search products..."
                            type="text"
                        />
                    </div>
                    <Link to="/cart" className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-sm hover:bg-primary/90 transition-all">
                        <ShoppingCart size={18} />
                        <span>Cart ({cartCount})</span>
                    </Link>
                    <div
                        className="w-10 h-10 rounded-full border-2 border-primary/20 bg-cover bg-center cursor-pointer"
                        style={{ backgroundImage: `url('https://picsum.photos/seed/herbalist/100/100')` }}
                    />
                    <button className="lg:hidden text-forest-green dark:text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white dark:bg-background-dark border-b border-forest-green/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
                    {CONTENT.navItems.map((item) => (
                        <Link key={item.label} to={item.href} className="text-lg font-bold hover:text-primary">{item.label}</Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;
