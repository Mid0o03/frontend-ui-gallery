
import React from 'react';
import { QrCode, AlertTriangle } from 'lucide-react';
import { AgendaItem } from '../types';

const AGENDA_ITEMS: AgendaItem[] = [
  {
    id: '1',
    date: 'OCT 12-15',
    title: 'The Foundry',
    location: 'Brooklyn, NY // Industrial Complex',
    status: 'active',
    tilt: 'left',
    theme: 'white'
  },
  {
    id: '2',
    date: 'NOV 03',
    title: 'Concrete Oasis',
    location: 'Berlin, DE // Underpass Session',
    status: 'rsvp',
    tilt: 'right',
    theme: 'primary'
  },
  {
    id: '3',
    date: 'DEC 18-20',
    title: 'Neon Alley',
    location: 'Tokyo, JP // Shibuya Secret Spot',
    status: 'soldout',
    tilt: 'left',
    theme: 'dark'
  }
];

const AgendaRow: React.FC<{ item: AgendaItem }> = ({ item }) => {
  const tiltClass = item.tilt === 'left' ? '-rotate-1' : 'rotate-1';
  
  const themes = {
    white: 'bg-white text-black border-black/20',
    primary: 'bg-primary text-white border-black/30',
    dark: 'bg-zinc-800 text-white border-black/20'
  };

  return (
    <div className={`
      ${tiltClass} ${themes[item.theme]} 
      p-6 md:p-10 flex flex-col md:flex-row justify-between items-center shadow-2xl relative 
      border-b-8 border-r-8 transition-transform hover:scale-[1.02] cursor-pointer
    `}>
      <div className="text-center md:text-left">
        <div className={`${item.theme === 'primary' ? 'text-black' : 'text-primary'} font-black text-xl mb-1`}>
          {item.date}
        </div>
        <h3 className="text-4xl font-black stencil-text">{item.title}</h3>
        <p className={`text-sm uppercase font-bold ${item.theme === 'white' ? 'text-zinc-500' : 'opacity-80'}`}>
          {item.location}
        </p>
      </div>

      <div className="mt-6 md:mt-0 flex items-center gap-6">
        {item.status === 'active' && (
          <div className="hidden lg:flex h-12 w-12 border-4 border-black/10 rounded-full items-center justify-center">
            <QrCode className="w-6 h-6" />
          </div>
        )}
        
        <button className={`
          px-8 py-4 font-black uppercase tracking-tighter transition-all
          ${item.theme === 'white' ? 'bg-black text-white hover:bg-primary' : ''}
          ${item.theme === 'primary' ? 'bg-white text-primary hover:bg-black hover:text-white' : ''}
          ${item.theme === 'dark' ? 'bg-primary text-white hover:scale-105' : ''}
        `}>
          {item.status === 'active' ? 'Get Access' : item.status === 'rsvp' ? 'RSVP Now' : 'Sold Out'}
        </button>
      </div>

      {/* Decorative elements */}
      {item.theme === 'white' && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-zinc-400/30 backdrop-blur-sm -rotate-2" />
      )}
      {item.theme === 'primary' && (
        <div className="absolute -bottom-2 right-10 w-24 h-4 bg-background-dark -skew-x-12" />
      )}
      {item.theme === 'dark' && (
        <div className="absolute top-4 right-4 text-white/10 pointer-events-none">
          <AlertTriangle size={80} strokeWidth={1} />
        </div>
      )}
    </div>
  );
};

const Agenda: React.FC = () => {
  return (
    <section id="agenda" className="py-24 brick-pattern relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-6xl font-black stencil-text bg-background-dark inline-block px-8 py-2 border-y-4 border-primary">
            Live Agenda
          </h2>
          <p className="mt-4 text-zinc-400 uppercase font-bold tracking-[0.2em]">Where the walls speak</p>
        </div>

        <div className="space-y-8">
          {AGENDA_ITEMS.map(item => (
            <AgendaRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
