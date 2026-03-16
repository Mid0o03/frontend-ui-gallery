
import React from 'react';
import { ExtractedImage } from '../types';
import { ExternalLink, Copy, Tag } from 'lucide-react';

interface ImageCardProps {
  image: ExtractedImage;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(image.url);
    alert('URL copied to clipboard!');
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm group">
      <div className="relative aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
        <img 
          src={image.url} 
          alt={image.altText || 'Extracted asset'} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://picsum.photos/400/225?grayscale';
          }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
           <div className="flex space-x-2">
             <button onClick={copyToClipboard} className="p-2 bg-white rounded-full text-slate-700 hover:bg-indigo-600 hover:text-white transition-colors">
               <Copy className="w-4 h-4" />
             </button>
             <a href={image.url} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-slate-700 hover:bg-indigo-600 hover:text-white transition-colors">
               <ExternalLink className="w-4 h-4" />
             </a>
           </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Tag className="w-3.5 h-3.5 text-indigo-500" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
            {image.category || 'Uncategorized'}
          </span>
        </div>
        <h4 className="font-semibold text-slate-900 text-sm truncate mb-1" title={image.url}>
          {image.url.split('/').pop()}
        </h4>
        <p className="text-xs text-slate-500 line-clamp-2 italic">
          "{image.altText || 'No description provided'}"
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
