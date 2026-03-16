
import React from 'react';

const FooterMarquee: React.FC = () => {
  const items = [
    'LIMITED TIME 100 USERS ONLY',
    'EARLY BIRD DISCOUNT 50% OFF',
    'ABSTRACT ART EXHIBITION TOKYO / NYC / LONDON',
    'COLLECTIBLE NFTS AVAILABLE',
    'RETRO 8-BIT VIBES'
  ];

  return (
    <footer className="w-full max-w-7xl mt-12 bg-black border-4 border-black py-4 overflow-hidden relative">
      <div className="whitespace-nowrap flex animate-marquee">
        {/* Double the list to make it seamless */}
        {[...items, ...items].map((text, i) => (
          <React.Fragment key={i}>
            <span className="text-retro-yellow font-pixel text-xs mx-8">{text}</span>
            <span className="text-retro-white mx-4">★</span>
          </React.Fragment>
        ))}
      </div>
    </footer>
  );
};

export default FooterMarquee;
