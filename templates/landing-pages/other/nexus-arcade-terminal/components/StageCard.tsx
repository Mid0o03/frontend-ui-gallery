
import React from 'react';
import { Stage, StageStatus } from '../types';

interface StageCardProps {
  stage: Stage;
  isActive?: boolean;
}

const ProgressBar = ({ value, label, activeColor }: { value: number; label: string, activeColor: string }) => {
  const segments = 10;
  const activeSegments = Math.round((value / 100) * segments);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-white/60">
        <span>{label}</span>
        <span style={{ color: activeColor }}>{value}%</span>
      </div>
      <div className="flex gap-1 h-2">
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm transition-all duration-500 ${
              i < activeSegments 
                ? 'opacity-100 shadow-[0_0_8px_rgba(13,185,242,0.5)]' 
                : 'bg-white/5 opacity-30'
            }`}
            style={{ 
              backgroundColor: i < activeSegments ? activeColor : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const StageCard: React.FC<StageCardProps> = ({ stage }) => {
  const isLocked = stage.status === StageStatus.LOCKED;
  const accentColor = isLocked ? '#ffffff66' : stage.themeColor;

  return (
    <div className={`snap-center min-w-[340px] md:min-w-[420px] bg-charcoal/80 border border-white/10 rounded-xl overflow-hidden group transition-all duration-300 hover:border-primary/40 ${!isLocked && 'neon-border-primary'}`}>
      <div className="relative h-56 overflow-hidden">
        <img 
          src={stage.image} 
          alt={stage.title} 
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${isLocked ? 'grayscale opacity-50' : 'opacity-80 group-hover:opacity-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60"></div>
        <div 
          className="absolute top-4 left-4 text-black px-2 py-1 text-[10px] font-black tracking-widest uppercase rounded pixel-corners"
          style={{ backgroundColor: stage.themeColor }}
        >
          {stage.sector}
        </div>
        {isLocked && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black/60 backdrop-blur-sm p-4 rounded-full border border-white/10">
                    <svg className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
            </div>
        )}
      </div>

      <div className="p-6 space-y-6">
        <div>
          <h3 className={`text-2xl font-bold tracking-tight uppercase transition-colors ${!isLocked && 'group-hover:text-primary'}`}>
            {stage.title}
          </h3>
          <p className="text-white/50 text-xs mt-1 uppercase tracking-wider">{stage.subtitle}</p>
        </div>

        <div className={`space-y-4 ${isLocked ? 'opacity-40' : 'opacity-100'}`}>
          <ProgressBar value={stage.stats.logic} label="Logic" activeColor={accentColor} />
          <ProgressBar value={stage.stats.visual} label="Visual" activeColor={accentColor} />
        </div>

        <div className="flex gap-3 pt-2">
          <button 
            disabled={isLocked}
            className={`flex-1 font-black py-3 rounded-lg uppercase tracking-widest text-sm transition-all active:translate-y-0.5 shadow-[0_4px_0_0_rgba(0,0,0,0.4)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.4)] ${
              isLocked 
                ? 'bg-white/5 text-white/30 cursor-not-allowed border border-white/5' 
                : 'bg-primary text-black hover:bg-primary/90'
            }`}
          >
            {isLocked ? 'Locked' : 'Start Stage'}
          </button>
          <button 
            className="bg-white/5 text-white font-bold px-4 rounded-lg uppercase tracking-widest text-xs border border-white/10 hover:bg-white/10 transition-colors"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};
