
import React, { useState } from 'react';
import { generateImage } from '../services/geminiService';
import { GenerationStatus } from '../types';

const Studio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState<GenerationStatus>(GenerationStatus.IDLE);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setStatus(GenerationStatus.LOADING);
    setError(null);
    
    try {
      const imageUrl = await generateImage(prompt);
      setResult(imageUrl);
      setStatus(GenerationStatus.SUCCESS);
    } catch (err) {
      setError('Failed to generate image. Please try again.');
      setStatus(GenerationStatus.ERROR);
    }
  };

  const copyCode = () => {
    if (!result) return;
    const code = `<img src="${result.substring(0, 50)}..." alt="${prompt}" class="dynamic-asset" />`;
    navigator.clipboard.writeText(code);
    alert('Mock HTML snippet copied!');
  };

  return (
    <section id="studio" className="py-24 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Design Studio</h2>
              <p className="text-gray-400">Transform text descriptions into production-ready visual assets. Your creativity, amplified.</p>
            </div>

            <form onSubmit={handleGenerate} className="space-y-4">
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your visual concept (e.g., 'A futuristic cyberpunk city at sunset with neon reflections')..."
                  className="w-full h-40 bg-gray-950 border border-gray-800 rounded-2xl p-6 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                  {prompt.length} characters
                </div>
              </div>
              
              <button
                type="submit"
                disabled={status === GenerationStatus.LOADING}
                className="w-full bg-indigo-600 disabled:bg-gray-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-all"
              >
                {status === GenerationStatus.LOADING ? (
                  <>
                    <i className="fas fa-circle-notch fa-spin"></i>
                    <span>Generating Reality...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-wand-magic-sparkles"></i>
                    <span>Generate Asset</span>
                  </>
                )}
              </button>
            </form>

            {status === GenerationStatus.SUCCESS && result && (
              <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 animate-fadeIn">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">HTML Linkable Asset</h4>
                  <button onClick={copyCode} className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                    <i className="far fa-copy mr-1"></i> Copy Snippet
                  </button>
                </div>
                <div className="font-mono text-xs text-gray-500 overflow-x-auto p-4 bg-gray-900/50 rounded-lg">
                  {`<img src="dynamic://asset-gen-v1?q=${encodeURIComponent(prompt)}" />`}
                </div>
              </div>
            )}
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-video bg-gray-950 rounded-3xl border border-gray-800 overflow-hidden flex items-center justify-center shadow-2xl">
              {status === GenerationStatus.IDLE && (
                <div className="text-center p-12">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-800">
                    <i className="fas fa-image text-gray-600 text-2xl"></i>
                  </div>
                  <p className="text-gray-500 italic">Enter a prompt to start visualizing</p>
                </div>
              )}

              {status === GenerationStatus.LOADING && (
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                  <p className="text-indigo-400 text-sm font-medium animate-pulse">Consulting the imagination engine...</p>
                </div>
              )}

              {status === GenerationStatus.SUCCESS && result && (
                <img 
                  src={result} 
                  alt="Generated Result" 
                  className="w-full h-full object-cover transition-opacity duration-1000"
                />
              )}

              {status === GenerationStatus.ERROR && (
                <div className="text-center p-12">
                  <i className="fas fa-exclamation-triangle text-red-500 text-3xl mb-4"></i>
                  <p className="text-red-400">{error}</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Studio;
