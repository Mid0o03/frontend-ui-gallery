
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateSelect }) => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  // Static view for October 2024 to match the mockup
  const currentMonth = "OCTOBER 2024";
  const calendarDays = [
    { value: 29, current: false }, { value: 30, current: false },
    { value: 1, current: true }, { value: 2, current: true },
    { value: 3, current: true, selected: true }, { value: 4, current: true },
    { value: 5, current: true }, { value: 6, current: true },
    { value: 7, current: true }, { value: 8, current: true },
    { value: 9, current: true }, { value: 10, current: true },
    { value: 11, current: true }, { value: 12, current: true },
    { value: 13, current: true }, { value: 14, current: true },
    { value: 15, current: true }, { value: 16, current: true },
    { value: 17, current: true }, { value: 18, current: true },
    { value: 19, current: true }, { value: 20, current: true },
  ];

  return (
    <div className="border border-black/5 dark:border-white/5 rounded-xl p-5 bg-white/40 dark:bg-black/20 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <button className="p-1 hover:text-primary transition-colors">
          <ChevronLeft size={16} />
        </button>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">{currentMonth}</span>
        <button className="p-1 hover:text-primary transition-colors">
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center mb-3">
        {days.map((d) => (
          <div key={d} className="text-[10px] font-bold opacity-30">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {calendarDays.map((d, i) => (
          <button
            key={i}
            className={`
              h-9 w-full flex items-center justify-center text-xs rounded-md transition-all
              ${!d.current ? 'opacity-20 pointer-events-none' : 'hover:bg-primary/10'}
              ${d.selected ? 'bg-primary text-background-dark font-bold scale-105 shadow-lg shadow-primary/20' : ''}
            `}
          >
            {d.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
