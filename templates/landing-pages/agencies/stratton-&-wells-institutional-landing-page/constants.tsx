
import React from 'react';
import { NavItem, GazetteArticle, ExpertiseItem, Partner } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Expertise', href: '#' },
  { label: 'Partners', href: '#' },
  { label: 'Legacy', href: '#' },
  { label: 'Offices', href: '#' },
];

export const GAZETTE_ARTICLES: GazetteArticle[] = [
  {
    category: 'Global Outlook',
    title: 'Navigating the Shifting Geopolitical Landscape',
    excerpt: 'An analysis of emerging markets and the shifting geopolitical landscape for the modern enterprise. We examine the long-term impacts of trade realignment on European manufacturing hubs.',
    cta: 'Read Full Analysis',
  },
  {
    category: 'Philosophical Foundation',
    title: 'Rooted in a Legacy of Unwavering Integrity',
    excerpt: 'Prioritizing long-term stability over transient market trends. Our foundation rests on the principles of fiduciary responsibility and radical transparency across all global operations.',
    quote: 'Stability is not the absence of change, but the mastery of it. — Arthur Stratton',
  },
  {
    category: 'Strategic Excellence',
    title: 'Leveraging Decades of Multidisciplinary Expertise',
    excerpt: 'Providing unparalleled corporate guidance through specialized units in M&A, Venture Capital, and Sovereign Wealth. Our approach combines traditional wisdom with computational foresight.',
    stats: [
      { label: 'Global Hubs', value: '12' },
      { label: 'Partners', value: '85+' },
    ],
  },
];

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    icon: 'account_balance',
    title: 'Institutional Advisory',
    description: 'Strategic guidance for pension funds, endowments, and multi-national corporations.',
  },
  {
    icon: 'gavel',
    title: 'Global Compliance',
    description: 'Regulatory navigation across jurisdictions with a focus on cross-border transactions.',
  },
  {
    icon: 'insights',
    title: 'Wealth Management',
    description: 'Preserving and growing multi-generational legacy assets through disciplined risk control.',
  },
  {
    icon: 'handshake',
    title: 'M&A Strategy',
    description: 'Execution of complex mergers, acquisitions, and divestitures on a global scale.',
  },
];

export const PARTNERS: Partner[] = [
  {
    name: 'Julian Stratton',
    role: 'Managing Partner',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Elena Rodriquez',
    role: 'Head of Strategy',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Marcus Thorne',
    role: 'Senior Counsel',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Sarah Jenning',
    role: 'Global Risk Lead',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
  },
];

export const Logo: React.FC<{ className?: string }> = ({ className = 'size-8' }) => (
  <svg fill="currentColor" viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg">
    <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fillRule="evenodd"></path>
  </svg>
);
