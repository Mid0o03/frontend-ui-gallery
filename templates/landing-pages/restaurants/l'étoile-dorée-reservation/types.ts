
export interface ReservationData {
  date: Date;
  partySize: string;
  time: string;
  specialOccasion: string;
  dietaryRequirements: string;
}

export interface DayInfo {
  day: number;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isToday: boolean;
}
