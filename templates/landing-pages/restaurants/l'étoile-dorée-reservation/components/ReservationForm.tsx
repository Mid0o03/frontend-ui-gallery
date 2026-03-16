
import React from 'react';

const ReservationForm: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Step 2: Guest Details */}
      <div className="space-y-5">
        <h3 className="text-sm font-bold flex items-center gap-3 uppercase tracking-widest">
          <span className="bg-primary/20 text-primary w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border border-primary/20">2</span>
          Guest Details
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold block ml-1">Party Size</label>
            <select className="w-full bg-white/30 dark:bg-black/20 border-black/10 dark:border-white/10 rounded-lg text-xs py-2.5 px-3 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none appearance-none cursor-pointer">
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>Private Room (6+)</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold block ml-1">Time</label>
            <select className="w-full bg-white/30 dark:bg-black/20 border-black/10 dark:border-white/10 rounded-lg text-xs py-2.5 px-3 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none appearance-none cursor-pointer">
              <option>19:00</option>
              <option>19:30</option>
              <option>20:00</option>
              <option>20:30</option>
            </select>
          </div>
        </div>
      </div>

      {/* Step 3: Requests */}
      <div className="space-y-5">
        <h3 className="text-sm font-bold flex items-center gap-3 uppercase tracking-widest">
          <span className="bg-primary/20 text-primary w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border border-primary/20">3</span>
          Concierge Request
        </h3>
        
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold block ml-1">Special Occasion</label>
            <input 
              className="w-full bg-white/30 dark:bg-black/20 border-black/10 dark:border-white/10 rounded-lg text-xs placeholder:italic py-2.5 px-4 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none" 
              placeholder="Birthday, Anniversary..." 
              type="text"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest opacity-50 font-bold block ml-1">Dietary Requirements</label>
            <textarea 
              className="w-full bg-white/30 dark:bg-black/20 border-black/10 dark:border-white/10 rounded-lg text-xs placeholder:italic py-2.5 px-4 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none min-h-[80px] resize-none" 
              placeholder="Allergies, preferences..." 
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
