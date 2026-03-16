import React from 'react';

export interface Feature {
  title: string;
  description: string;
  // Fix: Added React import to resolve 'Cannot find namespace React' error
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: string;
}
