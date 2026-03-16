
import React, { useState } from 'react';

const DocumentationSection: React.FC = () => {
  const [activeFile, setActiveFile] = useState('Introduction.md');

  const files = [
    { name: 'Introduction.md', icon: 'description', color: 'text-primary' },
    { name: 'getting-started.js', icon: 'data_object', color: 'text-yellow-500' }
  ];

  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-primary">menu_book</span>
        <h2 className="text-2xl font-bold tracking-tight">Documentation</h2>
      </div>
      
      <div className="flex h-[800px] rounded-xl border border-white/10 bg-[#1e1e1e] overflow-hidden shadow-2xl">
        {/* Sidebar / Explorer */}
        <aside className="hidden md:flex flex-col w-64 bg-[#252525] border-r border-white/5 shrink-0">
          <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Explorer</span>
            <span className="material-symbols-outlined text-sm text-white/40">unfold_more</span>
          </div>
          <div className="flex-1 overflow-y-auto py-2 scrollbar-hide">
            {/* Explorer Content */}
            <div className="mb-2">
              <div className="flex items-center gap-2 px-4 py-1.5 text-white/60 hover:text-white cursor-pointer group">
                <span className="material-symbols-outlined text-lg transition-transform rotate-90">chevron_right</span>
                <span className="text-sm font-medium">Getting Started</span>
              </div>
              <div className="ml-4">
                {files.map(file => (
                  <div 
                    key={file.name}
                    onClick={() => setActiveFile(file.name)}
                    className={`flex items-center gap-2 px-4 py-1.5 cursor-pointer transition-all ${
                      activeFile === file.name 
                        ? 'bg-[#37373d] border-l-2 border-primary text-white' 
                        : 'text-white/50 hover:bg-white/5'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-lg ${file.color}`}>{file.icon}</span>
                    <span className="text-sm">{file.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-2">
              <div className="flex items-center gap-2 px-4 py-1.5 text-white/60 hover:text-white cursor-pointer group">
                <span className="material-symbols-outlined text-lg transition-transform">chevron_right</span>
                <span className="text-sm font-medium">API Reference</span>
              </div>
            </div>
            
            <div className="mb-2">
              <div className="flex items-center gap-2 px-4 py-1.5 text-white/60 hover:text-white cursor-pointer group">
                <span className="material-symbols-outlined text-lg transition-transform">chevron_right</span>
                <span className="text-sm font-medium">Examples</span>
              </div>
            </div>
          </div>

          {/* Pro Tip Card */}
          <div className="p-4 bg-[#102210]/30 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-sm">star</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/80 leading-none">Pro Tip</p>
                <p className="text-[9px] text-white/40 mt-1 uppercase tracking-tighter">Use / to search docs</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#1a1a1a]">
          {/* Tabs Header */}
          <div className="flex bg-[#2d2d2d]/30 border-b border-white/5 h-10 overflow-x-auto scrollbar-hide">
            {files.map(file => (
              <div 
                key={file.name}
                onClick={() => setActiveFile(file.name)}
                className={`flex items-center gap-2 px-4 border-r border-white/5 cursor-pointer transition-all min-w-[140px] ${
                  activeFile === file.name 
                    ? 'bg-[#1e1e1e] border-t border-t-primary opacity-100' 
                    : 'opacity-60 hover:bg-white/5 hover:opacity-100'
                }`}
              >
                <span className={`material-symbols-outlined text-sm ${file.color}`}>{file.icon}</span>
                <span className="text-xs font-medium whitespace-nowrap">{file.name}</span>
                <span className="material-symbols-outlined text-[14px] ml-auto text-white/20 hover:text-white cursor-pointer">close</span>
              </div>
            ))}
            <div className="flex-1"></div>
          </div>

          {/* Editor Body */}
          <div className="flex-1 overflow-y-auto p-8 lg:p-12 scrollbar-hide">
            {activeFile === 'Introduction.md' ? (
              <div className="max-w-none">
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <span className="text-sm font-mono tracking-tighter uppercase font-bold">Introduction</span>
                    <div className="h-px flex-1 bg-primary/20"></div>
                  </div>
                  <h1 className="text-4xl font-bold text-white mb-6">Getting Started with Core</h1>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Welcome to the official documentation for <span className="text-primary font-bold">@project/core</span>. 
                    This library provides a high-performance foundation for building distributed modern web applications with minimal friction.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-primary/30 transition-all hover:-translate-y-1">
                    <span className="material-symbols-outlined text-primary mb-4">bolt</span>
                    <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                    <p className="text-sm text-white/50 leading-relaxed">Built with low-level optimizations and minimal overhead for maximum throughput and efficiency.</p>
                  </div>
                  <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-primary/30 transition-all hover:-translate-y-1">
                    <span className="material-symbols-outlined text-primary mb-4">security</span>
                    <h3 className="text-xl font-bold mb-2">Secure by Default</h3>
                    <p className="text-sm text-white/50 leading-relaxed">End-to-end encryption and robust security patterns included out of the box for piece of mind.</p>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
                  <p className="text-white/60 mb-6">Import the library and initialize the core runtime to start processing events immediately.</p>
                  <div className="rounded-lg bg-[#0d0d0d] p-6 border border-white/5 font-mono text-sm leading-6 overflow-x-auto">
                    <div className="flex gap-4">
                      <span className="text-white/20 select-none">1</span>
                      <span><span className="text-purple-400">import</span> {'{'} Core {'}'} <span className="text-purple-400">from</span> <span className="text-primary">'@project/core'</span>;</span>
                    </div>
                    <div className="flex gap-4"><span className="text-white/20 select-none">2</span><span>&nbsp;</span></div>
                    <div className="flex gap-4"><span className="text-white/20 select-none">3</span><span className="text-white/40">// Initialize runtime</span></div>
                    <div className="flex gap-4">
                      <span className="text-white/20 select-none">4</span>
                      <span><span className="text-purple-400">const</span> app = <span className="text-purple-400">new</span> <span className="text-blue-400">Core</span>({'{'}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-white/20 select-none">5</span>
                      <span>&nbsp;&nbsp;apiKey: <span className="text-primary">'YOUR_API_KEY'</span>,</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-white/20 select-none">6</span>
                      <span>&nbsp;&nbsp;debug: <span className="text-orange-400">true</span></span>
                    </div>
                    <div className="flex gap-4"><span className="text-white/20 select-none">7</span><span>{'}'});</span></div>
                    <div className="flex gap-4"><span className="text-white/20 select-none">8</span><span>&nbsp;</span></div>
                    <div className="flex gap-4">
                      <span className="text-white/20 select-none">9</span>
                      <span><span className="text-purple-400">await</span> app.<span className="text-blue-400">init</span>();</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-white/10">
                  <button className="flex flex-col gap-1 text-left group">
                    <span className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Previous</span>
                    <span className="text-sm text-white/60 group-hover:text-primary transition-colors">— Installation</span>
                  </button>
                  <button className="flex flex-col items-end gap-1 text-right group">
                    <span className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Next</span>
                    <span className="text-sm text-white/60 group-hover:text-primary transition-colors">API Overview →</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-white/30 font-mono text-sm">
                Viewing source code for getting-started.js...
              </div>
            )}
          </div>

          {/* Status Bar */}
          <div className="bg-primary px-3 h-6 flex items-center justify-between text-[#102210] font-medium text-[10px] select-none">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">settings_ethernet</span>
                <span>main*</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">sync</span>
                <span>Synched</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>{activeFile.split('.').pop() === 'md' ? 'Markdown' : 'JavaScript'}</span>
              <span>UTF-8</span>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">notifications</span>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;
