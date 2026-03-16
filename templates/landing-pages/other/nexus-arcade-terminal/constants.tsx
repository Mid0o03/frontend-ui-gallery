
import React from 'react';
import { Stage, StageStatus, GlobalStat } from './types';

export const STAGES: Stage[] = [
  {
    id: '1',
    title: 'Neon Shadow',
    subtitle: 'Infiltration / Tactical RPG',
    sector: 'Active Sector 01',
    image: 'https://picsum.photos/seed/cyber1/800/450',
    status: StageStatus.ACTIVE,
    stats: { logic: 85, visual: 92 },
    themeColor: '#0db9f2'
  },
  {
    id: '2',
    title: 'Void Runner',
    subtitle: 'Hacking / Speed Runner',
    sector: 'Active Sector 04',
    image: 'https://picsum.photos/seed/cyber2/800/450',
    status: StageStatus.LOCKED,
    stats: { logic: 98, visual: 70 },
    themeColor: '#ff00ff'
  },
  {
    id: '3',
    title: 'Chrome Pulse',
    subtitle: 'Combat / Synthwave RPG',
    sector: 'Active Sector 07',
    image: 'https://picsum.photos/seed/cyber3/800/450',
    status: StageStatus.LOCKED,
    stats: { logic: 45, visual: 98 },
    themeColor: '#f0db4f'
  }
];

export const GLOBAL_STATS: GlobalStat[] = [
  {
    label: 'Logic Capacity',
    value: '85%',
    trend: 'up',
    change: '+5% Yield',
    color: 'text-primary'
  },
  {
    label: 'Visual Render',
    value: '92%',
    trend: 'down',
    change: '-2% Latency',
    color: 'text-cyber-pink'
  },
  {
    label: 'Int Intelligence',
    value: '78%',
    trend: 'up',
    change: '+12% Sync',
    color: 'text-cyber-yellow'
  }
];
