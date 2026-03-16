
import React, { useState } from 'react';
import { interpretArt } from '../services/geminiService';
import { GALLERY_ITEMS } from '../constants';

const AICurator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getRandomInsight = async () => {
    setLoading(true);
    const randomItem = GALLERY_ITEMS[Math.floor(Math.random() * GALLERY_ITEMS.length)];
    const text = await interpretArt(randomItem.title, randomItem.description);
    setInsight(text);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="bg-aged-paper dark:bg-background-dark border-2 border-vermilion p-6 w-80 shadow-2xl rounded-sm animate-slide-up">
          <div className="flex justify-between items-start mb-4">
            <h4 className="font-traditional text-vermilion text-xl">Conservateur AI</h4>
            <button onClick={() => setIsOpen(false)} className="text-primary dark:text-white">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <p className="text-sm text-primary/80 dark:text-gray-300 italic mb-4 leading-relaxed">
            {loading ? "Méditation en cours..." : insight || "Cliquez ci-dessous pour une interprétation d'une œuvre aléatoire."}
          </p>
          
          <button 
            onClick={getRandomInsight}
            disabled={loading}
            className="w-full py-2 bg-vermilion text-white text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all disabled:opacity-50"
          >
            {loading ? "Interprétation..." : "Éclairer une œuvre"}
          </button>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-vermilion text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          title="Parler au Conservateur AI"
        >
          <span className="material-symbols-outlined">auto_awesome</span>
        </button>
      )}
    </div>
  );
};

export default AICurator;
