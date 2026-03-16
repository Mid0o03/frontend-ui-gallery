import React from 'react';

const Marquee: React.FC = () => {
  const content = (
    <>
      <span className="text-4xl md:text-5xl font-black tracking-tighter mx-6">WE BREAK THINGS</span>
      <span className="text-4xl md:text-5xl font-black text-primary mx-6 text-stroke-2">•</span>
      <span className="text-4xl md:text-5xl font-black tracking-tighter mx-6">WE FIX THINGS</span>
      <span className="text-4xl md:text-5xl font-black text-primary mx-6 text-stroke-2">•</span>
    </>
  );

  return (
    <div className="w-full border-y-[3px] border-black bg-white overflow-hidden py-6 relative z-20 rotate-[-1deg] scale-105 shadow-xl my-10">
      <div className="whitespace-nowrap flex gap-0 animate-marquee w-[200%]">
        {content}
        {content}
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
};

export default Marquee;