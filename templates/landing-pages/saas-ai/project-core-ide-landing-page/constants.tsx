
import { FileItem, TabItem } from './types';

export const INITIAL_FILES: FileItem[] = [
  {
    name: 'PROJECT-CORE',
    type: 'folder',
    icon: 'expand_more',
    isOpen: true,
    children: [
      {
        name: 'src',
        type: 'folder',
        icon: 'folder',
        iconColor: 'text-blue-400',
        children: [
          { name: 'components', type: 'folder', icon: 'folder', iconColor: 'text-blue-400' },
          { name: 'App.js', type: 'file', icon: 'javascript', iconColor: 'text-primary' },
        ]
      },
      {
        name: 'public',
        type: 'folder',
        icon: 'folder',
        iconColor: 'text-yellow-400',
        children: [
          { name: 'favicon.ico', type: 'file', icon: 'image', iconColor: 'text-blue-200' },
        ]
      },
      { name: 'App.js', type: 'file', icon: 'javascript', iconColor: 'text-primary' },
      { name: 'index.html', type: 'file', icon: 'html', iconColor: 'text-orange-400' },
      { name: 'README.md', type: 'file', icon: 'description', iconColor: 'text-blue-300' },
      { name: 'package.json', type: 'file', icon: 'settings', iconColor: 'text-blue-500' },
    ]
  }
];

export const INITIAL_TABS: TabItem[] = [
  { id: '1', name: 'App.js', icon: 'javascript', iconColor: 'text-primary', isActive: true },
  { id: '2', name: 'Documentation.md', icon: 'description', iconColor: 'text-blue-400', isActive: false },
  { id: '3', name: 'config.json', icon: 'settings', iconColor: 'text-blue-500', isActive: false },
];
