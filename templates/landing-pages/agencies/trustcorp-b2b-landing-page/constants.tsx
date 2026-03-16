
import React from 'react';
import { TabType, FeatureContent } from './types';

export const FEATURES: FeatureContent[] = [
  {
    id: TabType.ANALYTICS,
    title: "Analytiques Avancées en Temps Réel",
    description: "Transformez vos données brutes en décisions stratégiques. Notre plateforme offre une visibilité complète sur vos KPI opérationnels avec des tableaux de bord personnalisables et une intelligence artificielle prédictive.",
    icon: "bar_chart",
    items: [
      "Reporting automatisé hebdomadaire",
      "Tableaux de bord interactifs",
      "Exportation de données multi-formats"
    ],
    imageUrl: "https://picsum.photos/seed/analytics1/800/600"
  },
  {
    id: TabType.SECURITY,
    title: "Sécurité de Grade Militaire",
    description: "Protégez vos actifs les plus précieux avec notre architecture zero-trust. Nous utilisons un chiffrement de bout en bout et des protocoles d'authentification multi-facteurs avancés.",
    icon: "shield",
    items: [
      "Chiffrement AES-256 bits",
      "Conformité RGPD & ISO 27001",
      "Surveillance 24/7 contre les intrusions"
    ],
    imageUrl: "https://picsum.photos/seed/security2/800/600"
  },
  {
    id: TabType.SCALABILITY,
    title: "Scalabilité Sans Limite",
    description: "Accompagnez votre croissance sans friction. Notre infrastructure cloud élastique s'adapte automatiquement à votre volume de transactions, peu importe l'échelle.",
    icon: "trending_up",
    items: [
      "Auto-scaling intelligent",
      "API RESTful haute performance",
      "Déploiement global multi-régions"
    ],
    imageUrl: "https://picsum.photos/seed/scale3/800/600"
  }
];

export const Logo: React.FC<{ className?: string }> = ({ className = "size-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor" />
  </svg>
);
