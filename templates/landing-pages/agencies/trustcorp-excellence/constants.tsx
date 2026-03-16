
import React from 'react';
import { ServiceTab, TrustFactor } from './types';

export const SERVICE_TABS: ServiceTab[] = [
  {
    id: 'asset',
    title: 'Asset Management',
    subtitle: 'Scale your capital securely.',
    icon: 'account_balance_wallet',
    details: {
      heading: 'Comprehensive Asset Management Solutions',
      description: 'Our asset management framework provides end-to-end visibility into your corporate portfolio. We leverage AI-driven analytics to identify risks before they manifest, ensuring your capital remains protected and productive.',
      features: [
        'Real-time Portfolio Tracking',
        'Automated Risk Mitigation',
        'Transparent Performance Reporting'
      ],
      imageLabel: 'Asset Analytics Dashboard Visualization'
    }
  },
  {
    id: 'compliance',
    title: 'Compliance',
    subtitle: 'Regulatory excellence guaranteed.',
    icon: 'gavel',
    details: {
      heading: 'Regulatory & Compliance Frameworks',
      description: 'Navigate complex global regulations with ease. Our automated compliance engine monitors changes in real-time, providing you with the peace of mind needed to focus on growth.',
      features: [
        'Automated Regulatory Audits',
        'Global Compliance Standards',
        'Policy Management Suite'
      ],
      imageLabel: 'Compliance Monitoring Interface'
    }
  },
  {
    id: 'strategy',
    title: 'Strategic Advisory',
    subtitle: 'Future-proof your business model.',
    icon: 'trending_up',
    details: {
      heading: 'Visionary Strategic Consulting',
      description: 'Expert guidance tailored to your unique corporate landscape. We help you identify market shifts and capitalize on emerging opportunities before your competitors.',
      features: [
        'Market Trend Intelligence',
        'Corporate Restructuring',
        'Growth Acceleration Strategy'
      ],
      imageLabel: 'Strategic Roadmapping View'
    }
  },
  {
    id: 'global',
    title: 'Global Operations',
    subtitle: 'Seamless cross-border management.',
    icon: 'public',
    details: {
      heading: 'Unified Global Operational Excellence',
      description: 'Bridge the gap between international divisions with our seamless operational hub. Centralize data, communication, and workflows across every time zone.',
      features: [
        'Cross-border Workflow Sync',
        'Multicurrency Management',
        'Global Logistic Integration'
      ],
      imageLabel: 'Global Operations Control Center'
    }
  }
];

export const TRUST_FACTORS: TrustFactor[] = [
  {
    id: 'iso',
    title: 'Certifié ISO 27001',
    description: 'Industry-leading data security and privacy management protocols.',
    icon: 'verified_user'
  },
  {
    id: 'support',
    title: 'Support 24/7',
    description: 'Priority dedicated support channels available in all timezones.',
    icon: 'support_agent'
  },
  {
    id: 'gdpr',
    title: 'GDPR Compliant',
    description: 'Fully aligned with EU data protection regulations and standards.',
    icon: 'security'
  },
  {
    id: 'uptime',
    title: '99.9% Uptime',
    description: 'Enterprise SLA guaranteed for all critical operational services.',
    icon: 'rocket_launch'
  }
];
