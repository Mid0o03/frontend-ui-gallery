
import React, { useState } from 'react';
import { FormData } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Merci ${formData.name}, nous vous contacterons bientôt !`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl shadow-slate-200/50 dark:shadow-none overflow-hidden border border-slate-100 dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Sidebar Info */}
            <div className="lg:col-span-2 bg-primary p-12 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 size-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-black mb-8 leading-tight">Prêt à transformer votre entreprise ?</h2>
                <p className="text-white/80 font-medium text-lg mb-12">
                  Réservez une session personnalisée avec nos experts pour découvrir comment nous pouvons accélérer votre transition digitale.
                </p>
              </div>
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="size-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <span className="material-symbols-outlined text-3xl">call</span>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Téléphone</p>
                    <span className="text-xl font-bold">+33 1 23 45 67 89</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="size-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <span className="material-symbols-outlined text-3xl">mail</span>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">E-mail</p>
                    <span className="text-xl font-bold">contact@trustcorp.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 p-12 md:p-16">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400" htmlFor="name">Nom complet</label>
                    <input 
                      required
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-primary dark:focus:border-primary focus:ring-0 transition-all placeholder:text-slate-400 text-slate-900 dark:text-white" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont" 
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400" htmlFor="company">Entreprise</label>
                    <input 
                      required
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-primary dark:focus:border-primary focus:ring-0 transition-all placeholder:text-slate-400 text-slate-900 dark:text-white" 
                      id="company" 
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp" 
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400" htmlFor="email">Email Professionnel</label>
                  <input 
                    required
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-primary dark:focus:border-primary focus:ring-0 transition-all placeholder:text-slate-400 text-slate-900 dark:text-white" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean.dupont@entreprise.fr" 
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400" htmlFor="message">Votre besoin</label>
                  <textarea 
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-primary dark:focus:border-primary focus:ring-0 transition-all placeholder:text-slate-400 text-slate-900 dark:text-white min-h-[120px]" 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Comment pouvons-nous vous aider ?" 
                  ></textarea>
                </div>
                <button 
                  className="w-full py-5 bg-primary text-white font-black rounded-2xl text-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 transform active:scale-95" 
                  type="submit"
                >
                  Demander une démo
                </button>
                <p className="text-center text-xs text-slate-400 font-medium">
                  En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
