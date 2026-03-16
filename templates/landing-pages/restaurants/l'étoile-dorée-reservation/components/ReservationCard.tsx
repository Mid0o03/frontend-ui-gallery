
import React, { useState } from 'react';
import { Clock, Shirt, Info } from 'lucide-react';
import Calendar from './Calendar';
import ReservationForm from './ReservationForm';

const ReservationCard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="glass-panel w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row animate-in fade-in zoom-in duration-700">
      {/* Left Column: Context Info */}
      <div className="lg:w-[35%] p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black/10 dark:border-white/10">
        <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">Michelin Three Stars</span>
        <h2 className="text-4xl lg:text-5xl font-display italic leading-tight mb-6">An Intimate Culinary Journey</h2>
        <p className="text-gold-muted dark:text-[#b09d78] text-lg mb-10 leading-relaxed font-light">
          Experience our seasonal tasting menu in the heart of the city. We offer limited seating to maintain an atmosphere of absolute refinement.
        </p>
        
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1">Service Hours</p>
              <p className="text-sm opacity-70 italic font-display">18:00 — 23:00, Tue to Sat</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <Shirt size={20} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1">Dress Code</p>
              <p className="text-sm opacity-70 italic font-display">Smart Elegant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Interactive Forms */}
      <div className="lg:w-[65%] p-8 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Step 1: Calendar */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold flex items-center gap-3 uppercase tracking-widest">
              <span className="bg-primary text-background-dark w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold">1</span>
              Select Date
            </h3>
            <Calendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
          </div>

          {/* Steps 2 & 3: Details */}
          <div className="space-y-10">
            <ReservationForm />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-black/5 dark:border-white/5 pt-8">
          <div className="flex items-center gap-3 text-[11px] opacity-60 italic tracking-wide">
            <Info size={14} className="text-primary" />
            Cancellation policy: 24h notice required.
          </div>
          
          <button className="w-full md:w-auto min-w-[240px] bg-primary text-background-dark font-bold py-4 px-8 rounded-lg shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-[0.2em] text-xs">
            Confirm Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
