import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { content } from '../config/content';

export const MapWidget: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: content.profile.timezone
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bento-card h-full w-full rounded-[24px] bg-surface-dark border border-surface-border overflow-hidden relative group min-h-[220px]">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
        style={{ backgroundImage: `url('${content.map.image}')` }}
      >
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

      <div className="absolute bottom-0 left-0 p-5 w-full">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-primary rounded-full text-black flex items-center justify-center shadow-[0_0_10px_rgba(70,236,19,0.4)]">
            <MapPin size={12} fill="currentColor" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Location</span>
        </div>
        <p className="text-white font-bold text-lg">{content.profile.location}</p>
        <p className="text-gray-400 text-xs mt-1">Local time: {time}</p>
      </div>
    </div>
  );
};