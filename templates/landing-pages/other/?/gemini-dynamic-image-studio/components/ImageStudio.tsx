
import React, { useState } from 'react';
import { generateDynamicImage } from '../services/geminiService';

const ImageStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setError(null);
    try {
      const imageUrl = await generateDynamicImage(prompt);
      setResultImage(imageUrl);
    } catch (err: any) {
      console.error(err);
      setError("Une erreur est survenue lors de la génération. Veuillez réessayer.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="studio" className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Studio de Création</h2>
              <p className="text-gray-400">
                Saisissez une description détaillée et laissez Gemini s'occuper du reste. Vous pouvez copier le lien base64 directement pour l'utiliser dans vos balises <code className="text-blue-400">&lt;img&gt;</code>.
              </p>
            </div>

            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Un paysage futuriste de Paris en l'an 3000, style cyberpunk, éclairage néon..."
                className="w-full h-40 bg-[#161616] border border-white/10 rounded-2xl p-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
              />
              <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                {prompt.length} caractères
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-500 hover:to-indigo-500 transition-all flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Génération en cours...
                </>
              ) : (
                'Générer l\'image'
              )}
            </button>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm text-center">
                {error}
              </div>
            )}
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#161616] aspect-square rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
              {resultImage ? (
                <img src={resultImage} alt="Génération Gemini" className="w-full h-full object-cover animate-fade-in" />
              ) : (
                <div className="text-center px-8">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/5">
                    <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">Votre création apparaîtra ici</p>
                </div>
              )}
            </div>
            
            {resultImage && (
              <div className="mt-4 flex gap-4">
                <button 
                  onClick={() => navigator.clipboard.writeText(resultImage)}
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium transition-colors"
                >
                  Copier le lien dynamique
                </button>
                <a 
                  href={resultImage} 
                  download="gemini-creation.png"
                  className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImageStudio;
