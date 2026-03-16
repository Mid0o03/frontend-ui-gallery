import React, { useState } from 'react';
import { CornerDownLeft } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { branding } from '../config/branding';
import { content } from '../config/content';

export const Terminal: React.FC = () => {
  const [activeInput, setActiveInput] = useState('');
  const { terminal } = content;

  return (
    <main className="flex-1 overflow-y-auto p-4 md:p-8 font-mono text-sm md:text-base selection:bg-terminal-green selection:text-black scroll-smooth">
      <div className="max-w-4xl mx-auto flex flex-col gap-10 pb-20">

        {/* Welcome Msg */}
        <div className="flex flex-col gap-2 opacity-80 mb-4 text-[#666]">
          <p>{terminal.lastLogin}</p>
          <p>{terminal.welcomeMessage}</p>
        </div>

        {/* Section: Whoami */}
        <section id="about">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary font-bold">user@portfolio:~$</span>
            <span className="text-white">{terminal.whoami.command}</span>
          </div>

          <div className="bg-[#111] border border-[#333] rounded-lg p-6 font-mono text-terminal-green/90 shadow-lg relative group hover:border-[#444] transition-colors">
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 md:gap-y-3">
              {[
                { line: 1, content: <><span className="text-purple-400">const</span> <span className="text-yellow-200">developer</span> = {'{'}</> },
                { line: 2, content: <><span className="text-blue-300">name</span>: <span className="text-orange-300">"{terminal.whoami.data.name}"</span>,</>, indent: true },
                { line: 3, content: <><span className="text-blue-300">role</span>: <span className="text-orange-300">"{terminal.whoami.data.role}"</span>,</>, indent: true },
                { line: 4, content: <><span className="text-blue-300">stack</span>: [<span className="text-orange-300">"{terminal.whoami.data.stack.join('", "')}"</span>],</>, indent: true },
                { line: 5, content: <><span className="text-blue-300">status</span>: <span className="text-orange-300">"{terminal.whoami.data.status}"</span>,</>, indent: true },
                { line: 6, content: <><span className="text-blue-300">location</span>: <span className="text-orange-300">"{terminal.whoami.data.location}"</span></>, indent: true },
                { line: 7, content: <>{"};"}</> },
              ].map((row) => (
                <React.Fragment key={row.line}>
                  <div className="text-[#444] select-none text-right pr-4 border-r border-[#333]">
                    {row.line}
                  </div>
                  <div className={row.indent ? 'pl-4' : ''}>
                    {row.content}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Projects */}
        <section id="projects">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-primary font-bold">user@portfolio:~$</span>
            <span className="text-white">{terminal.projects.command}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {terminal.projects.list.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </section>

        {/* Section: Contact */}
        <section id="contact" className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">user@portfolio:~$</span>
            <span className="text-white">{terminal.contact.command}</span>
          </div>

          <div className="border border-[#333] border-l-4 border-l-primary bg-[#111] p-6 rounded-r-xl">
            <p className="text-[#888] mb-4">{terminal.contact.initializingMsg}</p>
            <form className="flex flex-col gap-4 max-w-lg" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label className="text-terminal-green whitespace-nowrap min-w-[100px]">{terminal.contact.labels.name}</label>
                <input
                  type="text"
                  placeholder={terminal.contact.placeholders.name}
                  className="bg-transparent border-b border-[#444] text-[#e9e8ce] focus:outline-none focus:border-primary w-full px-2 py-1 font-mono placeholder-gray-700 transition-colors"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label className="text-terminal-green whitespace-nowrap min-w-[100px]">{terminal.contact.labels.email}</label>
                <input
                  type="email"
                  placeholder={terminal.contact.placeholders.email}
                  className="bg-transparent border-b border-[#444] text-[#e9e8ce] focus:outline-none focus:border-primary w-full px-2 py-1 font-mono placeholder-gray-700 transition-colors"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-2">
                <label className="text-terminal-green whitespace-nowrap min-w-[100px] pt-1">{terminal.contact.labels.message}</label>
                <textarea
                  rows={3}
                  placeholder={terminal.contact.placeholders.message}
                  className="bg-transparent border border-[#444] rounded text-[#e9e8ce] focus:outline-none focus:border-primary w-full px-3 py-2 font-mono placeholder-gray-700 resize-none transition-colors"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  className="bg-primary/10 hover:bg-primary text-primary hover:text-black border border-primary px-6 py-2 rounded-full font-mono text-sm font-bold transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>{terminal.contact.labels.button}</span>
                  <CornerDownLeft size={16} className="group-hover:rotate-90 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Active Prompt */}
        <div className="flex items-center gap-2 pt-4 border-t border-[#222]">
          <span className="text-primary font-bold">user@portfolio:~$</span>
          <div className="flex items-center flex-1">
            <input
              type="text"
              value={activeInput}
              onChange={(e) => setActiveInput(e.target.value)}
              className="bg-transparent border-none outline-none text-[#e9e8ce] font-mono w-full caret-transparent"
              autoFocus
            />
            {activeInput.length === 0 && <span className="w-2.5 h-5 bg-primary animate-blink block -ml-[1px]"></span>}
            {activeInput.length > 0 && <span className="w-2.5 h-5 bg-primary animate-blink block ml-0.5"></span>}
          </div>
        </div>
      </div>
    </main>
  );
};