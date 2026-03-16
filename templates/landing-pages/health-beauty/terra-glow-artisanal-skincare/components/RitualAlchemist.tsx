
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const RitualAlchemist: React.FC = () => {
  const [concern, setConcern] = useState('');
  const [recommendation, setRecommendation] = useState<{ ritual: string; ingredients: string[]; mantra: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const synthesizeRitual = async () => {
    if (!concern.trim()) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Given the skin concern: "${concern}", recommend a slow-beauty ritual. 
        Return a JSON object with: 
        1. "ritual": A 2-sentence poetic description of the ritual.
        2. "ingredients": An array of 3 botanical ingredients.
        3. "mantra": A short grounding mantra for the ritual.`,
        config: {
          responseMimeType: "application/json",
        },
      });

      const data = JSON.parse(response.text || '{}');
      setRecommendation(data);
    } catch (error) {
      console.error("Alchemy failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 px-6 bg-forest text-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">The Ritual Alchemist</span>
        <h2 className="font-serif text-4xl md:text-6xl mb-10 italic">Consult the Maker's Wisdom</h2>
        <p className="text-white/40 text-lg mb-12 font-light max-w-2xl mx-auto">
          Describe your skin's current state or the atmosphere you wish to create. Our AI-guided alchemy will suggest a bespoke ritual.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <input 
            type="text" 
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            placeholder="e.g. 'Feeling fatigued after a long journey' or 'Restoring winter dryness'"
            className="flex-grow bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all outline-none"
          />
          <button 
            onClick={synthesizeRitual}
            disabled={loading}
            className="bg-primary hover:bg-white text-forest px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-forest/20 border-t-forest rounded-full animate-spin"></div>
                Distilling...
              </>
            ) : 'Consult Alchemy'}
          </button>
        </div>

        {recommendation && (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 text-left animate-fade-in backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-serif text-3xl mb-6 text-primary italic">The Prescribed Ritual</h4>
                <p className="text-xl text-white/70 leading-relaxed font-light mb-8">
                  {recommendation.ritual}
                </p>
                <div className="p-6 border border-primary/20 bg-primary/5 rounded-2xl italic text-primary/80 text-sm">
                  " {recommendation.mantra} "
                </div>
              </div>
              <div>
                <h4 className="font-serif text-2xl mb-6 text-white/50">Core Botanicals</h4>
                <div className="space-y-4">
                  {recommendation.ingredients.map((ing, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                      <span className="text-lg font-light tracking-wide">{ing}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-12 w-full border border-white/20 hover:border-primary hover:text-primary py-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all">
                  Shop These Ingredients
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RitualAlchemist;
