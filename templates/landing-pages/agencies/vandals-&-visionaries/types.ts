
export interface Artist {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  color?: string;
  tilt?: 'left' | 'right';
}

export interface AgendaItem {
  id: string;
  date: string;
  title: string;
  location: string;
  status: 'active' | 'rsvp' | 'soldout';
  tilt: 'left' | 'right';
  theme: 'white' | 'primary' | 'dark';
}
