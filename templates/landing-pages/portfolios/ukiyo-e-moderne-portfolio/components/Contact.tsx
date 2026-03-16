
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-32 px-8 md:px-16 lg:px-24" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-10">
          <div className="w-20 h-20 bg-vermilion flex items-center justify-center text-white font-traditional text-4xl rounded-sm shadow-lg animate-pulse">
            印
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white mb-4 tracking-tight">Entrer en contact</h2>
        <p className="text-primary/60 dark:text-gray-400 mb-16 max-w-md mx-auto">
          Pour des collaborations, des commissions ou simplement échanger sur l'art contemporain.
        </p>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <div className="flex flex-col gap-3">
            <label className="text-[10px] uppercase tracking-[0.3em] font-black text-primary/40 dark:text-white/30">Nom Complet</label>
            <input 
              className="bg-transparent border-b-2 border-primary/10 focus:border-vermilion outline-none py-3 px-0 text-primary dark:text-white transition-colors text-lg" 
              type="text" 
              placeholder="votre nom"
            />
          </div>
          
          <div className="flex flex-col gap-3">
            <label className="text-[10px] uppercase tracking-[0.3em] font-black text-primary/40 dark:text-white/30">Email</label>
            <input 
              className="bg-transparent border-b-2 border-primary/10 focus:border-vermilion outline-none py-3 px-0 text-primary dark:text-white transition-colors text-lg" 
              type="email" 
              placeholder="votre@email.com"
            />
          </div>
          
          <div className="flex flex-col gap-3 md:col-span-2">
            <label className="text-[10px] uppercase tracking-[0.3em] font-black text-primary/40 dark:text-white/30">Votre Message</label>
            <textarea 
              className="bg-transparent border-b-2 border-primary/10 focus:border-vermilion outline-none py-3 px-0 text-primary dark:text-white transition-colors resize-none text-lg min-h-[120px]" 
              placeholder="Comment puis-je vous aider ?"
            ></textarea>
          </div>
          
          <div className="md:col-span-2 flex justify-center mt-12">
            <button className="hanko-btn flex items-center justify-center bg-vermilion text-white px-4 py-10 font-traditional text-2xl shadow-xl hover:scale-105 transition-all" type="submit">
              送信
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
