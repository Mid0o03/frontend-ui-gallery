
import React, { useState } from 'react';
import { generateImage } from '../services/geminiService';
import { GenerationStatus, GeneratedImage } from '../types';

const ImageGeneratorSection: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState<GenerationStatus>(GenerationStatus.IDLE);
  const [result, setResult] = useState<GeneratedImage | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setStatus(GenerationStatus.LOADING);
    setError(null);

    try {
      const imageUrl = await generateImage(prompt);
      const newImage: GeneratedImage = {
        id: Math.random().toString(36).substr(2, 9),
        url: imageUrl,
        prompt: prompt,
        timestamp: Date.now()
      };
      setResult(newImage);
      setStatus(GenerationStatus.SUCCESS);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus(GenerationStatus.ERROR);
    }
  };

  return (
    <section id="generate" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Magic Canvas</h2>
            <p className="text-gray-400">Describe anything you can imagine and watch it come to life.</p>
          </div>

          <form onSubmit={handleGenerate} className="mb-12 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur opacity-20 group-focus-within:opacity-40 transition duration-1000"></div>
            <div className="relative flex flex-col md:flex-row gap-4 p-2 rounded-[2rem] glass">
              <input 
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A futuristic city with neon lights and flying cars..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-white px-6 py-4 placeholder:text-gray-500 rounded-2xl"
              />
              <button 
                type="submit"
                disabled={status === GenerationStatus.LOADING}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed px-8 py-4 rounded-2xl font-bold text-white transition-all shadow-lg flex items-center justify-center gap-2"
              >
                {status === GenerationStatus.LOADING ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : 'Generate Now'}
              </button>
            </div>
          </form>

          {error && (
            <div className="mb-8 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <div className="min-h-[400px] flex items-center justify-center rounded-[2.5rem] glass overflow-hidden relative">
            {status === GenerationStatus.IDLE && (
              <div className="text-center p-12">
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-6 text-gray-500">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-500 font-medium italic">Your creation will appear here</p>
              </div>
            )}

            {status === GenerationStatus.LOADING && (
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
                <p className="text-blue-400 font-medium animate-pulse">Dreaming up your pixels...</p>
              </div>
            )}

            {status === GenerationStatus.SUCCESS && result && (
              <div className="w-full h-full relative group animate-in fade-in zoom-in duration-500">
                <img 
                  src={result.url} 
                  alt={result.prompt} 
                  className="w-full h-auto block aspect-square object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-medium line-clamp-2 mb-4">{result.prompt}</p>
                  <div className="flex gap-4">
                    <a 
                      href={result.url} 
                      download="visionary-ai-output.png"
                      className="px-6 py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors"
                    >
                      Download
                    </a>
                    <button 
                      onClick={() => navigator.clipboard.writeText(result.url)}
                      className="px-6 py-3 glass rounded-xl font-bold text-sm hover:bg-white/10 transition-colors"
                    >
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGeneratorSection;
