import React from 'react';
import { CONTENT } from '../config';

/**
 * A full-width animated marquee component for displaying scrolling text.
 * The text and animation are optimized for a high-impact, disruptive feel.
 */
const Marquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden border-b-3 border-black bg-black py-4">
      <div className="whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="mx-4 text-4xl font-black uppercase italic tracking-tighter text-white">
            {CONTENT.marquee} {CONTENT.marquee} {CONTENT.marquee}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;