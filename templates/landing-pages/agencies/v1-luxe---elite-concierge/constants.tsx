
import React from 'react';
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'concierge',
    number: '01',
    title: 'Private Concierge',
    description: 'Invisible assistance, 24/7. From private jet charters to sold-out global premieres, we manage the impossible.',
    link: '#concierge'
  },
  {
    id: 'access',
    number: '02',
    title: 'Global Access',
    description: 'Seamless transit through 150+ territories. Diplomatic-grade security and exclusive lounge access worldwide.',
    link: '#global'
  },
  {
    id: 'events',
    number: '03',
    title: 'Bespoke Events',
    description: "Entry to the world's most guarded gatherings. Private viewing, gala seating, and unlisted social circles.",
    link: '#events'
  },
  {
    id: 'asset',
    number: '04',
    title: 'Asset Management',
    description: 'Preserving legacies across generations. Discretion is our cornerstone in wealth and property protection.',
    link: '#assets'
  }
];

export const Logo = () => (
  <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" />
  </svg>
);
