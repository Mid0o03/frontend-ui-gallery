
import React from 'react';
import { TICKER_ITEMS } from '../constants';

export const Ticker: React.FC = () => {
  const content = (
    <div className="flex gap-12 items-center text-white text-2xl font-black uppercase italic tracking-tighter shrink-0">
      {TICKER_ITEMS.map((item, idx) => (
        <React.Fragment key={idx}>
          <span>{item}</span>
          <span className="material-symbols-outlined filled text-white">
            {idx % 3 === 0 ? 'star' : idx % 3 === 1 ? 'bolt' : 'favorite'}
          </span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="relative bg-primary py-6 rounded-full overflow-hidden shadow-2xl shadow-primary/20 mt-12 mb-24">
      <div className="flex whitespace-nowrap animate-ticker">
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
};
