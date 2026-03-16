
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const ImaginationGallery: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [chefNotes, setChefNotes] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateCulinaryConcept = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setError(null);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    try {
      // 1. Generate the Image using gemini-2.5-flash-image
      const imageResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: `A hyper-realistic, high-end fine dining dish: ${prompt}. Cinematic lighting, macro photography, minimalist white porcelain, garnishes like micro-herbs or edible flowers. Aesthetic should match a 3-Michelin star restaurant. Top-down or 45-degree angle.`,
            },
          ],
        },
        config: {
          imageConfig: {
            aspectRatio: "4:5"
          }
        }
      });

      let imageUrl = null;
      for (const part of imageResponse.candidates[0].content.parts) {
        if (part.inlineData) {
          imageUrl = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }

      // 2. Generate Chef's Notes using gemini-3-flash-preview
      const textResponse = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Write a sophisticated, poetic menu description and a wine pairing for a dish titled "${prompt}". Use the tone of a world-class luxury restaurant. Keep it concise (under 50 words).`,
        config: {
          systemInstruction: "You are Julian Thorne, Executive Chef of L'Étoile. You write elegant, minimalist, and evocative menu descriptions."
        }
      });

      if (imageUrl) setGeneratedImage(imageUrl);
      setChefNotes(textResponse.text || "A unique culinary creation.");
      setPrompt('');
    } catch (err) {
      console.error(err);
      setError("The kitchen is currently overwhelmed. Please try your request again in a moment.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="imagination" className="max-w-[1200px] mx-auto px-6 md:px-12 py-32 border-y border-text-dark/5">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        <div className="w-full lg:w-1/3 sticky top-32">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[0.4em] mb-6 block font-sans">
            The Imagination Lab
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Visualize Your <br /> Own Harvest
          </h2>
          <p className="text-lg opacity-70 mb-10 leading-relaxed italic">
            Describe a culinary concept—a rare ingredient, a childhood memory, or a landscape—and let our artistry bring it to life in a single, captured moment.
          </p>
          
          <div className="space-y-6">
            <div className="relative">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && generateCulinaryConcept()}
                placeholder="e.g., Violet-infused venison with early frost..."
                className="w-full bg-transparent border-b border-text-dark/20 py-4 focus:border-primary focus:outline-none text-xl placeholder:text-text-dark/10 transition-colors font-serif italic"
                disabled={isGenerating}
              />
              {isGenerating && (
                <div className="absolute right-0 bottom-4 animate-pulse">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary font-sans">Curating...</span>
                </div>
              )}
            </div>
            
            <button
              onClick={generateCulinaryConcept}
              disabled={isGenerating || !prompt.trim()}
              className={`w-full py-4 rounded font-sans text-[11px] font-bold uppercase tracking-[0.3em] transition-all
                ${isGenerating || !prompt.trim() 
                  ? 'bg-text-dark/5 text-text-dark/20 cursor-not-allowed' 
                  : 'bg-text-dark text-white hover:bg-primary shadow-lg hover:shadow-primary/20'}`}
            >
              {isGenerating ? 'Preparing the Canvas' : 'Compose Plate'}
            </button>
            
            {error && (
              <p className="text-red-500 text-xs italic mt-4">{error}</p>
            )}
          </div>
        </div>

        <div className="w-full lg:w-2/3">
          <div className="relative aspect-[16/10] bg-white rounded overflow-hidden shadow-2xl border border-text-dark/5 group">
            {generatedImage ? (
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 h-full overflow-hidden">
                  <img src={generatedImage} alt="Generated culinary concept" className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105" />
                </div>
                <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-bg-cream relative">
                   <div className="absolute top-8 right-8 opacity-10">
                    <span className="material-symbols-outlined text-6xl">flare</span>
                  </div>
                  <h3 className="text-[11px] font-bold text-primary uppercase tracking-[0.3em] mb-4 font-sans">Chef's Composition</h3>
                  <div className="text-2xl md:text-3xl font-bold mb-6 italic leading-relaxed">
                    {chefNotes?.split('\n')[0] || "A bespoke creation."}
                  </div>
                  <div className="w-12 h-px bg-text-dark/20 mb-6"></div>
                  <p className="opacity-60 italic text-lg leading-relaxed">
                    {chefNotes?.split('\n').slice(1).join(' ') || "The essence of the season, captured in a single frame."}
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center opacity-20">
                <span className="material-symbols-outlined text-8xl mb-6 animate-pulse">restaurant</span>
                <p className="font-sans text-[11px] font-black uppercase tracking-[0.5em]">
                  Waiting for your inspiration
                </p>
              </div>
            )}
            
            {isGenerating && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-20">
                <div className="text-center">
                  <div className="w-16 h-16 border-2 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-6"></div>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-text-dark/40">
                    Sourcing ingredients from the mind...
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImaginationGallery;
