
import { Project, Category } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'CYBER_DASHBOARD',
    description: 'Full-stack React & Node workspace',
    category: 'SAAS',
    level: '01',
    image: 'https://picsum.photos/seed/cyber/800/450',
    stats: { str: 85, agi: 92, int: 70 }
  },
  {
    id: '2',
    name: 'PIXEL_NAV',
    description: '3D Spatial navigation engine',
    category: 'TOOLS',
    level: '02',
    image: 'https://picsum.photos/seed/pixel/800/450',
    stats: { str: 60, agi: 95, int: 88 }
  },
  {
    id: '3',
    name: 'NEON_TOOLS',
    description: 'Developer productivity suite',
    category: 'TOOLS',
    level: '03',
    image: 'https://picsum.photos/seed/neon/800/450',
    stats: { str: 90, agi: 75, int: 82 }
  },
  {
    id: '4',
    name: 'LOGIC_GATE',
    description: 'Binary visualizer for web',
    category: 'TRAINING',
    level: '04',
    image: 'https://picsum.photos/seed/logic/800/450',
    stats: { str: 72, agi: 80, int: 95 }
  },
  {
    id: '5',
    name: 'RETRO_CORE',
    description: 'Design system for vintage UI',
    category: 'TOOLS',
    level: '05',
    image: 'https://picsum.photos/seed/retro/800/450',
    stats: { str: 88, agi: 88, int: 88 }
  },
  {
    id: '6',
    name: 'SHADOW_STACK',
    description: 'Encrypted data management',
    category: 'SAAS',
    level: 'MAX',
    image: 'https://picsum.photos/seed/shadow/800/450',
    stats: { str: 95, agi: 65, int: 90 }
  }
];

// Added missing Category import to resolve reference error on line 61
export const CATEGORIES: Category[] = ['ALL', 'SAAS', 'TOOLS', 'TRAINING'];