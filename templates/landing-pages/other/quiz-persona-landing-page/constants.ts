
import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Quel est votre objectif principal ?",
    description: "Choisissez l'option qui décrit le mieux votre intention actuelle.",
    options: [
      { id: "prod", title: "Augmenter ma productivité", description: "Optimiser mes flux de travail et gagner du temps.", icon: "rocket_launch" },
      { id: "coll", title: "Améliorer la collaboration", description: "Faciliter la communication au sein de mon équipe.", icon: "groups" },
      { id: "grow", title: "Développer mon entreprise", description: "Acquérir de nouveaux clients et marchés.", icon: "trending_up" },
      { id: "idea", title: "Explorer de nouvelles idées", description: "Je suis juste curieux et je veux innover.", icon: "lightbulb" }
    ]
  },
  {
    id: 2,
    title: "Quelle est la taille de votre équipe ?",
    description: "Cela nous aide à adapter les solutions à votre échelle.",
    options: [
      { id: "solo", title: "Solo-entrepreneur", description: "Je travaille seul sur mes projets.", icon: "person" },
      { id: "small", title: "Petite équipe (2-10)", description: "Une équipe agile et soudée.", icon: "group" },
      { id: "mid", title: "Équipe moyenne (11-50)", description: "Une entreprise en pleine croissance.", icon: "diversity_3" },
      { id: "large", title: "Grande entreprise (50+)", description: "Des besoins complexes de grande échelle.", icon: "corporate_fare" }
    ]
  },
  {
    id: 3,
    title: "Quel est votre plus grand défi ?",
    description: "Identifions le point de friction majeur.",
    options: [
      { id: "time", title: "Gestion du temps", description: "Trop de tâches, pas assez d'heures.", icon: "schedule" },
      { id: "tools", title: "Outils éparpillés", description: "Difficile de centraliser les informations.", icon: "category" },
      { id: "sales", title: "Acquisition client", description: "Besoin de plus de visibilité et de leads.", icon: "ads_click" },
      { id: "crea", title: "Blocage créatif", description: "Besoin de nouvelles inspirations.", icon: "auto_awesome" }
    ]
  }
];

export const BENEFITS = [
  {
    title: "Recommandations 100% Personnalisées",
    description: "Obtenez des suggestions qui correspondent précisément à vos besoins uniques.",
    icon: "person_search"
  },
  {
    title: "Gagnez du Temps",
    description: "Plus besoin de chercher. Nous trouvons la meilleure solution pour vous en quelques clics.",
    icon: "timer"
  },
  {
    title: "Découvrez la Solution Idéale",
    description: "Soyez confiant dans votre choix grâce à un processus guidé et intelligent.",
    icon: "emoji_objects"
  }
];
