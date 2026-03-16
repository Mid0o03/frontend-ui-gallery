
// Fix: Added React import to resolve the React namespace for ReactNode type definition.
import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface ExpertiseItem {
  id: string;
  index: string;
  title: string;
  description: string;
  label: string;
  icon: React.ReactNode;
}