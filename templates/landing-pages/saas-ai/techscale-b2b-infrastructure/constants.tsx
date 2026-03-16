
import { Feature, NavLink, FooterSection } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Solutions', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Resources', href: '#' },
  { label: 'Company', href: '#' },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Edge Computing',
    description: 'Low-latency processing at the edge, reducing data travel distance and improving response times.',
    icon: 'hub',
  },
  {
    id: 2,
    title: '256-bit Encryption',
    description: 'Military-grade protection for your data in transit and at rest with hardware-accelerated security.',
    icon: 'encrypted',
  },
  {
    id: 3,
    title: 'Auto-scaling',
    description: 'Instantly adjust your infrastructure footprint based on real-time traffic demand automatically.',
    icon: 'speed',
  },
  {
    id: 4,
    title: 'Global CDN',
    description: 'A high-performance content delivery network spanning 150+ edge nodes across 6 continents.',
    icon: 'public',
  },
  {
    id: 5,
    title: '24/7 Support',
    description: 'White-glove technical assistance from expert engineers available anytime, anywhere.',
    icon: 'support_agent',
  },
  {
    id: 6,
    title: 'Compliance Ready',
    description: 'Full adherence to SOC2, HIPAA, and GDPR standards with pre-built compliance templates.',
    icon: 'verified_user',
  },
  {
    id: 7,
    title: 'API First',
    description: 'Built for developers with a robust RESTful API and comprehensive documentation.',
    icon: 'integration_instructions',
  },
  {
    id: 8,
    title: 'Real-time Monitoring',
    description: 'Deep visibility into your stack with sub-second granularity and custom observability dashboards.',
    icon: 'monitoring',
  },
  {
    id: 9,
    title: 'Hybrid Cloud',
    description: 'Seamlessly bridge your on-premise hardware with cloud resources for a unified infrastructure.',
    icon: 'cloud_sync',
  },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Solutions',
    links: [
      { label: 'Edge Computing', href: '#' },
      { label: 'Bare Metal', href: '#' },
      { label: 'Cloud GPUs', href: '#' },
      { label: 'Hybrid Storage', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Status', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Open Source', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
];
