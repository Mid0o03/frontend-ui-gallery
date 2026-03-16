
import React from 'react';
import { Highlighter } from 'lucide-react';
import { Artist } from '../types';

const ARTISTS: Artist[] = [
  {
    id: '1',
    name: 'SKETCH',
    role: 'Lead Stencilist',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRoL8puZaUuyUCxV-BnKbeP64Qvc974Pe4YWVldh9VhMFtBFoXgRyciVUVPdefBTpzSk3_Q_YpsYqDfzVNwxELYeaGQSZi7ffYB6HstfCCrfdWExbWUS0XB8k4dp9_hX4SYnFxAzVDW0VXYEEm83F-2xk2Y_NzLMc_EUEZ0KAVMcF9bnp5YgofLA4Q7JNgRpbwseCh5FZh_6YfVviTOkQeN-xij42AoaegvJWzfZB1_B3VoNSZUSBqOfaN4zZjUo6qF0eAXcRtHRrS',
    color: 'bg-primary'
  },
  {
    id: '2',
    name: 'BLAST',
    role: 'Mural Master',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoIer836se8F6Tzamc3tezQDNqftfQcYaXssem6TmjLAErwZciKHnA15oWe4YRMa9Pkd_nyw4syQljCecRBxmH_9kUQic9yZ6B8wcTQ2Epn55tYQOw9g06C3u5X8ArEJrq7Z5DvSU4NSIPZEJxSoaZD6q4aJKwcpA9qAVljqn0szt9vQoR1bvVR_tacIEUpN5d2Hi31TBmKWbDMP40fnPpnKdih2Fm5riaghtWNJZ9qWQ29Eq2l4_iWW0dzl8gEfMIxbRgJy0VliZe',
    tilt: 'right'
  },
  {
    id: '3',
    name: 'VOID',
    role: 'Shadow Artist',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAboiO80mqyNmD5n_7GmP3pJo4hXaBuAaTdvdbX0PUExPk_TIxckrxA5mWhK95hYPJlyXOlYdLe1gk60SXWZJDtwxRiB6_G7LThFJzx2Qm3lteRQHl8gs1qzXgCgTI4ZXjodt2uMfexjsiJcZcYj524D2dAsDSv6Oif3Zsa2dT249oLKCiZSC-fFC_cIVPWKMDI-AtSmifO7nMY_JlVOR2OdMbDEl72h6XlXhmlWTAS4Q82BaN41qWry_bSCsqraUO6vYxQX5U5CT46'
  },
  {
    id: '4',
    name: 'CHROMA',
    role: 'Color Chemist',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgHsAbqVMBTS0Tjow5ZPFzQtKqxswBSE37W6OvGKoOt97EExS6dvZMO50bMCfwZ0uaBBW5zv_nzBG1bJSfAYp8E8qOcqsQKlcCShdRiG_YxA2ktcOZI1SrvzjF0YdFxDZu_7LJHyuFbG9P6S2Lk44BwkxB8K4GOJ9URaRCbJF2WF2FEijGb5jljwVqrucsoT9aQWIDww8gmJ_J-65ThpNj7cEnonaTn4QQMVNkLpNYnNu5vrbjEL6s0gy4rGnTFGDfVYBIq45oz0Pd',
    tilt: 'left'
  }
];

const ArtistCard: React.FC<{ artist: Artist; index: number }> = ({ artist, index }) => {
  return (
    <div className={`group relative ${index % 2 !== 0 ? 'pt-8' : ''}`}>
      {/* Icon hover effect */}
      <div className="absolute -top-4 -left-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <Highlighter size={48} strokeWidth={3} />
      </div>
      
      {/* Main Image Container */}
      <div className={`sticker-border aspect-[3/4] bg-zinc-800 overflow-hidden relative transition-transform duration-500 group-hover:rotate-1`}>
        <img 
          src={artist.imageUrl} 
          alt={artist.name}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white text-black">
          <p className="font-black text-2xl uppercase stencil-text leading-tight">{artist.name}</p>
          <p className="text-xs font-bold uppercase opacity-60 tracking-wider">{artist.role}</p>
        </div>
      </div>
      
      {/* Accent Splatters */}
      {artist.id === '1' && (
        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary rounded-full filter blur-2xl opacity-40 group-hover:opacity-100 transition-opacity" />
      )}
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="the-team" className="py-24 px-6 md:px-20 bg-background-dark relative overflow-hidden">
      {/* Atmospheric Splatters */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 relative z-10">
        <div>
          <h2 className="text-5xl font-black stencil-text tracking-tighter">The Team</h2>
          <p className="text-zinc-500 mt-2 uppercase font-bold tracking-widest italic text-sm">The hands behind the haze</p>
        </div>
        <div className="hidden md:block h-px flex-grow mx-10 bg-white/10 mb-4" />
        <p className="text-primary font-black text-xl italic uppercase">001-004 // ACTIVE</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {ARTISTS.map((artist, idx) => (
          <ArtistCard key={artist.id} artist={artist} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Team;
