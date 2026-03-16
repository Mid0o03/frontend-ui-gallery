
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const ArtGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('A retro neon cityscape with 8-bit robots');
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateArt = async () => {
    setLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: `${prompt}. Style: 80s retro synthwave, pixel art, high contrast, vibrant neons, black borders.` }]
        },
        config: {
          imageConfig: { aspectRatio: '1:1' }
        }
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const imageUrl = `data:image/png;base64,${part.inlineData.data}`;
          setGeneratedImage(imageUrl);
          break;
        }
      }
    } catch (err) {
      console.error(err);
      setError("Failed to access Art Lab. Ensure your Neural Uplink (API Key) is active.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 border-4 border-black bg-white p-6 pixel-shadow">
      <h3 className="font-heading text-lg mb-4 text-black uppercase">ART GENERATOR LAB</h3>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input 
          type="text" 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="ENTER PROMPT..."
          className="flex-grow border-4 border-black p-3 font-bold uppercase focus:bg-retro-yellow transition-colors outline-none"
        />
        <button 
          onClick={generateArt}
          disabled={loading}
          className="bg-retro-teal border-4 border-black px-6 py-3 font-heading hover:bg-black hover:text-white transition-all disabled:opacity-50"
        >
          {loading ? 'PROCESSING...' : 'GENERATE'}
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-retro-pink border-4 border-black text-black font-bold uppercase text-xs">
          ERROR: {error}
        </div>
      )}

      <div className="border-4 border-black bg-gray-100 aspect-square flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 halftone opacity-20"></div>
        {generatedImage ? (
          <img src={generatedImage} alt="Generated Art" className="w-full h-full object-cover relative z-10" />
        ) : (
          <div className="text-center p-10 relative z-10">
            <span className="material-icons text-6xl text-gray-400 mb-4">memory</span>
            <p className="font-pixel text-[10px] text-gray-500 uppercase">Awaiting Neural Input...</p>
          </div>
        )}
        {loading && (
          <div className="absolute inset-0 bg-black/80 z-20 flex items-center justify-center">
             <div className="font-pixel text-retro-teal text-xl animate-pulse">RENDERING...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtGenerator;
