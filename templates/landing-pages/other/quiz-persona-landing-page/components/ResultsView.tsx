
import React, { useState } from 'react';
import { Recommendation } from '../types';
import { generateRecommendation } from '../services/gemini';

interface ResultsViewProps {
  answers: Record<number, string>;
}

const ResultsView: React.FC<ResultsViewProps> = ({ answers }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    try {
      const result = await generateRecommendation(answers);
      setRecommendation(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (recommendation) {
    return (
      <section className="py-24 animate-in fade-in slide-in-from-bottom-10 duration-700">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-primary/10">
            <div className="flex items-center gap-4 text-primary mb-8 font-bold uppercase tracking-widest text-sm">
              <span className="h-[2px] w-8 bg-primary"></span>
              Votre recommandation IA
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-text-light italic">
              {recommendation.title}
            </h2>
            <p className="text-xl text-text-muted-light leading-relaxed mb-10">
              {recommendation.summary}
            </p>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">verified</span>
                Vos 3 étapes de succès :
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recommendation.actionPoints.map((point, idx) => (
                  <div key={idx} className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                    <span className="text-primary font-black text-2xl block mb-2">0{idx + 1}</span>
                    <p className="font-medium text-text-light">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-background-light flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="font-bold text-lg">Besoin d'aide pour mettre ça en place ?</p>
                <p className="text-text-muted-light">Nos experts sont prêts à vous accompagner.</p>
              </div>
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                Réserver un appel gratuit
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/30 animate-pulse">
            <span className="material-symbols-outlined !text-4xl">celebration</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Vos résultats sont prêts !</h2>
          <p className="text-xl text-text-muted-light mb-10 leading-relaxed">
            Entrez votre adresse email pour recevoir votre profil personnalisé généré par notre IA et nos recommandations exclusives.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto p-2 bg-white rounded-full shadow-lg border border-primary/10">
            <input 
              required
              className="flex-grow h-12 px-6 rounded-full border-none focus:ring-0 text-lg" 
              placeholder="Votre adresse email" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="submit"
              disabled={loading}
              className="bg-primary text-white text-base font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center min-w-[180px]"
            >
              {loading ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                "Recevoir mes résultats"
              )}
            </button>
          </form>
          <p className="mt-4 text-xs text-text-muted-light">Nous respectons votre vie privée. Aucun spam, jamais.</p>
        </div>
      </div>
    </section>
  );
};

export default ResultsView;
