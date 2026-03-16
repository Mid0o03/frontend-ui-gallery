import React, { useState, useEffect } from 'react';
import { Monitor, Volume2, ShoppingCart, Music } from 'lucide-react';
import { branding } from '../config/branding';

/**
 * Taskbar Component
 * 
 * Fixed footer component containing the Start button, active task indicators,
 * and a system tray with volume, shopping cart, and a real-time clock.
 */
export const Taskbar: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      setTime(`${hours}:${minutes} ${ampm}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 w-full h-10 bg-retro-gray shadow-win95 z-50 flex items-center justify-between px-1 select-none">
      {/* Start Button */}
      <div className="relative">
        <button className="flex items-center gap-1.5 px-2 py-1 bg-retro-gray shadow-win95 active:shadow-win95-in active:bg-gray-300 hover:brightness-105">
          <img
            alt="Windows Logo"
            className="w-5 h-5"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7FCYGpxWjLYv0SwSqnpVNqYmyO735NhioPsLvADWg0HZcU24e3KNFVbFTH1s69m8kYunipuokFNLNmZcuG9I-Kmqj6lr_-eNjVsWgavh5A9KRc-gtOuWjJ-B2WviZ0GnxElzin0A72EaQ4dXNDJczDZlAzcRsqh7bbR6Fkhj7Np0_HiKqh1RaHTvnfBuPrM_YPBkHQRNv0P_JXj1sTgAcOdBgQQzqT_CKBTtg58Wy2QevmrTnOwsPa3zS6zaZgB4EpA84Uhm77LVY"
          />
          <span className="font-bold text-black text-sm tracking-wide">Start</span>
        </button>
      </div>

      {/* Taskbar Items */}
      <div className="flex-1 px-2 flex gap-1 overflow-x-auto">
        <div className="w-40 bg-retro-gray shadow-win95-in active:shadow-win95 px-2 py-1 flex items-center gap-2 cursor-pointer transition-colors">
          <Monitor size={16} className="text-black" />
          <span className="text-xs text-black truncate font-bold">{branding.name}</span>
        </div>
        <div className="w-40 bg-retro-gray shadow-win95 px-2 py-1 flex items-center gap-2 cursor-pointer hidden sm:flex hover:bg-gray-300 active:shadow-win95-in">
          <Music size={16} className="text-black" />
          <span className="text-xs text-black truncate">Winamp</span>
        </div>
      </div>

      {/* System Tray */}
      <div className="flex items-center gap-2 shadow-win95-in px-3 py-1 bg-retro-gray ml-2 h-[26px]">
        <Volume2 size={16} className="text-black cursor-pointer" />
        <div className="relative group cursor-pointer">
          <ShoppingCart size={16} className="text-black" />
          <span className="absolute -top-3 -right-2 bg-primary text-black text-[10px] font-bold px-1 rounded-full shadow-sm border border-black leading-tight">2</span>
        </div>
        <span className="text-xs text-black font-mono-retro ml-2 pt-0.5 min-w-[60px] text-center">{time}</span>
      </div>
    </footer>
  );
};