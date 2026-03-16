import React from 'react';
import { Leaf, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRANDING } from '../config/branding';
import { CONTENT } from '../config/content';

const Footer: React.FC = () => {
    return (
        <footer className="bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-white/10 pt-24 pb-12">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="text-primary">
                                <Leaf size={32} fill="currentColor" />
                            </div>
                            <h2 className="text-forest-green dark:text-white text-xl font-extrabold tracking-tight">{BRANDING.name}</h2>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                            {BRANDING.tagline}
                        </p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-white hover:bg-primary hover:text-white transition-all" href={BRANDING.social.instagram}>
                                <Instagram size={20} />
                            </a>
                            <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-white hover:bg-primary hover:text-white transition-all" href={BRANDING.social.twitter}>
                                <Twitter size={20} />
                            </a>
                            <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-white hover:bg-primary hover:text-white transition-all" href={BRANDING.social.facebook}>
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-forest-green dark:text-white mb-6 uppercase tracking-widest text-xs">Resources</h5>
                        <ul className="space-y-4">
                            <li><Link className="text-slate-500 hover:text-primary text-sm transition-colors" to="/safety">Safety Data Sheets</Link></li>
                            <li><Link className="text-slate-500 hover:text-primary text-sm transition-colors" to="/reports">Lab Reports</Link></li>
                            <li><Link className="text-slate-500 hover:text-primary text-sm transition-colors" to="/guides">Usage Guides</Link></li>
                            <li><Link className="text-slate-500 hover:text-primary text-sm transition-colors" to="/contact">Contact Support</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-forest-green dark:text-white mb-6 uppercase tracking-widest text-xs">Company</h5>
                        <ul className="space-y-4">
                            <li><Link className="text-slate-500 hover:text-primary text-sm transition-colors" to="/about">Our Story</Link></li>
                            <li><Link className="text-slate-500 hover:text-primary text-sm transition-colors" to="/sourcing">Sustainability</Link></li>
                            <li><Link className="text-slate-500 hover:text-primary text-sm transition-colors" to="/blog">Botanical Blog</Link></li>
                            <li><Link className="text-slate-500 hover:text-primary text-sm transition-colors" to="/wholesale">Wholesale</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-forest-green dark:text-white mb-6 uppercase tracking-widest text-xs">{CONTENT.footer.newsletterTitle}</h5>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">{BRANDING.tagline}</p>
                        <form className="flex" onSubmit={(e) => e.preventDefault()}>
                            <input className="flex-1 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-l-lg px-4 py-2 focus:ring-1 focus:ring-primary text-sm outline-none" placeholder={CONTENT.footer.newsletterPlaceholder} type="email" />
                            <button className="bg-primary text-white px-4 py-2 rounded-r-lg font-bold text-sm hover:bg-primary/90 transition-colors">{CONTENT.footer.newsletterButton}</button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-slate-200 dark:border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-xs">
                    <p>{CONTENT.footer.copyright}</p>
                    <div className="flex gap-8">
                        <Link className="hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link>
                        <Link className="hover:text-primary transition-colors" to="/terms">Terms of Service</Link>
                        <Link className="hover:text-primary transition-colors" to={BRANDING.social.instagram}>Instagram</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
