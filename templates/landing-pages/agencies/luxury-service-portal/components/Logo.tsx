
import React from 'react';
import { LOGO_SVG } from '../constants';

const Logo: React.FC = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-4 bg-[#17b0cf]/5 rounded-full blur-2xl group-hover:bg-[#17b0cf]/10 transition-all duration-700"></div>
      <div className="relative size-20 mb-8 text-white flex items-center justify-center">
        {LOGO_SVG}
      </div>
    </div>
  );
};

export default Logo;
