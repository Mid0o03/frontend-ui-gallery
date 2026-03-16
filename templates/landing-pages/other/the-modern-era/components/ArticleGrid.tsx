
import React from 'react';
import { Article } from '../types';

interface ArticleGridProps {
  articles: Article[];
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ articles }) => {
  return (
    <main className="max-w-[1440px] mx-auto px-6 md:px-12 py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-t border-l border-brand-black/10">
        {articles.map((article, index) => (
          <div 
            key={article.id} 
            className={`${article.gridSpan} border-r border-b border-brand-black/10 p-8 group transition-colors duration-500 hover:bg-zinc-50/50`}
          >
            <div className={`overflow-hidden bg-zinc-100 mb-8 ${article.aspectRatio}`}>
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-full object-cover grayscale-hover scale-100 group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <span className="text-[10px] uppercase tracking-widest opacity-50 block mb-3 font-medium">
                  {article.category}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl uppercase tracking-tight leading-none">
                  {article.title}
                </h3>
              </div>
              <span className="material-symbols-outlined text-4xl font-extralight group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                arrow_right_alt
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ArticleGrid;
