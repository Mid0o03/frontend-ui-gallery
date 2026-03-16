
import React, { useState } from 'react';

const InstallationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const command = "npm install @project/core";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-primary">terminal</span>
        <h2 className="text-2xl font-bold tracking-tight">Installation</h2>
      </div>
      <div className="group relative rounded-xl border border-white/10 bg-[#1e1e1e] overflow-hidden shadow-2xl">
        {/* Window Controls */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d]/50 border-b border-white/5">
          <div className="flex gap-2">
            <div className="size-3 rounded-full bg-[#ff5f56]"></div>
            <div className="size-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="size-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold font-mono">bash — 80x24</div>
          <div className="w-12"></div>
        </div>
        
        {/* Command Content */}
        <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="font-mono text-lg md:text-xl overflow-x-auto w-full">
            <span className="text-primary mr-3 select-none">$</span>
            <span className="text-white/90">npm install</span>
            <span className="text-primary font-bold"> @project/core</span>
          </div>
          <button 
            onClick={handleCopy}
            className={`flex items-center gap-2 min-w-[140px] px-5 py-2.5 rounded-lg border transition-all ${
              copied 
                ? 'bg-green-500/20 border-green-500/40 text-green-400' 
                : 'bg-primary/10 border-primary/20 text-primary hover:bg-primary hover:text-[#102210]'
            }`}
          >
            <span className="material-symbols-outlined text-sm">
              {copied ? 'check' : 'content_copy'}
            </span>
            <span>{copied ? 'Copied!' : 'Copy Command'}</span>
          </button>
        </div>
      </div>
      <p className="mt-4 text-white/50 text-sm pl-2">Available for React, Vue, Svelte, and Vanilla JS environments.</p>
    </section>
  );
};

export default InstallationSection;
