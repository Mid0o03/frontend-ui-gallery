import { BonsaiStyle } from './types';
import chokkanImg from './src/assets/images/style_chokkan.jpg';
import moyogiImg from './src/assets/images/style_moyogi.jpg';
import kengaiImg from './src/assets/images/style_kengai.jpg';
import shakanImg from './src/assets/images/style_shakan.jpg';

export const BONSAI_STYLES: BonsaiStyle[] = [
  {
    id: 'chokkan',
    name: 'Formal Upright',
    japanese: '直幹',
    description: 'A classic style where the trunk is perfectly straight and tapering towards the top.',
    imageUrl: chokkanImg
  },
  {
    id: 'moyogi',
    name: 'Informal Upright',
    japanese: '模様木',
    description: 'The most common style, featuring a curved trunk that still grows vertically overall.',
    imageUrl: moyogiImg
  },
  {
    id: 'kengai',
    name: 'Cascade',
    japanese: '懸崖',
    description: 'Inspired by trees growing on steep cliffs, the trunk grows downward below the pot level.',
    imageUrl: kengaiImg
  },
  {
    id: 'shakan',
    name: 'Slanting',
    japanese: '斜幹',
    description: 'The trunk grows at an angle, representing a tree leaning towards the sun or against the wind.',
    imageUrl: shakanImg
  }
];

export const CARE_DATA = [
  { month: 'Jan', water: 2, sun: 4 },
  { month: 'Feb', water: 2, sun: 5 },
  { month: 'Mar', water: 4, sun: 6 },
  { month: 'Apr', water: 5, sun: 8 },
  { month: 'May', water: 7, sun: 9 },
  { month: 'Jun', water: 9, sun: 10 },
  { month: 'Jul', water: 10, sun: 10 },
  { month: 'Aug', water: 9, sun: 9 },
  { month: 'Sep', water: 7, sun: 7 },
  { month: 'Oct', water: 5, sun: 6 },
  { month: 'Nov', water: 3, sun: 4 },
  { month: 'Dec', water: 2, sun: 3 },
];
